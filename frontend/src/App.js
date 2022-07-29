import {Route,Routes,BrowserRouter} from "react-router-dom"
import Footer from "./order-components/footer";
import Header from "./order-components/header";
import OrderBody from "./order-components/order-body";
import SideBar from "./order-components/sidebar";

function App() {
  return (
    <>
    <Header/>
    <OrderBody/>
    <SideBar/>
    <Footer/>
    </>
    
    // <BrowserRouter>
    // <Routes>
    //   <SideBar/>
    //   <Footer/>
    //   <Route path="/" element={<Footer/>}></Route>
    //   <Route path="/" element={<SideBar/>}></Route>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
