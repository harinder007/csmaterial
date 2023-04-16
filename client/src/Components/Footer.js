import React from 'react'

function Footer({visits}) {
  console.log(visits)
  return (
    <div className='visits'>Website Visits: {visits}</div>
  )
}

export default Footer