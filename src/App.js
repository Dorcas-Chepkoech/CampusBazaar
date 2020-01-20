import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/client/Navbar/Navbar";

import About from "./components/client/About/About";
import Contact from "./components/client/Contact/Contact";
import Login from "./components/client/Login/Login";
import Signup from "./components/client/Signup/Signup";
import AddProduct from "./components/client/Products/AddProduct";
import Products from "./components/client/Products/Products";
import LandingPage from "./components/client/Main-Page/LandingPage";
import Clothes from "./components/client/Products/Clothes";
import Checkout from "./components/client/Products/Checkout";
import Laptops from "./components/client/Products/Laptops";
import Phones from "./components/client/Products/Phones";
import Footer from "./components/client/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>      
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/add" component={AddProduct}/>
         <Route path="/products" component={Products}/>   
         <Route path="/clothes" component={Clothes}/>
         <Route path="/checkout" component={Checkout}/>
         <Route path="/laptops" component={Laptops}/>
         <Route path="/phones" component={Phones}/>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
