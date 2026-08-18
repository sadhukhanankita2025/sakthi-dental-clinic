import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Shield,
  Sparkles,
  X,
  Calendar,
  Eye,
  Info,
  ChevronRight,
  PhoneCall,
  Check,
} from "lucide-react";

export default function TreatmentCard({ treatment }) {
  const [modalOpen, setModalOpen] = useState(false);

  if (!treatment) return null;

  const title = treatment.title || "Dental Treatment";

  const category =
    treatment.category || "Dental Care";

  const image =
    treatment.image ||
    treatment.imageUrl ||
    "/images/default-treatment.jpg";

  const shortDesc =
    treatment.shortDesc ||
    treatment.description ||
    "Professional dental care designed for your comfort and oral health.";

  const fullDesc =
    treatment.fullDesc ||
    treatment.description ||
    shortDesc;

  const duration =
    treatment.duration || "Consultation";

  const recovery =
    treatment.recovery || "Varies";

  const price =
    treatment.priceEstimate ||
    treatment.price ||
    "Contact Us";

  // =====================================================
  // BOOK APPOINTMENT
  // =====================================================

  const handleBookAppointment = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(
      "Book Appointment clicked:",
      title
    );

    // Close treatment details modal
    setModalOpen(false);

    // Send appointment event to App.jsx
    window.dispatchEvent(
      new CustomEvent("openAppointment", {
        detail: {
          treatment: title,
        },
      })
    );
  };

  // =====================================================
  // CLOSE DETAILS
  // =====================================================

  const closeDetails = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* =================================================
          TREATMENT CARD
      ================================================== */}

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        onClick={() => setModalOpen(true)}
        className="
          group
          relative
          flex
          h-[360px]
          cursor-pointer
          flex-col
          justify-between
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200/80
          bg-slate-900
          shadow-md
          transition-all
          duration-500
          hover:border-purple-500/50
          hover:shadow-2xl
          hover:shadow-purple-900/20
          sm:h-[380px]
        "
      >
        {/* IMAGE */}

        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            onError={(e) => {
              e.currentTarget.style.display =
                "none";
            }}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-purple-950
              via-purple-950/60
              to-slate-950/20
            "
          />
        </div>

        {/* TOP */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
            gap-2
            p-5
          "
        >
          <span
            className="
              rounded-full
              border
              border-purple-200/40
              bg-white/95
              px-3.5
              py-1.5
              text-[10px]
              font-extrabold
              uppercase
              tracking-wider
              text-purple-900
              shadow-sm
            "
          >
            {category}
          </span>

          <div className="flex items-center gap-2">
            {treatment.painless && (
              <span
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-purple-600/90
                  px-3
                  py-1
                  text-[10px]
                  font-bold
                  text-white
                "
              >
                <Sparkles className="h-3 w-3" />
                Painless
              </span>
            )}

            <span
              className="
                rounded-full
                bg-purple-950/50
                p-2
                text-white
                backdrop-blur-md
              "
            >
              <Eye className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* CENTER */}

        <div
          className="
            relative
            z-10
            my-auto
            text-center
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-200/30
              bg-purple-900/30
              px-4
              py-2
              text-xs
              font-bold
              text-white
              backdrop-blur-md
            "
          >
            <Info className="h-4 w-4 text-purple-300" />
            Click for full details
          </span>
        </div>

        {/* BOTTOM */}

        <div
          className="
            relative
            z-10
            space-y-3
            p-6
          "
        >
          <div>
            <h3
              className="
                text-xl
                font-black
                tracking-tight
                text-white
                transition-colors
                group-hover:text-purple-300
                sm:text-2xl
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-1.5
                line-clamp-2
                text-xs
                leading-relaxed
                text-purple-100/80
              "
            >
              {shortDesc}
            </p>
          </div>

          <div
            className="
              flex
              items-center
              justify-between
              gap-2
              border-t
              border-purple-200/20
              pt-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-1.5
                text-xs
                font-semibold
                text-purple-300
              "
            >
              <Clock className="h-3.5 w-3.5" />
              {duration}
            </div>

            <div
              className="
                text-xs
                font-bold
                text-purple-300
              "
            >
              {price}
            </div>

            <div
              className="
                flex
                items-center
                gap-1
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-white
              "
            >
              Details
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* =================================================
          DETAILS MODAL
      ================================================== */}

      <AnimatePresence>
        {modalOpen && (
          <div
            className="
              fixed
              inset-0
              z-[9990]
              flex
              items-center
              justify-center
              overflow-y-auto
              p-4
              sm:p-6
            "
          >
            {/* BACKDROP */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetails}
              className="
                fixed
                inset-0
                bg-purple-950/80
                backdrop-blur-md
              "
            />

            {/* MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                relative
                z-[9991]
                my-auto
                flex
                max-h-[90vh]
                w-full
                max-w-2xl
                flex-col
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-2xl
              "
            >
              {/* IMAGE */}

              <div
                className="
                  relative
                  h-56
                  shrink-0
                  overflow-hidden
                  sm:h-72
                "
              >
                <img
                  src={image}
                  alt={title}
                  onError={(e) => {
                    e.currentTarget.style.display =
                      "none";
                  }}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-purple-950
                    via-purple-900/40
                    to-transparent
                  "
                />

                <button
                  type="button"
                  onClick={closeDetails}
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    bg-black/50
                    p-2.5
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-black/70
                  "
                >
                  <X className="h-5 w-5" />
                </button>

                <div
                  className="
                    absolute
                    bottom-5
                    left-6
                    right-6
                    text-white
                  "
                >
                  <span
                    className="
                      inline-block
                      rounded-full
                      bg-purple-600
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      uppercase
                    "
                  >
                    {category}
                  </span>

                  <h2
                    className="
                      mt-2
                      text-2xl
                      font-black
                      sm:text-3xl
                    "
                  >
                    {title}
                  </h2>
                </div>
              </div>

              {/* BODY */}

              <div
                className="
                  space-y-6
                  overflow-y-auto
                  p-6
                  sm:p-8
                "
              >
                <div>
                  <h4
                    className="
                      mb-2
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-widest
                      text-purple-700
                    "
                  >
                    Procedure Overview
                  </h4>

                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-slate-700
                    "
                  >
                    {fullDesc}
                  </p>
                </div>

                {/* BENEFITS */}

                {Array.isArray(
                  treatment.benefits
                ) &&
                  treatment.benefits.length > 0 && (
                    <div>
                      <h4
                        className="
                          mb-3
                          text-xs
                          font-extrabold
                          uppercase
                          tracking-widest
                          text-purple-700
                        "
                      >
                        Key Benefits
                      </h4>

                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-2
                          sm:grid-cols-2
                        "
                      >
                        {treatment.benefits.map(
                          (
                            benefit,
                            index
                          ) => (
                            <div
                              key={index}
                              className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                bg-purple-50
                                p-3
                                text-sm
                                font-semibold
                                text-slate-700
                              "
                            >
                              <Check
                                className="
                                  h-4
                                  w-4
                                  shrink-0
                                  text-purple-600
                                "
                              />

                              {benefit}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* INFORMATION */}

                <div
                  className="
                    grid
                    grid-cols-3
                    gap-3
                  "
                >
                  <div
                    className="
                      rounded-xl
                      bg-purple-50
                      p-4
                      text-center
                    "
                  >
                    <Clock
                      className="
                        mx-auto
                        mb-1
                        h-4
                        w-4
                        text-purple-600
                      "
                    />

                    <p className="text-[10px] font-bold text-slate-400">
                      DURATION
                    </p>

                    <p className="text-xs font-bold text-slate-800">
                      {duration}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      bg-violet-50
                      p-4
                      text-center
                    "
                  >
                    <Shield
                      className="
                        mx-auto
                        mb-1
                        h-4
                        w-4
                        text-violet-600
                      "
                    />

                    <p className="text-[10px] font-bold text-slate-400">
                      RECOVERY
                    </p>

                    <p className="text-xs font-bold text-slate-800">
                      {recovery}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      bg-fuchsia-50
                      p-4
                      text-center
                    "
                  >
                    <Sparkles
                      className="
                        mx-auto
                        mb-1
                        h-4
                        w-4
                        text-fuchsia-600
                      "
                    />

                    <p className="text-[10px] font-bold text-slate-400">
                      ESTIMATE
                    </p>

                    <p className="text-xs font-bold text-slate-800">
                      {price}
                    </p>
                  </div>
                </div>
              </div>

              {/* FOOTER */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-purple-100
                  bg-purple-50/60
                  p-6
                  sm:flex-row
                "
              >
                {/* BOOK APPOINTMENT */}

                <button
                  type="button"
                  onClick={
                    handleBookAppointment
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-linear-to-r
                    from-purple-700
                    via-violet-700
                    to-fuchsia-600
                    px-6
                    py-3.5
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-wider
                    text-white
                    shadow-lg
                    transition
                    hover:scale-[1.01]
                    active:scale-[0.99]
                  "
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </button>

                {/* CALL */}

                <a
                  href="tel:+919876543210"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-purple-200
                    bg-white
                    px-5
                    py-3.5
                    text-xs
                    font-bold
                    text-slate-800
                    transition
                    hover:bg-purple-50
                  "
                >
                  <PhoneCall className="h-4 w-4 text-purple-700" />
                  Call Doctor
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}