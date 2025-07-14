import React from "react";

const Child=({count,onReset})=>{
    return(
        <>
        <h2>Child count :{count}</h2>
        <button onClick={onReset}>onReset</button>

        </>
    )
}
export default Child