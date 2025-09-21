
import React from 'react';
import { servicesData } from '../../constants';
import { ScissorsIcon, SparklesIcon, BeakerIcon, GiftIcon, UsersIcon, StarIcon, HeartIcon } from '../Icons';

const Hero: React.FC = () => (
  <div className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('./images/hero.jpg')" }}>
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-brand-dark/50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wider leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Το Στυλ που σου Αξίζει</h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-brand-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        Ανακαλύψτε την καλύτερη εκδοχή του εαυτού σας στο κομμωτήριό μας. Ποιότητα, εμπειρία και πάθος για την ομορφιά.
      </p>
      <button className="mt-8 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary text-brand-dark font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-brand-primary/40 bg-[length:200%_auto] hover:animate-gold-shine transition-all duration-500 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        Κλείσε Ραντεβού Online
      </button>
    </div>
  </div>
);

const ServicesOverview: React.FC = () => {
    const services = [
        { name: 'Κούρεμα', icon: <ScissorsIcon className="w-10 h-10 mb-4 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" /> },
        { name: 'Βαφή', icon: <SparklesIcon className="w-10 h-10 mb-4 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" /> },
        { name: 'Περιποίηση', icon: <BeakerIcon className="w-10 h-10 mb-4 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" /> },
        { name: 'Styling', icon: <GiftIcon className="w-10 h-10 mb-4 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" /> },
    ];

    return (
        <div className="py-20 bg-white animate-fade-in-up">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-brand-text">Οι Υπηρεσίες Μας</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group flex flex-col items-center p-6 bg-brand-light rounded-lg shadow-md hover:shadow-xl hover:shadow-brand-primary/20 hover:-translate-y-2 transition-all duration-300">
                            {service.icon}
                            <h3 className="font-bold text-lg text-brand-text">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const WhyChooseUs: React.FC = () => {
    const reasons = [
        { icon: <UsersIcon className="w-12 h-12 text-brand-primary" />, title: 'Έμπειροι Στυλίστες', description: 'Η ομάδα μας αποτελείται από καταρτισμένους επαγγελματίες με πάθος για τη δημιουργία.' },
        { icon: <StarIcon className="w-12 h-12 text-brand-primary" />, title: 'Premium Προϊόντα', description: 'Χρησιμοποιούμε μόνο κορυφαία brands για την υγεία και την λάμψη των μαλλιών σας.' },
        { icon: <HeartIcon className="w-12 h-12 text-brand-primary" />, title: 'Χαλαρωτικό Περιβάλλον', description: 'Απολαύστε την περιποίησή σας σε έναν χώρο σχεδιασμένο για την άνεση και τη χαλάρωσή σας.' }
    ];

    return (
        <div className="py-20 bg-brand-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-brand-text">Γιατί να μας Επιλέξετε;</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {reasons.map((reason, index) => (
                        <div key={index} className="group p-6 flex flex-col items-center">
                            <div className="bg-white p-4 rounded-full shadow-md mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-brand-primary/20">
                                {reason.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-2 text-brand-text">{reason.title}</h3>
                            <p className="text-brand-text/80 max-w-xs">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ImageModal: React.FC<{
    isOpen: boolean;
    imageUrl: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    currentIndex: number;
    totalImages: number;
}> = ({ isOpen, imageUrl, onClose, onPrev, onNext, currentIndex, totalImages }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-brand-primary transition-colors duration-300 z-10"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Navigation buttons */}
                <button
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-primary/80 hover:bg-brand-primary text-brand-dark p-2 rounded-full transition-all duration-300 z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-primary/80 hover:bg-brand-primary text-brand-dark p-2 rounded-full transition-all duration-300 z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Image */}
                <div
                    className="relative overflow-hidden rounded-lg shadow-2xl animate-fade-in-up"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={imageUrl}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="w-full h-full object-contain max-h-[80vh]"
                    />

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                        <span className="font-accent tracking-wider">{currentIndex + 1} / {totalImages}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InstagramFeed: React.FC = () => {
    const images = [
        './images/womanhaircut.jpg',
        './images/xtenisma.jpg',
        './images/bafi.jpg',
        './images/manhaircut.jpg',
        './images/peripoiisi.jpg',
        './images/hero.jpg'
    ];

    const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const showPrevImage = () => {
        if (selectedImageIndex !== null) {
            const prevIndex = selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
            setSelectedImageIndex(prevIndex);
        }
    };

    const showNextImage = () => {
        if (selectedImageIndex !== null) {
            const nextIndex = selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;
            setSelectedImageIndex(nextIndex);
        }
    };

    return (
        <>
            <div className="py-20 bg-white animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brand-text">Δες τη δουλειά μας</h2>
                    <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 text-lg font-accent tracking-widest">@KOMMOTIRIO_SALON</a>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-10">
                        {images.map((src, index) => (
                            <button
                                key={index}
                                onClick={() => openModal(index)}
                                className="aspect-square overflow-hidden rounded-lg shadow-md group relative block cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            >
                                <img src={src} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                                <div className="absolute inset-0 bg-brand-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                    <span className="font-accent text-brand-dark tracking-widest text-lg">VIEW STYLE</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
                <ImageModal
                    isOpen={selectedImageIndex !== null}
                    imageUrl={images[selectedImageIndex]}
                    onClose={closeModal}
                    onPrev={showPrevImage}
                    onNext={showNextImage}
                    currentIndex={selectedImageIndex}
                    totalImages={images.length}
                />
            )}
        </>
    );
};


const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <InstagramFeed />
    </div>
  );
};

export default HomePage;