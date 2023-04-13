import React, { useState, useEffect } from 'react'
import Hero from '../Hero';
import Header from './Header';
import addSuffix from '../../Utility/addSuffix';
import { Typography } from '@mui/material';
import Paper from './Material/Paper'

function Material() {

  const [url, setUrl] = useState(((window.location.href.split('/')).at(-1)).split('-'));
  const [currentMaterial, setCurrentMaterial] = useState(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  
  const openPdf = (url)=> {
    console.log('hello')
    setPdfUrl(url);
    setIsPdfOpen(true);
  }

  const closePdf = ()=> {
    setPdfUrl(null);
    setIsPdfOpen(false);
  }

  let data;

  useEffect(() => {
    getPapers();
  }, [])

  if(url.length === 3){
    data = {
      materialType:url[0],
      className:url[1].replace("%20",' '),
      sem:url[2]
    }
  }
  else {
    return (
      <h1>Error 404: page not found</h1>
    )
  }

  let result;
  let route;

  if(data.materialType.toLowerCase() == "previous%20year") {
    route = "http://127.0.0.1:5000/api/papers";
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Papers`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element} openPdf={openPdf} closePdf={closePdf} />
      )}
      </div>
    </section>
  }

  else if(data.materialType.toLowerCase() == "assignment") {
    route = "http://127.0.0.1:5000/api/assignments";
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Assignments`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element}/>
      )}
      </div>
    </section>
  }
  else if(data.materialType.toLowerCase() == "study%20material") {
    route = "http://127.0.0.1:5000/api/studyMaterial";
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Study Material`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element}/>
      )}
      </div>
    </section>
  }
  else if(data.materialType.toLowerCase() == "syllabus") {
    route = "http://127.0.0.1:5000/api/syllabuses";
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Syllabus`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element}/>
      )}
      </div>
    </section>
  }
  else {
    return (
      <h1>Error 404: page not found</h1>
    )
  }

  function getPapers() {
  fetch(route).then(
  (res)=> res.json()
).then((res)=>
  {setCurrentMaterial(res.filter((item) => item.className.toLowerCase() == data.className.toLowerCase() && item.sem == data.sem))
  console.log(currentMaterial)
  console.log(data)}
)}


  return (
    <>
      <Hero isHome={false}/>
      {currentMaterial && result}
      {
      isPdfOpen &&  
      <div className="pdf-viewer">
        <iframe src={pdfUrl} allow="autoplay"></iframe>
        <span className="pdf-close" onClick={() => closePdf()}>
            <i class="ph-bold ph-x"></i>
          </span>
      </div>
      } 
    </>
  )
}

export default Material