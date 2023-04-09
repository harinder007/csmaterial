import React from 'react'
import Header from './Home/Header'
import Options from './Home/Options'
import AdminEntry from './Admin/AdminEntry'
import { useState } from 'react'
import { ButtonGroup, Button, Fab } from '@mui/material'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'


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
      <div className="home-btns">
        <Options values={['MCA','MSC','MSC DS']} incPage={incrementPage} setValue={setStream}/>
      </div>
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
      <div className="home-btns">
        <Options values={[1,2,3,4]} incPage={incrementPage} setValue={setSem}/>
      </div>
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
       <Navigate to={`/${material}-${stream}-${sem}`}/>
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
    <>
    <header>
      <Navbar tab="home"/>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Ultimate Hub for<br/> Computer Science Students</h1>
          <p className="hero-subheading">Previous Year Papers, Solved Assignments, Study Material and more</p>
        </div>
      </section>
    </header>
    <div className='main'>
      {mainPage}
    </div>
    </>
  )
}

export default Home