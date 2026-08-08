export type Announcement = {
  id: string;
  title: string;
  content: string;
  active: boolean;
  startDate: string;
  expiryDate: string;
  createdDate: string;
};

export type Facility = {
  id: string;
  icon: 'seats' | 'wifi' | 'female' | 'washroom' | 'utensils' | 'rest' | 'clock';
  title: string;
  description: string;
};

export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
};

export type GalleryItem = {
  id: string;
  image: string;
  title: string;
  category: string;
  alt: string;
  displayOrder: number;
};

export type SocialLinks = {
  instagramUrl: string;
  facebookUrl: string;
};

export const libraryConfig = {
  name: 'Bright Star Library',
  shortName: 'Bright Star',
  logoPath: '/images/ChatGPT_Image_Aug_8,_2026,_01_53_42_PM.png',
  address: 'Iqbalpur Road, Opp. Royal Petrol Pump, Jhabrera, Uttarakhand 247665',
  addressShort: 'Iqbalpur Road, Opp. Royal Petrol Pump, Jhabrera, Uttarakhand 247665',
  phoneDisplay: '080067 35135',
  phoneDigits: '918006735135',
  hours: 'Open 24 Hours',
  rating: '4.8',
  reviewCount: '4 Google reviews',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Bright Star Library, Iqbalpur Road, Opp. Royal Petrol Pump, Jhabrera, Uttarakhand 247665'),
  socialLinks: {
    instagramUrl: 'https://www.instagram.com/brightstar.libraryjhabrera',
    facebookUrl: '',
  } as SocialLinks,
} as const;

export const announcements: Announcement[] = [];

export const facilities: Facility[] = [
  { id: 'seats', icon: 'seats', title: '120+ Seats', description: 'Ample seating capacity for students preparing for exams and studying for long hours.' },
  { id: 'wifi', icon: 'wifi', title: 'Wi-Fi', description: 'Stay connected while accessing study material and online resources.' },
  { id: 'female', icon: 'female', title: 'Separate Female Section', description: 'A dedicated section providing a comfortable study environment for female students.' },
  { id: 'washroom', icon: 'washroom', title: 'Washroom', description: 'Essential washroom facilities available for members.' },
  { id: 'utensils', icon: 'utensils', title: 'Place to Sit & Eat', description: 'A designated place where students can sit, eat and take a short break.' },
  { id: 'rest', icon: 'rest', title: 'Rest Area', description: 'A space to take a short break and recharge during long study sessions.' },
  { id: 'clock', icon: 'clock', title: '24-Hour Access', description: 'Access the library throughout the day and night.' },
];

export const membershipPlans: MembershipPlan[] = [];

export const galleryItems: GalleryItem[] = [];

export const whatsappMessages = {
  general: 'Hello, I would like to know more about Bright Star Library.',
  membership: 'Hello, I am interested in joining Bright Star Library. Please share the membership details.',
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${libraryConfig.phoneDigits}?text=${encodeURIComponent(message)}`;
}
