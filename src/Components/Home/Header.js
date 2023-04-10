import React from 'react'

function Header(props) {
  return (
    <h1 className='selection-heading'>
        {props.text}
    </h1>
  )
}

export default Header