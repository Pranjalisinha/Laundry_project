import React from "react";
import "./header.css";
import Image from "../image/avtar.png";
import {useState, useEffect} from "react"

const Header = ()=>{
  const [userName, setUserName] = useState([]);
    useEffect(()=>{
        const name = JSON.parse(localStorage.getItem('userName'));
        if(name){
          setUserName(userName);
        }
    }, [])
  // const [userName, setUserData] = useState([]);
  //   useEffect(() => {
  //       fetch('http://localhost:3004/order')
  //           .then(data => data.json())
  //           .then((data) => setUserData(data))
  //   }, [])
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