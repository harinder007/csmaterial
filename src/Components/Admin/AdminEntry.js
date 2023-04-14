import React, { useState } from 'react'
import { Snackbar, Alert, IconButton } from '@mui/material';


function AdminEntry({data}) {

  const token = window.localStorage.getItem('token');
  const [year, setYear] = useState("");
  const [viewLink, setViewLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  let postData;
  let url;
  let isYear, isTopic, isSubject = false;


  if(data.material.toLowerCase() === "previous year"){
    postData = {
      className: data.stream,
      sem: data.sem,
      year: year,
      viewLink: viewLink,
      downloadLink: downloadLink
    };
    url = "http://localhost:5000/api/papers";
    isYear = true;
  }

  else if(data.material.toLowerCase() === "syllabus"){
    postData = {
      className: data.stream,
      sem: data.sem,
      subject: subject,
      viewLink: viewLink,
      downloadLink: downloadLink
    };
    url = "http://localhost:5000/api/syllabus";
    isSubject = true;
  }
  
  else if(data.material.toLowerCase() === "study material"){
    postData = {
      className: data.stream,
      sem: data.sem,
      subject: subject,
      topic: topic,
      viewLink: viewLink,
      downloadLink: downloadLink
    };
    url = "http://localhost:5000/api/studyMaterial";
    isSubject = true;
    isTopic = true;
  }
  else if(data.material.toLowerCase() === "programs"){
    postData = {
      className: data.stream,
      sem: data.sem,
      topic: topic,
      viewLink: viewLink,
      downloadLink: downloadLink
    };
    url = "http://localhost:5000/api/programs";
    isTopic = true
  }

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
  await fetch(url, {
  method: "POST",
  url: `http://localhost:5000`,
  body: JSON.stringify(postData),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "x-auth-token": token
  }
  }).then((res)=>{
    return res.json();
  }).then((data)=> {
    if(data.err){
      errorSnackbar();
      console.log(data.err.toString())
    }
    else{
      successSnackbar();
    }
  });
  
  }

  return (
    <div className='upload-data'>
      {isSubject &&  <div className="subject-input">
        <label htmlFor="subject">Subject</label>
        <input type="text" name='subject' id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
        </div>}
      {isTopic && <div className="topic-input">
        <label htmlFor="topic">Topic</label>
        <input type="text" name='topic' id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}/>
        </div>}
      {isYear && <div className="year-input">
        <label htmlFor="year">Year</label>
        <input type="text" name='year' id="year" value={year} onChange={(e) => setYear(e.target.value)}/>
        </div>}
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