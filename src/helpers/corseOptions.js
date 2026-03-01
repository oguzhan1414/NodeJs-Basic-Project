const whiteList = ["http://localhost:3000"]

const corseOptions = (req,callback) =>{
    let corseOptions;
    console.log("izin verildi")
    if(whiteList.indexOf(req.header("Origin"))!== -1) {
        corseOptions = {origin:true}
    }else{
        corseOptions = {origin:false}
    }
    callback(null,corseOptions)
}

module.exports = corseOptions;