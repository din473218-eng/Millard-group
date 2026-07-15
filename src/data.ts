import { BrandInfo, NewsItem, LocationItem, FAQItem } from './types';

export const brandsData: Record<'millard' | 'amber' | 'obika', BrandInfo> = {
  amber: {
    id: 'amber',
    name: 'Amber Coffee',
    tagline: 'Artisanal Roastery & Specialty Brewing',
    shortDescription: 'Sourcing single-origin beans and orchestrating state-of-the-art roasting processes to create liquid gold in every cup.',
    storyTitle: 'The Quest for the Perfect Extraction',
    narrative: 'Born from a deep reverence for the delicate science of coffee chemistry, Amber Coffee has redefined the morning ritual. We partner directly with sustainable, high-elevation estates across the global coffee belt. Each bean is hand-selected and custom-roasted in small batches to preserve its intrinsic terroir—revealing notes of jasmine, stone fruit, and dark cocoa that linger long after the final sip.',
    storyImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1920',
    themeColor: {
      accent: 'amber-500',
      bg: 'neutral-900',
      border: 'border-amber-500/20',
      text: 'text-amber-400'
    },
    features: [
      {
        title: 'Single-Origin Reserve',
        description: 'Rare, micro-lot beans sourced ethically and traceable to individual family farms.',
        iconName: 'Sparkles'
      },
      {
        title: 'Precision Roasting',
        description: 'Small-batch convection roasting profiling each origin to perfection.',
        iconName: 'Flame'
      },
      {
        title: 'Signature Brew Bar',
        description: 'V60, Chemex, and custom espresso extractions curated by champion baristas.',
        iconName: 'Coffee'
      }
    ],
    products: [
      {
        id: 'ac-1',
        name: 'The Amber Geisha Reserve',
        description: 'A prized Panamanian micro-lot with a floral, tea-like body, showcasing notes of jasmine, bergamot, and sweet peach finish.',
        price: '$18.00',
        category: 'Pour Over',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600',
        features: ['Panama', 'Micro-lot', 'Light Roast']
      },
      {
        id: 'ac-2',
        name: 'Smoked Vanilla Cold Draft',
        description: 'Double-filtered cold brew infused with organic vanilla bean syrup, lightly smoked with applewood, served on nitro tap.',
        price: '$8.50',
        category: 'Cold Specialty',
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600',
        features: ['Signature', 'Nitro', 'Smoked']
      },
      {
        id: 'ac-3',
        name: 'Single Estate Espresso Duo',
        description: 'A side-by-side tasting of a double espresso and a traditional macchiato, utilizing our Ethiopian heirloom bean.',
        price: '$9.00',
        category: 'Espresso Bar',
        image: 'https://images.unsplash.com/photo-151097252790b-af4f902c2197?q=80&w=600',
        features: ['Ethiopia', 'Tasting Duo']
      },
      {
        id: 'ac-4',
        name: 'The Golden Latte',
        description: 'House-made turmeric, fresh ginger, and cardamom honey infusion blended with smooth velvet-textured oat milk and double espresso.',
        price: '$7.50',
        category: 'Warm Specialty',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600',
        features: ['Anti-inflammatory', 'Organic Spices']
      }
    ],
    gallery: [
      { id: 'acg-1', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800', caption: 'The roasting chamber at peak sensory profile.' },
      { id: 'acg-2', url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800', caption: 'Pour-over extraction showcasing rich crema blooming.' },
      { id: 'acg-3', url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800', caption: 'Minimalist seating bathed in warm, amber light.' },
      { id: 'acg-4', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800', caption: 'The slow bar where coffee chemistry comes alive.' }
    ],
    reviews: [
      { id: 'acr-1', author: 'Eleanor Vance', rating: 5, comment: 'The Geisha pour over is a revelation. I have never tasted coffee with such pristine floral clarity. It feels like fine wine.', date: 'May 12, 2026', location: 'Mayfair Lounge' },
      { id: 'acr-2', author: 'Marcus Sterling', rating: 5, comment: 'Incredible atmosphere. The baristas are true sommeliers of coffee. The smoked vanilla nitro cold draft is an absolute must.', date: 'June 28, 2026', location: 'Tribeca Roastery' }
    ],
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'amber@millardgroup.com',
      address: '14 Golden Leaf Lane, Tribeca, New York',
      hours: [
        'Monday – Friday: 7:00 AM – 7:00 PM',
        'Saturday – Sunday: 8:00 AM – 8:00 PM'
      ],
      whatsapp: 'https://wa.me/15551234567'
    }
  },
  obika: {
    id: 'obika',
    name: 'Obika',
    tagline: 'Authentic Italian Gastronomy & Mozzarella Bar',
    shortDescription: 'Exquisite slow-dining celebrating handmade pasta, artisanal pinsa, and imports directly from Campania and Piemonte.',
    storyTitle: 'Heritage, Simplicity, and Ingredient Integrity',
    narrative: 'At Obika, we pay homage to the simplicity of traditional Italian culinary philosophy. Our journey starts in Campania, where we source fresh Mozzarella di Bufala Campana DOP twice a week. Combining age-old stone-grinding mill techniques with hand-stretched artisanal pasta methods, our award-winning kitchen prepares food that respects the integrity of every individual component. Each dish is an invitation to slow down and savor life.',
    storyImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1920',
    themeColor: {
      accent: 'emerald-600',
      bg: 'neutral-950',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400'
    },
    features: [
      {
        title: 'Artisanal Mozzarella DOP',
        description: 'Directly imported buffalo mozzarella with certification of geographic origin.',
        iconName: 'Utensils'
      },
      {
        title: 'Ancient Grain Dough',
        description: 'Slow-fermented dough matured for 48 hours, producing exceptionally light pinsa.',
        iconName: 'ChefHat'
      },
      {
        title: 'Sommelier Curated List',
        description: 'Exclusively Italian fine wines matching Piemonte nebbiolos and Tuscan chiantis.',
        iconName: 'GlassWater'
      }
    ],
    products: [
      {
        id: 'ob-1',
        name: 'Mozzarella di Bufala & Truffle Pinsa',
        description: 'Our signature slow-leavened dough topped with creamy Mozzarella di Bufala Campana, black truffle paste, and fresh wild mushrooms.',
        price: '$28.00',
        category: 'Pinsa Romana',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600',
        features: ['DOP Mozzarella', 'Black Truffle', 'Vegetarian']
      },
      {
        id: 'ob-2',
        name: 'Hand-Cut Tagliolini al Limone e Caviale',
        description: 'Rich egg pasta tossed in organic Amalfi lemon emulsion, mountain butter, topped with premium Siberian sturgeon caviar.',
        price: '$36.00',
        category: 'Pasta',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600',
        features: ['Fresh Pasta', 'Amalfi Lemon', 'Caviar']
      },
      {
        id: 'ob-3',
        name: '24-Hour Slow Braised Osso Buco',
        description: 'Tender milk-fed veal shank slow-braised with root vegetables, white wine, and fresh gremolata, served over saffron-infused Risotto alla Milanese.',
        price: '$45.00',
        category: 'Secondi',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600',
        features: ['Gluten-Free', 'Classic Milanese']
      },
      {
        id: 'ob-4',
        name: 'Deconstructed Pistachio Tiramisu',
        description: 'Bespoke espresso-soaked ladyfingers, whipped Sicilian mascarpone, rich Bronte pistachio cream, and delicate dark chocolate dust.',
        price: '$14.00',
        category: 'Dolci',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600',
        features: ['Pistachio', 'Signature Dessert']
      }
    ],
    gallery: [
      { id: 'obg-1', url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800', caption: 'The warm, ambient atmosphere of Obika’s dining hall.' },
      { id: 'obg-2', url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800', caption: 'Freshly prepared hand-pulled burrata and charcuterie platter.' },
      { id: 'obg-3', url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800', caption: 'Artisanal Neapolitan crust bubbling with fresh basil.' },
      { id: 'obg-4', url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800', caption: 'Affogato al caffe topped with caramelized hazelnut shards.' }
    ],
    reviews: [
      { id: 'obr-1', author: 'Chef Giovanni Rossini', rating: 5, comment: 'The ingredient purity at Obika is exemplary. The pinsa dough has an incredible airy texture, and the Campania mozzarella imports are incredibly fresh.', date: 'April 14, 2026', location: 'Milan Food Critique' },
      { id: 'obr-2', author: 'Sophia Laurent', rating: 5, comment: 'Obika is our absolute go-to for special occasions. The saffron osso buco melts in the mouth, and the sommelier was extremely knowledgeable.', date: 'June 10, 2026', location: 'Soho Dining Room' }
    ],
    contact: {
      phone: '+1 (555) 987-6543',
      email: 'obika@millardgroup.com',
      address: '72 Via Roma Boulevard, Soho, New York',
      hours: [
        'Lunch: Tuesday – Sunday: 12:00 PM – 3:30 PM',
        'Dinner: Tuesday – Sunday: 5:30 PM – 11:00 PM',
        'Closed on Mondays'
      ],
      whatsapp: 'https://wa.me/15559876543'
    }
  },
  millard: {
    id: 'millard',
    name: 'Millard',
    tagline: 'Elite Hospitality & Luxury Private Estates',
    shortDescription: 'Crafting bespoke architectural spaces, premium concierge hospitality, and private wellness clubs that redefine high-end living.',
    storyTitle: 'A Legacy of Refinement and Exquisite Care',
    narrative: 'Millard represents the absolute pinnacle of luxury living. We design, build, and operate private residences, executive estates, and members-only clubs designed to satisfy the desires of the most discerning global citizens. From tailor-made architectural concepts to 24/7 dedicated elite concierge management, Millard is not just a destination—it is a meticulous promise that every single facet of your personal ecosystem is handled with flawless refinement and unparalleled safety.',
    storyImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920',
    themeColor: {
      accent: 'amber-600',
      bg: 'neutral-950',
      border: 'border-amber-500/20',
      text: 'text-amber-500'
    },
    features: [
      {
        title: 'Bespoke Architecture',
        description: 'Iconic, environmentally conscious, custom residential estates with private landscapes.',
        iconName: 'Home'
      },
      {
        title: 'White-Glove Concierge',
        description: 'Personalized life management, private flight arrangements, and dedicated estate managers.',
        iconName: 'Shield'
      },
      {
        title: 'Private Wellness Clubs',
        description: 'World-class thermal baths, hydrotherapy cascades, and sensory deprivation chambers.',
        iconName: 'Activity'
      }
    ],
    products: [
      {
        id: 'm-1',
        name: 'The Millard Reserve Membership',
        description: 'Ultra-exclusive annual membership unlocking access to our global portfolio of private clubs, yacht charters, and premium destination chalets.',
        price: 'By Invitation Only',
        category: 'Memberships',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600',
        features: ['Global Access', 'Private Jets', 'Personal Butler']
      },
      {
        id: 'm-2',
        name: 'Millard Private Retreats & Spa Suite',
        description: 'Immersive weekend custom wellness itinerary in our high-alpine sanctuary, including customized longevity diagnostics, physical therapy, and private chef services.',
        price: 'From $4,500 / night',
        category: 'Retreats',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600',
        features: ['Longevity Diagnostic', 'Thermal Baths', 'Private Chef']
      },
      {
        id: 'm-3',
        name: 'High-Net-Worth Estate Portfolio Advisory',
        description: 'Elite real-estate concierge advisory facilitating acquisition, bespoke architectural remodeling, and remote-security setup of premier vacation properties.',
        price: 'Consultation Required',
        category: 'Real Estate',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600',
        features: ['Acquisitions', 'Off-Market Access', 'Bespoke Build']
      }
    ],
    gallery: [
      { id: 'mg-1', url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800', caption: 'The executive study at Millard Bellevue Club.' },
      { id: 'mg-2', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800', caption: 'Infinity pool stretching over a secluded coastline.' },
      { id: 'mg-3', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800', caption: 'Elegant design detailing utilizing natural travertine.' },
      { id: 'mg-4', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800', caption: 'Bespoke master suite blending indoor and outdoor ecosystems.' }
    ],
    reviews: [
      { id: 'mr-1', author: 'Sir Richard Sterling', rating: 5, comment: 'The absolute benchmark in private hospitality. The level of meticulous care, absolute discretion, and pure architectural perfection is without equal.', date: 'January 10, 2026', location: 'Belgravia Circle' },
      { id: 'mr-2', author: 'Victoria Huntington', rating: 5, comment: 'Millard completely revolutionized how we travel. Their retreat in Switzerland is a masterclass in restorative wellness and privacy.', date: 'March 22, 2026', location: 'Geneva Lakeside' }
    ],
    contact: {
      phone: '+1 (555) 777-8888',
      email: 'concierge@millardgroup.com',
      address: '500 Park Avenue, Penthouse Level, New York',
      hours: [
        'Private Concierge Desk: 24 / 7 / 365',
        'Headquarters Office: Mon – Fri: 9:00 AM – 6:00 PM'
      ],
      whatsapp: 'https://wa.me/15557778888'
    }
  }
};

export const newsData: NewsItem[] = [
  {
    id: 'n-1',
    title: 'Millard Group Announces New Sustainable Farms Partnership',
    excerpt: 'Aligning with premium agricultural cooperatives across Italy and Colombia to guarantee strict ingredient traceability and ecological conservation.',
    content: 'We are thrilled to announce a ground-breaking partnership between Millard Group, including Amber Coffee and Obika, and sustainable farming networks. Under this initiative, all coffee and produce imports are fully traceable via blockchain registry, ensuring our commitment to ecological restoration and living wages for indigenous farm workers.',
    date: 'June 18, 2026',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800',
    readTime: '3 min read',
    brand: 'millard'
  },
  {
    id: 'n-2',
    title: 'Amber Coffee Tribeca Receives Three-Star Roaster Recognition',
    excerpt: 'The International Specialty Coffee Union awards our Tribeca flagship for pioneering low-emission convection roasting technology.',
    content: 'In our quest to create exquisite micro-lot brewing without compromising the environment, Amber Coffee’s new convection roasters have been honored with the ISCU 3-Star Award. This state-of-the-art roasting process preserves highly sensitive origin aromas while cutting fossil fuel emissions by 65%.',
    date: 'July 2, 2026',
    category: 'Award',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800',
    readTime: '4 min read',
    brand: 'amber'
  },
  {
    id: 'n-3',
    title: 'Obika Debuts Summer Truffle & Raw Mozzarella Extravaganza',
    excerpt: 'A seasonal exploration of the finest ingredients of the Campania region, prepared by our master pizzaiolos.',
    content: 'Obika is celebrating the arrival of the summer season with an extraordinary dedicated menu block. Featuring fresh summer truffles shaved table-side, cream-injected burrata, and vintage Italian sparklings, our guests can indulge in a refined culinary sensory map of Southern Italy.',
    date: 'July 12, 2026',
    category: 'Culinary Launch',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800',
    readTime: '5 min read',
    brand: 'obika'
  }
];

export const locationsData: LocationItem[] = [
  {
    id: 'loc-1',
    name: 'Millard Corporate Headquarters & Elite Club',
    address: '500 Park Avenue, Penthouse Level, New York, NY 10022',
    phone: '+1 (555) 777-8888',
    hours: '24/7 Access for Certified members',
    brand: 'Millard',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0606825994116!2d-73.97184208459357!3d40.760193179326884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f1f5f5f5f5%3A0xf5f5f5f5f5f5f5f5!2s500%20Park%20Ave%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus'
  },
  {
    id: 'loc-2',
    name: 'Amber Coffee Roastery',
    address: '14 Golden Leaf Lane, Tribeca, New York, NY 10013',
    phone: '+1 (555) 123-4567',
    hours: 'Mon – Fri: 7:00 AM – 7:00 PM | Sat – Sun: 8:00 AM – 8:00 PM',
    brand: 'Amber Coffee',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2537151042575!2d-74.00843608459495!3d40.718029579331046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sTribeca%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus'
  },
  {
    id: 'loc-3',
    name: 'Obika Mozzarella Bar & Restaurant',
    address: '72 Via Roma Boulevard, Soho, New York, NY 10012',
    phone: '+1 (555) 987-6543',
    hours: 'Tue – Sun: 12:00 PM – 3:30 PM, 5:30 PM – 11:00 PM',
    brand: 'Obika',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7381504104277!2d-73.99955408459461!3d40.72412957932977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sSoho%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus'
  }
];

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the relationship between the three brands?',
    answer: 'Millard Group is the parent hospitality company. "Millard" represents our core luxury residential development, private club, and boutique estate management services. "Amber Coffee" and "Obika" are our premium food & beverage flagships, fully owned and operated by Millard Group, delivering the same elite standard of ingredients, craftsmanship, and white-glove customer care.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How do I access the Millard Private Club?',
    answer: 'The Millard Private Club is accessible exclusively via executive invitation or corporate recommendation. Interested parties can submit an inquiry through our Contact Form or reach out directly to the Private Concierge Desk. Our Board reviews applications quarterly to maintain the highest standard of community exclusivity and privacy.',
    category: 'Membership'
  },
  {
    id: 'faq-3',
    question: 'Are there corporate event spaces or catering options?',
    answer: 'Absolutely. Both Obika and Millard Elite Clubs offer breathtaking private dining rooms, presentation lounges, and complete catering capabilities. Our executive chefs can curate fully custom menus ranging from Campania-style slow food tastings to hand-poured specialty espresso stations or premium flight pairings. Fill out our contact form specifying your event date and scope.',
    category: 'Events'
  },
  {
    id: 'faq-4',
    question: 'Does Amber Coffee roast their beans in-house?',
    answer: 'Yes. All specialty beans served at Amber Coffee and Millard Estates are custom-profiled and small-batch roasted weekly at our Tribeca Roastery Flagship. We use state-of-the-art, high-efficiency convection roasting systems to bring out origin-specific floral and flavor components while minimizing environment footprint.',
    category: 'Amber Coffee'
  }
];
