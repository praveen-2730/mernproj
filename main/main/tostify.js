import React, { useState } from "react";
import {ToastContainer,toast} from 'react-toastify'
const Main=()=>{
    const[formData,setFormData]=useState({
        name:'',email:'',password:''
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        if(formData.name&&formData.email&&formData.password){
            toast.success("Form Submitted",{
                position:'top-center'
            })
        }else{
            toast.warn("Fill form",{
                position:'top-center'
            })
        }
    }


    return(
        <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :<input className="form form-control" 
                name='name' value={formData.name} onChange={handleChange}/></label>
            </div>
              <div>
                <label>Email :<input className="form form-control"
                name='email' value={formData.email} onChange={handleChange}/></label>
            </div>
        <div>
                <label>Password :<input className="form form-control"
                name='password' value={formData.password} onChange={handleChange}/></label>
            </div>
            <button className="btn btn-success mt-4">submit</button>
        </form>
        <ToastContainer/>
        </>
    )
}
export default Main