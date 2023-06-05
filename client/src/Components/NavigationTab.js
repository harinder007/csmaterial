import React from 'react'
import Navbar from './Navbar'

function NavigationTab(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default NavigationTab