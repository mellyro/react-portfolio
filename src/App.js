import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
// import Portfolio from
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <ContactForm />
        <Resume />
      </main>
    </div>
  );
}

export default App;
