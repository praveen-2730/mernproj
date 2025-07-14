import React, { useCallback, useState } from "react";
import Child from "./child";

const Call=()=>{
    const[count,setCount]=useState(0)

    const incrmentFun=useCallback(()=>{
        setCount((prvCount)=>prvCount+1)
    })

    const resetCount=useCallback(()=>{
        setCount(0)
    })
    return(
        <>
        <h1>Count :{count}</h1>
        <button onClick={incrmentFun}>Ins</button>
        <Child count={count} onReset={resetCount}/>

        </>
    )
}
export default Call