import React, { useState } from 'react'

export default function Counter_usestate() {
    const[val,setval]=useState(0)
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col">
                <h1>React Web</h1>
                <h1>{val}</h1>
                <button className='btn btn-primary m-2' onClick={()=>{setval(val+1)}} >Increment</button> <br />
                <button className='btn btn-primary m-2'onClick={()=>{setval(val-1)}} >Decrement</button> <br/>
                <button className='btn btn-danger' onClick={()=>{setval(0)}} >Reset</button>

                
            </div>
        </div>
      </div>
    </>
  )
}

