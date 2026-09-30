export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'TILE' | 'BATHROOMS' | 'CONCRETE' | 'PATIO & HARDSCAPE' | 'MASONRY';
  categoryLabel: string;
  scope: string;
  location: string;
  details: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  projectType: string;
  rating: number;
  highlight: string;
  initials: string;
  location: string;
}

export const COMPANY_INFO = {
  name: "Fuentes Elite Construction",
  owner: "Ivan Fuentes",
  phone: "(408) 550-4185",
  phoneHref: "tel:4085504185",
  yelpUrl: "https://www.yelp.com/biz/fuentes-elite-construction-san-jose",
  area: "San Jose, CA",
  region: "South Bay & Bay Area, California",
  licenseText: "Licensed California Contractor • Residential & Commercial",
  rating: "4.9",
  reviewsCount: 19,
  teamSize: "8-Person Team",
  serviceAreas: [
    { name: "San Jose", label: "Central South Bay", note: "Primary hub & surrounding neighborhoods including Willow Glen, Almaden, Rose Garden" },
    { name: "Los Gatos", label: "West Valley Foothills", note: "Custom patios, stone walkways & interior tile renovations" },
    { name: "Saratoga", label: "Foothill Estates", note: "Architectural concrete, pool surrounds & master bath tile" },
    { name: "Cupertino", label: "West Bay", note: "Driveway replacements, modern bathroom remodels & flooring" },
    { name: "Morgan Hill", label: "South County", note: "Spacious patio hardscapes, masonry walls & residential flatwork" },
    { name: "Gilroy", label: "South County Valley", note: "Concrete flatwork, foundation repairs & surface renovations" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "tile",
    title: "Tile Installation",
    shortDesc: "I install tile for bathrooms, floors, showers, and custom layouts.",
    features: [
      "Bathroom tile & feature walls",
      "Large-format floor tile",
      "Shower & tub surrounds with waterproof membrane",
      "Decorative tile & mosaic accents",
      "Detailed mitered layouts & custom niches"
    ],
  },
  {
    id: "concrete",
    title: "Concrete",
    shortDesc: "New concrete, replacements, driveways, walkways, and patios.",
    features: [
      "New concrete installation & forming",
      "Concrete demolition & replacement",
      "Residential driveways with reinforced rebar",
      "Sidewalks & entry walkways",
      "Patios engineered for proper water drainage"
    ],
  },
  {
    id: "masonry",
    title: "Masonry & Hardscape",
    shortDesc: "Pavers, natural stone, retaining walls, and outdoor living areas.",
    features: [
      "Interlocking stone & concrete pavers",
      "Natural flagstone & slate stonework",
      "Outdoor surfaces & patio expansions",
      "Hardscape improvements & transitions",
      "Fireplace stone surrounds & exterior veneers"
    ],
  },
  {
    id: "flooring",
    title: "Flooring",
    shortDesc: "Floor installation and replacement with smooth, level transitions.",
    features: [
      "Residential floor installations",
      "Durable porcelain & ceramic tile flooring",
      "Subfloor preparation & self-leveling",
      "Surface replacement & old floor removal",
      "Threshold & transition detailing"
    ],
  },
  {
    id: "bathrooms",
    title: "Bathroom Remodeling",
    shortDesc: "Bathroom updates, custom showers, waterproofing, and tile.",
    features: [
      "Bathroom flooring & moisture mitigation",
      "Custom curbless & walk-in shower areas",
      "Tub surrounds & soaking tub backsplashes",
      "Complete tile renovation & layout optimization",
      "Stud-level wall inspections & repair recommendations"
    ],
  },
  {
    id: "improvements",
    title: "Residential Construction Improvements",
    shortDesc: "Home upgrades, surface repairs, and practical improvements.",
    features: [
      "Project-specific residential improvements",
      "Substrate & surface repairs",
      "Surface upgrades & architectural finishes",
      "Fireplace hearth & chimney refacing",
      "Exterior steps & entryway renovations"
    ],
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Curbless Walk-In Master Shower",
    category: "BATHROOMS",
    categoryLabel: "Bathroom Remodel",
    scope: "Full Waterproofing & Large-Format Porcelain Tile",
    location: "San Jose, CA",
    details: "Frameless glass enclosure, recessed shampoo niche with continuous vein matching, and seamless zero-threshold linear drain.",
  },
  {
    id: "proj-2",
    title: "Architectural Concrete Patio & Walkways",
    category: "CONCRETE",
    categoryLabel: "Concrete Flatwork",
    scope: "Reinforced Concrete with Integrated Expansion Joints",
    location: "Los Gatos, CA",
    details: "Clean-edge control cuts, compacted aggregate base, and light broom non-slip architectural finish designed for outdoor California living.",
  },
  {
    id: "proj-3",
    title: "Natural Slate Fireplace Surround",
    category: "MASONRY",
    categoryLabel: "Masonry & Stonework",
    scope: "Slate Tile Installation Over Brick Fireplace",
    location: "San Jose, CA",
    details: "Precision installation of natural cleft slate over traditional brick, with flush mitered corners and heat-resistant mortar bond.",
  },
  {
    id: "proj-4",
    title: "Interlocking Paver Driveway & Entry",
    category: "PATIO & HARDSCAPE",
    categoryLabel: "Patios & Hardscape",
    scope: "Permeable Pavers & Concrete Edge Restraint",
    location: "Saratoga, CA",
    details: "Excavated subgrade, compacted road base, polymeric sand joint stabilization, and perimeter reinforced concrete curb bond.",
  },
  {
    id: "proj-5",
    title: "Herringbone Kitchen & Living Floor Tile",
    category: "TILE",
    categoryLabel: "Tile Flooring",
    scope: "Wood-Look Porcelain in Classic 90° Herringbone",
    location: "Cupertino, CA",
    details: "Laser-aligned grid lines, leveling clip system to eliminate lippage, and epoxy stain-resistant color-matched grout.",
  },
  {
    id: "proj-6",
    title: "Soaking Tub Surround & Wainscot Tile",
    category: "BATHROOMS",
    categoryLabel: "Bathroom Tile",
    scope: "Handcrafted Ceramic Tile Surrounds",
    location: "Willow Glen, San Jose, CA",
    details: "Waterproof cementitious backer board, waterproofing membrane, bullnose finishing edge trim, and silicone expansion seals.",
  },
  {
    id: "proj-7",
    title: "Outdoor Living Patio & Garden Hardscape",
    category: "PATIO & HARDSCAPE",
    categoryLabel: "Patio Hardscaping",
    scope: "Flagstone Terrace & Integrated Sitting Wall",
    location: "Morgan Hill, CA",
    details: "Natural dry-stack aesthetic with mortar-set foundation, integrated drainage slope away from house foundation.",
  },
  {
    id: "proj-8",
    title: "Broom-Finish Residential Driveway",
    category: "CONCRETE",
    categoryLabel: "Concrete Driveway",
    scope: "Demolition, Forming & 4000 PSI Rebar Pour",
    location: "Gilroy, CA",
    details: "Full removal of sunken cracked slab, 6-inch rebar reinforced grid, proper slope for rain run-off, and cure sealant.",
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    quote: "Ivan and his crew were excellent for my entire bathroom remodel. They helped recommend a few small repairs while the walls were down to studs, and talked me through all their recommendations but ultimately left the final decisions up to me. The tile layout was excellent, and the overall finished product was great.",
    projectType: "Full Bathroom Remodel & Tile",
    rating: 5,
    highlight: "Talked me through recommendations & left final decisions to me",
    initials: "B.R.",
    location: "South Bay Homeowner"
  },
  {
    id: "rev-2",
    quote: "Ivan did an excellent job of installing slate tile over my brick fireplace couldn't be happier. Price was right and the quality of his work is great.",
    projectType: "Slate Tile Fireplace Installation",
    rating: 5,
    highlight: "Price was right and the quality of his work is great",
    initials: "M.K.",
    location: "San Jose Resident"
  },
  {
    id: "rev-3",
    quote: "Ivan & his team prep very well prior to starting his work. Communicates very well with what’s going to be done for the day. They do a very good and professional work down to the T.",
    projectType: "Subsurface Preparation & Surface Work",
    rating: 5,
    highlight: "Communicates very well with what’s going to be done for the day",
    initials: "D.S.",
    location: "Bay Area Homeowner"
  },
  {
    id: "rev-4",
    quote: "Ivan was very skilled, did a beautiful job in our bathroom. We will definitely hire him again.",
    projectType: "Custom Bathroom Tile",
    rating: 5,
    highlight: "Very skilled, did a beautiful job in our bathroom",
    initials: "J.T.",
    location: "South Bay Resident"
  },
  {
    id: "rev-5",
    quote: "Had work done by Ivan and his team with Fuentes Tile and i would definitely recommend them for your next Project. Very Professional, Quality and attention to detail. Easy to communicate with and makes the job process less stressful for the homeowner.",
    projectType: "Residential Tile & Improvements",
    rating: 5,
    highlight: "Makes the job process less stressful for the homeowner",
    initials: "R.L.",
    location: "San Jose Homeowner"
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Clear Communication",
    subtitle: "Know what is happening, what comes next and why.",
    description: "I’ll share daily progress, confirm the layout before setting materials, and keep you in the loop."
  },
  {
    number: "02",
    title: "Attention To Detail",
    subtitle: "Careful preparation and precise installation from start to finish.",
    description: "I check the base, level the surface, and take care of waterproofing before the finish goes in."
  },
  {
    number: "03",
    title: "Professional Workmanship",
    subtitle: "Built around the details that make the finished project look right.",
    description: "I focus on clean corners, even grout lines, smooth joints, and transitions that fit your home."
  },
  {
    number: "04",
    title: "Straightforward Process",
    subtitle: "Clear recommendations without making the homeowner feel pressured.",
    description: "I’ll show you what your project needs and explain your options. The final decision is always yours."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell Me About Your Project",
    desc: "Call or send me a note about what you want to build, replace, or remodel."
  },
  {
    step: "02",
    title: "Talk Through Your Options",
    desc: "I’ll look at the space, answer your questions, and give you a clear written estimate."
  },
  {
    step: "03",
    title: "Plan the Work",
    desc: "We’ll set the schedule, choose materials, and make sure the surface is ready before work begins."
  },
  {
    step: "04",
    title: "Build It Right",
    desc: "I’ll keep you updated while my 8-person crew completes the work and walks it through with you."
  }
];

export interface FAQItem {
  id: string;
  category: 'timelines' | 'materials' | 'permits' | 'process';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "timelines",
    question: "What are typical project timelines for tile, concrete, and bathroom remodels?",
    answer: "It depends on the size and details. A standard bathroom remodel usually takes 2 to 3 weeks. Concrete work generally takes 3 to 6 working days, plus curing time before heavy traffic. I’ll keep you updated each day."
  },
  {
    id: "faq-2",
    category: "materials",
    question: "Do homeowners provide the materials or does Fuentes Elite Construction source them?",
    answer: "I supply the prep materials, including waterproofing, backer boards, mortar, rebar, and base materials. You can choose and buy finish materials yourself, or I can connect you with local tile and stone showrooms."
  },
  {
    id: "faq-3",
    category: "permits",
    question: "Do you handle city building permits in San Jose and the South Bay?",
    answer: "It depends on the work and the city. Tile replacement and basic hardscaping often don’t need permits. Structural changes, plumbing or electrical work, and some sidewalk projects may. I’ll help you understand what your project requires."
  },
  {
    id: "faq-4",
    category: "process",
    question: "What happens if hidden dry rot, mold, or plumbing issues are discovered behind walls?",
    answer: "I’ll pause in that area, show you what I found, and explain the repair options and cost before moving forward. I won’t do extra work without your approval."
  },
  {
    id: "faq-5",
    category: "materials",
    question: "What types of tile and masonry materials do you install?",
    answer: "I install porcelain and ceramic tile, marble, slate, travertine, stone slabs, concrete pavers, and brick. I’ll help match the prep and installation to the material you choose."
  },
  {
    id: "faq-6",
    category: "process",
    question: "How do you protect our home and maintain cleanliness during construction?",
    answer: "My crew and I protect walkways, use dust barriers and HEPA-filtered vacuums, and clean up each day so your home stays as usable as possible."
  }
];
