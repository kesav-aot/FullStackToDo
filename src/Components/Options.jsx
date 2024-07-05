import React from 'react'
import './options.css'
function Options({sortTasks}) {
  return (
    <div className='options'>
      <h6 className='sort'>Sort By:</h6>
      <select placeholder="Sort" name="sort" id="sort" onClick={(e) => sortTasks(e.target.value)}>
        <option value="Newest_First">Newest First</option>
        <option value="Oldest_First">Oldest First</option>
      </select>
    </div>
  )
}

export default Options
