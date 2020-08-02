import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
// import Portfolio from
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <ContactForm />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
