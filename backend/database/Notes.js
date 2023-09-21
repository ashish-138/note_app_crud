const mongoose = require("mongoose");

const Notesschema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    note:{
        type:String,
        reqiure:true
    },
    userId:{
        type:String,
        require:true
    },
    
}
)

module.exports = mongoose.model("Notes",Notesschema);