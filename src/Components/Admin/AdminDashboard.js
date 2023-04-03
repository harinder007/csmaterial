import React from 'react'
import Home from '../Home'

function AdminDashboard() {
  return (
    <div className='main'>
        <Home isAdmin={true}/>
    </div>
  )
}

export default AdminDashboard