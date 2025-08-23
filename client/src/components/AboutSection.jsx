const students = [
  {
    name: "Tharun Neeki",
    followers: "2.5M",
    platform: "YouTube",
    imgSrc: "/students/tharun.jpg",
  },
  {
    name: "Quantum Project",
    followers: "1.2M",
    platform: "YouTube",
    imgSrc: "/students/quantum.jpg",
  },
  {
    name: "Neeki Video School",
    followers: "800K",
    platform: "Instagram",
    imgSrc: "/students/neekivideo.jpg",
  },
  {
    name: "Tharun Speaks",
    followers: "300K",
    platform: "YouTube",
    imgSrc: "/students/tharun_speaks.jpg",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FDFD00] py-16 px-6 md:px-12">
      {/* Headline */}
      <h2 className="text-black text-3xl md:text-4xl font-bold mb-4 max-w-4xl mx-auto text-center font-[Montserrat]">
        4 <span className="text-black opacity-80">years</span> of experience in 2 months
      </h2>

      {/* Supporting paragraph */}
      <p className="text-black text-center max-w-3xl mx-auto mb-12 font-sans opacity-90">
        Learn skills to work with top creators and agencies, build your portfolio, and level up fast. 
        This cohort builds skills, networks, and jobs—all in just 2 months.
      </p>

      {/* Student Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {students.map(({ name, followers, platform, imgSrc }, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
          >
            <img
              src={imgSrc}
              alt={name}
              loading="lazy"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg text-black">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-700">{followers} followers</span>
              <img
                src={
                  platform === "YouTube"
                    ? "/icons/youtube.svg"
                    : platform === "Instagram"
                    ? "/icons/instagram.svg"
                    : "/icons/default.svg"
                }
                alt={platform}
                className="w-5 h-5"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
