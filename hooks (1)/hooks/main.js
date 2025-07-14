import React, { useReducer } from "react";
const instialState={count:0}
function Name(name,setName){
    switch(setName){
        case 'ins':
            return {count:name.count+1};
        case 'dec':
            return {count:name.count-1};
        default:
    }
}
const UseRd=()=>{
    const[action,setAction]=useReducer(Name,instialState)

    return(
        <center>
            <h1>Use useReducer {action.count}</h1>
            <button onClick={()=>setAction('ins')}>Ins</button>
            <button onClick={()=>setAction('dec')}>dec</button>
        </center>
    )
}
export default UseRd