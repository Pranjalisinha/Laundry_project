import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./order-create.css"
import SummaryPg from "./summary";
// import ConfirmationPop from "./confirmation";
import ItemRows from "./itemRows";
const OrderBody = ()=>{
const [sumpop, setSumpopUp] = useState(false);
// const [trigger, setTrigger] =useState(false);
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
const initialState ={};
for(let i=0; i< ProductArray.length;i++){
  let name =ProductArray[i].name;
  initialState[name]={
    quantity :"",
    washType :[false, false, false, false],
    price :0,
  };
}
const [orderDetails ,setOrderDetails] = React.useState(initialState);
const [modifyOrderDetail , setModifyOrderDetail] =React.useState([]);

// const handleProceed=()=>{
//   if(modifyOrderDetail.length !==0){
//     setSumpopUp(prevState =>({...prevState, sumpop:true}))
//   }else{
//     alert("Please Select some items")
//   }
// }

// React.useEffect(()=>{
//   setModifyOrderDetail([]);
//   Object.keys(orderDetails).forEach(key => {
//     let obj ={};
//     if(orderDetails[key].price !=0){
//       obj.name =key;
//       obj.price = orderDetails[key].price;
//       obj.quantity = orderDetails[key].quantity;
//       obj.washType = orderDetails[key].washType;
//       setModifyOrderDetail(prevDetail =>([...prevDetail, obj]))

//     }

//   })
// },[orderDetails])
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
          {ProductArray.map(item => (<ItemRows 
            info={item}
            key={item.name} 
            setOrderDetails={setOrderDetails}
            orderDetails={orderDetails}
            // setModifyOrderDetail={setModifyOrderDetail}
            // modifyOrderDetail={modifyOrderDetail}
           />))}
          
          <div className="B-container">
              <button className="button">Cancel</button>
              {/* <button className="button"onClick={() => handleProceed()}>Proceed</button> */}
              <button className="button"onClick={()=>{setSumpopUp(true)}}>Proceed</button>
          </div>   
          

      </div>
    </div>
    {/* <SummaryPg trigger={sumpop} setTrigger={setSumpopUp}/> */}
    {sumpop && <SummaryPg closeSumPg={setSumpopUp}/>}
    {/* {trigger && <ConfirmationPop orderDone={setTrigger}/>} */}
    </>
  )
}

 export default OrderBody;