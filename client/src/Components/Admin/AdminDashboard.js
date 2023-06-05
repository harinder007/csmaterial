import React, { useState } from 'react';
import Home from '../Home';
import { Navigate } from 'react-router-dom';

function AdminDashboard() {
  const token = window.localStorage.getItem('token');
  const [goToHome, setGoToHome] = useState(false);

  if (goToHome) {
    return <Navigate to="/" />;
  }

  if (token) {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth`, {
      headers: {
        'x-auth-token': token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg == 'success') {
          window.localStorage.setItem('isAdmin', true);
        } else {
          window.localStorage.setItem('isAdmin', false);
          window.localStorage.removeItem('token');
          setGoToHome(true);
        }
      });
  } else {
    setGoToHome(true);
  }

  return (
    <div className="main">
      <Home isAdmin={true} />
    </div>
  );
}

export default AdminDashboard;
