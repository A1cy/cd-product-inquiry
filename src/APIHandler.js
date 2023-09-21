import axios from "axios";

// Function to fetch product data by SKU
export const fetchProductData = async (sku) => {
  // URLs for both APIs
  const apiUrl1 = `https://sheetdb.io/api/v1/vwxzgf8htphgo/search?sku=${sku}`;
  const apiUrl2 = `https://sheetdb.io/api/v1/jnwgcevp7g24y/search?SKU=${sku}`;
  
  // Fetch data from both APIs
  const [response1, response2] = await Promise.all([
    axios.get(apiUrl1),
    axios.get(apiUrl2)
  ]);

  // Merge the data from both APIs
  const mergedData = { ...response1.data[0], ...response2.data[0] };
  
  return mergedData;
};
