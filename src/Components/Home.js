import React from 'react'
import Header from './Home/Header'
import Options from './Home/Options'
import AdminEntry from './Admin/AdminEntry'
import { useState } from 'react'
import { ButtonGroup, Button, Fab } from '@mui/material'


function Home({isAdmin}) {

  const [page, setPage] = useState(0);
  const [stream, setStream] = useState('');
  const [sem, setSem] = useState(0);
  const [material, setMaterial] = useState('');
  const [data, setData] = useState({});

  const incrementPage = () => {setPage(page + 1)
    setData({
      stream: stream,
      sem: sem,
      material: material
    })
  };
  const decrementPage = () => {setPage(page - 1)
    setData({
      stream: stream,
      sem: sem,
      material: material
    })
  };

  console.log(page + stream + sem + material)
  const pageOne = (
    <>
      <div className='main-header'>
        <Header text="Select your class"/>
      </div>
      <ButtonGroup variant="contained" size="large" aria-label="large button group">
        <Options values={['MCA','MSC','MSC DS']} incPage={incrementPage} setValue={setStream}/>
      </ButtonGroup>
    </>
  )

  const pageTwo = (
    <>
      <div className='main-header'>
      <Fab color="secondary" aria-label="back" onClick={decrementPage}>
            <i className="ph-bold ph-arrow-left"></i>
      </Fab>
      <Header text="Select your sem"/>
      </div>
      <ButtonGroup variant="contained" size="large" aria-label="large button group">
        <Options values={[1,2,3,4]} incPage={incrementPage} setValue={setSem}/>
      </ButtonGroup>
    </>
  )

  const pageThree = (
    <>
      <div className='main-header'>
      <Fab color="secondary" aria-label="back" onClick={decrementPage}>
            <i className="ph-bold ph-arrow-left"></i>
        </Fab>
        <Header text="Here you go"/>
      </div>
      <ButtonGroup variant="contained" size="large" orientation="vertical"
        aria-label="vertical outlined button group">
        <Options values={["Previous Year", "Assignment","Study Material","Syllabus"]} incPage={incrementPage} setValue={setMaterial}/>
      </ButtonGroup>
    </>
  )

  const pageFour = (
    <>
       <Header text="MCA 4th Sem Papers"/>
       <div className='paper'><h3>MCA_4_2021</h3>
       <i class="ph-bold ph-eye"></i>
       <i class="ph-bold ph-download-simple"></i>
       <i class="ph-bold ph-share-fat"></i>
       </div>
       <div className='paper'><h3>MCA_4_2022</h3>
       <a href=""><i class="ph-bold ph-download-simple"></i>
       </a>
       <i class="ph-bold ph-share-fat"></i>
       </div>
    </>
  )

  const adminEntry = (
    <>
    <div className='main-header'>
    <Fab color="primary" aria-label="back" onClick={decrementPage}>
            <i className="ph-bold ph-arrow-left"></i>
      </Fab>
        <Header text={`Upload ${material}` }/>
      </div>
      <AdminEntry data={data}/>
    </>
  )

  let mainPage;

  if (page==0){
    mainPage = pageOne;
  }
  else if(page==1){
    mainPage = pageTwo;
  }
  else if(page==2){
    mainPage = pageThree;
  }
  else if(page==3){
    mainPage = isAdmin ? adminEntry : pageFour;
  }

  return (
    <div className='main'>
      {mainPage}
    </div>
  )
}

export default Home