import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonialData = [
  {
    name: "Alex Johnson",
    role: "Freelance Video Editor",
    quote:
      "This cohort completely transformed my editing skills and opened freelance opportunities I never imagined! The mentorship and projects were top-notch and gave me real confidence to take on clients.",
  },
  {
    name: "Priya Sharma",
    role: "Social Media Manager",
    quote:
      "The hands-on projects and mentorship were incredible. I now feel confident managing client campaigns, creating content calendars, and using analytics to grow engagement.",
  },
  {
    name: "David Lee",
    role: "Content Creator",
    quote:
      "The program accelerated my growth massively. I now understand monetization and social strategy like a pro! I can create videos faster and more professionally.",
  },
];

export default function Testimonials() {
  const row1Controls = useAnimation();
  const row2Controls = useAnimation();
  const mobileControls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const duration = 25;

  useEffect(() => {
    if (!isPaused) {
      row1Controls.start({
        x: ["0%", "-100%"],
        transition: { x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" } },
      });
      row2Controls.start({
        x: ["0%", "-100%"],
        transition: { x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" } },
      });
      mobileControls.start({
        x: ["0%", "-100%"],
        transition: { x: { repeat: Infinity, repeatType: "loop", duration: duration * 0.5, ease: "linear" } },
      });
    }
  }, [row1Controls, row2Controls, mobileControls, isPaused]);

  const pauseAnimation = () => {
    setIsPaused(true);
    row1Controls.stop();
    row2Controls.stop();
    mobileControls.stop();
  };

  const resumeAnimation = () => {
    setIsPaused(false);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      <h2 className="text-[#FDFD00] text-4xl font-bold text-center mb-16 font-[Montserrat]">
        What Our Students Say
      </h2>

      {/* Desktop */}
      <div className="hidden lg:block relative">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />

        {/* First row */}
        <motion.div 
          className="flex space-x-8 mb-8" 
          animate={row1Controls}
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
          style={{ x: "0%" }}
        >
          {[...testimonialData, ...testimonialData].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-96 bg-[#1c1c1c] rounded-3xl p-8 text-white shadow-lg"
            >
              <p className="text-lg mb-4">{t.quote}</p>
              <p className="font-bold text-[#FDFD00]">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          ))}
        </motion.div>

        {/* Second row - offset for continuous effect */}
        <motion.div 
          className="flex space-x-8" 
          animate={row2Controls}
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
          style={{ x: "-100%" }}
        >
          {[...testimonialData, ...testimonialData].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-96 bg-[#1c1c1c] rounded-3xl p-8 text-white shadow-lg"
            >
              <p className="text-lg mb-4">{t.quote}</p>
              <p className="font-bold text-[#FDFD00]">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative overflow-x-hidden px-4">
        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        
        <motion.div 
          className="flex space-x-4"
          animate={mobileControls}
        >
          {[...testimonialData, ...testimonialData].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw] bg-[#1c1c1c] rounded-2xl p-6 text-white shadow-lg"
            >
              <p className="text-lg mb-4">{t.quote}</p>
              <p className="font-bold text-[#FDFD00]">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}