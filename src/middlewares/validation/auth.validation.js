const joi = require('joi');
const APIError = require('../../utils/errors'); // Kendi hata fırlatma sınıfımız

class AuthValidation {
    constructor() {}

    // Statik metod olarak tanımlıyoruz ki dışarıdan direkt AuthValidation.register olarak çağırabilelim
    static register = async (req, res, next) => {
        try {
            // 1. Kuralları (Schema) Belirliyoruz [00:03:31]
            await joi.object({
                name: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "İsim alanı normal metin olmalıdır",
                    "string.empty": "İsim alanı boş olamaz!",
                    "string.min": "İsim alanı en az 3 karakter olmalıdır",
                    "string.max": "İsim alanı en fazla 100 karakterden oluşabilir",
                    "any.required": "İsim alanı zorunludur"
                }),
                lastName: joi.string().trim().min(3).max(100).required().messages({
                    "string.base": "Soyad alanı normal metin olmalıdır",
                    "string.empty": "Soyad alanı boş olamaz!",
                    "string.min": "Soyad alanı en az 3 karakter olmalıdır",
                    "string.max": "Soyad alanı en fazla 100 karakterden oluşabilir",
                    "any.required": "Soyad alanı zorunludur"
                }),
                email: joi.string().email().trim().min(3).max(100).required().messages({
                    "string.base": "Email alanı normal metin olmalıdır",
                    "string.empty": "Email alanı boş olamaz!",
                    "string.min": "Email alanı en az 3 karakter olmalıdır",
                    "string.email": "Lütfen geçerli bir email giriniz", // Joi'nin kendi email format kontrolü [00:07:44]
                    "string.max": "Email alanı en fazla 100 karakterden oluşabilir",
                    "any.required": "Email alanı zorunludur"
                }),
                password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Şifre alanı normal metin olmalıdır",
                    "string.empty": "Şifre alanı boş olamaz!",
                    "string.min": "Şifre alanı en az 6 karakter olmalıdır",
                    "string.max": "Şifre alanı en fazla 36 karakterden oluşabilir",
                    "any.required": "Şifre alanı zorunludur"
                })
            }).validateAsync(req.body); // 2. İsteğin body'si ile kuralları kontrol ediyoruz hata alırsak catch bloğuna düşer

        } catch (error) {
            // 3. Eğer kurallara uymayan bir durum varsa hatayı yakalayıp kullanıcıya dönüyoruz 
            if (error.details && error?.details[0].message) {
                // Joi hataları details dizisi içinde döner, ilk hatanın mesajını alıyoruz [00:13:07]
                throw new APIError(error.details[0].message, 400); 
            } else {
                throw new APIError("Lütfen Validasyon Kurallarına Uyun", 400);
            }
        }
        
        // 4. Eğer hiçbir hata yoksa, işlemi controller'a aktar (Devam et) [00:11:53]
        next();
    }

    static login = async (req, res, next) => {
        try{
            await joi.object({
                email: joi.string().email().trim().min(3).max(100).required().messages({
                    "string.base": "Email alanı normal metin olmalıdır",
                    "string.empty": "Email alanı boş olamaz!",
                    "string.min": "Email alanı en az 3 karakter olmalıdır",
                    "string.email": "Lütfen geçerli bir email giriniz", // Joi'nin kendi email format kontrolü [00:07:44]
                    "string.max": "Email alanı en fazla 100 karakterden oluşabilir",
                    "any.required": "Email alanı zorunludur"
                }),
                password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Şifre alanı normal metin olmalıdır",
                    "string.empty": "Şifre alanı boş olamaz!",
                    "string.min": "Şifre alanı en az 6 karakter olmalıdır",
                    "string.max": "Şifre alanı en fazla 36 karakterden oluşabilir",
                    "any.required": "Şifre alanı zorunludur"
                })
            }).validateAsync(req.body); //kontrol işlemleri için validateAsync kullanıyoruz çünkü async/await yapısı içinde çalışacağız
        }catch (error) {
            // 3. Eğer kurallara uymayan bir durum varsa hatayı yakalayıp kullanıcıya dönüyoruz 
            if (error.details && error?.details[0].message) {
                // Joi hataları details dizisi içinde döner, ilk hatanın mesajını alıyoruz [00:13:07]
                throw new APIError(error.details[0].message, 400); 
            } else {
                throw new APIError("Lütfen Validasyon Kurallarına Uyun", 400);
            }
        }
        next();
    }
}

// Dosyayı dışarı aktarıyoruz [00:11:41]
module.exports = AuthValidation;