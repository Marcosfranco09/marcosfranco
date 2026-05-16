import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Banner from './sections/Banner';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative selection:bg-cyan-400 selection:text-dark-900 bg-[#050a0e]">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <Banner />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
