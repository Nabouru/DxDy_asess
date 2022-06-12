
// importing mongoose
const mongoose = require('mongoose');

const schema = mongoose.Schema;

//creating a new schema for admin class
const adminSchema = new schema({
  
    //declaring the values
    email : {
        type : String,
        required: true,
        unique : true
    },
    password: {
        type : String,
        required: true
    }

})

const Admin = mongoose.model("Admin",adminSchema);
//exporting Admin model
module.exports =Admin;