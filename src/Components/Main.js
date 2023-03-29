import React from 'react'
import Header from './Main/Header'
import Options from './Main/Options'

function Main() {
  return (
    <div className='main'>
        <button className='back-btn'>
            <i class="ph-bold ph-arrow-left"></i>
        </button>
        <Header text="Select your class"/>
        <Options/>
    </div>
  )
}

export default Main