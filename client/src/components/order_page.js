import React from "react";
import "./order_page.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderPage = ()=>{
    const [orderData, setOrderData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/create-order").then((res)=>{
            let data = res.data.reverse();
            setOrderData(data);
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return (
        <>
        <div className="order">
        <p className="orderv">Order | 0</p>
        <div className="class">
        <Link to="/create-order"><button className="create">Create</button></Link>
        <input type="search1" className="search"/>
        </div>
        <table className="order_table">
            <tr>
                <th style={{width:"90px"}}>
                    Order Id
                </th>
                <th style={{width:"160px"}}>
                    Order Date & Time
                </th>
                <th style={{width:"150px"}}>
                    Store Location
                </th>
                <th style={{width:"120px"}}>
                    City
                </th>
                <th style={{width:"150px"}}>
                    Store Phone
                </th>
                <th style={{width:"120px"}}>
                    Total Price
                </th>
                <th style={{width:"90px"}}>
                    Price
                </th>
                <th style={{width:"150px"}}>
                    Status
                </th>
                <th style={{width:"70px"}}>
                    View
                </th>
            </tr>
            <tr>
            {orderData.map((data, index) => {
                return(
                    <>
                    <td>
                        {data.order_id}
                    </td>
                    </>
                )
                })}
            </tr>
        </table>
        </div>
        </>
    )

}
export default OrderPage;