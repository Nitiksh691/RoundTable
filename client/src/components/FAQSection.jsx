import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "What is the duration of the cohort?",
    a: "The cohort is an intensive 2 month program designed to accelerate your learning and project experience.",
  },
  {
    q: "Do I need prior video editing experience?",
    a: "No prior experience needed! We start from fundamentals and level you up for freelance, agency, and social media work.",
  },
  {
    q: "What will I learn in this cohort?",
    a: "Advanced video editing, freelancing, social media growth, monetization strategies, and more.",
  },
  {
    q: "Will I get placement or career support?",
    a: "Yes—successful students get project opportunities and mentorship from senior experts, plus hiring access.",
  },
  {
    q: "Can I access learning materials anytime?",
    a: "Live sessions are recorded and accessible indefinitely, so you can learn at your own pace.",
  },
  {
    q: "How do I join the cohort?",
    a: "Click the 'Join Now' button, fill the form, and you'll receive immediate next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[#0a0a0a] py-16 px-6 md:px-12">
      <h2 className="text-[#FDFD00] text-3xl md:text-4xl font-bold text-center mb-12 font-[Montserrat]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqData.map(({ q, a }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#FDFD00]/30 rounded-md overflow-hidden transition hover:border-[#FDFD00]/70"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-3 text-[#FDFD00] font-medium text-left hover:bg-[#FDFD00]/10 transition"
              >
                <span>{q}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#FDFD00]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
