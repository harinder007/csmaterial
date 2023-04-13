import React from 'react'
import Navbar from './Navbar'

function Hero({isHome}) {
   
      return (
        <>
        {isHome ? <header>
            <Navbar tab="home"/>
            <section className="hero">
              <div className="hero-content">
                <h1 className="hero-heading">Ultimate Hub for<br/> Computer Science Students</h1>
                <p className="hero-subheading">Previous Year Papers, Solved Assignments, Study Material and more</p>
              </div>
            </section>
          </header> : 
          <header className='material-header'>
            <Navbar tab="home"/>
            <section className="hero">
              <div className="hero-content">
                <h1 className="hero-heading">Ultimate Hub for<br/> Computer Science Students</h1>
              </div>
            </section>
          </header>
          }
          </>
      )
}

export default Hero