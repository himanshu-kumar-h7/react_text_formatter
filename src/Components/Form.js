import React from 'react'
import {useState} from 'react'

export default function Form({example,setText,handleAlert}) {
  const[localText,setLocalText]=useState("");

   const handleChange=(event)=>{
  setLocalText(event.target.value)

  setText(event.target.value)
   }
   const onClickhigh=()=>{
    setLocalText(localText.toUpperCase())
    handleAlert("Upper case done",'Well done')
   }
   const wordCounter=()=>{
    
   }

   const onClicklow=()=>{
    setLocalText(localText.toLowerCase())
    handleAlert("lower case done",'Well done')
   }
   const onClickClear=()=>{
    setLocalText("")
    handleAlert("Cleared",'all clear')
   }

    

   
    
  return (
    <>
   
  <div className="container my-3">
   <label className="form-label">
    <h1><b>{example}</b></h1></label>
  <textarea className="form-control" id="Textarea1" onChange={handleChange}  value={localText} rows="8" ></textarea>
  <button id="btn" className="btn btn-click my-3"  onClick={onClickhigh}>Capital Case</button>
  <button id="btn" className="btn btn-click2 my-3 mx-3"  onClick={onClicklow}>Lower Case</button>
  <button id="btn" className="btn btn-click2 my-3 mx-3"  onClick={onClickClear}>Clear Text</button>
</div>
<div className=" my-3" id="summary1">
<h3><b>Summary</b></h3>
<p  >Total number of Character :- {localText.replace(/\s/g, "").length} && Total number of Words :- {localText.split(/\s+/).length-1}</p>
<p >Time to read:-{0.85*localText.split(/\s+/).length  } seconds</p>
<h2> <b>Preview will show below</b></h2>

<h1 id="hh4">{localText} </h1>
</div >

   </>
  );
}




