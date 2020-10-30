const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//aggregation queries
app.listen(process.env.port||6000,()=>{
    console.log('now listening');
    
});