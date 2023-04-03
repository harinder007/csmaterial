import React from 'react'

function Options({values, setValue, incPage}) {

  const buttons = [];

  values.forEach(element => {
    buttons.push(<button key={element} onClick={(e) => {setValue(e.target.innerText); incPage()}}>{element}</button>)
  });


  return (
    <div className='options'>
        {buttons}
    </div>
  )
}

export default Options