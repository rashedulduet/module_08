import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink className={({isActive})=>isActive? 'activeMenu': 'pendingMenu'} to={'/'}>Income</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? 'activeMenu': 'pendingMenu'} to={'/contact'}>Expense</NavLink></li>
           
        </ul>
      
    </div>
  )
}
