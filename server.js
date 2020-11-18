const express = require('express')
var app = express()
const bodyparser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




const userroute = require('./routes/userroute')

app.use('/api/user' , userroute)






app.get('/' , function(req , res){

    res.send('This is backend')

})

app.listen(5000 , function(){

    console.log('Node JS Server is started');

})

