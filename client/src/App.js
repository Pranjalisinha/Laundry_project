import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signinpage from './components/unprotected/signinpage/Signinpage';
import Registerpage from './components/unprotected/Registerpage/RegisterPage';
import Logoutcomp from './components/protected/Logoutcomp';
import Protected from './components/protected/Protected';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signinpage/>}></Route>
      <Route path="/Signin" element={<Signinpage/>}></Route>
      <Route path="/Register" element={<Registerpage/>}></Route>
      <Route path="/Logout" element={<Protected><Logoutcomp/></Protected>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
