import React from "react";
import { Link } from "react-router-dom";
import "./order-create.css"
import SummaryPg from "./summary";

const OrderBody = ()=>{
const [sumpop, setSumpopUp] =React.useState(false);
const ProductArray = [
    {
      name: "Shirt",
      image: "shirt.jpg",
    },
    {
      name: "T-shirt",
      image: "t-shirt.jpg",
    },
    {
      name: "Trousers",
      image: "trouser.jpg",
    },
    {
      name: "Jeans",
      image: "jeans.jpg",
    },
    {
      name: "Boxers",
      image: "boxer.jpg",
    },
    {
      name: "Joggers",
      image: "jogger.jpg",
    },
    {
      name: "Others",
      image: "others.jpg",
  },
];
  return(
    <>
    <div id="orderPg">
      <div className="container">
          <p className="orderno">Create Order</p>
    
          <div className="searchBox">
              <img className='magnifine' src="/images/search.png" />
              <input id="searchInput" type='text' />
          </div>
      </div>
    
      <div id="product">
          <div id="head-row">
              <div id="item1">Product Type</div>
              <div id="item2">Quantity</div>
              <div id="item3">Wash Type</div>
              <div id="item4">Price</div>
          </div>
          {ProductArray.map(item => (<ItemRows info={item} key={item.name} />))}
          
          <div className="B-container">
              <button className="button">Cancel</button>
              <Link to="./summary.js"><button className="button">Proceed</button></Link>
              {/* <button className="button"
              onClick={()=>{
                handleProceed(); setSumpopUp(true)
              }}>Proceed</button> */}
          </div>   
          

      </div>
    </div>
    <SummaryPg trigger={sumpop} setTrigger={setSumpopUp}/>
    </>
  )
}
const ItemRows = (props) => {
  return(
    <>
    <div id="item-row">
      <div className="imageDivision">
        <img  className="itemImg"  src={`/images/${props.info.image}`}/>
        <div className="para">
          <p><b>{props.info.name}</b></p>
          <p style={{ "fontSize":"11px", "color":"#76788B", "margin-top":"-5px"}}>Lorem Ispum is simple</p>
      </div>
      </div>
      
      <div className="inputDivision">
        <div className="inputNum">
          <input className="quantityNum" type="number" style={{ border: "none" }} ></input>
        </div>
      </div>
      <div className="washDivision">
        <img className="washImg" src="/images/washing-machine.png"/>
        <img className="washImg" src="/images/iron.png"/>
        <img className="washImg" src="/images/towel.png"/>
        <img className="washImg" src="/images/bleach.png"/>

      </div>
      <div className="price">
        <p>___</p>
      </div>
    </div>
    </>
  )
    
}
 export default OrderBody;