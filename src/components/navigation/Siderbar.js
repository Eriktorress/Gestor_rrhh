import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaThList
}from "react-icons/fa";

import { BsFillDiagram3Fill } from "react-icons/bs"
import { NavLink } from 'react-router-dom';

import '../../styles/sidebar.css';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/home",
            name:"Home",
            icon:<FaUserAlt/>
        },
        {
            path:"/trabajadores",
            name:"Trabajadores",
            icon:<BsFillDiagram3Fill/>
        },
        {
            path:"/Info_trabajador",
            name:"Info_Trabajador",
            icon:<FaUserAlt/>
        },
        {
            path:"/NewUser",
            name:"NewUser",
            icon:<BsFillDiagram3Fill/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> Gestión</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;