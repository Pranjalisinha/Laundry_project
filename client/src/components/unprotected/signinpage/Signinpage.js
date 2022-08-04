import React from 'react'
import { Link } from 'react-router-dom'
import Copyrightcomp from '../Childcomponents/Copyrightcomp'
import Footer from '../Childcomponents/Footer'
import Header from '../Childcomponents/Header'
import Refercomp from '../Childcomponents/Refercomp'
import Signin from '../Childcomponents/Signin'
import "./Signinpage.css"
const Signinpage = () => {
  return (
    <div id='Signin-page'>
          <Header/>
        <div id='Laundry-signin'>Laundry Service</div>
    <div id='Doorstep-signin'>Doorstep Wash & Dryclean Service</div>
    <div id='Account-signin'>Don't Have An Account?</div>
    <div id='vertical-div-signin'></div>
    <Link to="/Register">
    <button id="button-signinpage">Register</button></Link>
    <Signin/>
    <Refercomp/>
    <Footer/>
    <Copyrightcomp/>
    </div>
  )
}

export default Signinpage