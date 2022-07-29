import "./header.css"
const Header = ()=>{
    return(
        <>
        <header id="header">
            <h2>LAUNDRY</h2>
            {/* <ul type="none" id="list">
                <li className="price"> Pricing</li>
                <li className="career" >Career</li>
                <li className="userImg" ><img src="avtar.png" alt="userLogo"/></li>
            </ul> */}
            {/* <div id="rigth-head"> */}
            <div className="list1">
            <p className="pricing">Pricing</p>
            </div>
            
            <div className="list2">
                <p className="career">Career</p>
            </div>
            <div className="list3">
                <img id="Logo" src="icon.jpg" alt=""/>
                <span>User Name</span>
            </div>

            {/* </div> */}
            
        </header>
        </>
    )
}
export default Header;