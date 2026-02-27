const APIError = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
    if(err instanceof APIError){ //eğer err APIError sınıfından türetilmişse
        return res.status(err.statusCode || 400).json({
            success: false,
            message: err.message
        })
    }
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message
    })
}

module.exports = errorHandler; //errorHandler fonksiyonunu export ediyoruz ki diğer dosyalarda kullanabilelim