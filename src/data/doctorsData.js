export const DOCTORS_DATA = [
  {
    id: "dr-sakthi",
    name: "Dr. Sakthi Saravanan",
    role: "Chief Dental Surgeon & Lead Implantologist",
    qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
    experience: "20+ Years Clinical Practice",
    regNo: "TN Dental Council Reg. No. 12845",
    specialty: "3D Guided Implants, Laser Surgery, Complex Wisdom Teeth",
    rating: 4.9,
    reviewsCount: 1420,
    proceduresDone: "5,000+ Implants Placed",
    memberships: [
      "Fellow, International Congress of Oral Implantologists (FICOI - USA)",
      "Member, Indian Dental Association (IDA)",
      "Life Member, Association of Oral & Maxillofacial Surgeons of India (AOMSI)"
    ],
    availableDays: "Mon - Sat (9:00 AM - 8:00 PM)",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    bio: "Pioneer in flapless 3D computer-guided dental implants and painless laser oral surgery. Dr. Sakthi has trained internationally in Germany & Switzerland."
  },
  {
    id: "dr-ananya",
    name: "Dr. Ananya Sakthi",
    role: "Senior Consultant - Women & Pediatric Dentistry",
    qualifications: "BDS, MDS (Pedodontics & Preventive Dentistry)",
    experience: "14+ Years Clinical Practice",
    regNo: "TN Dental Council Reg. No. 18920",
    specialty: "Anxiety-Free Pediatric Dentistry, Smile Design, Maternity Care",
    rating: 5.0,
    reviewsCount: 980,
    proceduresDone: "10,000+ Happy Kids Treated",
    memberships: [
      "Executive Member, Indian Society of Pedodontics & Preventive Dentistry (ISPPD)",
      "Certified Conscious Sedation Specialist",
      "Member, International Association of Paediatric Dentistry (IAPD)"
    ],
    availableDays: "Mon - Sat (10:00 AM - 7:00 PM)",
    image: "https://images.unsplash.com/photo-1594824813566-788534771db6?auto=format&fit=crop&q=80&w=600",
    bio: "Renowned for her empathetic approach toward children and pregnant women. Specializes in preventive fluoride therapies and painless cavity treatments."
  },
  {
    id: "dr-rohit",
    name: "Dr. Rohit Verma",
    role: "Senior Orthodontist & Aligner Specialist",
    qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experience: "12+ Years Clinical Practice",
    regNo: "TN Dental Council Reg. No. 21450",
    specialty: "3D Clear Aligners, Ceramic Braces, Jaw Growth Modulation",
    rating: 4.9,
    reviewsCount: 760,
    proceduresDone: "3,200+ Aligner & Braces Cases",
    memberships: [
      "Invisalign Certified Diamond Provider",
      "Active Member, Indian Orthodontic Society (IOS)",
      "Member, World Federation of Orthodontists (WFO - USA)"
    ],
    availableDays: "Tue, Thu, Sat (2:00 PM - 8:00 PM)",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    bio: "Expert in digital clear aligner treatment planning. Uses 3D intraoral optical scanners to simulate smile transformations before treatment begins."
  },
  {
    id: "dr-priya",
    name: "Dr. Priya Ramakrishnan",
    role: "Endodontist (Root Canal Specialist)",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "10+ Years Clinical Practice",
    regNo: "TN Dental Council Reg. No. 24110",
    specialty: "Single-Sitting Micro-Endodontics, Laser Disinfection",
    rating: 4.8,
    reviewsCount: 650,
    proceduresDone: "8,000+ Painless Root Canals",
    memberships: [
      "Member, Indian Endodontic Society (IES)",
      "Certified Microscopic Endodontics Specialist",
      "Member, Federation of Operative Dentistry of India (FODI)"
    ],
    availableDays: "Mon - Fri (11:00 AM - 6:00 PM)",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    bio: "Master of single-visit rotary root canals performed under surgical operating microscopes, saving severely infected natural teeth with 99.4% success."
  }
];

export const CLINIC_SPECIALTIES = [
  {
    id: "spec-implants",
    title: "3D Computer-Guided Implantology",
    tagline: "Permanent tooth replacement with lifetime warranty",
    iconName: "Stethoscope",
    keyStats: "5,000+ Implants • 99.2% Success Rate",
    techUsed: "German CBCT 3D X-Ray & Swiss Titanium Implants",
    description: "Flapless, keyhole implant placement guided by 3D digital scans for immediate loading and zero post-op swelling.",
    highlights: ["Surgical Precision", "Lifetime Warranty", "Natural Chewing Power"]
  },
  {
    id: "spec-rct",
    title: "Rotary Micro-Endodontics (RCT)",
    tagline: "Single-visit painless root canal therapy",
    iconName: "Zap",
    keyStats: "8,000+ RCTs • 30 Min Session",
    techUsed: "Carl Zeiss Dental Microscope & Computerized Anesthesia",
    description: "Precision nerve cleaning using German rotary files and laser sterilizing beams. Pain is eliminated before procedure starts.",
    highlights: ["Single Sitting", "Zero Needle Pain", "99.4% Tooth Saving"]
  },
  {
    id: "spec-ortho",
    title: "Digital Orthodontics & Clear Aligners",
    tagline: "Invisalign & invisible aligner alignment",
    iconName: "Sparkles",
    keyStats: "3,200+ Cases • 3D Scan Simulation",
    techUsed: "iTero Element 5D Intraoral Scanner",
    description: "Straighten misaligned teeth using custom medical-grade clear aligner trays without metal wires or mouth sores.",
    highlights: ["100% Removable", "Invisible Aesthetics", "0% Interest EMI"]
  },
  {
    id: "spec-pediatric",
    title: "Anxiety-Free Pediatric Dentistry",
    tagline: "Gentle child-friendly dental play environment",
    iconName: "Heart",
    keyStats: "10,000+ Happy Kids • Play Lounge",
    techUsed: "Pain-Free Wand Anesthesia & Nitrous Sedation",
    description: "Dedicated kid-friendly treatment lounge with cartoon displays, preventive fluoride varnish, and painless cavity fillings.",
    highlights: ["Fear-Free Protocol", "Preventive Fluoride", "Kids Play Suite"]
  },
  {
    id: "spec-laser",
    title: "Laser Periodontics & Gum Care",
    tagline: "Bloodless gum reshaping & deep cleaning",
    iconName: "ShieldCheck",
    keyStats: "100% Bloodless • Quick Recovery",
    techUsed: "Biolase Waterlase Diode Laser System",
    description: "Treat bleeding gums, pyorrhea, and dark gum hyperpigmentation without scalpels, sutures, or heavy bleeding.",
    highlights: ["No Scalpel / Sutures", "Instant Healing", "Gummy Smile Correction"]
  },
  {
    id: "spec-cosmetic",
    title: "Cosmetic Veneers & Digital Smile Design",
    tagline: "Hollywood porcelain veneers & teeth whitening",
    iconName: "Award",
    keyStats: "1-Hour Whitening • Porcelain Veneers",
    techUsed: "Digital Smile Design (DSD) Software & Zoom Bleaching",
    description: "Transform discolored, chipped, or gapped teeth into a stunning picture-perfect smile customized to your facial symmetry.",
    highlights: ["Custom Shade Match", "1-Hour Transformation", "Stain Resistant"]
  }
];
