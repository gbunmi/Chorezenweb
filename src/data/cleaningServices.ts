export type ServiceCategory = 'standard' | 'movein' | 'extra';

export interface SupplyOption {
  label: string;
  sublabel: string;
  price: number;
  fullDescription: string;
  purchasedSupplies?: string[];
  included: string[];
  whatsappMessage: string;
}

export interface CleaningService {
  id: string;
  title: string;
  category: ServiceCategory;
  image: string;
  /** Base price — for move-in this is the lower of the two supply options */
  price: number;
  shortDescription: string;
  fullDescription: string;
  included: string[];
  duration: string;
  suitableFor: string;
  notes?: string;
  recommendedSupplies?: string[];
  whatsappMessage: string;
  /** Present only on move-in services: [customerProvides, weProvide] */
  supplyOptions?: [SupplyOption, SupplyOption];
}

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  standard: 'Standard Cleaning',
  movein: 'Move-in Cleaning',
  extra: 'Extra Tasks',
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export const CLEANING_SERVICES: CleaningService[] = [
  // ── Standard Cleaning ──────────────────────────────────────
  {
    id: 'standard-1bed-sc',
    title: '1 Bedroom (Self Contain)',
    category: 'standard',
    image: unsplash('1586023492125-27b2c045efd7'),
    price: 8000,
    shortDescription:
      'Routine clean for a self-contain: bedroom, bathroom, and kitchen all covered.',
    fullDescription:
      'A thorough standard clean for your self-contain apartment covering the bedroom, bathroom, and kitchen. Our cleaners will use the cleaning products you provide.',
    included: [
      'Dusting surfaces and furniture',
      'Sweeping and mopping all floors',
      'Making beds and tidying up clothes (no wardrobe reorganization)',
      'Cleaning mirrors and removing cobwebs',
      'Cleaning sinks, showers, toilets, and mirrors',
      'Wiping counters, taps, and cupboards in bathrooms',
      'Mopping bathroom floors and emptying bins',
      'Dusting furniture, electronics, and fixtures',
      'Cleaning cobwebs throughout',
      'Wiping kitchen surfaces, sinks, appliances, and cupboards',
      'Washing dishes and cleaning the microwave (inside and out)',
      'Cleaning the stovetop and the walls behind it',
      'Mopping kitchen floors and emptying bins',
    ],
    duration: '1.5 – 2 hours',
    suitableFor: 'Self-contain (single room with en-suite)',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    recommendedSupplies: [
      'Broom',
      'Mop',
      'Bucket',
      'Dustbin',
      'Dustbin bags',
      'Scrubbing brush',
      'Rags',
      'Bowls',
      'Cobweb broom',
      'Duster',
      'Bleach',
      'Floor cleaner / soap',
      'Dish soap',
      'Sponges',
      'Scouring powder',
      'Stain remover',
      'Glass cleaner',
      'Air freshener',
    ],
    whatsappMessage:
      "Hi Chorezen! I'd like to book the 1 Bedroom (Self Contain) Standard Cleaning service.",
  },
  {
    id: 'standard-1bed-rp',
    title: '1 Bedroom (Room & Parlour)',
    category: 'standard',
    image: unsplash('1540518614846-7eded433c457'),
    price: 10000,
    shortDescription:
      'Standard clean for a room-and-parlour apartment: bedroom, living area, bathroom, and kitchen.',
    fullDescription:
      'Our standard clean for room-and-parlour apartments covers every area: the bedroom, parlour, kitchen, and bathroom. Our cleaners will use the cleaning products you provide.',
    included: [
      'Dusting surfaces and furniture',
      'Sweeping and mopping all floors',
      'Making beds and tidying up clothes (no wardrobe reorganization)',
      'Cleaning mirrors and removing cobwebs',
      'Cleaning sinks, showers, toilets, and mirrors',
      'Wiping counters, taps, and cupboards in bathrooms',
      'Mopping bathroom floors and emptying bins',
      'Dusting furniture, electronics, and fixtures',
      'Cleaning cobwebs throughout',
      'Wiping kitchen surfaces, sinks, appliances, and cupboards',
      'Washing dishes and cleaning the microwave (inside and out)',
      'Cleaning the stovetop and the walls behind it',
      'Mopping kitchen floors and emptying bins',
    ],
    duration: '2 – 2.5 hours',
    suitableFor: '1-bedroom room-and-parlour apartments',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    recommendedSupplies: [
      'Broom',
      'Mop',
      'Bucket',
      'Dustbin',
      'Dustbin bags',
      'Scrubbing brush',
      'Rags',
      'Bowls',
      'Cobweb broom',
      'Duster',
      'Bleach',
      'Floor cleaner / soap',
      'Dish soap',
      'Sponges',
      'Scouring powder',
      'Stain remover',
      'Glass cleaner',
      'Air freshener',
    ],
    whatsappMessage:
      "Hi Chorezen! I'd like to book the 1 Bedroom (Room & Parlour) Standard Cleaning service.",
  },
  {
    id: 'standard-2bed',
    title: '2 Bedroom',
    category: 'standard',
    image: unsplash('1555041469-a586c61ea9bc'),
    price: 12000,
    shortDescription:
      'Complete routine cleaning across your 2-bedroom apartment, top to bottom.',
    fullDescription:
      'Our standard 2-bedroom clean covers every room: both bedrooms, the living area, kitchen, and all bathrooms. Our cleaners will use the cleaning products you provide.',
    included: [
      'Dusting surfaces and furniture',
      'Sweeping and mopping all floors',
      'Making beds and tidying up clothes (no wardrobe reorganization)',
      'Cleaning mirrors and removing cobwebs',
      'Cleaning sinks, showers, toilets, and mirrors',
      'Wiping counters, taps, and cupboards in bathrooms',
      'Mopping bathroom floors and emptying bins',
      'Dusting furniture, electronics, and fixtures',
      'Cleaning cobwebs throughout',
      'Wiping kitchen surfaces, sinks, appliances, and cupboards',
      'Washing dishes and cleaning the microwave (inside and out)',
      'Cleaning the stovetop and the walls behind it',
      'Mopping kitchen floors and emptying bins',
    ],
    duration: '2.5 – 3.5 hours',
    suitableFor: '2-bedroom apartments',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    recommendedSupplies: [
      'Broom',
      'Mop',
      'Bucket',
      'Dustbin',
      'Dustbin bags',
      'Scrubbing brush',
      'Rags',
      'Bowls',
      'Cobweb broom',
      'Duster',
      'Bleach',
      'Floor cleaner / soap',
      'Dish soap',
      'Sponges',
      'Scouring powder',
      'Stain remover',
      'Glass cleaner',
      'Air freshener',
    ],
    whatsappMessage:
      "Hi Chorezen! I'd like to book the 2 Bedroom Standard Cleaning service.",
  },
  {
    id: 'standard-3bed',
    title: '3 Bedroom',
    category: 'standard',
    image: unsplash('1484154218962-a197022b5858'),
    price: 14000,
    shortDescription:
      'Thorough standard cleaning across a 3-bedroom apartment, every room covered.',
    fullDescription:
      'A comprehensive clean for 3-bedroom apartments covering all bedrooms, communal areas, kitchen, and bathrooms. Our cleaners will use the cleaning products you provide.',
    included: [
      'Dusting surfaces and furniture',
      'Sweeping and mopping all floors',
      'Making beds and tidying up clothes (no wardrobe reorganization)',
      'Cleaning mirrors and removing cobwebs',
      'Cleaning sinks, showers, toilets, and mirrors',
      'Wiping counters, taps, and cupboards in bathrooms',
      'Mopping bathroom floors and emptying bins',
      'Dusting furniture, electronics, and fixtures',
      'Cleaning cobwebs throughout',
      'Wiping kitchen surfaces, sinks, appliances, and cupboards',
      'Washing dishes and cleaning the microwave (inside and out)',
      'Cleaning the stovetop and the walls behind it',
      'Mopping kitchen floors and emptying bins',
    ],
    duration: '3.5 – 4.5 hours',
    suitableFor: '3-bedroom apartments and flats',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    recommendedSupplies: [
      'Broom',
      'Mop',
      'Bucket',
      'Dustbin',
      'Dustbin bags',
      'Scrubbing brush',
      'Rags',
      'Bowls',
      'Cobweb broom',
      'Duster',
      'Bleach',
      'Floor cleaner / soap',
      'Dish soap',
      'Sponges',
      'Scouring powder',
      'Stain remover',
      'Glass cleaner',
      'Air freshener',
    ],
    whatsappMessage:
      "Hi Chorezen! I'd like to book the 3 Bedroom Standard Cleaning service.",
  },
  {
    id: 'standard-4bed',
    title: '4 Bedroom',
    category: 'standard',
    image: unsplash('1513694203232-719a280e022f'),
    price: 20000,
    shortDescription:
      'Full routine cleaning for a 4-bedroom home: every room, every surface.',
    fullDescription:
      'Tailored for larger family apartments, our 4-bedroom standard clean ensures all rooms are maintained to a high standard. Our cleaners will use the cleaning products you provide.',
    included: [
      'Dusting surfaces and furniture',
      'Sweeping and mopping all floors',
      'Making beds and tidying up clothes (no wardrobe reorganization)',
      'Cleaning mirrors and removing cobwebs',
      'Cleaning sinks, showers, toilets, and mirrors',
      'Wiping counters, taps, and cupboards in bathrooms',
      'Mopping bathroom floors and emptying bins',
      'Dusting furniture, electronics, and fixtures',
      'Cleaning cobwebs throughout',
      'Wiping kitchen surfaces, sinks, appliances, and cupboards',
      'Washing dishes and cleaning the microwave (inside and out)',
      'Cleaning the stovetop and the walls behind it',
      'Mopping kitchen floors and emptying bins',
    ],
    duration: '4.5 – 5.5 hours',
    suitableFor: '4-bedroom apartments',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    recommendedSupplies: [
      'Broom',
      'Mop',
      'Bucket',
      'Dustbin',
      'Dustbin bags',
      'Scrubbing brush',
      'Rags',
      'Bowls',
      'Cobweb broom',
      'Duster',
      'Bleach',
      'Floor cleaner / soap',
      'Dish soap',
      'Sponges',
      'Scouring powder',
      'Stain remover',
      'Glass cleaner',
      'Air freshener',
    ],
    whatsappMessage:
      "Hi Chorezen! I'd like to book the 4 Bedroom Standard Cleaning service.",
  },
  {
    id: 'standard-5bed',
    title: '5 Bedroom',
    category: 'standard',
    image: unsplash('1600585154340-be6161a56a0c'),
    price: 25000,
    shortDescription:
      'Comprehensive standard cleaning for a 5-bedroom home, every room taken care of.',
    fullDescription:
      'Our 5-bedroom standard clean covers every area of your home: all five bedrooms, communal spaces, kitchen, and bathrooms. Our cleaners will use the cleaning products you provide.',
    included: [
      'Dusting surfaces and furniture',
      'Sweeping and mopping all floors',
      'Making beds and tidying up clothes (no wardrobe reorganization)',
      'Cleaning mirrors and removing cobwebs',
      'Cleaning sinks, showers, toilets, and mirrors',
      'Wiping counters, taps, and cupboards in bathrooms',
      'Mopping bathroom floors and emptying bins',
      'Dusting furniture, electronics, and fixtures',
      'Cleaning cobwebs throughout',
      'Wiping kitchen surfaces, sinks, appliances, and cupboards',
      'Washing dishes and cleaning the microwave (inside and out)',
      'Cleaning the stovetop and the walls behind it',
      'Mopping kitchen floors and emptying bins',
    ],
    duration: '5 – 6.5 hours',
    suitableFor: '5-bedroom apartments and houses',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    recommendedSupplies: [
      'Broom',
      'Mop',
      'Bucket',
      'Dustbin',
      'Dustbin bags',
      'Scrubbing brush',
      'Rags',
      'Bowls',
      'Cobweb broom',
      'Duster',
      'Bleach',
      'Floor cleaner / soap',
      'Dish soap',
      'Sponges',
      'Scouring powder',
      'Stain remover',
      'Glass cleaner',
      'Air freshener',
    ],
    whatsappMessage:
      "Hi Chorezen! I'd like to book the 5 Bedroom Standard Cleaning service.",
  },
  {
    id: 'standard-6bed',
    title: '6 Bedroom',
    category: 'standard',
    image: unsplash('1600607687939-ce8a6c25118c'),
    price: 30000,
    shortDescription:
      'Top-to-bottom standard cleaning for a large 6-bedroom home. Nothing missed.',
    fullDescription:
      'A full standard clean across a 6-bedroom property, covering all bedrooms, bathrooms, kitchens, and communal areas. Our cleaners will use the cleaning products you provide.',
    included: [
      'Dusting surfaces and furniture',
      'Sweeping and mopping all floors',
      'Making beds and tidying up clothes (no wardrobe reorganization)',
      'Cleaning mirrors and removing cobwebs',
      'Cleaning sinks, showers, toilets, and mirrors',
      'Wiping counters, taps, and cupboards in bathrooms',
      'Mopping bathroom floors and emptying bins',
      'Dusting furniture, electronics, and fixtures',
      'Cleaning cobwebs throughout',
      'Wiping kitchen surfaces, sinks, appliances, and cupboards',
      'Washing dishes and cleaning the microwave (inside and out)',
      'Cleaning the stovetop and the walls behind it',
      'Mopping kitchen floors and emptying bins',
    ],
    duration: '6 – 8 hours',
    suitableFor: '6-bedroom apartments and houses',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    recommendedSupplies: [
      'Broom',
      'Mop',
      'Bucket',
      'Dustbin',
      'Dustbin bags',
      'Scrubbing brush',
      'Rags',
      'Bowls',
      'Cobweb broom',
      'Duster',
      'Bleach',
      'Floor cleaner / soap',
      'Dish soap',
      'Sponges',
      'Scouring powder',
      'Stain remover',
      'Glass cleaner',
      'Air freshener',
    ],
    whatsappMessage:
      "Hi Chorezen! I'd like to book the 6 Bedroom Standard Cleaning service.",
  },

  // ── Move-in Cleaning ────────────────────────────────────────
  {
    id: 'movein-1bed-sc',
    title: '1 Bedroom Move-in (Self Contain)',
    category: 'movein',
    image: unsplash('1522771739844-6a9f6d5f14af'),
    price: 12500,
    shortDescription:
      'Deep move-in clean for a self-contain: every surface sanitized and ready before you settle in.',
    fullDescription: '',
    included: [],
    duration: '2 – 3 hours',
    suitableFor: 'Self-contain apartments being moved into',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    whatsappMessage: '',
    supplyOptions: [
      {
        label: 'You provide supplies',
        sublabel: 'Bring your own cleaning products & equipment',
        price: 12500,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in.',
        included: [
          'Deep scrub all surfaces',
          'Inside cabinets wiped clean',
          'Bathroom fully sanitized',
          'Kitchen deep clean including inside oven',
          'Floors scrubbed & mopped',
          'Interior windows wiped',
          'Trash cleared',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 1 Bedroom (Self Contain) Move-in Cleaning. I'll be providing my own supplies.",
      },
      {
        label: 'We purchase supplies',
        sublabel: "We buy what's needed. Supplies stay with you.",
        price: 22500,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in. This booking includes the purchase of a few cleaning essentials important to get the job done. Once done, you get to keep the cleaning items and leftover products from this booking.',
        purchasedSupplies: ['Broom', 'Mop', 'Packer', 'Scrubbing brush', 'Towels/Rags', 'Bucket', 'Bowl', 'Bleach', 'Detergent'],
        included: [
          'Professional cleaning products included',
          'Deep scrub all surfaces',
          'Inside cabinets wiped clean',
          'Bathroom fully sanitized',
          'Kitchen deep clean including inside oven',
          'Floors scrubbed & mopped',
          'Interior windows wiped',
          'Trash cleared',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 1 Bedroom (Self Contain) Move-in Cleaning. Please purchase the supplies.",
      },
    ],
  },
  {
    id: 'movein-1bed-rp',
    title: '1 Bedroom Move-in (Room & Parlour)',
    category: 'movein',
    image: unsplash('1560448204-e02f11c3d0e2'),
    price: 16000,
    shortDescription:
      'Full move-in deep clean for a room-and-parlour apartment: bedroom, parlour, bathroom, and kitchen all sanitized.',
    fullDescription: '',
    included: [],
    duration: '3 – 4 hours',
    suitableFor: '1-bedroom room-and-parlour apartments being moved into',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    whatsappMessage: '',
    supplyOptions: [
      {
        label: 'You provide supplies',
        sublabel: 'Bring your own cleaning products & equipment',
        price: 16000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in.',
        included: [
          'All surfaces deep scrubbed',
          'Inside wardrobes & cabinets wiped',
          'Full bathroom sanitization',
          'Kitchen deep clean',
          'Inside fridge wiped out',
          'Floors scrubbed & mopped',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 1 Bedroom (Room & Parlour) Move-in Cleaning. I'll be providing my own supplies.",
      },
      {
        label: 'We purchase supplies',
        sublabel: "We buy what's needed. Supplies stay with you.",
        price: 28000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in. This booking includes the purchase of a few cleaning essentials important to get the job done. Once done, you get to keep the cleaning items and leftover products from this booking.',
        purchasedSupplies: ['Broom', 'Mop', 'Packer', 'Scrubbing brush', 'Towels/Rags', 'Bucket', 'Bowl', 'Bleach', 'Detergent'],
        included: [
          'Professional cleaning products included',
          'All surfaces deep scrubbed',
          'Inside wardrobes & cabinets wiped',
          'Full bathroom sanitization',
          'Kitchen deep clean',
          'Inside fridge wiped out',
          'Floors scrubbed & mopped',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 1 Bedroom (Room & Parlour) Move-in Cleaning. Please purchase the supplies.",
      },
    ],
  },
  {
    id: 'movein-2bed',
    title: '2 Bedroom Move-in',
    category: 'movein',
    image: unsplash('1568605114967-8130f3a36994'),
    price: 20000,
    shortDescription:
      'Comprehensive deep clean for a 2-bedroom apartment before you move in.',
    fullDescription: '',
    included: [],
    duration: '4 – 5 hours',
    suitableFor: '2-bedroom apartments',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    whatsappMessage: '',
    supplyOptions: [
      {
        label: 'You provide supplies',
        sublabel: 'Bring your own cleaning products & equipment',
        price: 20000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in.',
        included: [
          'Full deep clean of all rooms',
          'Inside all cabinets & wardrobes',
          'Bathrooms fully sanitized',
          'Kitchen degreased & deep cleaned',
          'Fridge interior wiped',
          'All floors scrubbed',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 2 Bedroom Move-in Cleaning. I'll be providing my own supplies.",
      },
      {
        label: 'We purchase supplies',
        sublabel: "We buy what's needed. Supplies stay with you.",
        price: 35000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in. This booking includes the purchase of a few cleaning essentials important to get the job done. Once done, you get to keep the cleaning items and leftover products from this booking.',
        purchasedSupplies: ['Broom', 'Mop', 'Packer', 'Scrubbing brush', 'Towels/Rags', 'Bucket', 'Bowl', 'Bleach', 'Detergent'],
        included: [
          'Professional cleaning products included',
          'Full deep clean of all rooms',
          'Inside all cabinets & wardrobes',
          'Bathrooms fully sanitized',
          'Kitchen degreased & deep cleaned',
          'Fridge interior wiped',
          'All floors scrubbed',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 2 Bedroom Move-in Cleaning. Please purchase the supplies.",
      },
    ],
  },
  {
    id: 'movein-3bed',
    title: '3 Bedroom Move-in',
    category: 'movein',
    image: unsplash('1631049307264-da0ec9d70304'),
    price: 30000,
    shortDescription:
      'Deep move-in cleaning across a full 3-bedroom apartment. No corner missed.',
    fullDescription: '',
    included: [],
    duration: '5 – 6 hours',
    suitableFor: '3-bedroom apartments',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    whatsappMessage: '',
    supplyOptions: [
      {
        label: 'You provide supplies',
        sublabel: 'Bring your own cleaning products & equipment',
        price: 30000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in.',
        included: [
          'Deep clean all 3 bedrooms',
          'Inside all wardrobes & storage',
          'All bathrooms sanitized',
          'Full kitchen deep clean',
          'Fridge & oven interiors cleaned',
          'All floors scrubbed & mopped',
          'Interior windows wiped',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 3 Bedroom Move-in Cleaning. I'll be providing my own supplies.",
      },
      {
        label: 'We purchase supplies',
        sublabel: "We buy what's needed. Supplies stay with you.",
        price: 46000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in. This booking includes the purchase of a few cleaning essentials important to get the job done. Once done, you get to keep the cleaning items and leftover products from this booking.',
        purchasedSupplies: ['Broom', 'Mop', 'Packer', 'Scrubbing brush', 'Towels/Rags', 'Bucket', 'Bowl', 'Bleach', 'Detergent'],
        included: [
          'Professional cleaning products included',
          'Deep clean all 3 bedrooms',
          'Inside all wardrobes & storage',
          'All bathrooms sanitized',
          'Full kitchen deep clean',
          'Fridge & oven interiors cleaned',
          'All floors scrubbed & mopped',
          'Interior windows wiped',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 3 Bedroom Move-in Cleaning. Please purchase the supplies.",
      },
    ],
  },
  {
    id: 'movein-4bed',
    title: '4 Bedroom Move-in',
    category: 'movein',
    image: unsplash('1600607687939-ce8a6c25118c'),
    price: 40000,
    shortDescription:
      'Full deep clean for a 4-bedroom apartment, completely sanitized before you arrive.',
    fullDescription: '',
    included: [],
    duration: '6 – 8 hours',
    suitableFor: '4-bedroom apartments',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    whatsappMessage: '',
    supplyOptions: [
      {
        label: 'You provide supplies',
        sublabel: 'Bring your own cleaning products & equipment',
        price: 40000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in.',
        included: [
          'All 4 bedrooms deep cleaned',
          'All wardrobes & cabinets inside',
          'All bathrooms fully sanitized',
          'Kitchen degreased & deep cleaned',
          'Fridge & oven interiors cleaned',
          'Floors scrubbed throughout',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 4 Bedroom Move-in Cleaning. I'll be providing my own supplies.",
      },
      {
        label: 'We purchase supplies',
        sublabel: "We buy what's needed. Supplies stay with you.",
        price: 60000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in. This booking includes the purchase of a few cleaning essentials important to get the job done. Once done, you get to keep the cleaning items and leftover products from this booking.',
        purchasedSupplies: ['Broom', 'Mop', 'Packer', 'Scrubbing brush', 'Towels/Rags', 'Bucket', 'Bowl', 'Bleach', 'Detergent'],
        included: [
          'Professional cleaning products included',
          'All 4 bedrooms deep cleaned',
          'All wardrobes & cabinets inside',
          'All bathrooms fully sanitized',
          'Kitchen degreased & deep cleaned',
          'Fridge & oven interiors cleaned',
          'Floors scrubbed throughout',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 4 Bedroom Move-in Cleaning. Please purchase the supplies.",
      },
    ],
  },
  {
    id: 'movein-5bed',
    title: '5 Bedroom Move-in',
    category: 'movein',
    image: unsplash('1600585154340-be6161a56a0c'),
    price: 55000,
    shortDescription:
      'Thorough move-in deep clean for a 5-bedroom home: every room, every surface, fully sanitized.',
    fullDescription: '',
    included: [],
    duration: '7 – 9 hours',
    suitableFor: '5-bedroom apartments and houses',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    whatsappMessage: '',
    supplyOptions: [
      {
        label: 'You provide supplies',
        sublabel: 'Bring your own cleaning products & equipment',
        price: 55000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in.',
        included: [
          'All 5 bedrooms deep cleaned',
          'All wardrobes & cabinets inside',
          'All bathrooms fully sanitized',
          'Kitchen degreased & deep cleaned',
          'Fridge & oven interiors cleaned',
          'All floors scrubbed & mopped',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 5 Bedroom Move-in Cleaning. I'll be providing my own supplies.",
      },
      {
        label: 'We purchase supplies',
        sublabel: "We buy what's needed. Supplies stay with you.",
        price: 75000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in. This booking includes the purchase of a few cleaning essentials important to get the job done. Once done, you get to keep the cleaning items and leftover products from this booking.',
        purchasedSupplies: ['Broom', 'Mop', 'Packer', 'Scrubbing brush', 'Towels/Rags', 'Bucket', 'Bowl', 'Bleach', 'Detergent'],
        included: [
          'Professional cleaning products included',
          'All 5 bedrooms deep cleaned',
          'All wardrobes & cabinets inside',
          'All bathrooms fully sanitized',
          'Kitchen degreased & deep cleaned',
          'Fridge & oven interiors cleaned',
          'All floors scrubbed & mopped',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 5 Bedroom Move-in Cleaning. Please purchase the supplies.",
      },
    ],
  },
  {
    id: 'movein-6bed',
    title: '6 Bedroom Move-in',
    category: 'movein',
    image: unsplash('1512917774080-9991f1c4c750'),
    price: 65000,
    shortDescription:
      'Whole-home move-in deep clean for a 6-bedroom property, fully ready before you arrive.',
    fullDescription: '',
    included: [],
    duration: '8 – 10 hours',
    suitableFor: '6-bedroom apartments and houses',
    notes: 'Extra charges may apply for oversized homes or extended booking times. Any additional charges will be communicated by our Support Team.',
    whatsappMessage: '',
    supplyOptions: [
      {
        label: 'You provide supplies',
        sublabel: 'Bring your own cleaning products & equipment',
        price: 65000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in.',
        included: [
          'All 6 bedrooms deep cleaned',
          'All wardrobes & cabinets inside',
          'All bathrooms sanitized',
          'Full kitchen deep clean',
          'Fridge & oven interiors',
          'All floors scrubbed & mopped',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 6 Bedroom Move-in Cleaning. I'll be providing my own supplies.",
      },
      {
        label: 'We purchase supplies',
        sublabel: "We buy what's needed. Supplies stay with you.",
        price: 90000,
        fullDescription:
          'This involves a thorough cleaning of your new home in preparation for you to move in. This booking includes the purchase of a few cleaning essentials important to get the job done. Once done, you get to keep the cleaning items and leftover products from this booking.',
        purchasedSupplies: ['Broom', 'Mop', 'Packer', 'Scrubbing brush', 'Towels/Rags', 'Bucket', 'Bowl', 'Bleach', 'Detergent'],
        included: [
          'Professional cleaning products included',
          'All 6 bedrooms deep cleaned',
          'All wardrobes & cabinets inside',
          'All bathrooms sanitized',
          'Full kitchen deep clean',
          'Fridge & oven interiors',
          'All floors scrubbed & mopped',
          'Interior windows cleaned',
        ],
        whatsappMessage:
          "Hi Chorezen! I'd like to book the 6 Bedroom Move-in Cleaning. Please purchase the supplies.",
      },
    ],
  },

  // ── Extra Tasks ─────────────────────────────────────────────
  {
    id: 'extra-oven',
    title: 'Oven Cleaning',
    category: 'extra',
    image: unsplash('1556909114-f6e7ad7d3136'),
    price: 1000,
    shortDescription:
      'Interior oven clean: grease, burnt residue, and buildup removed.',
    fullDescription:
      'A focused clean of your oven interior. We break down baked-on grease and residue, wipe down the interior walls, and leave your oven clean and ready to use.',
    included: [
      'Interior oven walls degreased',
      'Oven racks wiped down',
      'Door glass cleaned',
      'Drip trays cleaned',
    ],
    duration: '30 – 45 minutes',
    suitableFor: 'Gas and electric ovens',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Oven Cleaning extra task.",
  },
  {
    id: 'extra-fan',
    title: 'Fan Cleaning',
    category: 'extra',
    image: unsplash('1558618666-fcd25c85cd64'),
    price: 1000,
    shortDescription:
      'Fan blades and housing cleaned. Dust and buildup removed for better airflow.',
    fullDescription:
      'We disassemble, clean, and reassemble your fan, removing dust and buildup from blades, grilles, and housing so it runs cleaner and more efficiently.',
    included: [
      'Blades wiped and cleaned',
      'Grille and housing dusted',
      'Reassembled and tested',
    ],
    duration: '20 – 30 minutes',
    suitableFor: 'Standing, table, and ceiling fans',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Fan Cleaning extra task.",
  },
  {
    id: 'extra-fridge',
    title: 'Fridge / Freezer Cleaning',
    category: 'extra',
    image: unsplash('1556909172-54557c7e4fb7'),
    price: 2000,
    shortDescription:
      'Full interior fridge or freezer clean: shelves, drawers, and walls wiped and sanitized.',
    fullDescription:
      'A thorough clean of your fridge or freezer interior. We remove all shelves and drawers, wipe down every surface, and deodorize so you start fresh.',
    included: [
      'Remove & clean all shelves',
      'Wipe all interior walls',
      'Clean drawers & compartments',
      'Deodorize interior',
      'Exterior surface wiped down',
    ],
    duration: '30 – 45 minutes',
    suitableFor: 'All fridge and freezer sizes',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Fridge/Freezer Cleaning extra task.",
  },
  {
    id: 'extra-cabinets',
    title: 'Kitchen Cabinet Cleaning',
    category: 'extra',
    image: unsplash('1556912173-46c336c7fd55'),
    price: 2000,
    shortDescription:
      'Inside kitchen cabinet surfaces wiped and sanitized.',
    fullDescription:
      'We clean the interior of your kitchen cabinets: removing items, wiping all surfaces thoroughly, and replacing everything neatly.',
    included: [
      'All cabinet interiors wiped',
      'Shelves cleaned',
      'Items removed, surfaces cleaned, items replaced',
      'Cabinet doors wiped inside & out',
    ],
    duration: '45 – 90 minutes',
    suitableFor: 'Kitchen cabinets',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Kitchen Cabinet Cleaning extra task.",
  },
  {
    id: 'extra-balcony',
    title: 'Balcony Cleaning',
    category: 'extra',
    image: unsplash('1565538810643-b5bdb714032a'),
    price: 1000,
    shortDescription:
      'Your balcony swept, scrubbed, and left clean and fresh.',
    fullDescription:
      'A thorough clean of your balcony or terrace: sweeping, scrubbing the floor, wiping railings, and removing accumulated dirt or debris.',
    included: [
      'Balcony swept & scrubbed',
      'Railings wiped down',
      'Debris removed',
      'Floor washed',
    ],
    duration: '20 – 40 minutes',
    suitableFor: 'Apartment balconies and terraces',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Balcony Cleaning extra task.",
  },
  {
    id: 'extra-windows',
    title: 'Window Cleaning (per room)',
    category: 'extra',
    image: unsplash('1482449609509-eae2a7ea42b7'),
    price: 1500,
    shortDescription:
      'Interior window cleaning per room: streak-free, crystal-clear finish.',
    fullDescription:
      'We clean all interior window panes, frames, and sills in a room for a streak-free finish. Price applies per room.',
    included: [
      'Interior glass wiped streak-free',
      'Window frames dusted & wiped',
      'Sills cleaned',
    ],
    duration: '20 – 30 minutes per room',
    suitableFor: 'Standard windows (interior only), priced per room',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Window Cleaning (per room) extra task.",
  },
  {
    id: 'extra-laundry',
    title: 'Laundry (per load)',
    category: 'extra',
    image: unsplash('1610557892470-55d9e80c0bce'),
    price: 3000,
    shortDescription:
      'We handle your laundry: washed and neatly folded, per load.',
    fullDescription:
      'Our laundry service covers one standard machine load. We wash and neatly fold everything so your laundry is done and ready to put away.',
    included: [
      'Sort laundry by colour',
      'Machine wash one standard load',
      'Neatly fold all items',
    ],
    duration: '1.5 – 2.5 hours',
    suitableFor: 'Up to one standard machine load',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Laundry (per load) extra task.",
  },
  {
    id: 'extra-wardrobe',
    title: 'Wardrobe Reorganization',
    category: 'extra',
    image: unsplash('1490481651871-ab68de25d43d'),
    price: 4000,
    shortDescription:
      'Your wardrobe sorted, decluttered, and reorganized neatly.',
    fullDescription:
      'We sort through your wardrobe, fold and organize your clothes neatly, and leave everything easy to find and access. A great add-on after a move-in clean.',
    included: [
      'All items removed and sorted',
      'Clothes folded and organized',
      'Items replaced neatly by category',
      'Wardrobe interior wiped down',
    ],
    duration: '1 – 2 hours',
    suitableFor: 'Single and double wardrobes',
    whatsappMessage:
      "Hi Chorezen! I'd like to book the Wardrobe Reorganization extra task.",
  },
  {
    id: 'extra-misc',
    title: 'Additional Cleaning Time (1hr)',
    category: 'extra',
    image: unsplash('1581578731548-c64695cc6952'),
    price: 2000,
    shortDescription:
      'Extra cleaning time for anything else, flexible and on your terms.',
    fullDescription:
      'Need more hands or more time? Book additional cleaning hours for any task not covered by our standard packages. Our cleaner stays on for an extra hour and tackles whatever you need done.',
    included: [
      '1 hour of flexible cleaning time',
      'Any room or task of your choice',
    ],
    duration: '1 hour',
    suitableFor: 'Any space or task requiring extra time',
    whatsappMessage:
      "Hi Chorezen! I'd like to book Additional Cleaning Time (1hr) as an extra task.",
  },
];
