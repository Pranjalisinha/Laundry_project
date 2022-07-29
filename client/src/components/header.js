import React from "react";
import "./header.css";
import Image from "../image/avtar.png";

const Header = ()=>{
  return(
    <>
    <header className="Head">
      <h1 className="head_title">LAUNDRY</h1>
      <ul type="none" className="lists">
        <li className="pricing">Pricing</li>
        <li className="career">career</li>
        <li className="user"><img src={Image} alt="avtar" height={50} width={50}/><div className="user_n">User Name</div></li>
      </ul>
      </header>
    </>
  )

}
export default Header;