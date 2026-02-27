class APIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 400; //default olarak 400 Bad Request hatası veriyoruz
    }
}

module.exports = APIError; //APIError sınıfını export ediyoruz ki diğer dosyalarda kullanabilelim