import React, { useState } from "react";

const Step1=({data,onChange})=>(
        <>
        <h3>Step 1 Basic Info</h3>
        <label>Name
             <input
         type="text"
         placeholder="name"
         value={data.name}
         onChange={(e)=>onChange({...data,name:e.target.value})}
         className="form form-control"/>
        </label>
         <label>Name
             <input
         type="text"
         placeholder="email"
         value={data.email}
         onChange={(e)=>onChange({...data,email:e.target.value})}
         className="form form-control"/>
        </label>
        </>
);


const Step2=({data,onChange})=>(
        <>
        <h3>Step 1 Basic Info</h3>
        <label>Name
             <input
         type="text"
         placeholder="address"
         value={data.address}
         onChange={(e)=>onChange({...data,address:e.target.value})}
         className="form form-control"/>
        </label>
         <label>Name
             <input
         type="text"
         placeholder="city"
         value={data.city}
         onChange={(e)=>onChange({...data,city:e.target.value})}
         className="form form-control"/>
        </label>
        </>
);      
        
const Step3=({data,onChange})=>(
        <>
        <h3>Step 1 Basic Info</h3>
        <label>Name
             <input
         type="text"
         placeholder="Occupation"
         value={data.occupation}
         onChange={(e)=>onChange({...data,occupation:e.target.value})}
         className="form form-control"/>
        </label>
         <label>Name
             <input
         type="text"
         placeholder="phone"
         value={data.phone}
         onChange={(e)=>onChange({...data,phone:e.target.value})}
         className="form form-control"/>
        </label>
        </>
);   

const Summary=({data})=>(
    <>
    <h3>Summary Form</h3>
    <ul>
        {
            Object.entries(data).map(([key,value])=>(
                <li>
                    <b>{key} : {value}</b>
                </li>
            ))
        }
    </ul>
    </>
)

const Main=()=>{
    const[step,setStep]=useState(1);
    const[formData,setFormData]=useState({
        name:'',email:'',address:'',city:'',occupation:'',phone:''
    })

    const validInputs=()=>{
        if(step===1) return formData.name&& formData.email
        else if(step===2) return formData.address && formData.city
        else if(step===3) return formData.occupation&&formData.phone
        return true
    }
    const nextStep=()=>{
        if(validInputs()){
            setStep((s)=>s+1)
        }else{
            alert("fill form")
        }
    }
    const prvStep=()=>setStep((s)=>s-1)

    const handleSubmit=()=>{
        console.log(formData)
        alert('Form Submit successfully')
    }
    return(
        <>
        <div className="form-container">
            {
                step===1&&<Step1 data={formData} onChange={setFormData}/>
            }
               {
                step===2&&<Step2 data={formData} onChange={setFormData}/>
            }
               {
                step===3&&<Step3 data={formData} onChange={setFormData}/>
            }
               {
                step===4&&<Summary data={formData}/>
            }
            <div>
                {
                    step>1&&<button onClick={prvStep}>Back</button>
                }
                {
                    step<4&&<button onClick={nextStep}>Next</button>
                }
                {
                    step===4&&<button onClick={handleSubmit}>submit</button>
                }
            </div>
        </div>
        </>
    )

}
export default Main
