const express = require('express');
const app = express();
const registerServices = require('./routes/registerservices');
const removeServices = require('../express/routes/removeServices');
app.get('/',(req, res)=>{
    res.send('Hello');
})

app.use(express.json());

app.post('/api/v1/add',registerServices);
app.delete('/api/v1/remove',removeServices);


module.exports = app