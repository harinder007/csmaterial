import React from 'react';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';

function Hero({ isHome }) {
  return (
    <>
      {isHome ? (
        <header>
          <section className="hero">
            <div className="hero-content">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="hero-heading">
                  Ultimate Hub for
                  <br /> Computer Science Students
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <p className="hero-subheading">
                  Previous Year Papers, Study Material, Syllabus and more
                </p>
              </motion.div>
            </div>
          </section>
        </header>
      ) : (
        <header className="material-header">
          <section className="hero">
            <div className="hero-content">
              <h1 className="hero-heading">
                Ultimate Hub for
                <br /> Computer Science Students
              </h1>
            </div>
          </section>
        </header>
      )}
    </>
  );
}

export default Hero;
