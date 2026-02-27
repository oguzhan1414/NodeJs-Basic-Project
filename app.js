require('express-async-errors'); //async hatalarını yakalamak için
const express = require('express');
const app = express();
require('dotenv').config(); //env dosyasını okumak için
require('./src/db/dbConnection'); //veritabanı bağlantısını sağlamak için
const port = process.env.PORT || 5001;
const router = require('./src/routers') //router'ları import ediyoruz
const errorHandler = require('./src/middlewares/errorHandlere'); //error handler'ı import ediyoruz

app.use(express.json()); //json formatında gelen istekleri parse etmek için
app.use(express.urlencoded({limit:"50mb",extended : true,parameterLimit:5000})); //form data formatında gelen istekleri parse etmek için
app.use(express.json({limit:"50mb"})); //json formatında gelen istekleri parse etmek için

app.use('/api',router); //router'ları uygulamaya ekliyoruz

app.get('/',(req,res)=>{
    res.json({
        message : "Hello World"
    })
})

app.use(errorHandler); //error handler'ı uygulamaya ekliyoruz

app.listen(port,()=>{
    console.log(`Server ${port} portunda çalışıyor...`);
})