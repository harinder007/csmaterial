import React from 'react'
import { Button } from '@mui/material';

function Options({values, setValue, incPage}) {

  const buttons = [];

  values.forEach(element => {
    buttons.push(<Button sx={{m:1}} onClick={(e) => {setValue(e.target.innerText); incPage()}}>{element}</Button>)
  });


  return (
    <>
        {buttons}
    </>
  )
}

export default Options