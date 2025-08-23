import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const seniorMentors = [
  {
    id: 1,
    name: "Mentor One",
    photo: "/mentors/senior1.jpg",
    intro: "Expert in video editing, 10+ years in top studios.",
  },
  {
    id: 2,
    name: "Mentor Two",
    photo: "/mentors/senior2.jpg",
    intro: "Social media growth specialist with a passion for mentoring.",
  },
  {
    id: 3,
    name: "Mentor Three",
    photo: "/mentors/senior3.jpg",
    intro: "Creative director and seasoned freelancer with global clients.",
  },
];

const juniorMentors = [
  { id: 1, name: "Junior One", photo: "/mentors/junior1.jpg" },
  { id: 2, name: "Junior Two", photo: "/mentors/junior2.jpg" },
  { id: 3, name: "Junior Three", photo: "/mentors/junior3.jpg" },
];

export default function MentorShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // On scroll, decide which card to show based on scroll position inside container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      if (top < 0 && Math.abs(top) < height) {
        const perCardHeight = height / seniorMentors.length;
        let newIndex = Math.floor(Math.abs(top) / perCardHeight);
        if (newIndex >= seniorMentors.length) newIndex = seniorMentors.length - 1;
        setCurrentIndex(newIndex);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate card transitions using GSAP
  useEffect(() => {
    const cards = gsap.utils.toArray(".mentor-card");
    cards.forEach((card, i) => {
      if (i === currentIndex) {
        gsap.to(card, { x: 0, opacity: 1, zIndex: 10, duration: 0.6, ease: "power2.out" });
      } else {
        gsap.to(card, { x: 100, opacity: 0, zIndex: 0, duration: 0.6, ease: "power2.out" });
      }
    });
  }, [currentIndex]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[700px] bg-black text-white py-20 px-8 md:px-32">
      <div className="relative h-[400px] w-full max-w-4xl mx-auto">
        {seniorMentors.map(({ id, name, photo, intro }, i) => (
          <div
            className="mentor-card absolute top-0 left-0 w-full h-full rounded-xl bg-[#111] p-8 flex flex-col items-center"
            style={{ transform: "translateX(100px)", opacity: 0, zIndex: 0, transition: "all 0.6s ease" }}
            key={id}
          >
            <img
              src={photo}
              alt={name}
              className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
              loading="lazy"
            />
            <h3 className="text-yellow-400 text-2xl font-bold mb-2">{name}</h3>
            <p className="text-center">{intro}</p>
          </div>
        ))}
      </div>

      <div className="mt-32">
        <h2 className="text-yellow-400 text-3xl font-bold text-center mb-12">Meet Our Junior Mentors</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto px-6">
          {juniorMentors.map(({ id, name, photo }) => (
            <div key={id} className="text-center">
              <img
                src={photo}
                alt={name}
                className="rounded-full mx-auto w-24 h-24 object-cover shadow-lg"
                loading="lazy"
              />
              <p className="text-white mt-2">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
