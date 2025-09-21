
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import GalleryPage from './components/pages/GalleryPage';
import TeamPage from './components/pages/TeamPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans text-brand-text">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main key={currentPage} className="animate-fade-in">
        {renderPage()}
      </main>
      <FloatingCTA />
      <ScrollToTopButton />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;