import React from "react";
import './summary.css';
import { useState } from "react";
import Alert from "./delete_alert";

const SummaryPage = ({closeSum, props})=>{
    const [viewAlert, setAlert] = useState(false);
    // const [orderData, setOrderData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:3004/order')
    //         .then(data => data.json())
    //         .then((data) => setOrderData(data))
    // }, [])
    if(viewAlert){
        return  <Alert closeAlert={setAlert}/>
    }
    return(
        <>
        <div className="modalBackground">
            <div className="card">
                <div className="h">
                <p>Summary</p>
                <button id="close" onClick={() => closeSum(false)}>X</button>
                </div>
                <div className="section">
                    <ul type="none">
                        <li className="Title">
                            Store Location
                        </li>
                        <li className="Tval">
                            Ashok Nagar
                        </li>
                    </ul>
                    <ul type="none">
                        <li className="Title">
                            Store Address
                        </li>
                        <li className="Tval">
                        Near Phone booth, 10th road,
                        </li>
                    </ul>
                    <ul type="none">
                        <li className="Title">
                            Phone
                        </li>
                        <li className="Tval">
                        91 999999999
                        </li>
                    </ul>
                </div>
                <div className="track">
                    <p>Order Track</p>
                </div>
                <div className="orderDetail">
                    <h3>Order Detail</h3>
                </div>
                <div className="display_add">
                    <p>
                        Address
                    </p>
                    <div className="address-block">
                       <p>
                        Home
                       </p>
                    </div>
                </div>
                <div className="foot">
                    <button className="footbtn" onClick={()=> setAlert(true)}>Cancle Order</button>
                    </div>
            </div>
        </div>
        
        </>
    )
}
export default SummaryPage;