import React from 'react'
import Sidebar from './sidebar'
import Styles from './Employee.module.css'
import { useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert';



function AddEmployee() {

 const[f_name,setFname] = useState("");
 const[l_name,setLname] = useState("");
 const[description,setDes] = useState("");
 const[errBox , setError] = useState("");

 function addEmployee(e){
   e.preventDefault();
   
   const newEmployee={
     f_name,
     l_name,
     description
   }
   axios.post("http://localhost:6969/employee/addEmployee",newEmployee)
   .then((res)=>{
     console.log(res.data);
     setError(<Alert severity="error"  onClose={() => {setError(null)}} style={{backgroundColor:"#FF7F7F",width:"80%",marginLeft:"40px"}}>{res.data}</Alert>)
     
    if(res.data=="success"){
      setError(<Alert  onClose={() => {setError(null)}} style={{backgroundColor:"#006400",width:"80%",marginLeft:"40px",color:"#FFFF"}}>Employee added</Alert>)

    }

   }).catch((error)=>{
     alert(error)
   })

  }


  return (
    <div>
     
     <div className={Styles.split}>
      
        <Sidebar/>
        
      </div>

   
      <div className={Styles.centered}>
        
          <br></br>
          <form className={Styles.addForm} onSubmit={addEmployee}>
            <div>
              <label htmlFor='fname'>First Name</label>
              <input type="text" placeholder="First Name" id="fname" 
              onChange={(e)=>{
              setFname(e.target.value);
              }}/>
            </div>
            <br></br>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input type="text" placeholder="Last Name" id="lname" onChange={(e)=>{
                setLname(e.target.value);
              }}/>
            </div>
            <br></br>
            <div>
              <label htmlFor="des">Write Here</label>
              <input className={Styles.description} type="text-area" placeholder="Last Name" id="des" onChange={(e)=>{
                setDes(e.target.value);
              }}/>
            </div>
              
             
             
              
           
            
            <input type="submit" value="Create" />
            
         
            
          </form>
          <br></br>
          {errBox }
        </div>
      
     
     </div>
  )
}

export default AddEmployee