import React from "react";
import "./header.css";
import Image from "../image/avtar.png";
import {useState, useEffect} from "react"
import axios from "axios";

const Header = ()=>{
  const [userData, setUserData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/Register").then((res)=>{
            let data = res.data.reverse();
            setUserData(data);
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
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