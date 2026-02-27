const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type : String , required : true, trim : true}
    ,
    lastName : {type : String , required : true, trim : true}
    ,
    email : {type : String , required : true, trim : true, unique : true}
    ,
    password : {type : String , required : true, trim : true}
},{
    collection : 'users',
    timestamps : true //createdAt ve updatedAt alanlarını otomatik olarak ekler
})

const user = mongoose.model('users',userSchema);

module.exports = user; //user modelini export ediyoruz ki diğer dosyalarda kullanabilelim