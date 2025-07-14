import React, { useRef, useState } from "react";

const Ref=()=>{
    const[name,setName]=useState('')
    const data=useRef('')
    const resetData=()=>{
        setName('')
        data.current.value=""
    }
    return(
        <>
        <h1 className="text-center">use Ref...</h1>
        <input type="text"
        ref={data}
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <h1>{name}</h1>
        <button onClick={resetData}>Reset</button>
        
        </>
    )
}
export default Ref