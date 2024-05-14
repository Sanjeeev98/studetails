const mongoose = require("mongoose")
const data_schema1 = new mongoose.Schema({
    firstname:{
        type:String,
        required :true,
    
    },

    lastname:{
        type:String,
        required :true,
    
    },

    fathername:{
        type:String,
        required :true,
    
    },

    email:{
        type:String,
        required:true,
    },



phone:{
    type:String,
    required :true,

},
address:{
    type:String,
    required :true,

},



})
module.exports = mongoose.model("customer_database",data_schema1)