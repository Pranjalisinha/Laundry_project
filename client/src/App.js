import {Route,Routes,BrowserRouter} from "react-router-dom"

import Footer from "./order-components/footerP2";
import Header from "./order-components/headerP2";
import OrderBody from "./order-components/order-create";
import SideBar from "./order-components/sidebar";



function App() {
  return (
    
    <BrowserRouter>
    <Header/>
   
    <Routes>
      
      <Route path="/create-order" element={<OrderBody/>}></Route>
      

      
    </Routes>
    <SideBar/>
    <Footer/>
    </BrowserRouter>
    
    
    
  );
}

export default App;
