
import React from 'react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-4">
      {/* WhatsApp Widget */}
      <a 
        href="https://wa.me/306901234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.919 6.166l-.53 1.95 1.996-.52zM12.273 6.944c-.225-.126-.502-.197-.783-.205-.282-.008-.561 0-.828.031-.267.031-.533.09-.779.181-.246.09-.466.225-.653.398-.188.173-.341.38-.456.611-.116.23-.173.486-.173.766s.057.56.173.815c.116.255.283.479.499.667.217.188.462.347.732.476.27.129.564.23.879.303.315.072.645.108.985.108.31 0 .611-.031.897-.091.286-.06.557-.156.797-.287.241-.131.454-.3.629-.502.174-.202.304-.44.384-.704.08-.264.12-.556.12-.87 0-.312-.04-.606-.12-.876-.08-.27-.202-.505-.36-.694-.159-.189-.358-.345-.591-.461-.234-.117-.49-.174-.757-.174-.275 0-.528.064-.748.192z" />
        </svg>
      </a>

      {/* Book Appointment Button */}
      <button className="bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary text-brand-dark font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-brand-primary/40 bg-[length:200%_auto] hover:animate-gold-shine transition-all duration-500 transform hover:scale-105 whitespace-nowrap">
        Κλείσε Ραντεβού
      </button>
    </div>
  );
};

export default FloatingCTA;