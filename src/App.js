import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Checkout from "./components/Checkout";
import Layouts from "./layouts";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Layouts>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
        </Layouts>               
      </Router>
    </div>
  );
};

export default App;
