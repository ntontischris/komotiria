
import React, { useState, useEffect } from 'react';
import { galleryData } from '../../constants';
import { GalleryImage } from '../../types';

const ImageModal: React.FC<{
    isOpen: boolean;
    imageUrl: string;
    description: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    currentIndex: number;
    totalImages: number;
}> = ({ isOpen, imageUrl, description, onClose, onPrev, onNext, currentIndex, totalImages }) => {
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
                        alt={description}
                        className="w-full h-full object-contain max-h-[80vh]"
                    />

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                        <span className="font-accent tracking-wider">{currentIndex + 1} / {totalImages}</span>
                    </div>

                    {/* Description */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg max-w-sm">
                        <p className="text-sm font-medium">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GalleryPage: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(galleryData.map(img => img.category)))];
  const [filter, setFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = filter === 'All' ? galleryData : galleryData.filter(img => img.category === filter);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNext = () => {
    if (selectedImageIndex !== null) {
      const nextIndex = selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1;
      setSelectedImageIndex(nextIndex);
    }
  };

  const showPrev = () => {
    if (selectedImageIndex !== null) {
      const prevIndex = selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1;
      setSelectedImageIndex(prevIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedImageIndex === null) return;
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  return (
    <>
      <div className="py-12 md:py-20 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Η Δουλειά μας</h1>
            <p className="mt-4 text-lg text-brand-text/80">Μια γεύση από τις μεταμορφώσεις που δημιουργούμε καθημερινά.</p>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category ? 'bg-brand-primary text-brand-dark shadow-md' : 'bg-white text-brand-text hover:bg-brand-primary/50'
                }`}
              >
                {category === 'All' ? 'Όλα' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openModal(index)}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                style={{ animation: `fadeInUp 0.5s ease-out ${0.1 * index}s forwards`, opacity: 0 }}
              >
                <img src={image.afterUrl} alt={image.description} className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
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
          imageUrl={filteredImages[selectedImageIndex].afterUrl}
          description={filteredImages[selectedImageIndex].description}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
          currentIndex={selectedImageIndex}
          totalImages={filteredImages.length}
        />
      )}
    </>
  );
};

export default GalleryPage;