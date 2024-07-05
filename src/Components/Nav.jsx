import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <>
    <div className="navbar1">
    <div className='nav1'>
        <h1 className='heading'>My Tasks</h1>
        <button className='btn1' id='btn1' data-bs-toggle="modal" data-bs-target="#add" >Add New Task</button>
    </div>
    <hr className='line'/>
    </div>
    </>
  )
}

export default Nav
