const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CurrencySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    USD: {
        ccy: String,
        base_ccy: String,
        buy: String,
        sale: String
    },
    EUR: {
        ccy: String,
        base_ccy: String,
        buy: String,
        sale: String
    },
    RUR: {
        ccy: String,
        base_ccy: String,
        buy: String,
        sale: String
    },
    BTC: {
        ccy: String,
        base_ccy: String,
        buy: String,
        sale: String
    },
    created: { 
        type: Date,
        default: Date.now
    }
});

var Currency = mongoose.model('Currency', CurrencySchema);

module.exports =  Currency;