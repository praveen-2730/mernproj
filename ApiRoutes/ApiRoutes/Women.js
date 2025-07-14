import React from "react";

const Women=({api})=>{
    return(
        <>
{
    api.map((item)=>(
                        <div class="card">
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title} </h5>
    <p class="card-text">{item.price}</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>
    ))
}
        </>
    )

}
export default Women
