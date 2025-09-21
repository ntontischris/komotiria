
import React from 'react';
import { servicesData } from '../../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Υπηρεσίες & Τιμοκατάλογος</h1>
          <p className="mt-4 text-lg text-brand-text/80 max-w-2xl mx-auto">
            Ανακαλύψτε τις υπηρεσίες μας και βρείτε αυτό που ταιριάζει απόλυτα στις ανάγκες σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.map((category, index) => (
            <div 
              key={index} 
              className="price-card bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              style={{ animation: `fadeInUp 0.5s ease-out ${0.1 * index}s forwards`, opacity: 0 }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-serif font-bold text-brand-text ml-4">{category.title}</h2>
              </div>
              <ul className="space-y-4 mb-8">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between items-center border-b border-brand-primary/20 pb-2">
                    <span className="text-brand-text/90">{item.name}</span>
                    <span className="font-semibold text-brand-text">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                 <button className="bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary text-brand-dark font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-brand-primary/40 bg-[length:200%_auto] hover:animate-gold-shine transition-all duration-500 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12 text-sm text-brand-text/70">
            <p>* Οι τιμές μπορεί να διαφέρουν ανάλογα με το μήκος και την πυκνότητα των μαλλιών. Για ακριβή τιμή, συμβουλευτείτε τον στυλίστα σας.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;