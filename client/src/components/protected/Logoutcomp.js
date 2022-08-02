import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Logoutcomp.css"
const Logoutcomp = () => {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.setItem("authorization","")
        navigate("/Signin")
    }
   
  return (
    <div className='logoutComp'>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logoutcomp