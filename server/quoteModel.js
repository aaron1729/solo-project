const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    author: {type: String},
    text: {type: String, required: true},
});
const Quote = mongoose.model('quote', quoteSchema);

module.exports = Quote;