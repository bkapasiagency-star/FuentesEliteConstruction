export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'TILE' | 'BATHROOMS' | 'CONCRETE' | 'PATIO & HARDSCAPE' | 'MASONRY';
  categoryLabel: string;
  scope: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  details: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
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
  phoneClean: "4085504185",
  phoneHref: "tel:4085504185",
  email: "info@fuenteseliteconstruction.com",
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
    shortDesc: "Precision installation for bathrooms, floors, shower surrounds, and custom architectural layouts.",
    longDesc: "Proper tile work requires uncompromising substrate preparation, moisture barriers, and millimeter-level alignment. We work with porcelain, ceramic, natural slate, marble, and mosaic tiles.",
    features: [
      "Bathroom tile & feature walls",
      "Large-format floor tile",
      "Shower & tub surrounds with waterproof membrane",
      "Decorative tile & mosaic accents",
      "Detailed mitered layouts & custom niches"
    ],
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "High-end artisanal tile bathroom shower installation"
  },
  {
    id: "concrete",
    title: "Concrete",
    shortDesc: "Durable new concrete pours, replacements, driveways, sidewalks, and outdoor living patios.",
    longDesc: "From complete driveway tear-outs to clean broom and stamped finishes. Built with proper rebar grid reinforcement, gravel base compaction, and engineered expansion joints.",
    features: [
      "New concrete installation & forming",
      "Concrete demolition & replacement",
      "Residential driveways with reinforced rebar",
      "Sidewalks & entry walkways",
      "Patios engineered for proper water drainage"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Architectural poured concrete patio and walkway"
  },
  {
    id: "masonry",
    title: "Masonry & Hardscape",
    shortDesc: "Timeless interlocking pavers, natural stonework, retaining structures, and outdoor living surfaces.",
    longDesc: "Durable outdoor hardscapes crafted with structural integrity. We install interlocking pavers, flagstone walkways, retaining walls, and custom stone veneers built to endure California weather.",
    features: [
      "Interlocking stone & concrete pavers",
      "Natural flagstone & slate stonework",
      "Outdoor surfaces & patio expansions",
      "Hardscape improvements & transitions",
      "Fireplace stone surrounds & exterior veneers"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590725140246-2015fa6a6f64?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Stone masonry patio pavers and outdoor hardscaping"
  },
  {
    id: "flooring",
    title: "Flooring",
    shortDesc: "Enduring residential flooring installations, surface replacements, and clean level transitions.",
    longDesc: "Leveling, moisture testing, and meticulous installation ensure your flooring looks seamless and stays solid underfoot for decades without hollow sounds or loose edges.",
    features: [
      "Residential floor installations",
      "Durable porcelain & ceramic tile flooring",
      "Subfloor preparation & self-leveling",
      "Surface replacement & old floor removal",
      "Threshold & transition detailing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Clean modern residential flooring installation"
  },
  {
    id: "bathrooms",
    title: "Bathroom Remodeling",
    shortDesc: "Comprehensive bathroom transformations focusing on flawless waterproofing, tile, and layout.",
    longDesc: "A bathroom remodel succeeds on what happens behind the walls. We inspect plumbing lines, install high-grade Schluter/sheet waterproofing systems, and install custom shower pans and surrounds.",
    features: [
      "Bathroom flooring & moisture mitigation",
      "Custom curbless & walk-in shower areas",
      "Tub surrounds & soaking tub backsplashes",
      "Complete tile renovation & layout optimization",
      "Stud-level wall inspections & repair recommendations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Modern bathroom remodel with stone tile and walk-in shower"
  },
  {
    id: "improvements",
    title: "Residential Construction Improvements",
    shortDesc: "Focused residential upgrades, surface repairs, and architectural improvements with hands-on care.",
    longDesc: "When your home needs focused improvements—from repairing broken concrete steps to updating living room fireplace surrounds or upgrading worn exterior entry surfaces.",
    features: [
      "Project-specific residential improvements",
      "Substrate & surface repairs",
      "Surface upgrades & architectural finishes",
      "Fireplace hearth & chimney refacing",
      "Exterior steps & entryway renovations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Residential architectural home improvement and construction"
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
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Walk-in master shower with large format marble-look porcelain tile",
    details: "Frameless glass enclosure, recessed shampoo niche with continuous vein matching, and seamless zero-threshold linear drain.",
    aspectRatio: "tall"
  },
  {
    id: "proj-2",
    title: "Architectural Concrete Patio & Walkways",
    category: "CONCRETE",
    categoryLabel: "Concrete Flatwork",
    scope: "Reinforced Concrete with Integrated Expansion Joints",
    location: "Los Gatos, CA",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern backyard concrete patio and walkway with clean geometric lines",
    details: "Clean-edge control cuts, compacted aggregate base, and light broom non-slip architectural finish designed for outdoor California living.",
    aspectRatio: "wide"
  },
  {
    id: "proj-3",
    title: "Natural Slate Fireplace Surround",
    category: "MASONRY",
    categoryLabel: "Masonry & Stonework",
    scope: "Slate Tile Installation Over Brick Fireplace",
    location: "San Jose, CA",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Natural slate tile installed over existing fireplace surround",
    details: "Precision installation of natural cleft slate over traditional brick, with flush mitered corners and heat-resistant mortar bond.",
    aspectRatio: "square"
  },
  {
    id: "proj-4",
    title: "Interlocking Paver Driveway & Entry",
    category: "PATIO & HARDSCAPE",
    categoryLabel: "Patios & Hardscape",
    scope: "Permeable Pavers & Concrete Edge Restraint",
    location: "Saratoga, CA",
    imageUrl: "https://images.unsplash.com/photo-1590725140246-2015fa6a6f64?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Permeable paver patio and residential hardscape with warm stone tones",
    details: "Excavated subgrade, compacted road base, polymeric sand joint stabilization, and perimeter reinforced concrete curb bond.",
    aspectRatio: "wide"
  },
  {
    id: "proj-5",
    title: "Herringbone Kitchen & Living Floor Tile",
    category: "TILE",
    categoryLabel: "Tile Flooring",
    scope: "Wood-Look Porcelain in Classic 90° Herringbone",
    location: "Cupertino, CA",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Artisanal herringbone tile floor layout across living room and entry",
    details: "Laser-aligned grid lines, leveling clip system to eliminate lippage, and epoxy stain-resistant color-matched grout.",
    aspectRatio: "tall"
  },
  {
    id: "proj-6",
    title: "Soaking Tub Surround & Wainscot Tile",
    category: "BATHROOMS",
    categoryLabel: "Bathroom Tile",
    scope: "Handcrafted Ceramic Tile Surrounds",
    location: "Willow Glen, San Jose, CA",
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Freestanding soaking tub with handcrafted tile backsplash surround",
    details: "Waterproof cementitious backer board, waterproofing membrane, bullnose finishing edge trim, and silicone expansion seals.",
    aspectRatio: "square"
  },
  {
    id: "proj-7",
    title: "Outdoor Living Patio & Garden Hardscape",
    category: "PATIO & HARDSCAPE",
    categoryLabel: "Patio Hardscaping",
    scope: "Flagstone Terrace & Integrated Sitting Wall",
    location: "Morgan Hill, CA",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Outdoor living stone patio terrace with outdoor seating area",
    details: "Natural dry-stack aesthetic with mortar-set foundation, integrated drainage slope away from house foundation.",
    aspectRatio: "wide"
  },
  {
    id: "proj-8",
    title: "Broom-Finish Residential Driveway",
    category: "CONCRETE",
    categoryLabel: "Concrete Driveway",
    scope: "Demolition, Forming & 4000 PSI Rebar Pour",
    location: "Gilroy, CA",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean poured concrete driveway with architectural apron and border",
    details: "Full removal of sunken cracked slab, 6-inch rebar reinforced grid, proper slope for rain run-off, and cure sealant.",
    aspectRatio: "tall"
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
    description: "No guesswork or unexpected surprises. Ivan and the team communicate daily milestones, confirm layout preferences before setting materials, and keep you informed at every turn."
  },
  {
    number: "02",
    title: "Attention To Detail",
    subtitle: "Careful preparation and precise installation from start to finish.",
    description: "True durability comes from substrate prep—leveling surfaces, installing waterproofing membranes, compacting gravel subbases, and checking laser plumb before the first tile or pour."
  },
  {
    number: "03",
    title: "Professional Workmanship",
    subtitle: "Built around the details that make the finished project look right.",
    description: "Clean mitered corners, uniform grout lines, smooth expansion joints, and seamless transitions between surfaces. We treat your residence with the utmost care and respect."
  },
  {
    number: "04",
    title: "Straightforward Process",
    subtitle: "Clear recommendations without making the homeowner feel pressured.",
    description: "Honest evaluations of what your project actually needs. When walls or subfloors are opened up, Ivan provides transparent guidance while leaving the final decisions entirely in your hands."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell Us About Your Project",
    desc: "Reach out via our inquiry form or direct call at (408) 550-4185. Share what you want to build, replace, or remodel—whether it's a shower renovation, new driveway, or patio."
  },
  {
    step: "02",
    title: "Discuss Your Options",
    desc: "Ivan reviews your space in person or through project details, talks through material options, layout considerations, and provides a clear, transparent written estimate."
  },
  {
    step: "03",
    title: "Plan The Work",
    desc: "We coordinate site preparation, schedule materials, and establish an exact timeline. Substrates and moisture protection are meticulously inspected before finish work starts."
  },
  {
    step: "04",
    title: "Build It Right",
    desc: "Our dedicated 8-person crew executes the project with daily communication, laser-precision installation, clean job site discipline, and a thorough final walkthrough."
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
    answer: "Project duration depends on square footage and technical complexity. A standard bathroom remodel with full waterproof membrane prep, shower pan forming, and custom tile installation typically takes 2 to 3 weeks. Concrete flatwork (driveways, walkways, patios) generally takes 3 to 6 working days for excavation, rebar forming, pouring, and finishing, followed by a mandatory curing period before heavy vehicle traffic. Throughout the project, Ivan provides daily morning updates so you always know what milestones will be completed each day."
  },
  {
    id: "faq-2",
    category: "materials",
    question: "Do homeowners provide the materials or does Fuentes Elite Construction source them?",
    answer: "We offer flexibility based on your preference. We always supply all commercial-grade substrate and preparation materials—including premium Schluter waterproofing membranes, cementitious backer boards, specialized polymer-modified thin-sets, structural rebar grids, compacted aggregate base, and stain-resistant epoxy grouts. For finish materials (tile, natural stone, porcelain slabs, pavers), you are welcome to select and purchase your preferred aesthetic materials directly, or we can connect you with trusted South Bay stone and tile trade showrooms to secure contractor pricing."
  },
  {
    id: "faq-3",
    category: "permits",
    question: "Do you handle city building permits in San Jose and the South Bay?",
    answer: "Yes. Permitting requirements vary depending on project scope and jurisdiction. Surface tile replacement and basic hardscaping often do not require permits. However, projects involving structural alterations, moving plumbing/drain lines, electrical modifications in bathrooms, or public right-of-way concrete work (such as curb cuts and sidewalk aprons) require municipal permits. As a licensed California contractor, we coordinate permit applications with city building departments across San Jose, Los Gatos, Saratoga, Cupertino, Morgan Hill, and Gilroy, and manage scheduled city inspections."
  },
  {
    id: "faq-4",
    category: "process",
    question: "What happens if hidden dry rot, mold, or plumbing issues are discovered behind walls?",
    answer: "Because we inspect down to the framing studs during demolition, underlying issues such as hidden pipe leaks, dry rot, or out-of-square framing occasionally surface. If discovered, Ivan immediately pauses work in that specific area, documents the issue with photos, walks you through the exact condition in person, and explains sensible repair recommendations along with honest pricing. We never perform unauthorized work or pressure homeowners into unnecessary extras—the final decision always remains yours."
  },
  {
    id: "faq-5",
    category: "materials",
    question: "What types of tile and masonry materials do you install?",
    answer: "Our craftsmen have extensive experience installing porcelain tile, large-format sintered stone slabs, ceramic subway tile, natural marble, slate, travertine, interlocking concrete pavers, and architectural brick. Each material requires distinct mortar bonds, expansion joints, and cutting techniques to ensure lasting durability without cracking or hollow voids."
  },
  {
    id: "faq-6",
    category: "process",
    question: "How do you protect our home and maintain cleanliness during construction?",
    answer: "Job site discipline is a foundational value. We lay heavy-duty floor protection (such as Ram Board) along all traffic paths from the entryway to the workspace, erect temporary plastic dust containment barriers, and utilize HEPA-filtered vacuum systems during cutting. At the end of every work day, our 8-person crew sweeps, organizes materials, and leaves your living areas clean and accessible."
  }
];
