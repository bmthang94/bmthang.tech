import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/sections/Header'
import Cover from './components/sections/Cover';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
function App() {
  return (
    <div className="App">
      <Headers />
      <main>
        <Cover />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
