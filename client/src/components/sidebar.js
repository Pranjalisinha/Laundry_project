import React from "react";
import "./sidebar.css";
import Home from "../image/home.svg";
import More from "../image/more.svg";
import List from "../image/list.svg";

const Sidebar = ()=>{
    return (
        <>
        <div className="main_side">
        <p className="home"><img src={Home} alt="Home"/></p>
        <p className="more"><img src={More} alt="Home"/></p>
        <p className="list"><img src={List} alt="Home"/></p>
        </div>
        </>
    )
}
export default Sidebar;