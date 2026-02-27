class Response{
    constructor(data=null, message=null){
        this.data = data; //gelen data değerini alıyoruz
        this.message = message;
    
    }

    success(res){
        return res.status(this.status || 200).json({
            success: true,
            message: this.message || "Success",
            data: this.data
        })
    }

    created(res){
        return res.status(this.status || 201).json({
            success: true,
            message: this.message || "Created",
            data: this.data
        })
    }
    error500(res){
        return res.status(this.status || 500).json({
            success: false,
            message: this.message || "Error",
            data: this.data
        })
    }

    error400(res){
        return res.status(this.status || 400).json({
            success: false,
            message: this.message || "Bad Request",
            data: this.data
        })
    }

    error401(res){
        return res.status(this.status || 401).json({
            success: false,
            message: this.message || "Unauthorized (lütfen giriş yapın)",   
            data: this.data
        })
    }
    error404(res){
        return res.status(this.status || 404).json({
            success: false,
            message: this.message || "Not Found",
            data: this.data
        })
    }

    error429(res){
        return res.status(this.status || 429).json({
            success: false,
            message: this.message || "Too Many Requests (Çok Fazla istek gönderdiniz, lütfen daha sonra tekrar deneyin)",
            data: this.data
        })
    }

}


module.exports = Response; //Response sınıfını export ediyoruz ki diğer dosyalarda kullanabilelim