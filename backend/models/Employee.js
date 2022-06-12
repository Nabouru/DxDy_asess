const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    
    f_name : {
        type :String,
        required : true
    },
    l_name : {
        type:String,
        required:true
    }, 
    description:{
        type:String,
        required:true
    }

})


const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;