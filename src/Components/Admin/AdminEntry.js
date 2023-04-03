import React from 'react'

function AdminEntry({data}) {
  return (
    <div className='upload-data'>
        <div className="year-input">
        <label htmlFor="year">Year</label>
        <input type="text" name='year'/>
        </div>
        <div className="link-input">
        <label htmlFor="link">PDF Link</label>
        <input type="text" name='year'/>
        </div>
        <button type='button'>Upload</button>
    </div>
  )
}

export default AdminEntry