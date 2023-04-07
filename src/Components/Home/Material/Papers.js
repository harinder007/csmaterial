import React from 'react'
import Header from '../Header'

function Papers({data}) {
      return (
    <div className='main'><Header text={`${(data.className).toUpperCase()} ${data.sem}th Sem Papers`}/>
    <div className='paper'><h3>MCA_4_2021</h3>
    <i class="ph-bold ph-eye"></i>
    <i class="ph-bold ph-download-simple"></i>
    <i class="ph-bold ph-share-fat"></i>
    </div>
    <div className='paper'><h3>MCA_4_2022</h3>
    <a href=""><i class="ph-bold ph-download-simple"></i>
    </a>
    <i class="ph-bold ph-share-fat"></i>
    </div></div>
  )
}

export default Papers