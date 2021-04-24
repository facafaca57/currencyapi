const express = require('express');
const app = express();
const api = require('./API/privatAPI');
const port = process.env.PORT || 3000;

api.connect((data)=>{
    console.log(data);
});

app.get('/', (req, res) => {
    api.load((err, data)=>{
        if (err) console.log(err);
        api.loadLast((last) =>{
            const today = new Date()
            if(last[0].created.getDate() != today.getDate() && last[0].created.getMonth() != today.getMonth() && last[0].created.getFullYear() != today.getFullYear()){  
                api.saveData(data, (result) =>{
                    console.log(result);
                });
            }
            res.send(data);
        });
        
        
    });
});

app.get('/history', (req, res) => {
    api.loadData((data) =>{
        res.send(data);
    });
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
})