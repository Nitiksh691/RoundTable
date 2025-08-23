import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const images = [
  { src: "/demo1.gif", alt: "Quantum Project" },
  { src: "/demo2.gif", alt: "Friends Clip" },
  { src: "/demo3.gif", alt: "Editing Preview" },
  // duplicate for seamless loop
  { src: "/demo1.gif", alt: "Quantum Project" },
  { src: "/demo2.gif", alt: "Friends Clip" },
  { src: "/demo3.gif", alt: "Editing Preview" },
];

const typingAnimation = `
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  @keyframes blinkCaret {
    50% { border-color: transparent }
  }
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
`;

export default function HeroSection() {
  return (
    <>
      <style>{typingAnimation}</style>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-black px-8 py-40"
      >
        {/* Typing headline */}
        <h1
          className="text-[#FDFD00] text-4xl md:text-5xl font-bold font-mono whitespace-nowrap overflow-hidden border-r-4 border-[#FDFD00] max-w-[24ch]"
          style={{
            animation:
              "typing 3s steps(30, end) forwards, blinkCaret 0.75s step-end infinite",
          }}
        >
          Not Just a Video Editing Cohort!
        </h1>

        {/* Humorous subtitle */}
        <p className="mt-6 max-w-xl text-white text-center text-lg md:text-xl opacity-90 font-sans leading-relaxed">
          Join the coolest crew of editors who cut videos like pros... and memes like kings!
        </p>

        {/* Swiper infinite marquee */}
        <div className="w-full max-w-5xl mt-12 select-none drop-shadow-lg rounded-lg">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            speed={7000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map(({ src, alt }, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="rounded-lg object-cover w-full h-44 md:h-52 cursor-pointer hover:scale-105 transition-transform shadow-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA button */}
        <button className="mt-14 bg-[#FDFD00] text-black rounded-full px-10 py-4 font-bold text-lg shadow-xl hover:brightness-95 hover:scale-105 transition-transform">
          Join Now
        </button>
      </motion.section>
    </>
  );
}
