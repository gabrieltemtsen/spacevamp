export interface MaterialItem {
  id: string;
  name: string;
  category: "hardwood" | "metal" | "finish" | "upholstery";
  origin: string;
  characteristics: string[];
  bestUsedFor: string;
  durabilityRating: string;
  description: string;
  image: string;
}

export const MATERIALS_LIBRARY: MaterialItem[] = [
  {
    id: "iroko",
    name: "Nigerian Iroko Hardwood",
    category: "hardwood",
    origin: "Sustainable Forests, Southern & Central Nigeria",
    characteristics: ["Extreme rot & insect resistance", "Rich golden-brown grain that deepens with age", "Dense structural hardness"],
    bestUsedFor: "Heavy dining tables, outdoor pergolas, architectural doors, statement credenzas",
    durabilityRating: "25+ Years (Kiln-Dried)",
    description: "Often called 'African Teak', Iroko is revered across West Africa for its rock-solid longevity and natural oil resistance. At Spacevamp, every board is moisture-calibrated down to 8-10% to prevent tropical warping.",
    image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "obeche",
    name: "Seasoned Obeche Timber",
    category: "hardwood",
    origin: "West African Native Timber Reserves",
    characteristics: ["Lightweight yet remarkably stable", "Uniform cream-straw tone", "Flawless for intricate CNC milling & carving"],
    bestUsedFor: "Curved banquette internal framing, architectural wall baffles, fluted interior paneling",
    durabilityRating: "High Stability (Internal)",
    description: "A silky, workable West African hardwood that takes stain and lacquer uniformly. Ideal for lightweight architectural installations and organic sculptural curves.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "metal-powdercoat",
    name: "Architectural Electrostatic Steel",
    category: "metal",
    origin: "Engineered in Abuja Factory",
    characteristics: ["Matte textured micro-crackle finish", "Zero chipping or peeling", "Corrosion & scratch resistant"],
    bestUsedFor: "Executive desk legs, modular workstation frames, glass partition mullions, shelving supports",
    durabilityRating: "Commercial Grade 100k Cycles",
    description: "Laser-cut tubular and flat-bar steel welded with precision TIG seams, bead-blasted, and electrostatically powder coated in deep obsidian charcoal, sand champagne, or satin black.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "brushed-brass",
    name: "Solid Brushed & Patinated Brass",
    category: "metal",
    origin: "Custom Cast & CNC Turned",
    characteristics: ["Warm reflective luxury", "Micro-protective clear lacquer coat", "Tactile weight & authentic patina"],
    bestUsedFor: "Cabinet pull handles, dining table leg collars, reception counter trim, custom lighting stems",
    durabilityRating: "Lifetime Solid Metal",
    description: "Pure architectural brass custom-milled to Spacevamp's signature minimalist profiles. Provides an elegant gold warm accent echoing our brand emblem.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boucle-velvet",
    name: "High-Rub Commercial Bouclé & Velvets",
    category: "upholstery",
    origin: "Certified Performance Textiles",
    characteristics: ["Martindale >50,000 rubs", "Stain-repellent nanotechnology", "Warm tactile comfort & acoustic absorption"],
    bestUsedFor: "Living room accent armchairs, modular sectionals, hospitality dining chairs, headboards",
    durabilityRating: "High Traffic Commercial",
    description: "Carefully selected woven bouclés and matte velvets that resist everyday spills while providing plush, welcoming tactile comfort.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "polyurethane-matte",
    name: "Low-VOC Multi-Layer Matte Finishes",
    category: "finish",
    origin: "Eco-Conscious Formulations",
    characteristics: ["Zero unpleasant solvent smell", "Natural open-grain touch", "Resists hot coffee cups & alcohol spills"],
    bestUsedFor: "Conference tables, chef kitchen surfaces, executive credenzas, bedroom suites",
    durabilityRating: "Heat & Liquid Resistant",
    description: "Specialized hardwearing topcoats that highlight the natural African timber grain while shielding surfaces from humidity, sunlight, and everyday use.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
  }
];
