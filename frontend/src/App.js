import {Route,Routes,BrowserRouter} from "react-router-dom"
import Footer from "./order-components/footer";
import Header from "./order-components/header";
import OrderBody from "./order-components/order-create";
import SideBar from "./order-components/sidebar";

function App() {
  return (
    
    
    
    <BrowserRouter>
    <Header/>
    <SideBar/>
    <Routes>
      
      <Route path="/create-order" element={<OrderBody/>}></Route>
      {/* <Route path="/" element={<SideBar/>}></Route> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    
  );
}

export default App;
