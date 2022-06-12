const router = require("express").Router();
let Employee =require("../models/Employee.js")

router.route("/addEmployee").post((req,res)=>{
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const description = req.body.description;
    if(f_name == ""){
        res.json("Fill all the details")
    }

    const newEmployee = new Employee({
        f_name , 
        l_name,
        description
    })
    newEmployee.save().then(()=>{
        res.json("success")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/getEmployee").get((req,res)=>{
    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;