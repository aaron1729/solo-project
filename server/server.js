
const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();

// this is for production mode only (not dev mode)
app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/api', (req, res) => {
    return res.status(200).json({ message: 'Hello there! From your friendly neighborhood server.' });
});






// add local and global error handlers here





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});