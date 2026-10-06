export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "corporate" | "hospitality" | "bespoke_furniture";
  categoryLabel: string;
  clientType: string;
  location: string;
  year: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  bespokeElements: string[];
  materials: string[];
  dimensionsOrScope: string;
  featured: boolean;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "guzape-hill-villa",
    slug: "guzape-hill-villa",
    title: "The Guzape Hill Villa Residence",
    category: "residential",
    categoryLabel: "Residential Architecture",
    clientType: "Private Homeowner",
    location: "Guzape, Abuja, Nigeria",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "Serene African contemporary living with seamless custom joinery and natural light.",
    overview: "A complete interior spatial transformation of an 850 sqm villa. Spacevamp delivered custom architectural woodwork, an open-concept chef kitchen with integrated breakfast bar, and wall-to-wall fluted wardrobes that maximize vertical volume.",
    challenge: "High ceiling voids created acoustic echoes, and existing off-the-shelf furniture felt disconnected and diminutive in the vast architectural volumes.",
    solution: "We engineered custom oversized furniture proportions, acoustic wood-slat wall feature paneling, and an integrated lighting scheme warm enough for intimate family evenings.",
    bespokeElements: [
      "12-seater solid Nigerian Iroko dining table with brass inlay",
      "Integrated fluted walnut walk-in wardrobe with soft interior LED channels",
      "Custom floating media console with hidden cable management and acoustic backing",
      "Curved velvet sectional sofa tailored to the living room curve"
    ],
    materials: ["Kiln-dried Nigerian Iroko", "Natural Walnut Veneer", "Brushed Brass", "Cream Bouclé", "Italian Quartz"],
    dimensionsOrScope: "850 sqm Turnkey Interior & Joinery",
    featured: true
  },
  {
    id: "horizon-capital-hq",
    slug: "horizon-capital-hq",
    title: "Horizon Capital Investment HQ",
    category: "corporate",
    categoryLabel: "Corporate Headquarters",
    clientType: "Financial Services Firm",
    location: "Maitama, Abuja, Nigeria",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "An authoritative corporate workplace designed for confidential strategy and collaborative momentum.",
    overview: "Turnkey design and manufacturing of executive offices, a 20-person acoustic boardroom, client greeting lounge, and 45 modular ergonomic team workstations.",
    challenge: "The client required rapid delivery within 5 weeks, demanding zero overseas shipping delays while maintaining institutional prestige.",
    solution: "100% manufactured in our Abuja factory. We deployed modular steel-and-hardwood desks with integrated power tracks and sound-absorbing upholstered dividers.",
    bespokeElements: [
      "20-person monolithic boardroom conference table with motorized pop-up AV ports",
      "Executive suite floating desk with leather blotter inlay",
      "Curved fluted reception desk with backlit brushed brass Spacevamp joinery",
      "Acoustic phone booths and quiet collaboration alcoves"
    ],
    materials: ["Matte Charcoal Powder-Coated Steel", "Crown Cut American Walnut", "Acoustic PET Felt", "Full-Grain Saddle Leather"],
    dimensionsOrScope: "1,200 sqm Commercial Fit-out & 45 Workstations",
    featured: true
  },
  {
    id: "savore-culinary-lounge",
    slug: "savore-culinary-lounge",
    title: "Savoré Contemporary Lounge",
    category: "hospitality",
    categoryLabel: "Hospitality & Dining",
    clientType: "Hospitality Group",
    location: "Victoria Island, Lagos, Nigeria",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "Vibrant Afro-contemporary hospitality featuring organic curves and durable commercial craftsmanship.",
    overview: "A 140-seat fine dining and cocktail lounge incorporating sculptural banquette seating, ambient timber canopy ceiling features, and custom brass-accented cocktail bars.",
    challenge: "High guest turnover required hospitality materials resistant to spills, scratches, and friction without appearing clinical or sterile.",
    solution: "Spacevamp fabricated custom solid Obeche curved booth frames upholstered in commercial rub-tested stain-resistant woven textiles and sealed with heavy-duty matte conversion varnish.",
    bespokeElements: [
      "Continuous 18-meter custom serpentine curved banquette seating",
      "Custom marble-and-timber pedestal dining tables",
      "Geometric terracotta tile and timber bar counter",
      "Suspended fluted timber acoustic ceiling baffles"
    ],
    materials: ["Kiln-seasoned Nigerian Obeche", "Commercial Stain-Resistant Velvet", "Nero Marquina Marble", "Hand-patinated Brass"],
    dimensionsOrScope: "140 Seats / 420 sqm Restaurant Space",
    featured: true
  },
  {
    id: "jabi-lake-penthouse",
    slug: "jabi-lake-penthouse",
    title: "Jabi Lake Waterfront Penthouse",
    category: "residential",
    categoryLabel: "Luxury Penthouse",
    clientType: "Diaspora Investor",
    location: "Jabi Lake, Abuja, Nigeria",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "Panoramic waterfront minimalism with warm tactile African craftsmanship.",
    overview: "Full turnkey interior architecture and furniture package for a penthouse overlooking Jabi Lake. Balanced floor-to-ceiling glass vistas with warm wood and textured fabrics.",
    challenge: "Direct tropical sun exposure meant standard veneers could fade or warp quickly.",
    solution: "We selected UV-stabilized polyurethane hardcoatings over moisture-treated teak and engineered composite frameworks that withstand Abuja's seasonal humidity swings.",
    bespokeElements: [
      "Floating king bed platform with integrated floating nightstands and bedside controls",
      "Monolithic waterfall kitchen island in honed quartz with concealed soft-touch cabinetry",
      "Frameless floor-to-ceiling glass pocket doors with concealed custom timber jambs",
      "Bespoke modular low-profile outdoor lounge seating"
    ],
    materials: ["Hardwood Teak", "UV-Resistant Polyurethane", "Honed Calacatta Quartz", "Linen-Blend Textiles"],
    dimensionsOrScope: "480 sqm Complete Furnishing & Fit-Out",
    featured: false
  },
  {
    id: "bespoke-kente-credenza",
    slug: "bespoke-kente-credenza",
    title: "The Solstice Credenza & Living Suite",
    category: "bespoke_furniture",
    categoryLabel: "Bespoke Furniture",
    clientType: "Art & Furniture Collector",
    location: "Abuja Design Studio Exhibition",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "Handcrafted joinery featuring geometric African relief carvings and solid brass hardware.",
    overview: "A statement limited-production credenza exploring modern African geometry. CNC-milled relief patterns on solid Nigerian Iroko doors with hidden push-to-open German hardware.",
    challenge: "Carving intricate geometric patterns into dense hardwood without tearing the grain or compromising structural flatness.",
    solution: "Multi-pass 5-axis CNC routing calibrated to wood grain direction, followed by 40 hours of hand-sanding and micro-crystalline wax buffing.",
    bespokeElements: [
      "Precision 3D geometric relief pattern doors",
      "Concealed internal soft-close cutlery and record storage drawers",
      "Brushed bronze solid base legs engineered with anti-tip counterweights"
    ],
    materials: ["Solid Nigerian Iroko", "Solid Cast Bronze", "Blum Push-to-Open Hardware", "Organic Beeswax Buff"],
    dimensionsOrScope: "2200mm W x 820mm H x 480mm D",
    featured: true
  },
  {
    id: "wuse-tech-workspace",
    slug: "wuse-tech-workspace",
    title: "Apex Innovation Hub & Coworking",
    category: "corporate",
    categoryLabel: "Modern Tech Office",
    clientType: "Venture Builder",
    location: "Wuse II, Abuja, Nigeria",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    tagline: "Dynamic, flexible workstations built for rapid scaling and continuous team energy.",
    overview: "Design and buildout of an agile innovation campus including 60 hot-desks, 4 sprint war-rooms, sound-dampened podcast studios, and a stadium-seating presentation amphitheater.",
    challenge: "High agility requirements needed modular desks that could be reconfigured in minutes without calling electricians or technicians.",
    solution: "Custom daisy-chain power channel desks with magnetic clip-on privacy dividers and heavy-duty industrial castors with step-locks.",
    bespokeElements: [
      "60 modular dual-bench desks with central cable raceways",
      "Plywood tiered amphitheater seating with integrated soft cushions",
      "Acoustic slatted timber whiteboard rolling screens",
      "Coffee bar counter with integrated mini-fridge casework"
    ],
    materials: ["Birch Plywood", "Textured Matte Charcoal Laminate", "Acoustic Fabric", "Heavy-Duty Powder Coat Steel"],
    dimensionsOrScope: "800 sqm Tech Campus / 60+ Seats",
    featured: false
  }
];
