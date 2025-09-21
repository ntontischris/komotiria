
import React from 'react';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from '../Icons';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Επικοινωνία</h1>
          <p className="mt-4 text-lg text-brand-text/80">Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση. Κλείστε το ραντεβού σας σήμερα!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif font-bold mb-6 text-brand-text">Στοιχεία Επικοινωνίας</h2>
              <div className="space-y-5 text-brand-text/90">
                 <div className="flex items-start">
                    <LocationMarkerIcon className="w-6 h-6 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                    <p><strong>Διεύθυνση:</strong><br/>Λεωφ. Βασιλίσσης Σοφίας 5, Αθήνα, 106 71</p>
                 </div>
                 <div className="flex items-start">
                    <PhoneIcon className="w-6 h-6 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                    <p><strong>Τηλέφωνο:</strong><br/><a href="tel:+302107212345" className="text-brand-primary hover:underline">210 721 2345</a></p>
                 </div>
                 <div className="flex items-start">
                    <MailIcon className="w-6 h-6 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                    <p><strong>Email:</strong><br/><a href="mailto:info@kommotirio.gr" className="text-brand-primary hover:underline">info@kommotirio.gr</a></p>
                 </div>
                <p><strong>🕐 Ωράριο:</strong> Τρ-Παρ: 9:00-20:00, Σαβ: 9:00-18:00</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.163953836094!2d23.7361362153228!3d37.97519997972288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3e3a4e9b9d%3A0x6b4618a85a4f7863!2sVasilissis%20Sofias%205%2C%20Athina%20106%2071%2C%20Greece!5e0!3m2!1sen!2sgr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-serif font-bold mb-6 text-brand-text">Φόρμα Επικοινωνίας</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text">Όνομα</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-brand-light border border-brand-primary/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition duration-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-text">Τηλέφωνο</label>
                  <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 bg-brand-light border border-brand-primary/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition duration-300" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-brand-light border border-brand-primary/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition duration-300" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-brand-text">Υπηρεσία που σας ενδιαφέρει</label>
                <select id="service" name="service" className="mt-1 block w-full px-3 py-2 bg-brand-light border border-brand-primary/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition duration-300">
                  <option>Επιλέξτε Υπηρεσία</option>
                  <option>Γυναικείο Κούρεμα</option>
                  <option>Βαφή</option>
                  <option>Balayage / Ombre</option>
                  <option>Θεραπεία Keratin</option>
                  <option>Χτένισμα</option>
                  <option>Άλλο</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text">Μήνυμα</label>
                <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 bg-brand-light border border-brand-primary/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition duration-300" placeholder="Προτιμώμενη μέρα/ώρα ή οποιαδήποτε άλλη ερώτηση..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary text-brand-dark font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-brand-primary/40 bg-[length:200%_auto] hover:animate-gold-shine transition-all duration-500 transform hover:scale-105">
                  Αποστολή Μηνύματος
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;