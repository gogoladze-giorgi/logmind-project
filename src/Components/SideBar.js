import React from 'react';
import classes from './sideBar.module.css'
import logo from './assets/logmind.jpeg'
import { BiBulb } from "react-icons/bi";
import { IoShapesOutline } from "react-icons/io5"

const SideBar =()=>{
    return <div className={classes.SideBar}>
        <img src={logo} alt="clear" className={classes.logo}  />
        <BiBulb className={classes.BiBulb}/>
        < IoShapesOutline className={classes.IoShapesOutline} />
    </div>


}
export default SideBar;
