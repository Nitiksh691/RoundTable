import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "What Events and Competitions are organized by us?",
    a: "We conduct regular events &amp; competitions to challenge our skill sets. We also have our own yearly Aurora fest which includes various interesting events and prizes for students. Also every year a tech fest called Invictus with some other societies is also organized which is DTU's biggest tech fest. We organize regular meetups, group discussions, case study competitions, and hackathons for students.",
  },
  {
    q: "What kind of Workshops are organized?",
    a: "We organize Technical and Non-Technical workshops for members and students. These include resume building, case study analysis, technical workshops such as competitive programming, web development & machine learning.",
  },
  {
    q: "What about skills and knowledge development?",
    a: "We organize special sessions conducted by people who are industry leaders. These are interactive sessions that involve career guidance, current trends & insights into their fields.",
  },
  {
    q: "What are the different departments in RoundTable",
    a: "Tech, Corporate, Operations, PR, Design and Content",
  },
  {
    q: "Why RoundTable is better than other societies?",
    a: "RoundTable DTU is the official Skill Development Society of DTU and it is also recognized by DTU administration. The society will help you build your resume by allowing you participate and organise multiple events and competitions. Joining Our Society will help you network effectively with your seniors and other students from DTU.",
  },
  {
    q: "What are Guilds?",
    a: "Guilds are groups which the members of the society can become a part of. Here we help members to learn the skills and apply them by assigning them assignments. We offer various guilds for both tech and non-tech like DSA, Web Dev, Data Analytics, Finance, Design, Cyber Security",
  },
  {
    q: "What kind of Webinars are conducted?",
    a: "We conducted all kinds of Webinars regarding Tech and Non Tech Fields. Like Placement Preparation Webinar, DSA Roadmap, Internship Roadmap, Competitive Coding Guidance, etc. Examples a few other webinars are Case Study Guide, Guestimates, Photoshop for beginners, etc. So there are a variety of webinars that are conducted in our society.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[#0a0702] py-16 px-6 md:px-12">
      <h2 className="text-[#fff] text-3xl md:text-4xl font-bold mb-12 font-[Montserrat]">
        Frequently Asked <span className="text-[#ff9900]">Questions</span>
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
                <span className="text-lg md:text-xl">{q}</span>
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
                    <div className="px-5 pb-3 text-white text-sm md:text-base leading-relaxed">
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
