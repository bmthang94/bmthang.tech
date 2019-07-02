import React from 'react';
import logo from './logo.svg';
import './scss/style.scss';

import Headers from './components/sections/Header'
import Cover from './components/sections/Cover';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Footer from './components/sections/Footer';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
function App() {
  return (
    <div className="App">
      <Headers />
      <main>
        <Cover />
        <About />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
