import React from 'react'

function Header(props) {
  return (
    <h1 className='heading'>
        {props.text}
    </h1>
  )
}

export default Header