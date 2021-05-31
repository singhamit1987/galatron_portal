import React, { useEffect, useState } from 'react'
export default function Loading() { 
    const [Count, setCount] = useState(0)
    useEffect(()=>{
      if(Count < 100) {
        setTimeout(()=>{
          setCount(Count + 1)
        },1000)
      }      
    },[Count])
    return (
      <div className="loading">
        <h2>{Count}%</h2>
      </div>
    )
  }