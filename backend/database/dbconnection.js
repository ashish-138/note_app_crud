const mongoose = require("mongoose");


const DBconnection = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/noteApp");
    
}

module.exports = DBconnection;