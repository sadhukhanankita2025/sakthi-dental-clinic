import React from "react";
import TreatmentCard from "./TreatmentCard";

const treatments = [
  {
    title: "Teeth Cleaning",
    category: "Preventive Care",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    painless: true,
    shortDesc:
      "Professional cleaning to keep your teeth healthy and your smile bright.",
    fullDesc:
      "Professional dental cleaning removes plaque, tartar and surface stains while helping maintain healthy teeth and gums.",
    duration: "30–45 min",
    recovery: "None",
    priceEstimate: "₹800+",
    benefits: [
      "Removes plaque and tartar",
      "Helps prevent gum disease",
      "Freshens breath",
      "Maintains oral hygiene",
    ],
  },

  {
    title: "Dental Implants",
    category: "Restorative",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    painless: true,
    shortDesc:
      "Natural-looking replacement for missing teeth with modern implant technology.",
    fullDesc:
      "Dental implants provide a stable and natural-looking solution for replacing missing teeth.",
    duration: "60–90 min",
    recovery: "Few days",
    priceEstimate: "₹25,000+",
    benefits: [
      "Natural appearance",
      "Strong and durable",
      "Improved chewing",
      "Long-term solution",
    ],
  },

  {
    title: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa2f4?auto=format&fit=crop&w=1200&q=80",
    painless: true,
    shortDesc:
      "Brighten your smile with professional teeth whitening treatment.",
    fullDesc:
      "Professional whitening treatment helps reduce stains and discoloration to create a brighter smile.",
    duration: "45–60 min",
    recovery: "None",
    priceEstimate: "₹5,000+",
    benefits: [
      "Brighter smile",
      "Professional treatment",
      "Quick procedure",
      "Minimal sensitivity",
    ],
  },
];

export default function Services({ onOpenAppointment }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-purple-600">
            Our Treatments
          </p>

          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Complete Dental Care
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Modern, comfortable and personalized dental treatments for your
            complete oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.title}
              treatment={treatment}
              onOpenAppointment={onOpenAppointment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}