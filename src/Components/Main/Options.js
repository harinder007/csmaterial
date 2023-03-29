import React from 'react'

function Options(props) {

  const buttons = [];

  props.values.forEach(element => {
    buttons.push(<button>{element}</button>)
  });

  console.log(buttons)

  return (
    <div className='options'>
        {buttons}
    </div>
  )
}

export default Options