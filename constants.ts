import React from 'react';
import { ServiceCategory, TeamMember, GalleryImage } from './types';
import { ScissorsIcon, SparklesIcon, BeakerIcon, GiftIcon, SunIcon } from './components/Icons';

export const servicesData: ServiceCategory[] = [
  {
    title: "ΚΟΥΡΕΜΑ",
    // FIX: Replaced JSX with React.createElement to avoid JSX parsing errors in a .ts file.
    icon: React.createElement(ScissorsIcon, { className: "w-12 h-12 text-brand-primary" }),
    items: [
      { name: "Γυναικείο κούρεμα", price: "από 15€" },
      { name: "Ανδρικό κούρεμα", price: "από 12€" },
      { name: "Παιδικό κούρεμα", price: "από 10€" },
    ],
  },
  {
    title: "ΒΑΦΗ",
    // FIX: Replaced JSX with React.createElement to avoid JSX parsing errors in a .ts file.
    icon: React.createElement(SparklesIcon, { className: "w-12 h-12 text-brand-primary" }),
    items: [
      { name: "Βαφή ρίζας", price: "από 25€" },
      { name: "Βαφή σε όλο το μαλλί", price: "από 35€" },
      { name: "Ombre / Balayage", price: "από 60€" },
      { name: "Ανταύγειες", price: "από 45€" },
    ],
  },
  {
    title: "ΠΕΡΙΠΟΙΗΣΗ",
    // FIX: Replaced JSX with React.createElement to avoid JSX parsing errors in a .ts file.
    icon: React.createElement(BeakerIcon, { className: "w-12 h-12 text-brand-primary" }),
    items: [
      { name: "Θεραπεία Keratin", price: "από 80€" },
      { name: "Botox μαλλιών", price: "από 40€" },
      { name: "Μάσκα ενυδάτωσης", price: "από 20€" },
    ],
  },
  {
    title: "STYLING",
    // FIX: Replaced JSX with React.createElement to avoid JSX parsing errors in a .ts file.
    icon: React.createElement(GiftIcon, { className: "w-12 h-12 text-brand-primary" }),
    items: [
      { name: "Χτένισμα απλό (φορμάρισμα)", price: "από 15€" },
      { name: "Χτένισμα βραδινό", price: "από 35€" },
      { name: "Νυφικό χτένισμα (πακέτο)", price: "από 120€" },
    ],
  },
];

export const teamData: TeamMember[] = [
  {
    name: "Ελένη Παπαδοπούλου",
    specialty: "Master Colorist",
    experience: "15 χρόνια εμπειρίας",
    bio: "Η Ελένη είναι η ψυχή του κομμωτηρίου. Με εξειδίκευση στις τεχνικές balayage και τις σύνθετες αλλαγές χρώματος, μεταμορφώνει τα μαλλιά σας σε έργα τέχνης.",
    imageUrl: `./omada/replicate-prediction-v5xnbvy9r5rma0csddwvk7efqg.jpg`,
    instagram: "@eleni_hairart",
  },
  {
    name: "Γιώργος Αντωνίου",
    specialty: "Creative Cutting",
    experience: "10 χρόνια εμπειρίας",
    bio: "Ο Γιώργος αγαπά τα μοντέρνα και γεωμετρικά κουρέματα. Είναι ο ειδικός για να σας δώσει ένα στυλ που ξεχωρίζει και αναδεικνύει τα χαρακτηριστικά σας.",
    imageUrl: `./omada/replicate-prediction-7gmq2x9p1xrma0csddxb282kq4.jpg`,
    instagram: "@george_cuts",
  },
  {
    name: "Μαρία Ιωάννου",
    specialty: "Bridal & Updos",
    experience: "8 χρόνια εμπειρίας",
    bio: "Η Μαρία δημιουργεί ονειρεμένα νυφικά και βραδινά χτενίσματα. Με προσοχή στη λεπτομέρεια, εξασφαλίζει ότι θα λάμψετε στην πιο ξεχωριστή σας μέρα.",
    imageUrl: `./omada/replicate-prediction-rs5jaes25drma0csddxthnfr2m.jpg`,
    instagram: "@maria_bridalhair",
  },
];

export const galleryData: GalleryImage[] = [
  { id: 1, category: 'Βαφές', beforeUrl: './images/Balayage transformation - Βαφές.jpg', afterUrl: './images/Balayage transformation - Βαφές.jpg', description: 'Μεταμόρφωση από σκούρο σε λαμπερό balayage.' },
  { id: 2, category: 'Κουρέματα', beforeUrl: './images/Modern bob haircut - Κουρέματα.jpg', afterUrl: './images/Modern bob haircut - Κουρέματα.jpg', description: 'Μοντέρνο bob κούρεμα που έδωσε όγκο και κίνηση.' },
  { id: 3, category: 'Νυφικά', beforeUrl: './images/Wedding updo - Νυφικά.jpg', afterUrl: './images/Wedding updo - Νυφικά.jpg', description: 'Ρομαντικό νυφικό updo με πλεξούδες.' },
  { id: 4, category: 'Κουρέματα', beforeUrl: './images/Men\'s fade haircut - Ανδρικά κουρέματα.jpg', afterUrl: './images/Men\'s fade haircut - Ανδρικά κουρέματα.jpg', description: 'Μοντέρνο fade κούρεμα για άνδρες.' },
  { id: 5, category: 'Περιποίηση', beforeUrl: './images/Hair treatment mask - Περιποίηση.jpg', afterUrl: './images/Hair treatment mask - Περιποίηση.jpg', description: 'Θεραπεία ενυδάτωσης και αναδόμησης μαλλιών.' },
  { id: 6, category: 'Χτενίσματα', beforeUrl: './images/xtenisma.jpg', afterUrl: './images/xtenisma.jpg', description: 'Εντυπωσιακό βραδινό χτένισμα με κυματισμούς.' },
  { id: 7, category: 'Βαφές', beforeUrl: './images/bafi.jpg', afterUrl: './images/bafi.jpg', description: 'Φυσικές ανταύγειες για ένα sun-kissed look.' },
  { id: 8, category: 'Κουρέματα', beforeUrl: './images/womanhaircut.jpg', afterUrl: './images/womanhaircut.jpg', description: 'Ανανέωση με μακριές αφέλειες και layers.' },
  { id: 9, category: 'Περιποίηση', beforeUrl: './images/peripoiisi.jpg', afterUrl: './images/peripoiisi.jpg', description: 'Keratin treatment για λείανση και λάμψη.' },
  { id: 10, category: 'Κουρέματα', beforeUrl: './images/manhaircut.jpg', afterUrl: './images/manhaircut.jpg', description: 'Κλασικό ανδρικό κούρεμα με σύγχρονο στυλ.' },
];
