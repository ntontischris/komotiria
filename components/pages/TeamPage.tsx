
import React from 'react';
import { teamData } from '../../constants';
import { TeamMember } from '../../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
    <div className="relative h-96 overflow-hidden">
        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left text-white">
             <h3 className="font-serif text-3xl font-bold">{member.name}</h3>
             <p className="text-brand-light/90 font-semibold">{member.specialty}</p>
        </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-sm text-brand-text/70 italic">"{member.experience}"</p>
      <p className="mt-4 text-brand-text/90 flex-grow">{member.bio}</p>
      {member.instagram && (
        <a href={`https://instagram.com/${member.instagram.substring(1)}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-brand-primary font-bold hover:text-brand-secondary transition-colors duration-300">
          Follow on Instagram
        </a>
      )}
    </div>
  </div>
);

const TeamPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Η Ομάδα Μας</h1>
          <p className="mt-4 text-lg text-brand-text/80 max-w-2xl mx-auto">
            Γνωρίστε τους ταλαντούχους επαγγελματίες που είναι έτοιμοι να σας προσφέρουν μια μοναδική εμπειρία.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((member, index) => (
             <div key={index} style={{ animation: `fadeInUp 0.5s ease-out ${0.1 * index}s forwards`, opacity: 0 }}>
                <TeamMemberCard member={member} />
             </div>
          ))}
        </div>

        <div className="mt-20 overflow-x-hidden">
            <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 md:p-12 rounded-lg shadow-xl">
                <div className="order-2 md:order-1 animate-slide-in-left">
                    <h2 className="text-3xl font-serif font-bold text-brand-text mb-4">Το Σαλόνι Μας</h2>
                    <p className="text-brand-text/80 mb-4 leading-relaxed">
                        Η φιλοσοφία μας βασίζεται στην πεποίθηση ότι όλοι αξίζουν να νιώθουν όμορφα. Δημιουργήσαμε έναν χώρο υψηλής αισθητικής, όπου η τέχνη της κομμωτικής συναντά την απόλυτη χαλάρωση.
                    </p>
                    <p className="text-brand-text/80 leading-relaxed">
                        Συνεργαζόμαστε με κορυφαία brands όπως L'Oréal, Kérastase και Wella, εξασφαλίζοντας αποτελέσματα που διαρκούν και περιποίηση που σέβεται την υγεία των μαλλιών σας.
                    </p>
                </div>
                <div className="order-1 md:order-2 animate-slide-in-right">
                    <img src="/images/hero.jpg" alt="Interior of the salon" className="rounded-lg shadow-md w-full h-full object-cover"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;