import React, { useState } from 'react'

function AdminEntry({data}) {

  const [year, setYear] = useState();
  const [viewLink, setViewLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  return (
    <div className='upload-data'>
        <div className="year-input">
        <label htmlFor="year">Year</label>
        <input type="text" name='year' onChange={(e) => setYear(e.target.value)}/>
        </div>
        <div className="link-input">
        <label htmlFor="pdf">View Link</label>
        <input type="text" name='pdf' onChange={(e) => setViewLink(e.target.value)}/>
        </div>
        <div className="link-input-2">
        <label htmlFor="pdf1">Download Link</label>
        <input type="text" name='pdf1' onChange={(e) => setDownloadLink(e.target.value)}/>
        </div>
        <button type='button'>Upload</button>
    </div>
  )
}

export default AdminEntry