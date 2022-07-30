import React from "react";
import Shirt from "../assets/shirt.jpg";
import T_shirt from "../assets/t-shirt.jpg";
import Trouser from "../assets/trouser.jpg";
import Jeans from "../assets/jeans.jpg";
import Boxers from "../assets/boxer.jpg";
import Jogger from "../assets/jogger.jpg";
import Others from "../assets/others.jpg";

import "./order-create.css"

const OrderBody = ()=>{
    return(
        <>
        <div id="product">
            <div id="head-row">
                <div className="item1">Product Type</div>
                <div className="item2">Quantity</div>
                <div className="item3">Wash Type</div>
                <div className="item4">Price</div>
            </div>
            <div className="table-item">
                <div><img  src={Shirt} className="itemImg"></img></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="table-item">
            <div><img src={T_shirt} className="itemImg" ></img></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="table-item">
            <div><img src={Trouser} className="itemImg" ></img></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="table-item">
            <div><img src={Jeans} className="itemImg"  ></img></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="table-item">
            <div><img src={Boxers} className="itemImg"  ></img></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="table-item">
            <div><img src={Jogger} className="itemImg" ></img></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
               
            

        </div>
        </>
    )
}
 export default OrderBody;