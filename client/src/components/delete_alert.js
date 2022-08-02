import React from "react";
import "./delete_alert.css";
import Image from "../image/danger.jpg";
// import SummaryPage from "./summary";
const Alert =({closeAlert})=>{
  return(
    <>
    <div className="container">
      <div className="Card">
        <div className="H">
        <p>Alert</p>
        <button className="cross" onClick={()=>{closeAlert(false)}}>X</button>
        </div>
        <div className="cmain">
          <img src={Image} alt="Danger" height={70} width={70} className="danger"/>
          <p>Are you Sure you want to cancle the order No</p>
        </div>
        <button className="proceed">Proceed</button>
      </div>
    </div>
    </>
  )
}
export default Alert;