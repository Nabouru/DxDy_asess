const router = require('express').Router();
let Admin = require('../models/Admin.js');

router.route('/adminLogin').post((req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    var pw;
   

    Admin.findOne({email:email}).then((result)=>{
        
       
        if(result == null){
            res.send(JSON.stringify("Invalid Credentials"));
            console.log("Invalid Email")
        }
        else{
            pw =result.password;
            console.log(pw);

            if(password == pw){
                console.log("success")
                res.send(JSON.stringify("success"));

            }
            else{
                console.log("")
                res.send(JSON.stringify('Invalid credentials'))
            }
        }
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/addAdmin").post((req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const newAdmin = new Admin({
        email, 
        password
       
    })
    newAdmin.save().then(()=>{
        res.json("Admin Added")
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;