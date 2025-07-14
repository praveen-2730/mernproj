import React from "react";

const Search=({minPrice,maxPrice,setMinPrice,setMaxPrice})=>{
    return(
        <>
        <form>
            <label>min<input className="mt-4 mb-4form form-control" type="number"
            value={minPrice}
            onChange={(e)=>setMinPrice(parseInt(e.target.value))}/></label>
            <label>max<input className="ms-4 mt-4 mb-4 form form-control"
            type="number"
            value={maxPrice}
            onChange={(e)=>setMaxPrice(parseInt(e.target.value))}/></label>

        </form>
        </>
    )
}
export default Search