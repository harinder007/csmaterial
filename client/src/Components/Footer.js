import React from 'react'

function Footer({visits}) {
  console.log(visits)
  return (
    <div>Website Total Visits: {visits}</div>
  )
}

export default Footer