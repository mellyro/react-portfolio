import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />
      case 'Contact':
        return <ContactForm />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <Jumbotron />
        {renderPage()}
        {/* <About />
        <ContactForm />
        <Resume /> */}
      <Footer />
    </div>
  );
}

export default App;
