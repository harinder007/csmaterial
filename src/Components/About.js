import React from 'react'
import Navbar from './Navbar'
import { IconButton } from '@mui/material';


function About() {
  return (
    <>
    <Navbar/>
    <section className="about">
      <h1 className="about-heading">This project is developed and managed by</h1>
      <div className="profiles">
        <div className="profile">
          <img src="./images/jpgs/amit.jpg" alt="profile-photo" />
          <h2 className='name'>Amit Kharod</h2>
          <div className="socials">
            <IconButton><img src="./images/pngs/YouTube.png" alt="youtube-icon" /></IconButton>
            <IconButton><img src="./images/pngs/Instagram.png" alt="instagram-icon" /></IconButton>
            <IconButton><img src="./images/pngs/Github.png" alt="github-icon" /></IconButton>
          </div>
          </div>
        <div className="profile">
          <img src="./images/jpgs/harinder.jpg" alt="profile-photo" />
          <h2 className='name'>Harinder Yadav</h2>
          <div className="socials">
            <IconButton><img src="./images/pngs/YouTube.png" alt="youtube-icon" /></IconButton>
            <IconButton><img src="./images/pngs/Instagram.png" alt="instagram-icon" /></IconButton>
            <IconButton><img src="./images/pngs/Github.png" alt="github-icon" /></IconButton>
          </div>
          </div>
      </div>
      <p className="about-description">"We are final year MCA students from MD University, Rohtak who are passionate about helping their fellow students. We hope you find our website helpful and informative"
      </p>
    </section>
    <section id="contact">
      <h2 class="contact-heading"><span>If you have any suggestions or feedback,</span> <span>please don't hesitate to reach out to us.</span></h2>
      <h1 className="mail">csmaterial007@gmail.com</h1>
    </section>
    </>
  )
}

export default About