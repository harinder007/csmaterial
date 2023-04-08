import React, { useState } from 'react'
import { Snackbar, Alert, IconButton } from '@mui/material';
import {CloseIcon} from '@mui/icons-material';


function AdminEntry({data}) {

  const [year, setYear] = useState();
  const [viewLink, setViewLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  let paperData = {
    className: data.stream,
    sem: data.sem,
    year: year,
    viewLink: viewLink,
    downloadLink: downloadLink
  };

  const errorSnackbar = ()=> {
    setIsError(true);
  }
  const successSnackbar = ()=> {
    setYear('')
    setViewLink('')
    setDownloadLink('')
    setIsSuccess(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsError(false);
    setIsSuccess(false);
  };

  const uploadData = async()=> {
  await fetch("http://localhost:5000/api/papers", {
  method: "POST",
  url: `http://localhost:5000`,
  body: JSON.stringify(paperData),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
  }).then((res)=>{
    return res.json();
  }).then((data)=> {
    if(data.err){
      errorSnackbar();
    }
    else{
      successSnackbar();
    }
  });
  
  }

  return (
    <div className='upload-data'>
        <div className="year-input">
        <label htmlFor="year">Year</label>
        <input type="text" name='year' id="year" value={year} onChange={(e) => setYear(e.target.value)}/>
        </div>
        <div className="link-input">
        <label htmlFor="pdf">View Link</label>
        <input type="text" name='pdf' id="pdf" value={viewLink} onChange={(e) => setViewLink(e.target.value)}/>
        </div>
        <div className="link-input-2">
        <label htmlFor="pdf1">Download Link</label>
        <input type="text" name='pdf1' id="pdf1" value={downloadLink} onChange={(e) => setDownloadLink(e.target.value)}/>
        </div>
        <button type='button' onClick={uploadData}>Upload</button>
        <Snackbar open={isError} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Invalid data, try again!
        </Alert>
      </Snackbar>
      <Snackbar open={isSuccess} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Data uploaded successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AdminEntry