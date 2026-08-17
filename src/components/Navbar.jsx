import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Calendar,
  User,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function AppointmentModal({ isOpen, onClose }) {
  // =====================================================
  // LOCK BODY SCROLL
  // =====================================================

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

          {/* =================================================
              ANIMATED BACKDROP
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="
              absolute
              inset-0
              bg-slate-950/60
              backdrop-blur-md
            "
          />

          {/* =================================================
              OUTER PURPLE GLOW
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: [0.3, 0.65, 0.3],
              scale: [0.9, 1.08, 0.9],
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              bg-purple-600/30
              blur-[100px]
              pointer-events-none
            "
          />

          {/* =================================================
              SECOND BLUE GLOW
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.15, 1],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="
              absolute
              h-[320px]
              w-[320px]
              rounded-full
              bg-indigo-500/25
              blur-[90px]
              pointer-events-none
            "
          />

          {/* =================================================
              MODAL CONTAINER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.85,
              rotateX: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              mass: 0.8,
            }}
            className="
              relative
              z-10
              w-full
              max-w-xl
            "
            style={{
              perspective: "1000px",
            }}
          >

            {/* =================================================
                GLOWING BORDER
            ================================================= */}

            <motion.div
              animate={{
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -inset-[2px]
                rounded-[30px]
                bg-linear-to-r
                from-purple-600
                via-indigo-500
                to-teal-500
                blur-sm
              "
            />

            {/* =================================================
                MODAL CARD
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/60
                bg-white/95
                shadow-[0_30px_100px_rgba(88,28,135,0.35)]
                backdrop-blur-2xl
              "
            >

              {/* =================================================
                  TOP DECORATIVE GLOW
              ================================================= */}

              <motion.div
                animate={{
                  x: ["-20%", "120%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-purple-400/30
                  blur-3xl
                  pointer-events-none
                "
              />

              {/* =================================================
                  HEADER
              ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-linear-to-r
                  from-purple-600
                  via-indigo-600
                  to-teal-500
                  px-6
                  py-6
                  text-white
                "
              >

                {/* Animated Header Shine */}

                <motion.div
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-24
                    skew-x-12
                    bg-white/20
                    blur-md
                  "
                />

                <div className="relative flex items-center justify-between">

                  {/* TITLE */}

                  <div className="flex items-center gap-4">

                    <motion.div
                      animate={{
                        rotate: [0, -5, 5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/20
                        shadow-lg
                        backdrop-blur-md
                      "
                    >
                      <Calendar className="h-6 w-6" />
                    </motion.div>

                    <div>
                      <h2 className="text-xl font-black sm:text-2xl">
                        Book an Appointment
                      </h2>

                      <p className="mt-1 text-xs font-medium text-white/80">
                        Schedule your visit with our dental experts
                      </p>
                    </div>

                  </div>

                  {/* CLOSE BUTTON */}

                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.1,
                      rotate: 90,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={onClose}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      text-white
                      transition
                      hover:bg-white/25
                    "
                    aria-label="Close appointment modal"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>

                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Appointment request submitted successfully!"
                  );
                  onClose();
                }}
                className="relative space-y-5 p-6 sm:p-7"
              >

                {/* =================================================
                    NAME
                ================================================= */}

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Full Name
                  </label>

                  <div className="group relative">

                    <User
                      className="
                        absolute
                        left-4
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-purple-500
                        transition
                        group-focus-within:text-purple-700
                      "
                    />

                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-purple-100
                        bg-purple-50/40
                        py-3.5
                        pl-11
                        pr-4
                        text-sm
                        text-slate-800
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-purple-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-purple-500/10
                      "
                    />

                  </div>
                </div>

                {/* =================================================
                    PHONE + EMAIL
                ================================================= */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {/* PHONE */}

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Phone
                    </label>

                    <div className="group relative">

                      <Phone
                        className="
                          absolute
                          left-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-purple-500
                        "
                      />

                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-purple-100
                          bg-purple-50/40
                          py-3.5
                          pl-11
                          pr-3
                          text-sm
                          outline-none
                          transition-all
                          placeholder:text-slate-400
                          focus:border-purple-400
                          focus:bg-white
                          focus:ring-4
                          focus:ring-purple-500/10
                        "
                      />

                    </div>
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Email
                    </label>

                    <div className="group relative">

                      <Mail
                        className="
                          absolute
                          left-4
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-purple-500
                        "
                      />

                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-purple-100
                          bg-purple-50/40
                          py-3.5
                          pl-11
                          pr-3
                          text-sm
                          outline-none
                          transition-all
                          placeholder:text-slate-400
                          focus:border-purple-400
                          focus:bg-white
                          focus:ring-4
                          focus:ring-purple-500/10
                        "
                      />

                    </div>
                  </div>

                </div>

                {/* =================================================
                    DATE
                ================================================= */}

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Preferred Date
                  </label>

                  <div className="group relative">

                    <Calendar
                      className="
                        absolute
                        left-4
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-purple-500
                      "
                    />

                    <input
                      type="date"
                      required
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-purple-100
                        bg-purple-50/40
                        py-3.5
                        pl-11
                        pr-4
                        text-sm
                        text-slate-700
                        outline-none
                        transition-all
                        focus:border-purple-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-purple-500/10
                      "
                    />

                  </div>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Message
                  </label>

                  <div className="relative">

                    <MessageSquare
                      className="
                        absolute
                        left-4
                        top-4
                        h-4
                        w-4
                        text-purple-500
                      "
                    />

                    <textarea
                      rows="3"
                      placeholder="Tell us how we can help..."
                      className="
                        w-full
                        resize-none
                        rounded-2xl
                        border
                        border-purple-100
                        bg-purple-50/40
                        py-3.5
                        pl-11
                        pr-4
                        text-sm
                        text-slate-800
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-purple-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-purple-500/10
                      "
                    />

                  </div>
                </div>

                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-2xl
                    bg-linear-to-r
                    from-purple-600
                    via-indigo-600
                    to-teal-500
                    px-6
                    py-4
                    text-sm
                    font-black
                    uppercase
                    tracking-wider
                    text-white
                    shadow-xl
                    shadow-purple-500/25
                  "
                >

                  {/* Button Glow */}

                  <motion.span
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      inset-0
                      bg-white/10
                    "
                  />

                  {/* Button Shine */}

                  <motion.span
                    animate={{
                      x: ["-150%", "250%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-1/3
                      skew-x-12
                      bg-white/25
                    "
                  />

                  <Calendar className="relative z-10 h-5 w-5" />

                  <span className="relative z-10">
                    Confirm Appointment
                  </span>

                  <Sparkles
                    className="
                      relative
                      z-10
                      h-4
                      w-4
                      opacity-80
                    "
                  />

                </motion.button>

                {/* =================================================
                    FOOTER NOTE
                ================================================= */}

                <p className="text-center text-[11px] font-medium text-slate-400">
                  Our team will contact you shortly to confirm your appointment.
                </p>

              </form>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}