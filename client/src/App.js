import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signinpage from './components/unprotected/signinpage/Signinpage';
import Registerpage from './components/unprotected/Registerpage/RegisterPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/Signin" element={<Signinpage/>}></Route>
      <Route path="/Register" element={<Registerpage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
