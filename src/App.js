import React from "react";
import './App.css';
import ProductInquiry from "./ProductInquiry";



function App() {
  return (
    <div className="App">
      <img src='/logo.png' className="logo" alt="Company Logo" />  
      <h1>Product Inquiry App</h1>
      <ProductInquiry />
    </div>
  );
}


export default App;
