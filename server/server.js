const express = require('express');
const app = express();
const mongoose = require('mongoose');

const path = require('path');
const fs = require('fs');

const quoteController = require('./quoteController');
const { response } = require('express');

const PORT = process.env.PORT || 3001;


// connect to MongoDB: uname=dbUser, pw=thePassword, dbname=life-dashboard (without the last, default is dbname=test)
mongoose.connect('mongodb+srv://dbUser:thePassword@cluster0.eu4mkms.mongodb.net/life-dashboard?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB!');
});

// automatically JSON-parse any incoming requests
app.use(express.json());

// this is for production mode only (not dev mode)
app.use('/build', express.static(path.resolve(__dirname, '../build')));

// handle GET requests to the root endpoint
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

const quoteRouter = express.Router();
app.use('/quote', quoteRouter);

quoteRouter.post('/', quoteController.createQuote, (req, res) => {
    return res.status(200).json(res.locals.quoteDoc);
});

// eventually refine the following to e.g.:
// quoteRouter.get('/:author')

quoteRouter.get('/', quoteController.getQuote, (req, res) => {
    return res.status(200).json(res.locals.quoteDoc);
});



app.get('/api', (req, res) => {
    return res.status(200).json({ message: 'Hello there! From your friendly neighborhood server.' });
});


// local error handler
// this handles local errors at 3001, but not currently at 8080 -- for that i think i need to set up a proxy.....
app.use((req, res) => {
    return res.status(418).send('An error occurred: the local error handler has been triggered as a result of an unknown request, and moreover the server is a teapot.');
})

// global error handler
app.use((middlewareErr, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {err: 'An error occurred: the global error handler has been triggered.'},
    };
    const err = Object.assign({}, defaultErr, middlewareErr);
    return res.status(err.status).json(err);
});





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});