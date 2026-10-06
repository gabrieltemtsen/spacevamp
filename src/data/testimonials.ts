export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  location: string;
  quote: string;
  projectType: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    clientName: "Engr. Nnamdi Okonjo",
    role: "Managing Director",
    organization: "Apex Horizon Properties",
    location: "Maitama, Abuja",
    quote: "Working with Spacevamp transformed our show-home turnaround. Instead of waiting 16 weeks for imported furniture containers with customs surprises, their Abuja manufacturing plant delivered better quality bespoke joinery in under 4 weeks. Every buyer commented on the kitchen and wardrobe finish.",
    projectType: "Multi-Unit Luxury Developer Package",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    clientName: "Amina Bello-Danjuma",
    role: "Chief Operating Officer",
    organization: "Stratos Capital Partners",
    location: "Central Business District, Abuja",
    quote: "Spacevamp doesn't just sell you chairs; their design team took our raw concrete floor, drafted a complete acoustic workspace plan, and manufactured the entire boardroom and 40 team workstations. The smart value proposition is genuine — world-class corporate standards without inflated importer markups.",
    projectType: "Corporate Turnkey Office Fit-Out",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    clientName: "Dr. & Mrs. Farouk Al-Hassan",
    role: "Homeowners",
    organization: "Private Residence",
    location: "Guzape, Abuja",
    quote: "We wanted a home that felt unmistakably African yet completely modern, uncluttered, and serene. The solid Iroko dining table and custom fluted bedroom wardrobes Spacevamp created are works of art. Their installation team was polite, punctual, and left the house spotless.",
    projectType: "Complete Residential Villa Transformation",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t4",
    clientName: "Arc. Tunde Adeyemi, MNIA",
    role: "Principal Architect",
    organization: "Form & Void Atelier",
    location: "Victoria Island, Lagos",
    quote: "As an architect, finding a Nigerian joinery company capable of translating millimeter-precise CAD details into real wood and steel has always been challenging. Spacevamp is our go-to manufacturing partner. Their technical know-how and joinery tolerances are superb.",
    projectType: "Architectural Millwork Collaboration",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    question: "Do you only sell furniture or also provide complete interior design?",
    answer: "Spacevamp operates across both complementary areas. We offer full spatial interior design (space planning, 3D renderings, lighting, acoustic layouts) AND we operate our own in-house furniture manufacturing facility. You can engage us for turnkey interior design + production, or commission specific bespoke furniture pieces."
  },
  {
    question: "Where is your manufacturing facility located?",
    answer: "Our primary manufacturing and joinery facility is situated in the industrial hub of Abuja, Federal Capital Territory, Nigeria. We maintain direct control over raw material seasoning, CNC cutting, welding, spray finishing, and quality control."
  },
  {
    question: "Do you deliver and install outside of Abuja?",
    answer: "Yes! We regularly deliver and execute full turnkey installations across Lagos, Port Harcourt, Kano, Ibadan, and nationwide. Our factory-trained logistics and installation crew handles delivery, assembly, and final handover on-site."
  },
  {
    question: "How do your prices compare to imported furniture?",
    answer: "Our core ethos is 'Smart value without compromising quality.' Because we manufacture locally with sustainable Nigerian timber and in-house steel fabrication, you avoid foreign exchange volatility, high maritime freight tariffs, and middleman import margins. You receive solid hardwood joinery built to last decades at realistic prices."
  },
  {
    question: "Can you fabricate custom designs provided by my architect or designer?",
    answer: "Absolutely. We have a dedicated trade program for architects, interior decorators, and developers. You can submit CAD/DWG drawings or sketches, and we produce millwork shop drawings, fabricate to exact tolerances, and handle installation."
  },
  {
    question: "What is your typical lead time for bespoke furniture or full fit-outs?",
    answer: "Single bespoke pieces typically take 2 to 3 weeks from design approval. Complete residential or corporate office fit-outs range from 3 to 6 weeks, depending on project scale. We provide a firm milestone schedule before production begins."
  }
];
