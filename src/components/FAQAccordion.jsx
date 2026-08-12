import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS_DATA } from "../data/faqsData";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQS_DATA.map((faq, index) => (
        <div
          key={faq.id || index}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
        >
          {/* Question Button */}
          <button
            type="button"
            onClick={() => handleToggle(index)}
            aria-expanded={openIndex === index}
            className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors duration-200"
          >
            {/* Question */}
            <span className="text-base sm:text-lg font-bold text-slate-900 leading-6">
              {faq.question}
            </span>

            {/* Arrow */}
            <ChevronDown
              className={`w-5 h-5 shrink-0 text-[#0D9488] transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm sm:text-base text-slate-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}