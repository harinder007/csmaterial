import React from 'react'
import { Button } from '@mui/material';

function Options({values, setValue, incPage}) {

  const buttons = [];

  values.forEach(element => {
    buttons.push(<Button size="large" variant="contained" sx={{m:1, fontWeight:700}} onClick={(e) => {setValue(e.target.innerText); incPage()}}>{element}</Button>)
  });


  return (
    <>
        {buttons}
    </>
  )
}

export default Options