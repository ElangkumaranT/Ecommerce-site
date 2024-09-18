import { BrowserRouter,Route,Routes} from "react-router-dom";
import React from "react";
import Register from "./Register";
import Home from "./Home.js";
import Buyer from "./Buyer.js";
import Seller from "./Seller.js";
import Login from "./Login.js";
import UserLogin from './UserLogin';
import Sample from './Sample.js';

function App() {
  return (
<> 
<BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Buyer" element={<Buyer />} />
      <Route path="/Seller" element={<Seller />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/UserLogin" element={<UserLogin />} />
      <Route path="/Sample" element={<Sample />} />
      </Routes> 
  </BrowserRouter>
  

</>
  );
}

export default App;
