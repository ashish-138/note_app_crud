const mongoose= require("mongoose");


const UsersSchema = new mongoose.Schema({
    fname:{
        type:String,
        require:true,
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});


module.exports = mongoose.model("Users",UsersSchema);