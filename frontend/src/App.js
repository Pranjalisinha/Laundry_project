import {Route,Routes,BrowserRouter} from "react-router-dom"
import Footer from "./order-components/footer";
import Header from "./order-components/header";
import OrderBody from "./order-components/order-create";
import SideBar from "./order-components/sidebar";
import SummaryPg from "./order-components/summary";


function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    {/* <SideBar/> */}
    <Routes>
      
      <Route path="/create-order" element={<OrderBody/>}></Route>
      <Route path="/summary" element={<SummaryPg/>}></Route>

      
    </Routes>
    <SideBar/>
    <Footer/>
    </BrowserRouter>
    
    
    
  );
}

export default App;
