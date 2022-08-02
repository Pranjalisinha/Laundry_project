import React from "react";
import Body from "./components/body";
import OrderPage from "./components/order_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/create" element={<Body/>}/>
    <Route path="/viewOrder" element={<OrderPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}
export default App;