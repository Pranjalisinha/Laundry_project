import React from 'react'
import { Link } from 'react-router-dom'
import Copyrightcomp from '../Childcomponents/Copyrightcomp'
import Footer from '../Childcomponents/Footer'
import Header from '../Childcomponents/Header'
import Refercomp from '../Childcomponents/Refercomp'
import Register from '../Childcomponents/Register'
import "./RegisterPage.css"
const Registerpage = () => {
  return (
    <div id='Register-page'>Registerpage
    <div id='Laundry-reg'>Laundry Sevice</div>
    <div id='Doorstep-reg'>Doorstep Wash & Dryclean Service</div>
    <div id='Account-reg'>Don't Have Account</div>
    <div id='vertical-div-reg'></div>
    <Link to="/Register">
    <button id="button-regpage">Register</button></Link>
    <Header/>
    <Register/>
    <Refercomp/>
    <Footer/>
    <Copyrightcomp/>
    </div>
  )
}

export default Registerpage