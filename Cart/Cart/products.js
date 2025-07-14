import React from "react";

const Product=({products,addCart})=>{
    return(
        <div className="container">
            <div className="row">
        <h1>Products</h1>
        {
            products.map((item)=>(
                <div className="col">
                        <div class="card">
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.category}</h5>
    <p class="card-text">{item.price}</p>
    <button class="btn btn-primary" onClick={()=>addCart(item)}>Add</button>
  </div>
</div>
</div>
            ))
        }

        </div>
        </div>
    )
}
export default Product