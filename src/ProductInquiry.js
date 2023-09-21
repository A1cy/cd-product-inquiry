import React, { useState } from "react";
import { fetchProductData } from "./APIHandler";

const ProductInquiry = () => {
  // State to store SKU input and product data
  const [sku, setSku] = useState("");
  const [productData, setProductData] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchProductData(sku);
    setProductData(data);
  };

  return (
    <div>
      {/* Form for SKU input */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={sku}
          placeholder="Enter SKU"
          onChange={(e) => setSku(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display product data */}
         {productData && (
         <div className="productData">
            <p>SKU: {productData.sku || productData.SKU}</p>
            <p>Name: {productData.Name}</p>
            <p>Name (Arabic): {productData["Name Ar"]}</p>  
            <p>Price: {productData.price}</p>
            <p>Stock: {productData.stock}</p>
            <p>Warranty: {productData.warranty}</p>
         </div>
         )}

    </div>
  );
};

export default ProductInquiry;
