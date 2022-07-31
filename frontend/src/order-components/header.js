import React from "react";
import {Link} from "react-router-dom"
import "./header.css"
const Header = ()=>{
    return(
        <>
        <header id="header">
            <div className="heading"><h2>LAUNDRY</h2></div>
          
            <div id="rigth-head">
            <div className="list1">
            <p className="pricing">Pricing</p>
            </div>
            
            <div className="list2">
                <p className="career">Career</p>
            </div>
            <Link to="./logout.js"><div className="list3">
                <img id="Logo" src="/images/icon.jpg" alt=""/>
                {/* <span>User Name</span> */}
                <div>
                    <p>User Name</p>
                </div>
            </div></Link>

            </div>
            
        </header>
        </>
    )
}
export default Header;