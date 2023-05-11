import React, { useState, useEffect } from 'react'
import addSuffix from '../../Utility/addSuffix';
import { Typography, Fab, CircularProgress, Box, LinearProgress } from '@mui/material';
import Paper from './Material/Paper'

function Material() {

  const [url, setUrl] = useState(((window.location.href.split('/')).at(-1)).split('-'));
  const [currentMaterial, setCurrentMaterial] = useState(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  
  const openPdf = (url)=> {
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
    route = `${process.env.REACT_APP_URL}/api/papers`;
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Papers`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element} openPdf={openPdf} closePdf={closePdf} material={data.materialType.toLowerCase()}/>
      )}
      </div>
    </section>
  }

  else if(data.materialType.toLowerCase() == "programs") {
    route = `${process.env.REACT_APP_URL}/api/programs`;
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Programs`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element} openPdf={openPdf} closePdf={closePdf} material={data.materialType.toLowerCase()}/>
      )}
      </div>
    </section>
  }
  else if(data.materialType.toLowerCase() == "study%20material") {
    route = `${process.env.REACT_APP_URL}/api/studyMaterial`;
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Study Material`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element} openPdf={openPdf} closePdf={closePdf} material={data.materialType.toLowerCase()}/>
      )}
      </div>
    </section>
  }
  else if(data.materialType.toLowerCase() == "syllabus") {
    route = `${process.env.REACT_APP_URL}/api/syllabuses`;
    result = currentMaterial && 
    <section className="material">
      <Header text={`${(data.className).toUpperCase()} ${addSuffix(data.sem)} Sem Syllabus`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentMaterial.length} results found`}
      </Typography>
      <div className="results">
      {currentMaterial.map(element => 
      <Paper data={element} openPdf={openPdf} closePdf={closePdf} material={data.materialType.toLowerCase()}/>
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
  }
)}

  return (
    <>
      <Hero isHome={false}/>
      {currentMaterial ?  <div className='main-header'>
      <span className="back-btn">
        <Link to="/">
        <Fab color="primary" aria-label="back">
              <i className="ph-bold ph-arrow-left"></i>
        </Fab>
        </Link>
      </span>
      {result}
      </div> : <div className='loading'>
      <CircularProgress size="8rem" color='secondary' />
    </div>}
      
      
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