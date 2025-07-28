import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import './animations.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <section id="home" className="fade-in">
          <Home />
        </section>

        <section id="about" className="fade-in">
          <About />
        </section>

        <section id="skills" className="fade-in">
          <Skills />
        </section>

        <section id="projects" className="fade-in">
          <Projects />
        </section>

        <section id="contact" className="fade-in">
          <Contact />
        </section>
      </main>

      <Footer /> {/* ✅ Footer added here */}
    </div>
  );
}

export default App;
