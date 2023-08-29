import React , {createContext , useState , useEffect, useCallback}from "react";

export const ProductContext=createContext();

 
const ProductProvider=({children})=>{
    const [products , setProducts] = useState([]);
    return(
        <ProductContext.Provider>{children}</ProductContext.Provider>
    )
}
export default ProductContext;