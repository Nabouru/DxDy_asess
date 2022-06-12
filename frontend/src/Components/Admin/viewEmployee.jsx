import React from 'react'
import Sidebar from './sidebar'
import Styles from './ViewEmployee.module.css'
//importing Table materials from material ui
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material'
import {useState, useEffect } from 'react'
import axios from 'axios'

// creating function to send http request to node to retrieve employees 
function ViewEmployee() {

  const[employees, setEmployees] = useState([""])

  useEffect(()=>{
   
      axios.get("http://localhost:6969/employee/getEmployee").then((res)=>{
        setEmployees(res.data);
      }).catch((err)=>{
        alert(err.message);
      })
   
  },[])
 

  return (
      
    <div>
        <div className={Styles.split}>
        <Sidebar/>
        
      </div>
      <div className={Styles.centered}>
        <h1>Listing</h1>
          <TableContainer > 
          <Table aria-label = 'simple table' >
         <TableHead >
           <TableRow  >
           <TableCell sx={{color:'#A6A6A6' ,border:'none'}}>First Name</TableCell>
           <TableCell sx={{color:'#A6A6A6',border:'none'}}>Last Name</TableCell>
           <TableCell sx={{color:'#A6A6A6',border:'none'}}>Description</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {employees.map((row)=>(
             <TableRow key={row.id}>
                 <TableCell sx={{color:"#E6E6E6"}}>{row.f_name}</TableCell>
                 <TableCell sx={{color:"#E6E6E6"}}>{row.l_name}</TableCell>
                 <TableCell sx={{width:600,color:"#E6E6E6",fontSize: 14}}>{row.description}</TableCell>

                           
             </TableRow>
           ))}
         </TableBody>

          </Table>
          
          </TableContainer>
          </div>
      </div>
  )
}

export default ViewEmployee