import React from "react";
import { useTheme } from "./main";

function Child(){
    const{theme,toggleTheme}=useTheme()
    return(
        <>
        <div style={{background:theme==='light'?'#fff':'#000',height:'100vh',color:'#fff'}}>
             <button onClick={toggleTheme}>Toggle Theme {theme}</button>


        </div>

        </>
    )
}
export default Child