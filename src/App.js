import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
// import Portfolio from
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
      // Add Portfolio case here
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
        {renderPage()}
        {/* <About />
        <ContactForm />
        <Resume /> */}
      <Footer />
    </div>
  );
}

export default App;
