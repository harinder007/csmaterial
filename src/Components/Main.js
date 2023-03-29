import React from 'react'
import Header from './Main/Header'
import Options from './Main/Options'
import { useState } from 'react'


function Main() {

  const [page, setPage] = useState(0);

  const pageOne = (
    <>
      <div className='main-header'>
        <button className='back-btn'>
            <i className="ph-bold ph-arrow-left"></i>
        </button>
        <Header text="Select your class"/>
      </div>
        <Options values={['MCA','MSC','MSC DS']}/>
    </>
  )

  const pageTwo = (
    <>
      <div className='main-header'>
        <button className='back-btn'>
            <i className="ph-bold ph-arrow-left"></i>
        </button>
        <Header text="Select your sem"/>
      </div>
        <Options values={[1,2,3,4]}/>
    </>
  )

  const pageThree = (
    <>
      <div className='main-header'>
        <button className='back-btn'>
            <i className="ph-bold ph-arrow-left"></i>
        </button>
        <Header text="Here you go"/>
      </div>
        <Options values={["Previous Year", "Assignment","Study Material","Syllabus"]}/>
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

  return (
    <div className='main'>
      {mainPage}
    </div>
  )
}

export default Main