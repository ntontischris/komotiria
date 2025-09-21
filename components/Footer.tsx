
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'f' },
    { name: 'Instagram', url: '#', icon: 'i' },
    { name: 'TikTok', url: '#', icon: 't' },
  ];

  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">Kommōtērio</h3>
            <p className="text-sm text-brand-light/80">Το στυλ που σου αξίζει, η περιποίηση που χρειάζεσαι. Κλείσε το ραντεβού σου και αφέσου στα χέρια των ειδικών.</p>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Ωράριο Λειτουργίας</h3>
            <ul className="text-sm space-y-2 text-brand-light/80">
              <li>Τρίτη - Παρασκευή: 9:00 - 20:00</li>
              <li>Σάββατο: 9:00 - 18:00</li>
              <li>Κυριακή & Δευτέρα: Κλειστά</li>
            </ul>
          </div>

          {/* Contact & Socials Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Επικοινωνία</h3>
            <ul className="text-sm space-y-2 text-brand-light/80 mb-4">
              <li>📍 Λεωφ. Βασιλίσσης Σοφίας 5, Αθήνα</li>
              <li>📞 <a href="tel:+302107212345" className="hover:text-brand-primary transition-colors duration-300">210 721 2345</a></li>
              <li>📧 <a href="mailto:info@kommotirio.gr" className="hover:text-brand-primary transition-colors duration-300">info@kommotirio.gr</a></li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-primary transition-colors duration-300 group">
                  <span className="sr-only">{link.name}</span>
                  <div className="w-8 h-8 rounded-full bg-brand-light/10 group-hover:bg-brand-primary flex items-center justify-center font-bold group-hover:text-brand-dark transition-colors duration-300">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-light/10 pt-6 text-center text-xs text-brand-light/60">
          <p>&copy; {new Date().getFullYear()} Kommōtērio. All Rights Reserved. Created with ❤️.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;