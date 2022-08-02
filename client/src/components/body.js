import React from "react";
import "./body.css";
import {Link} from "react-router-dom";

const Body = () =>{
     return(
        <>
        <div className="content">
        <p className="orderno">Order | 0</p>
        <div className="c1">
        <input type="search" className="search"/>
        </div>
        <div className="create_order">
            <p>No Order Available</p>
            <Link to ="/create-order"><button>Create</button></Link>
        </div>
        </div>
        </>
    )

}
export default Body;