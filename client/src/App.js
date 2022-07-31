import React from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import OrderPage from "./components/order_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Body/>}/>
    <Route path="/viewOrder" element={<OrderPage/>}/>
    </Routes>
    </BrowserRouter>
    <Sidebar/>
    <Footer/>
    </>
  )

}
export default App;