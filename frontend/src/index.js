import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/login'; 
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import AddEmployee from './Components/Admin/addEmployee'
import ViewEmployee from './Components/Admin/viewEmployee'

ReactDOM.render(
  <React.StrictMode>
  <Login />
   <BrowserRouter>
       <Routes>
         
          <Route path='/admin/addEmployee' element={<AddEmployee/>} /> 
          <Route path='/admin/viewEmployee' element={<ViewEmployee/>}/>
         

         
       </Routes>
   
   
   </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
