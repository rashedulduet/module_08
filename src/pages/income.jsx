import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Income() {
  const [correntIncome, setcorrentIncome]=useState();
  const [showIncome, setshowIncome]=useState([]);
  const postIncome=()=>{
        let tableofIncome=[...showIncome, correntIncome];
        setshowIncome(tableofIncome)
        setcorrentIncome('')
       
  }
  
  return (
    <div>
        <Navbar/>
        <input type="number" placeholder='Enter your income...' value={correntIncome} 
        onChange={(e)=>setcorrentIncome(e.target.value)}/>
        <span><button onClick={postIncome}>submit</button></span>
        <ul>
       {showIncome.map((elm)=>{
         return( <li>Income Date:{new Date().toDateString()}: total Income{elm}</li>)
       })}
       </ul>
    </div>
  )
}
