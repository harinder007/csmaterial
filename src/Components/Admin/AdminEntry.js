import React, { useState } from 'react'

function AdminEntry({data}) {

  const [year, setYear] = useState();
  const [viewLink, setViewLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  let paperData = {
    className: data.stream,
    sem: data.sem,
    year: year,
    viewLink: viewLink,
    downloadLink: downloadLink
  };

  const uploadData = async()=> {
  const res = await fetch("http://localhost:5000/api/papers", {
  method: "POST",
  url: `http://localhost:5000`,
  body: JSON.stringify(paperData),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
  });
  console.log(res)
  }

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
        <button type='button' onClick={uploadData}>Upload</button>
    </div>
  )
}

export default AdminEntry