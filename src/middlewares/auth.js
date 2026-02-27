const jwt = require('jsonwebtoken');
const APIError = require('../utils/errors');
const user = require("../models/user.model")
const createToken = async (user,res) =>{
    const payload = {
        sub: user._id, //token'ın konusu yani kim için oluşturulduğu bilgisi
        name: user.name, //token içinde kullanmak istediğimiz diğer bilgiler
    }
    const token = await jwt.sign(payload,process.env.JWT_SECRET_KEY,{
        algorithm: "HS512", //token'ı hangi algoritma ile imzalayacağımızı belirtiyoruz
        expiresIn: process.env.JWT_EXPIRES_IN //token'ın ne kadar geçerli olacağını belirtiyoruz
    }); //token oluşturuyoruz jwt.sign() ile, payload ve secret key'i kullanarak, token'ın 1 saat geçerli olmasını sağlıyoruz
    return res.status(201).json({
        success: true,
        token,
        message: "Başarılı giriş yapıldı"
    })
}

const tokenChecker = async(req,res,next) =>{
    const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer "); //Authorization header'ından token'ı alıyoruz
    if(!headerToken){
        throw new APIError("Token bulunamadı",401);
    }

    const token = req.headers.authorization.split(" ")[1] //bizim göndermiş olduğumuz tokena boşluktan ayırdık içindeki token değerini almış oldun

    await jwt.verify(token,process.env.JWT_SECRET_KEY, async (err,decoded)=>{
        if(err) throw new APIError("Geçersiz Token" , 401)
        const userInfo = await user.findById(decoded.sub).select("_id name lastName email")
        if(!userInfo) throw new APIError("Geçersiz token",401)
        
        req.user = userInfo
        next()
    })

    
    
}

module.exports = {
    createToken,
    tokenChecker
}