import React from "react";
import "./header.css";

const Header = ()=>{
  return(
    <>
    <header className="Head">
      <h1 className="head_title">LAUNDRY</h1>
        <p className="pricing">Pricing</p>
      <div className="lists">
        <p className="career">Career</p>
      </div>
      <div className="lists">
        <p>userName</p>
      </div>
    </header>
    </>
  )

}
export default Header;