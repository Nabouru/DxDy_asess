import React from "react";
import { useState } from "react";
import Styles from "./Styles.module.css";
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import axios from "axios";
import Alert from '@mui/material/Alert';



function Login() {
  
  const[email,setEmail]=(useState(""));
  const[password, setPassword] = useState("");
  const[type,setType] = useState('password');
  const[icon,setIcon] = useState(eyeOff);
  const[errbox,setError] = useState("")
  
  

  const onSubmit=(e)=>{
   e.preventDefault();     
   const newAdmin = {
      email,
      password
   }

    axios.post("http://localhost:6969/admin/adminLogin",newAdmin)
    .then((res)=>{
        if(res.status == 200){
        
        setError(<Alert severity="error"  onClose={() => {setError(null)}} style={{backgroundColor:"#FF7F7F",width:"90%"}}>{res.data}</Alert>)
             if(res.data=="success"){
              window.location.pathname = "/admin/addEmployee";
              setError(null);
             }
       
    }
    else
        console.log("Failed", res);




    }).catch((error)=>{
      alert(error)
    })
  }
  
  

  const handle=()=>{
    if(type==='password'){
      setIcon(eye);
      setType('text');

    }else{
      setIcon(eyeOff);
      setType('password');
    }
  }

  return (
    <div>
      <div className={Styles.split}>
        <div className={Styles.left}>
          <img src="../logo2.png" className={Styles.img}></img>
        </div>
      </div>
 
      <div className={Styles.right}>
        <img src="../logo.png" className={Styles.img2}></img>
        <div className={Styles.centered}>
          <div style={{ fontSize: "60px", color: "#FFFF" }}>Employee</div>
          <div style={{ fontSize: "55px", color: "#616161" }}>Portal</div>
          <br></br>
          {/* <h4 className={Styles.msg}>{msg}</h4> */}
          {errbox}
          <br></br>
          <form className={Styles.loginForm} onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <br></br>
              <input 
              tpye="email" 
              id="email" 
              placeholder="Enter Email" 
              onChange={(e)=> {setEmail(e.target.value)}}
              />
            </div>
            <br></br>
            <div>
              <label htmlFor="password">Password</label>
              <br></br>
              
              <input
                type={type}
                id="password"
                placeholder="Enter password"
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
               <span onClick={handle}><Icon icon ={icon} style={{color:"#333333"}}/></span>
             
             
              
            </div>
            <a href="" >Forgot password?</a>
            <br></br>
            <br></br>   
            
            <input type="submit" value="Sign in" />
            
         
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
