const router = require('express').Router();
const auth = require('./auth.routers');

router.use('/auth',auth); //auth ile başlayan tüm istekler auth.routers.js dosyasına yönlendirilecek

module.exports = router; //router'ı export ediyoruz ki diğer dosyalarda kullanabilelim