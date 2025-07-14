import React, { useMemo, useState } from "react";
const Main=()=>{
    const[searchItem,setSearchItem]=useState('')
    const[items,setItems]=useState([
        "virat","dhoni","sky"
    ])
    const filterItems=useMemo(()=>{
        return items.filter(item=>item.toLowerCase().includes(searchItem.toLowerCase()))
    })
    return(
        <>
        <h1>UseMemo</h1>
        <div>
            <input type="text" 
            placeholder="Search"
            className="form form-control"
            onChange={(e)=>setSearchItem(e.target.value)}/>
        </div>
        <ul>
            {
                filterItems.map((item)=>{
                   return(
                     <li>{item}</li>
                   )
                })
            }
        </ul>
        </>
    )
}
export default Main