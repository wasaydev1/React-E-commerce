import axios from "axios";
import { createContext, useEffect, useState } from "react";

let products = createContext()

let ProductsProvider = ({ children }) => {
      let [product, setProduct] = useState([]);
      let [loader, setLoader] = useState(false)
      let [error, setError] = useState(false)
      let setTime;
      useEffect(() => {
        async function fetchApi() {
          setTime = setTimeout(() => {
            setError(true)
            setLoader(false)
          }, 20000)
          setLoader(true)
          let api = await axios.get("https://fakestoreapi.com/products");
          clearTimeout(setTime)
          setProduct(api.data);
          setLoader(false)
        }
        fetchApi();
      }, []);

    let productInfo = {
        product,
        loader,
        error
    }   
    return <products.Provider value={productInfo}>{children}</products.Provider>
}

export {products ,ProductsProvider}