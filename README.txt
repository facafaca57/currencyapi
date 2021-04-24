API Documentation
Overview
The base path for all API requests is exemple https://currency-api-andrei.herokuapp.com/
An example of API call to get actual currency:

GET: http://localhost:3000/
Returns: [
            {
            "ccy": "USD",
            "base_ccy": "UAH",
            "buy": "27.65000",
            "sale": "28.05000"
            },
            {
            "ccy": "EUR",
            "base_ccy": "UAH",
            "buy": "33.15000",
            "sale": "33.75000"
            },
            {
            "ccy": "RUR",
            "base_ccy": "UAH",
            "buy": "0.35900",
            "sale": "0.38900"
            },
            {
            "ccy": "BTC",
            "base_ccy": "USD",
            "buy": "48152.2826",
            "sale": "53220.9440"
            }
        ]

To get a history of currency load http://localhost:3000/history

GET: http://localhost:3000/history
Returns :[
            {
            "USD": {
            "ccy": "USD",
            "base_ccy": "UAH",
            "buy": "27.70000",
            "sale": "28.10000"
            },
            "EUR": {
            "ccy": "EUR",
            "base_ccy": "UAH",
            "buy": "33.25000",
            "sale": "33.85000"
            },
            "RUR": {
            "ccy": "RUR",
            "base_ccy": "UAH",
            "buy": "0.35800",
            "sale": "0.38800"
            },
            "BTC": {
            "ccy": "BTC",
            "base_ccy": "USD",
            "buy": "50623.7821",
            "sale": "55952.6013"
            },
            "_id": "6081c15596f7c91a489848b9",
            "created": "2021-04-22T18:32:53.852Z",
            "__v": 0
            },
            {
            "USD": {
            "ccy": "USD",
            "base_ccy": "UAH",
            "buy": "27.70000",
            "sale": "28.10000"
            },
            "EUR": {
            "ccy": "EUR",
            "base_ccy": "UAH",
            "buy": "33.25000",
            "sale": "33.85000"
            },
            "RUR": {
            "ccy": "RUR",
            "base_ccy": "UAH",
            "buy": "0.35800",
            "sale": "0.38800"
            },
            "BTC": {
            "ccy": "BTC",
            "base_ccy": "USD",
            "buy": "50623.7821",
            "sale": "55952.6013"
            },
            "_id": "6081c14296f7c91a489848b7",
            "created": "2021-04-22T18:32:34.637Z",
            "__v": 0
            }
        ]