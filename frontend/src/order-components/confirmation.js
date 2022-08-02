import React from 'react'
import "./confirmation.css"
function ConfirmationPop({orderDone}) {
  return (
    <>
    <div id='doneBack'>
    <div id='card'>
      <div className='innerContainer'>
      <img src='/images/tick.svg' className='tickImg'></img>
        <p className='cardPara' ><b>Your Order Placed <br/> Sucessfully</b></p>
        <p className='cardPara' id="para2">You can track the delivery in the "Order" Section</p>
        <button id="goToOrderButton" onClick={()=> orderDone(false)}>Go to orders</button>
      </div>
        
    </div>
    </div>
    </>
  )
}

export default ConfirmationPop;