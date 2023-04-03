import React from 'react'
import Header from './Home/Header'
import Options from './Home/Options'
import AdminEntry from './Admin/AdminEntry'
import { useState } from 'react'
import { useAsyncError } from 'react-router-dom'


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
        <Options values={['MCA','MSC','MSC DS']} incPage={incrementPage} setValue={setStream}/>
    </>
  )

  const pageTwo = (
    <>
      <div className='main-header'>
      <button className='back-btn' onClick={decrementPage}>
            <i className="ph-bold ph-arrow-left"></i>
        </button>
        <Header text="Select your sem"/>
      </div>
        <Options values={[1,2,3,4]} incPage={incrementPage} setValue={setSem}/>
    </>
  )

  const pageThree = (
    <>
      <div className='main-header'>
      <button className='back-btn' onClick={decrementPage}>
            <i className="ph-bold ph-arrow-left"></i>
        </button>
        <Header text="Here you go"/>
      </div>
        <Options values={["Previous Year", "Assignment","Study Material","Syllabus"]} incPage={incrementPage} setValue={setMaterial}/>
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
      <button className='back-btn' onClick={decrementPage}>
            <i className="ph-bold ph-arrow-left"></i>
        </button>
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