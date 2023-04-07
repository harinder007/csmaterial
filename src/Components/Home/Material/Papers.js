import React, { useState } from 'react'
import Header from '../Header'
import Paper from './Paper'

let papers = fetch("http://127.0.0.1:5000/api/papers").then(
  (res)=> res.json()
).then((res)=>
  console.log(res)
)

console.log(papers)

function Papers({data}) {
      return (
    <div className='main'>
      <Header text={`${(data.className).toUpperCase()} ${data.sem}th Sem Papers`}/>
      <Paper data={data}/>
    </div>
  )
}

export default Papers