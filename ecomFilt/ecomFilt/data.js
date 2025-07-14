import React from "react";

const Data=({FilterProducts})=>{
    return(
        <div className="container">
            <div className="row">
            {
                FilterProducts.map((item)=>(
                    <div className="col">
                        <div class="card">
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.category} </h5>
    <p class="card-text">{item.price}</p>
    <button class="btn btn-primary">Add</button>
  </div>
</div>
                        </div>
                ))
            }
        </div>
        </div>
        
    )
}
export default Data