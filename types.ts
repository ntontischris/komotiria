import React from 'react';

export type Page = 'home' | 'services' | 'gallery' | 'team' | 'contact';

export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  // FIX: Changed JSX.Element to React.ReactNode and imported React to fix "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
  items: ServiceItem[];
}

export interface TeamMember {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  imageUrl: string;
  instagram: string;
}

export interface GalleryImage {
  id: number;
  category: 'Βαφές' | 'Κουρέματα' | 'Χτενίσματα' | 'Νυφικά';
  beforeUrl: string;
  afterUrl: string;
  description: string;
}
