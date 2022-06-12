import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData =[
    {
         title : "Form",
         icon:<DashboardIcon/>,
         link:"/admin/addEmployee",
    },
    {
        title : "List",
        icon:<AccountCircleIcon/>,
        link:"/admin/viewEmployee/",
   }


]