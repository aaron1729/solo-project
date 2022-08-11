// maybe the following line is unnecessary???
const { models } = require('mongoose');





const Quote = require('./quoteModel');

const quoteController = {};

quoteController.createQuote = (req, res, next) => {
    console.log('here in quoteController.createQuote, req.body is: ', req.body);
    const {author, text} = req.body;
    Quote.create({author, text})
    .then(quoteDoc => {
        res.locals.quoteDoc = quoteDoc;
        console.log('in quoteController.createQuote, quoteDoc is: ', quoteDoc);
        return next();
    })
    .catch(err => {
        return next({
            log: `quoteController.createQuote: ERROR: ${err}`,
            message: { err: 'Error occurred in quoteController.createQuote'}
        });
    });
};

quoteController.getQuote = (req, res, next) => {
    console.log('here in quoteController.getQuote, req.body (currently expected to be empty) is: ', req.body);
    // for now, just grab *any* quote
    Quote.findOne({},
        (err, quoteDoc) => {
            if (err) return next({log: 'temp error message: no quote found'});
            console.log('the retrieved quote is: ', quoteDoc);
            res.locals.quoteDoc = quoteDoc;
            return next();
        });  
};




module.exports = quoteController;