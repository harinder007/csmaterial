import React from 'react';
import { Button } from '@mui/material';

function Options({ values, incPage }) {
  const buttons = [];

  values.forEach((element, i) => {
    console.log(element);
    buttons.push(
      <Button
        key={i}
        size="large"
        variant="contained"
        sx={{ m: 1, fontWeight: 700 }}
        onClick={()=> incPage(element)}
      >
        {element}
      </Button>
    );
  });

  return <>{buttons}</>;
}

export default Options;
