import React from "react";
import Products from "./products";

const AllProducts=({api})=>{
    return(
        <div className="container">
            <div className="row">
        {
            api.map((category)=>(
                <div className="col">
                <Products category={category.category_name} api={category.category_products}/>

                </div>
            ))
        }
        </div>
        </div>
    )
}
export default AllProducts