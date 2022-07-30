import React from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Body/>}/>
    </Routes>
    </BrowserRouter>
    <Sidebar/>
    <Footer/>
    </>
  )

}
export default App;