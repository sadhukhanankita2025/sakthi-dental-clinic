import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQS_DATA } from "../data/faqsData";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <div className="relative">

      {/* Purple Glow */}
      <div className="
        absolute
        -inset-3
        bg-purple-500/10
        blur-2xl
        rounded-3xl
        pointer-events-none
      " />

      {/* Scrollable FAQ Card */}
      <div className="
        relative
        h-[430px]
        overflow-y-auto
        pr-1
        space-y-3
        scroll-smooth
      ">

        {FAQS_DATA.map((faq, index) => (
          <motion.div
            key={faq.id || index}
            layout
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              shadow-sm
              overflow-hidden
              transition-all
              duration-300
              hover:border-purple-300
              hover:shadow-lg
              hover:shadow-purple-500/10
            "
          >

            {/* Question */}
            <button
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
              className="
                w-full
                flex
                items-center
                justify-between
                gap-4
                p-4
                sm:p-5
                text-left
                hover:bg-purple-50/60
                transition-colors
                duration-200
              "
            >

              {/* Question Number + Text */}
              <div className="flex items-start gap-3">

                <span className="
                  shrink-0
                  w-8
                  h-8
                  rounded-xl
                  bg-purple-100
                  text-purple-700
                  flex
                  items-center
                  justify-center
                  text-[11px]
                  font-black
                ">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="
                  text-sm
                  sm:text-base
                  font-bold
                  text-slate-900
                  leading-6
                ">
                  {faq.question}
                </span>

              </div>

              {/* Arrow */}
              <motion.div
                animate={{
                  rotate: openIndex === index ? 180 : 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  shrink-0
                  w-8
                  h-8
                  rounded-full
                  bg-purple-100
                  text-purple-600
                  flex
                  items-center
                  justify-center
                "
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>

            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>

              {openIndex === index && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >

                  <div className="px-4 sm:px-5 pb-5">

                    <div className="
                      ml-11
                      border-t
                      border-purple-100
                      pt-3
                    ">

                      <p className="
                        text-xs
                        sm:text-sm
                        text-slate-600
                        leading-7
                      ">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </motion.div>
        ))}

      </div>

    </div>
  );
}