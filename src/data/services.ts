export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: "interior" | "furniture" | "turnkey";
  description: string;
  highlights: string[];
  deliverables: string[];
  image: string;
  badge: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "spatial-interior-design",
    title: "Interior Design & Spatial Solutions",
    category: "interior",
    badge: "Core Capability",
    shortDesc: "End-to-end interior architecture and spatial planning that balances ergonomics, light, and African contemporary aesthetics.",
    description: "We don't merely decorate; we re-engineer how human beings live, work, and interact within spaces. From detailed architectural layouts and photorealistic 3D visualization to acoustic optimization and integrated lighting concepts.",
    highlights: [
      "Custom Spatial Layout & Ergonomic Planning",
      "Photorealistic 3D Visualizations & Virtual Walkthroughs",
      "Material Spec Sheets & Lighting Design",
      "Color Psychology & African Cultural Motifs",
      "Acoustic & Environmental Comfort Integration"
    ],
    deliverables: [
      "Full Architectural Concept Plans",
      "3D Rendering Packages",
      "MEP & Lighting Coordination Schematics",
      "On-Site Supervision & Contractor Coordination"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "furniture-manufacturing",
    title: "Furniture Design & In-House Manufacturing",
    category: "furniture",
    badge: "Dual Advantage",
    shortDesc: "Precision-engineered bespoke furniture designed from scratch and crafted in our own Nigerian manufacturing facility.",
    description: "Unlike decorators who purchase ready-made or imported flat-pack items, Spacevamp controls the entire manufacturing line. We kiln-dry local hardwoods, laser-cut metals, join, upholster, and hand-finish every piece for lifelong structural durability.",
    highlights: [
      "Kiln-Dried Nigerian Hardwoods (Iroko, Teak, Obeche)",
      "CNC Joinery & Custom Metal Fabrication",
      "Marine-Grade Polyurethane & Hand-Rubbed Oil Finishes",
      "High-Resilience Multi-Density Upholstery",
      "Direct Factory Pricing Without Importer Markups"
    ],
    deliverables: [
      "Custom Executive Boardroom & Workstation Desks",
      "Architectural Wall-to-Wall Wardrobes & Walk-in Closets",
      "Precision Chef & Residential Kitchen Cabinetry",
      "Signature Lounge Seating, Sofas & Dining Suites"
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "turnkey-corporate-fitouts",
    title: "Turnkey Corporate & Office Fit-Outs",
    category: "turnkey",
    badge: "B2B Solutions",
    shortDesc: "Complete workspace planning and manufacturing for enterprises, headquarters, and creative agencies across Nigeria.",
    description: "From reception desks that communicate corporate stature to ergonomic multi-pod workstations and executive boardrooms that foster strategic collaboration. We handle demolition, drywall, joinery, and furniture installation on schedule.",
    highlights: [
      "Executive Suite Desks & Storage Credenzas",
      "Multi-Occupant Ergonomic Workstations & Cable Management",
      "Acoustic Meeting Pods & Conference Systems",
      "Corporate Reception Statement Counters & Lounges",
      "Fast-Track Phased Execution to Minimize Office Downtime"
    ],
    deliverables: [
      "Turnkey Workspace Planning & Approvals",
      "Custom Office Furniture Manufacturing",
      "Architectural Glass Partitions & Ceilings",
      "Post-Handover Maintenance & Warranty"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "developer-packages",
    title: "Developer Turnkey Furniture & Joinery Packages",
    category: "turnkey",
    badge: "Volume Production",
    shortDesc: "Scalable furnishing and cabinetry packages for property developers, estates, and serviced apartments.",
    description: "We partner with real estate developers and estate builders to produce coordinated kitchen cabinetry, wardrobes, vanity units, and fully furnished show homes that accelerate off-plan property sales.",
    highlights: [
      "Standardized Precision Cabinetry for Multi-Unit Developments",
      "Show-Home Interior Staging & Premium Furnishing",
      "Durable High-Traffic Materials & Moisture-Resistant Boards",
      "Bulk Production Cost Efficiencies for 10 to 100+ Units",
      "Guaranteed Handover Timelines & Dedicated Project Managers"
    ],
    deliverables: [
      "Unit-by-Unit Kitchen & Wardrobe Systems",
      "Vanity Units & Storage Integration",
      "Complete Turnkey Staging for Model Apartments",
      "Developer Warranty & On-Call Maintenance"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "hospitality-custom",
    title: "Hospitality & Restaurant Environments",
    category: "interior",
    badge: "Atmosphere & High Traffic",
    shortDesc: "Bespoke banquette seating, hotel guest-room furniture, and dining installations built for enduring hospitality wear.",
    description: "Creating immersive guest experiences for luxury boutique hotels, restaurants, lounges, and serviced apartments in Abuja, Lagos, and beyond. Every piece is engineered for rigorous hospitality traffic without sacrificing visual warmth.",
    highlights: [
      "Custom Curved Banquette Booths & Dining Tables",
      "Hotel Guest-Room Headboards, Wardrobes & Desks",
      "Cocktail Bar Facades & Custom Back-Bar Displays",
      "Stain-Resistant Commercial Grade Performance Fabrics",
      "African Cultural Texture Accents (Woven, Carved, Brass)"
    ],
    deliverables: [
      "Custom Restaurant Dining Sets & Bar Fixtures",
      "Boutique Hotel Room Packages",
      "Lounge Accents & Ambient Lighting Shelving",
      "On-Site Precision Installation"
    ],
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "trade-manufacturing",
    title: "Architect & Designer Manufacturing Partnership",
    category: "furniture",
    badge: "Trade Partnership",
    shortDesc: "Technical fabrication and contract manufacturing for independent architects, interior decorators, and contractors.",
    description: "Have a design ready for fabrication? Spacevamp serves as your trusted manufacturing arm in Nigeria. We interpret your CAD/DWG drawings, provide millwork shop drawings, manufacture to exact tolerances, and handle on-site installation.",
    highlights: [
      "Technical Shop Drawing Drafting & Material Sampling",
      "Strict Quality Control & Joinery Tolerances",
      "White-Label or Co-Branded Production Support",
      "Specialty Finishes (Fluted timber, lacquer, powder coat, stone inlay)",
      "Zero Importer Delay – 100% Manufactured Locally in Abuja"
    ],
    deliverables: [
      "Bespoke Prototype & Production Runs",
      "Material Physical Swatch Samples",
      "Professional Site Measurement & Installation",
      "Transparent Trade B2B Pricing Structure"
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
  }
];

export const TARGET_AUDIENCES = [
  {
    id: "residential",
    title: "Residential Clients",
    subtitle: "Homeowners & Families",
    description: "Transform your home with bespoke furniture and curated interiors that marry Nigerian cultural warmth with sleek modern comfort.",
    services: [
      "Living & Dining Suites",
      "Custom Walk-In Wardrobes",
      "Architectural Kitchens",
      "Master Bedroom Sanctuary",
      "Home Offices & Libraries"
    ],
    ctaText: "Design Your Home",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "corporate",
    title: "Corporate Clients",
    subtitle: "Businesses & Enterprises",
    description: "Elevate team productivity and project executive stature with custom office furniture, ergonomic workstations, and tailored boardrooms.",
    services: [
      "Executive Suites",
      "Reception Counters",
      "Conference & Boardrooms",
      "Multi-Desk Workstations",
      "Acoustic Focus Booths"
    ],
    ctaText: "Request Corporate Fit-Out",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "developers",
    title: "Property Developers",
    subtitle: "Estates & Multi-Unit Builders",
    description: "Maximize property ROI and sell off-plan faster with coordinated kitchen packages, fitted wardrobes, and turnkey show homes.",
    services: [
      "Multi-Unit Kitchen Cabinetry",
      "Fitted Bedroom Wardrobes",
      "Show-Home Interior Staging",
      "Vanity Units & Millwork",
      "Bulk Volume Pricing"
    ],
    ctaText: "Discuss Developer Terms",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hospitality",
    title: "Hospitality Clients",
    subtitle: "Hotels, Lounges & Restaurants",
    description: "Craft unforgettable guest atmospheres with high-durability custom seating, statement cocktail bars, and boutique room fit-outs.",
    services: [
      "Curved Banquette Seating",
      "Restaurant Table Bases & Tops",
      "Hotel Bedroom Packages",
      "Bar Counters & Back-Displays",
      "High-Traffic Fabrics"
    ],
    ctaText: "Plan Hospitality Project",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "architects",
    title: "Architects & Contractors",
    subtitle: "Designers & Specifiers",
    description: "Your local Nigerian manufacturing partner. Bring your CAD designs to reality with factory precision joinery and prompt on-site installation.",
    services: [
      "Contract Fabrication",
      "Detailed Shop Drawings",
      "Sample & Material Swatches",
      "Dedicated Joinery Facility",
      "Trade Account Discounts"
    ],
    ctaText: "Partner as Specifier",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  }
];
