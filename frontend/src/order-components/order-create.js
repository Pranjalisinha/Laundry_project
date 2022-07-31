import React from "react";
import "./order-create.css"

const OrderBody = ()=>{
const Array = [
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
              <img className='magnifine' src="search.png" />
              <input id="searchInput" type='text' />
          </div>
      </div>
    
      <div id="product">
          <div id="head-row">
              <div className="item1">Product Type</div>
              <div className="item2">Quantity</div>
              <div className="item3">Wash Type</div>
              <div className="item4">Price</div>
          </div>
          {Array.map(item => (<ItemRow info={item} key={item.name} />))}
          
          <div className="B-container">
              <button className="button">Cancel</button>
              <button className="button">Proceed</button>
          </div>   
          

      </div>
    </div>
    </>
  )
}
const ItemRow = (props) => {
    return (
      <>
        <div className='itemsRow'>
          <div className="imageDiv">
            <img className="itemImg" src={`/images/${props.info.image}`} />
            <div>
              <p style={{ "margin-left":"5px", "color":"#1D2022" }}><b>{ props.info.name }</b></p>
            </div>
          </div>
          <div className="inputDiv">
            <div className="input"><input className="quantityInput" type="number" style={{ border: "none" }} /></div>
          </div>
          <div className="washtype">
            <img className="washtypeImage" src={"/images/washing-machine.png"} alt="" />
            <img className="washtypeImage" src="/images/iron.png" alt="" />
            <img className="washtypeImage" src="/images/towel.png" alt="" />
            <img className="washtypeImage" src="/images/bleach.png" alt="" />
          </div>
          <div className="price">
            <p>___</p>
          </div>
        </div>
      </>
    );
  }
 export default OrderBody;