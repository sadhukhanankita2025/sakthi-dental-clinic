import parkingIcon from "../assets/Amenities-icons/Icon-parking.png";
import wheelchairIcon from "../assets/Amenities-icons/Icon-wheel-chair.png";
import pickupIcon from "../assets/Amenities-icons/Icon-pickup.png";
import doctorsIcon from "../assets/Amenities-icons/Icon-doctors.png";
import cityCenterIcon from "../assets/Amenities-icons/Icon-city-center.png";
import playIcon from "../assets/Amenities-icons/Play-Lounge.png";
import xrayIcon from "../assets/Amenities-icons/3D CBCT & Low Radiation X-Ray.png";
import sterilizationIcon from "../assets/Amenities-icons/Sterilization.png";


export const FACILITIES_DATA = [
  {
    id: "parking",
    title: "Spacious Parking",
    desc: "Valet and reserved 4-wheeler & 2-wheeler parking for hassle-free clinic visits.",
    iconName: "Car",
    image: parkingIcon,
    color: "from-teal-500 to-cyan-600",
  },

  {
    id: "wheelchair",
    title: "Wheelchair Accessible",
    desc: "Ramp entry, wide elevators, and accessible treatment suites for senior citizens.",
    iconName: "Accessibility",
    image: wheelchairIcon,
    color: "from-cyan-500 to-sky-600",
  },

  {
    id: "pickup-drop",
    title: "Patient Pickup & Drop",
    desc: "Complimentary cab arrangements for post-surgery and elderly patients on request.",
    iconName: "Truck",
    image: pickupIcon,
    color: "from-emerald-500 to-teal-600",
  },

  {
    id: "doctors-available",
    title: "24/7 Specialist Doctors",
    desc: "In-house oral surgeons and emergency dental team ready around the clock.",
    iconName: "UserCheck",
    image: doctorsIcon,
    color: "from-teal-600 to-sky-600",
  },

  {
    id: "central-location",
    title: "Prime Central Location",
    desc: "Located on Main Metro Junction with easy bus, train, and highway connectivity.",
    iconName: "MapPin",
    image: cityCenterIcon,
    color: "from-cyan-500 to-blue-600",
  },

  {
    id: "kids-zone",
    title: "Pediatric Play Lounge",
    desc: "Interactive games, cartoons, and play corner to keep children happy and anxiety-free.",
    iconName: "Gamepad2",
    image: playIcon,
    color: "from-amber-400 to-orange-500",
  },

  {
    id: "digital-xray",
    title: "3D CBCT & Low Radiation X-Ray",
    desc: "Ultra-precise digital imaging for painless diagnosis with 90% reduced radiation.",
    iconName: "Scan",
    image: xrayIcon,
    color: "from-emerald-400 to-teal-600",
  },

  {
    id: "sterilization",
    title: "Class-B Autoclave Sterilization",
    desc: "German standard 7-step sterilization protocol ensuring 100% sterile instruments.",
    iconName: "ShieldCheck",
    image: sterilizationIcon,
    color: "from-blue-600 to-cyan-500",
  },
];