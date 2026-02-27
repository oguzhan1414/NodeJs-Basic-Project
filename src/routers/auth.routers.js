const router = require('express').Router();
const { register, login , me } = require('../controllers/auth.controller');
const authValidation = require('../middlewares/validation/auth.validation')
const {tokenChecker} = require("../middlewares/auth")

router.post('/login',authValidation.login,login)

router.post('/register',authValidation.register,register)

router.get('/me',tokenChecker,me)

module.exports = router; //router'ı export ediyoruz ki diğer dosyalarda kullanabilelim