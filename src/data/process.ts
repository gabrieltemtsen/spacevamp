export interface ProcessStep {
  step: number;
  id: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
  engineeringPillar: string;
  duration: string;
  image: string;
}

export const EXECUTION_PROCESS: ProcessStep[] = [
  {
    step: 1,
    id: "concept",
    title: "Needs Discovery & Concept",
    tagline: "Understanding the Space & Defining Function",
    description: "Every great space starts with rigorous inquiry. We analyze human traffic flows, lifestyle habits, brand identity, architectural constraints, and spatial efficiency. We clarify what the space needs to accomplish before drawing a single line.",
    activities: [
      "On-site laser spatial measuring and structural assessment",
      "Client lifestyle / corporate workflow interview",
      "Spatial ergonomics and functional zoning analysis",
      "Moodboards combining African cultural textures with modern lines",
      "Budget alignment and value engineering strategy"
    ],
    deliverable: "Spatial Brief & Creative Direction Blueprint",
    engineeringPillar: "Human Ergonomics & Space Analysis",
    duration: "3 – 5 Days",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    step: 2,
    id: "design",
    title: "Design & Technical 3D Modeling",
    tagline: "Photorealistic Renderings & Millwork Schematics",
    description: "We translate the brief into millimeter-accurate 3D visualizations and engineering millwork shop drawings. You see exactly how materials, lighting, grain textures, and proportions interact before production commences.",
    activities: [
      "Photorealistic 4K 3D space rendering and lighting simulations",
      "Detailed CAD millwork joinery and joinery cutting lists",
      "Physical material palette curation (wood stains, metal swatches, fabrics)",
      "Ergonomic clearances and mechanical MEP coordination",
      "Sign-off of 100% transparent quotation and specifications"
    ],
    deliverable: "Approved 3D Renders & Technical Millwork Package",
    engineeringPillar: "Parametric CAD & Precision Drafting",
    duration: "5 – 10 Days",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    step: 3,
    id: "production",
    title: "Factory Production & Joinery",
    tagline: "In-House Manufacturing in Abuja, Nigeria",
    description: "This is what separates Spacevamp from typical decorators. In our manufacturing facility, raw sustainable timber is kiln-seasoned, metals are precision cut and welded, CNC machinery executes intricate joints, and master joiners hand-assemble every element.",
    activities: [
      "Kiln-seasoning of Nigerian hardwoods (Iroko, Teak, Obeche) to prevent warping",
      "CNC routing, mortise-and-tenon and dowel structural jointing",
      "TIG/MIG metal fabrication and architectural powder coating",
      "Custom veneer pressing and edge banding",
      "High-density multi-layer foam cutting and artisan upholstery"
    ],
    deliverable: "Precision-Crafted Furniture & Millwork Modules",
    engineeringPillar: "Direct Manufacturing & Artisan Joinery",
    duration: "2 – 4 Weeks",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
  },
  {
    step: 4,
    id: "quality",
    title: "Quality Assurance & Finishing",
    tagline: "Multi-Coat Finishes & Structural Load Testing",
    description: "Before any item leaves our facility, it undergoes multi-stage surface finishing in dust-free spray booths, followed by rigorous hardware cycle testing and load endurance inspections.",
    activities: [
      "Multi-coat polyurethane, conversion varnish, and eco hardwax oil application",
      "Soft-close drawer slides and hinge 50,000-cycle durability checks",
      "Surface flatness and joinery gap tolerances (<0.5mm standard)",
      "Protective foam wrapping and crate packaging for site transport",
      "Pre-installation quality inspection sign-off"
    ],
    deliverable: "Quality Certification & Protected Dispatch",
    engineeringPillar: "Dust-Free Spray Finishing & Stress Testing",
    duration: "3 – 5 Days",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
  },
  {
    step: 5,
    id: "installation",
    title: "Installation & Finished Space",
    tagline: "White-Glove Assembly & Turnkey Handover",
    description: "Our factory-trained installation team delivers and installs your bespoke pieces on-site with meticulous cleanliness. We align every cabinet, hang every panel, test every mechanism, and hand over a finished space ready for life.",
    activities: [
      "White-glove logistical transport to site (Abuja, Lagos, nationwide)",
      "Precision laser leveling and wall-anchoring installation",
      "Integrated LED ambient lighting connection and testing",
      "Post-installation cleanup and surface polishing",
      "Final walkthrough with client and warranty documentation handover"
    ],
    deliverable: "Turnkey Finished Space & Spacevamp Warranty Certificate",
    engineeringPillar: "Seamless Site Integration & Client Handover",
    duration: "1 – 4 Days",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
  }
];
