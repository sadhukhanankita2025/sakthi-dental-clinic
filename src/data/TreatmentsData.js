export const TREATMENTS_CATEGORIES = [
  "All",
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Pediatric Dentistry",
  "Surgical & Implants",
];

export const TREATMENTS_DATA = [
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning (Scaling)",
    category: "General Dentistry",
    shortDesc:
      "Painless deep cleaning & polishing to remove plaque, calculus & stains.",
    fullDesc:
      "Professional dental scaling and polishing eliminates stubborn plaque, calculus deposits, and surface discoloration. It prevents gum disease, maintains fresh breath, and brightens your natural smile in a single comfortable visit.",
    iconName: "Sparkles",
    duration: "30 - 40 Mins",
    recovery: "Immediate",
    painless: true,
    priceEstimate: "₹800 - ₹1,500",
    image: "../src/assets/Treatments/Teeth Cleaning.png",
    benefits: [
      "Prevents Gingivitis",
      "Removes Tough Stains",
      "Freshens Breath",
      "Restores Natural Polish",
    ],
  },

  {
    id: "tooth-filling",
    title: "Tooth Filling",
    category: "General Dentistry",
    shortDesc:
      "Natural tooth-colored composite restorations for cavities and fractures.",
    fullDesc:
      "High-grade bio-compatible composite fillings seamlessly repair cavities, chips, and tooth decay. Customized to match your exact natural tooth shade, restoring strength and aesthetics seamlessly.",
    iconName: "ShieldCheck",
    duration: "30 Mins",
    recovery: "Same Day",
    painless: true,
    priceEstimate: "₹1,000 - ₹2,500",
    image: "/src/assets/Treatments/Tooth-Filling.jpg",
    benefits: [
      "Tooth-Colored Finish",
      "Mercury-Free Composite",
      "Prevents Further Decay",
      "Restores Full Chewing Power",
    ],
  },

  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    category: "General Dentistry",
    shortDesc:
      "Gentle and painless removal of severely damaged or infected teeth.",
    fullDesc:
      "Attentive, atraumatic tooth removal executed under precise local anesthesia to minimize discomfort. We provide complete post-care instructions and tooth replacement guidance for seamless recovery.",
    iconName: "Activity",
    duration: "20 - 40 Mins",
    recovery: "2 - 3 Days",
    painless: true,
    priceEstimate: "₹1,200 - ₹3,000",
    image: "/src/assets/Treatments/Teeth Extraction.png",
    benefits: [
      "Zero Pain Anesthesia",
      "Rapid Healing Protocol",
      "Infection Prevention",
      "Safe Gentle Removal",
    ],
  },

  {
    id: "artificial-denture",
    title: "Artificial Denture",
    category: "General Dentistry",
    shortDesc:
      "Custom removable full or partial dentures designed for comfort and clarity.",
    fullDesc:
      "Precision-crafted complete or partial acrylic and flexible dentures tailored to your facial contours. Restores confident speaking, effortless chewing, and natural facial shape.",
    iconName: "Smile",
    duration: "3 - 5 Sessions",
    recovery: "Instant Adaptation",
    painless: true,
    priceEstimate: "₹8,000 - ₹25,000",
    image: "/src/assets/Treatments/Artificial Complete Denture.png",
    benefits: [
      "Custom Ergonomic Fit",
      "Natural Facial Support",
      "Flexible Lightweight Options",
      "Easy Maintenance",
    ],
  },

  {
    id: "bleaching",
    title: "Teeth Bleaching",
    category: "Cosmetic Dentistry",
    shortDesc:
      "Advanced laser whitening system for a dazzling brighter smile.",
    fullDesc:
      "State-of-the-art teeth bleaching treatment that safely lightens years of coffee, tea, and aging stains.",
    iconName: "Sun",
    duration: "45 Mins",
    recovery: "Immediate",
    painless: true,
    priceEstimate: "₹5,000 - ₹12,000",
    image: "/src/assets/Treatments/Bleaching.png",
    benefits: [
      "Up to 8 Shades Whiter",
      "Enamel-Safe Formula",
      "Long-Lasting Radiance",
      "Instant Results",
    ],
  },

  {
    id: "orthodontics",
    title: "Orthodontics (Braces)",
    category: "Orthodontics",
    shortDesc:
      "Metal, ceramic, and self-ligating braces for perfect bite alignment.",
    fullDesc:
      "Correct crooked teeth, gaps, and bite irregularities with modern orthodontic solutions.",
    iconName: "Grid",
    duration: "12 - 18 Months",
    recovery: "Gradual Alignment",
    painless: false,
    priceEstimate: "₹25,000 - ₹60,000",
    image: "/src/assets/Treatments/Orthodonic-Treatment.png",
    benefits: [
      "Perfect Smile Alignment",
      "Corrects Overbite & Crossbite",
      "Aesthetic Ceramic Options",
      "Enhances Oral Hygiene",
    ],
  },

  {
    id: "dental-implant",
    title: "Dental Implant",
    category: "Surgical & Implants",
    shortDesc:
      "Permanent titanium root replacements topped with realistic crowns.",
    fullDesc:
      "The gold standard for missing teeth. Titanium posts fuse directly with jawbone to anchor natural-looking crowns.",
    iconName: "Zap",
    duration: "2 - 3 Sessions",
    recovery: "3 - 5 Days",
    painless: true,
    priceEstimate: "₹22,000 - ₹45,000",
    image: "/src/assets/Treatments/Impants.png",
    benefits: [
      "Lifelong Durability",
      "Prevents Bone Loss",
      "Looks & Feels Natural",
      "No Neighboring Tooth Damage",
    ],
  },

  {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    category: "Surgical & Implants",
    shortDesc:
      "Painless, drill-free laser treatments for gums, ulcers, and whitening.",
    fullDesc:
      "Advanced soft-tissue dental lasers allow precise, virtually bloodless gum reshaping and treatment.",
    iconName: "Cpu",
    duration: "15 - 30 Mins",
    recovery: "Fast Healing",
    painless: true,
    priceEstimate: "₹3,000 - ₹8,000",
    image: "/src/assets/Treatments/Laser-Surgery.png",
    benefits: [
      "Minimal to No Bleeding",
      "No Drill Noise",
      "Accelerated Healing",
      "High Precision",
    ],
  },

  {
    id: "root-canal",
    title: "Root Canal Treatment",
    category: "General Dentistry",
    shortDesc:
      "Single-sitting pain relief technology to save severely infected teeth.",
    fullDesc:
      "Rotary endodontic therapy cleans and seals infected tooth canals quickly and painlessly.",
    iconName: "HeartPulse",
    duration: "45 Mins",
    recovery: "1 - 2 Days",
    painless: true,
    priceEstimate: "₹3,500 - ₹7,000",
    image: "/src/assets/Treatments/Root Canal Treatment.png",
    benefits: [
      "Instant Pain Elimination",
      "Preserves Natural Tooth",
      "Single Sitting Available",
      "Seals Against Bacteria",
    ],
  },

  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Removal",
    category: "Surgical & Implants",
    shortDesc:
      "Specialized surgical extraction of impacted or painful wisdom teeth.",
    fullDesc:
      "Expert surgical removal of impacted, tilted, or painful third molars.",
    iconName: "ShieldAlert",
    duration: "30 - 50 Mins",
    recovery: "3 - 5 Days",
    painless: true,
    priceEstimate: "₹4,000 - ₹9,000",
    image: "/src/assets/Treatments/Wisdom Teeth Removal.png",
    benefits: [
      "Prevents Jaw Crowding",
      "Relieves Deep Jaw Pain",
      "Painless Surgical Technique",
      "Complete Anti-Swelling Protocol",
    ],
  },

  {
    id: "bridge",
    title: "Crown & Bridge",
    category: "General Dentistry",
    shortDesc:
      "High-strength crowns to cap damaged or replace missing teeth.",
    fullDesc:
      "Custom-designed Zirconia and E-max ceramic crowns restore weakened teeth and missing tooth spaces.",
    iconName: "Layers",
    duration: "2 Visits",
    recovery: "Immediate",
    painless: true,
    priceEstimate: "₹4,500 - ₹15,000",
    image: "/src/assets/Treatments/Fixed Partial Denture.png",
    benefits: [
      "100% Metal-Free Options",
      "Custom Color Match",
      "Superior Bite Strength",
      "Long-Lasting Restoration",
    ],
  },

  {
    id: "veneers",
    title: "Dental Veneers",
    category: "Cosmetic Dentistry",
    shortDesc:
      "Ultra-thin porcelain shells for beautiful smile makeovers.",
    fullDesc:
      "Custom handcrafted porcelain laminates bonded to the front of teeth to conceal gaps, stains, chips, and uneven lengths.",
    iconName: "Star",
    duration: "2 Visits",
    recovery: "Same Day",
    painless: true,
    priceEstimate: "₹8,000 - ₹18,000 / tooth",
    image: "/src/assets/Treatments/Veneer Treatment.jpg",
    benefits: [
      "Stain-Resistant Surface",
      "Hollywood Smile Aesthetics",
      "Minimal Enamel Shaving",
      "Long-Lasting Color",
    ],
  },

  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "Pediatric Dentistry",
    shortDesc:
      "Warm, anxiety-free dental care specially tailored for children.",
    fullDesc:
      "Kid-friendly dental care specializing in preventive treatments and gentle pediatric procedures.",
    iconName: "Smile",
    duration: "20 - 30 Mins",
    recovery: "Immediate",
    painless: true,
    priceEstimate: "₹600 - ₹2,000",
    image: "/src/assets/Treatments/Pediatric-dentistry.png",
    benefits: [
      "Playful Environment",
      "Preventative Cavity Shield",
      "Painless Techniques",
      "Habit Correction Guidance",
    ],
  },

  {
    id: "flap-surgery",
    title: "Flap Surgery",
    category: "Surgical & Implants",
    shortDesc:
      "Deep periodontal surgery to treat advanced gum infection.",
    fullDesc:
      "Surgical gum treatment designed to clean deep bacterial pockets around the bone.",
    iconName: "Crosshair",
    duration: "60 Mins",
    recovery: "4 - 7 Days",
    painless: true,
    priceEstimate: "₹10,000 - ₹22,000",
    image: "/src/assets/Treatments/Flap-surgery.png",
    benefits: [
      "Stops Gum Bleeding",
      "Firms Up Loose Teeth",
      "Regenerates Bone",
      "Deep Pocket Elimination",
    ],
  },

  {
    id: "aligners",
    title: "Clear Aligners",
    category: "Orthodontics",
    shortDesc:
      "Nearly invisible, removable aligner trays to straighten teeth discreetly.",
    fullDesc:
      "3D-scanned custom transparent aligners that shift teeth without wires or brackets.",
    iconName: "CheckCircle2",
    duration: "6 - 12 Months",
    recovery: "Convenient",
    painless: true,
    priceEstimate: "₹45,000 - ₹1,20,000",
    image: "/src/assets/Treatments/Aligner.png",
    benefits: [
      "Virtually Invisible",
      "Removable for Dining",
      "3D Digital Treatment Plan",
      "Zero Metal Irritation",
    ],
  },
];