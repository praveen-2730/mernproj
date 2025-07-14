import React from "react";

const Products=({category,api})=>{
    return(
        <div className="container">
            <h1>{category}</h1>
            <div className="row">
                <div className="col">
                    {
                        api.map((item)=>(
                            <div class="card">
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.price}</p>
    <button href="#" class="btn btn-primary">Go somewhere</button>
  </div>
</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Products