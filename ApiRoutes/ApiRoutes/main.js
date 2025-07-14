import React, { useState } from "react";
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Men from "./Men";
import Women from "./Women";
import Kid from "./Kid";
const Main=()=>{
    const[api,setApi]=useState([])
    async function searchApi(value) {
        const response=await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        const products=await response.json()
        const filterProducts=products.categories.find(category=>category.category_name.toLowerCase()===value.toLowerCase())
        setApi(filterProducts.category_products)
        
    }
    return(
        <>
        <h1>Api Calls Routes</h1>
        <Router>
            <Link to='/Men' onClick={()=>searchApi('Men')}>Men</Link>
            <Link to='/Women' onClick={()=>searchApi('Women')}>Women</Link>
            <Link to='/Kid' onClick={()=>searchApi('Kids')}>Kids</Link>

            <Routes>
                <Route path="/Men" element={<Men api={api}/>}/>
                <Route path="/Women" element={<Women api={api}/>}/>
                <Route path="/Kid" element={<Kid api={api}/>}/>


            </Routes>
        </Router>
        </>
    )
}
export default Main