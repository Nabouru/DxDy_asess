//importing Router from express to respond to requests that are made
const router = require('express').Router();
//importing admin model
let Admin = require('../models/Admin.js');


//implementation of login
router.route('/adminLogin').post((req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    var pw;
   
 //finding the relevant user by its email
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


// creating an admin

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