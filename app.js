const express = require('express');
const path = require('path')

const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/expence',routes)

app.get('/home',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'views','index.html'))
})
sequelize
.sync()
.then(result=>{
    app.listen(5000)
})
.catch(err=>console.log("err",err))
