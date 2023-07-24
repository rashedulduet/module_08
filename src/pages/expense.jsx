import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function contatc() {
   const [correntExpense, setcorrentExpense]=useState()
   const [showExpense, setshowExpense]=useState([])



  const postIncome=()=>{
    let tableofExpense=[...showExpense, correntExpense];
    setshowExpense(tableofExpense)
    setcorrentExpense('')
  }
  return (
    <div>
    <Navbar/>
    <input type="number" placeholder='Enter your income...' value={correntExpense} 
    onChange={(e)=>setcorrentIncome(e.target.value)}/>
    <span><button onClick={postIncome}>submit</button></span>
    <ul>
   {showExpense.map((elm)=>{
     return( <li>Expense Date:{new Date().toDateString()}: Expense{elm}</li>)
   })}
   </ul>
</div>
  )
}
