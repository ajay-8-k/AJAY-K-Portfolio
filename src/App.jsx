import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      <CustomCursor />
      
      {loading ? (
        <Loader onLoaded={() => setLoading(false)} />
      ) : (
        <div className="app-content fade-in-up">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
