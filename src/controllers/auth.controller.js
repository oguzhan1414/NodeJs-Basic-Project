const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const APIError = require('../utils/errors');
const Response = require('../utils/response');
const { createToken } = require('../middlewares/auth');
const login = async (req, res) => {
    const {email,password} = req.body; //req.body'den email ve password'ü alıyoruz gelen veriyi alıyoruz yani
    const userInfo = await user.findOne({email: email}); //veritabanında email'i kontrol ediyoruz
    if(!userInfo){ //eğer email bulunamazsa yani böyle bir kullanıcı yoksa
        throw new APIError("Email veya şifre hatalı",401); //APIError sınıfından bir hata fırlatıyoruz ve 400 Bad Request hatası veriyoruz
    }

    const comparePassword = await bcrypt.compare(password,userInfo.password); //şifreyi hashlenmiş haline göre karşılaştırıyoruz

    if(!comparePassword){
        throw new APIError("Email veya şifre hatalı",401); //APIError sınıfından bir hata fırlatıyoruz ve 400 Bad Request hatası veriyoruz
    }

    createToken(userInfo,res); //token oluşturuyoruz ve kullanıcı bilgilerini gönderiyoruz

    
}

const register = async (req,res) =>{
    const {email} = req.body; //req.body'den email'i alıyoruz gelen veriyi alıyoruz yani
    const userCheck = await user.findOne({email: email}); //veritabanında email'i kontrol ediyoruz

    if(userCheck){ //eğer email zaten varsa bir kayıt varsa yani
        throw new APIError("Email already exists",401); //APIError sınıfından bir hata fırlatıyoruz ve 400 Bad Request hatası veriyoruz
    }
    
    req.body.password = await bcrypt.hash(req.body.password,10); //şifreyi hashliyoruz bcrypt ile 10 salt rounds kullanarak
    console.log("Hashed password:", req.body.password); //hashlenmiş şifreyi konsola yazdırıyoruz

    const userSave = new user(req.body); //yeni kullanıcıyı oluşturuyoruz
    await userSave.save() //yeni kullanıcıyı veritabanına kaydediyoruz
            .then((data) => {
            return new Response(data, "User registered successfully").created(res);    
        })
        .catch((err) => {
            return new Response(null, "Error registering user").error500(res); //hata durumunda 500 Internal Server Error hatası veriyoruz
        });
} 


const me = async (req,res) =>{
    return new Response(req.user).success(res)
}

module.exports = {
    login,
    register,
    me
}