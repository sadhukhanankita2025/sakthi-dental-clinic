import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQS_DATA } from "../data/faqsData";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="relative w-full">
      {/* =====================================================
          PURPLE GLOW BACKGROUND
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-3xl
          bg-purple-500/10
          blur-2xl
        "
      />

      {/* =====================================================
          FAQ SCROLL CONTAINER
          Shows approximately 4 questions at a time
      ====================================================== */}
      <div
        className="
          relative
          h-107.5
          overflow-y-auto
          overscroll-contain
          scroll-smooth
          pr-2
          space-y-3

          scrollbar-thin
          scrollbar-thumb-purple-300
          scrollbar-track-purple-50

          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-purple-50
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-purple-300
          hover:[&::-webkit-scrollbar-thumb]:bg-purple-500
        "
      >
        {FAQS_DATA.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.id || index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.04, 0.3),
              }}
              whileHover={{
                y: -2,
              }}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                border
                bg-white
                transition-all
                duration-300

                ${
                  isOpen
                    ? "border-purple-400 shadow-xl shadow-purple-500/15"
                    : "border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10"
                }
              `}
            >
              {/* =================================================
                  PURPLE ACTIVE GLOW
              ================================================== */}
              {isOpen && (
                <motion.div
                  layoutId="faq-active-glow"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-linear-to-r
                    from-purple-50
                    via-white
                    to-indigo-50
                  "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* =================================================
                  QUESTION BUTTON
              ================================================== */}
              <button
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id || index}`}
                className="
                  relative
                  z-10
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-4
                  sm:p-5
                  text-left
                  transition-all
                  duration-200
                  hover:bg-purple-50/50
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple-500
                  focus-visible:ring-inset
                "
              >
                {/* =================================================
                    QUESTION NUMBER + TEXT
                ================================================== */}
                <div className="flex items-start gap-3 min-w-0">
                  <motion.span
                    animate={{
                      scale: isOpen ? 1.08 : 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      shrink-0
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      rounded-xl
                      text-[11px]
                      font-black
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                          : "bg-purple-100 text-purple-700"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  <span
                    className={`
                      text-sm
                      sm:text-base
                      font-bold
                      leading-6
                      transition-colors
                      duration-200

                      ${
                        isOpen
                          ? "text-purple-900"
                          : "text-slate-900"
                      }
                    `}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* =================================================
                    ARROW
                ================================================== */}
                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                    scale: isOpen ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                  className={`
                    shrink-0
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                        : "bg-purple-100 text-purple-600"
                    }
                  `}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* =================================================
                  ANSWER
              ================================================== */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id || index}`}
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
                      height: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    }}
                    className="relative z-10 overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 pb-5">
                      <div
                        className="
                          ml-11
                          border-t
                          border-purple-100
                          pt-3
                        "
                      >
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -5,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.08,
                            duration: 0.25,
                          }}
                          className="
                            text-xs
                            sm:text-sm
                            text-slate-600
                            leading-7
                          "
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  ACTIVE PURPLE BOTTOM LINE
              ================================================== */}
              {isOpen && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-1
                    origin-left
                    bg-linear-to-r
                    from-purple-600
                    via-indigo-500
                    to-purple-400
                  "
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}