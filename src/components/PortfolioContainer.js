import React, { useState } from 'react';
import About from './pages/About-me';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navtabs from './Header-Nav';
import Footer from './Footer';
import './Style.css'
function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navtabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;