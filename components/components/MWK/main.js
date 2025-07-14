import React, { useEffect, useState } from "react";
import axios from 'axios'
import AllProducts from "./listAllproducts";

const Main=()=>{
    const[api,setApi]=useState([])

     fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(res=>res.json())
     .then(res=>setApi(res.categories))


    // async function fetchProducts() {
    //     const response=await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    //     const Product=await response.json()
    //    setApi(Product.categories)
    // }
    //fetchProducts

    // axios('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    // .then(res=>setApi(res.data.categories))


    useEffect(()=>{
           axios('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(res=>setApi(res.data.categories))
    },[])
  


    return(
        <>

        <AllProducts api={api}/>
        </>
    )
}
export default Main