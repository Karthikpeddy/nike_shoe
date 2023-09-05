//homepageofe-commerce
import React, { useContext } from "react";
import { ProductContext } from "./contexts/ProductContext";
const Shopnow = () => {
  //getting products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  return <div></div>;
};
export default Shopnow;
