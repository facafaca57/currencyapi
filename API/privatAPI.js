const request = require('request');
const mongoose = require('mongoose');
const Currency = require('../models/currency');
const connectionString = "mongodb://localhost:27017/currecy";
const apiURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

class CurrecyData {
    load(callback) {
        request({url: apiURL, json: true}, function (err, res, body) {
            callback(err, body);
        });
    }
    
    connect(callback){
        let options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        mongoose.connect(connectionString, options, (err) => {
            if (err) {
                console.log(`mongoose.connect() failed: ${ err}`);
            }
        });

        mongoose.connection.on('error', (err) => {
            callback(`Error connecting to MongoDB: ${ err}`);
        });

        mongoose.connection.once('open', () => {
            callback('We have connected to mongodb');
        });
    }

    saveData(data, callback){
        const currency = new Currency({
            _id: new mongoose.Types.ObjectId(),
            USD: {
                ccy: data[0].ccy,
                base_ccy: data[0].base_ccy,
                buy: data[0].buy,
                sale: data[0].sale
            },
            EUR: {
                ccy: data[1].ccy,
                base_ccy: data[1].base_ccy,
                buy: data[1].buy,
                sale: data[1].sale
            },
            RUR: {
                ccy: data[2].ccy,
                base_ccy: data[2].base_ccy,
                buy: data[2].buy,
                sale: data[2].sale
            },
            BTC: {
                ccy: data[3].ccy,
                base_ccy: data[3].base_ccy,
                buy: data[3].buy,
                sale: data[3].sale
            }
          });

          currency.save(function(err) {
            if (err) throw err;
            callback('successfully saved.');
        });
    }

    loadData(callback){
        Currency.find({}).sort('-created')
        .exec(function(err, data) {
            if (err) throw err;
            callback(data);
        });
    }

    loadLast(callback){
        Currency.find({}).sort({_id:-1}).limit(1)
        .exec(function(err, data) {
            if (err) throw err;
            callback(data);
        });
    }
}

module.exports = new CurrecyData();