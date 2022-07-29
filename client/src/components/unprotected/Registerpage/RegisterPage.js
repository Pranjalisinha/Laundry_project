import React from 'react'
import Copyrightcomp from '../Childcomponents/Copyrightcomp'
import Footer from '../Childcomponents/Footer'
import Header from '../Childcomponents/Header'
import Refercomp from '../Childcomponents/Refercomp'
import Register from '../Childcomponents/Register'

const Registerpage = () => {
  return (
    <div id='Register-page'>Registerpage
    <Header/>
    <Register/>
    <Refercomp/>
    <Footer/>
    <Copyrightcomp/>
    </div>
  )
}

export default Registerpage