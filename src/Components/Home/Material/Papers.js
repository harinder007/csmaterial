import React, { useState,useEffect } from 'react'
import Header from '../Header'
import Paper from './Paper'
import { Typography } from '@mui/material';

function Papers({data}) {

  const [currentPapers, setCurrentPapers] = useState(null);


  useEffect(() => {
     function getPapers() {
      const papers = fetch("http://127.0.0.1:5000/api/papers").then(
    (res)=> res.json()
  ).then((res)=>
    {setCurrentPapers(res.filter((item) => item.className.toLowerCase() == data.className.toLowerCase() && item.sem == data.sem))
    console.log(currentPapers)
  console.log(data)}
  )}
    getPapers();
 }, [])

    if(currentPapers){
      console.log(currentPapers)
      return (
        <div className='main'>
      <Header text={`${(data.className).toUpperCase()} ${data.sem}th Sem Papers`}/>
      <Typography variant="overline" display="block" gutterBottom>
        {`${currentPapers.length} results found`}
      </Typography>
      {currentPapers.map(element => 
      <Paper data={element}/>
      )}
    </div>
      )
    }
    else {
      return (
      <h1></h1>
      )
    }
}

export default Papers