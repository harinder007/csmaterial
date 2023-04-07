import React, { useState } from 'react'
import Papers from './Material/Papers';

function Material() {

  const [url, setUrl] = useState(((window.location.href.split('/')).at(-1)).split('-'));

  const data = {
    className:url[1],
    sem:url[2]
  }

  return (
    <div>
      {url[0] == 'paper' ? (<><Papers data={data}/></>): (<h1>dfdf</h1>)}
    </div>
  )
}

export default Material