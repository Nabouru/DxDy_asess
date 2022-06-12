import React from 'react'
import Styles from './Sidebar.module.css'
import { SidebarData } from './SidebarData'
function Sidebar() {
  return (
    <div className={Styles.Sidebar}>
        <div className={Styles.top}>
        <img className={Styles.img} src='../../smallLogo.png' />
        
        <h6 style={{color:"#A7A7A7"}}>Employee Portal</h6>
        </div>
        <div className={Styles.midline}></div>
        <br></br>
        <div>
            <ul className={Styles.SidebarList}>
              {/*iterating through sidebar.js array to map the sidebar values */}
            {SidebarData.map((val,key)=>{
            return(
                <li
                className={Styles.row}
                key={key} 
                onClick={(e)=>{
                  
                  window.location.pathname= val.link;
                
                }}> 
                {""}
                {/*assigning id if the pathname is equal to the rendered component path*/}
                <div className={Styles.icon}id={window.location.pathname== val.link ? Styles.active :"" }> {val.icon} </div>
                <div className={Styles.title}id={window.location.pathname== val.link ? Styles.active :"" } >{val.title} </div>

<br></br>
                
                </li>
                
            )
        })}
        </ul>
        
        </div>
           </div>

  )
}

export default Sidebar