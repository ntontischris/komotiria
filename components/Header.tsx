
import React, { useState } from 'react';
import { Page } from '../types';
import { MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onClick, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onClick(page)}
      className={`relative py-2 px-3 text-sm font-medium tracking-widest uppercase transition-colors duration-300 group ${
        isActive ? 'text-brand-primary' : 'text-brand-light/80 hover:text-brand-light'
      }`}
    >
      <span>{children}</span>
      <span className={`absolute bottom-0 left-0 block h-0.5 bg-brand-primary transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'ΑΡΧΙΚΗ' },
    { page: 'services', label: 'ΥΠΗΡΕΣΙΕΣ' },
    { page: 'gallery', label: 'GALLERY' },
    { page: 'team', label: 'Η ΟΜΑΔΑ' },
    { page: 'contact', label: 'ΕΠΙΚΟΙΝΩΝΙΑ' },
  ];

  return (
    <header className="bg-brand-dark/95 backdrop-blur-lg sticky top-0 z-50 border-b border-brand-primary/20 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-serif font-bold text-brand-light cursor-pointer" onClick={() => handleNavClick('home')}>
          Kommōtērio
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map(item => (
            <NavLink key={item.page} page={item.page} currentPage={currentPage} onClick={handleNavClick}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-light focus:outline-none">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark pb-4">
          <nav className="flex flex-col items-center space-y-2">
             {navItems.map(item => (
              <NavLink key={item.page} page={item.page} currentPage={currentPage} onClick={handleNavClick}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;