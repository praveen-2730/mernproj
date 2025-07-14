import React, { useEffect, useState } from "react";
import axios from 'axios'
const Api=()=>{
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(res=>console.log(res))
    // })

    // useEffect(()=>{
    //     axios('https://fakestoreapi.com/products')
    //     //.then(res=>res.json())
    //     .then(res=>console.log(res.data))
    // },[])


    const[api,setApi]=useState([])
    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then(res=>setApi(res.data))
    },[])

    // fetch('https://fakestoreapi.com/products')
    // .then(res=>res.json())
    // .then(res=>setApi(res))

    // axios('https://fakestoreapi.com/products')
    // .then(res=>setApi(res.data))
    return(

        <>
        <h1 className="text-center">Api Calls</h1>
        <table className="table table-hover text-center table-striped">
            <tr>
                <th>s:no</th>
                <th>image</th>
                <th>price</th>
                <th>title</th>
            </tr>
            <tbody>
                {
                    api.slice(1,5).map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td><img src={item.image} width={50} height={50}/></td>
                                                         <td>{item.price}</td>

                            <td>{item.category}</td>
                            

                            </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}
export default Api