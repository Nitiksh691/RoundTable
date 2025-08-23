import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";



import Footer from "./components/Footer";
import FAQ from "./components/FAQSection";
import Testimonials from "./components/Testimonials";
import MentorsShowcase from "./components/MentorShowcase";

function App() {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-tr from-[#0c0c0e] via-[#111121] to-[#23253a] animate-gradient">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <MentorsShowcase/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
      {/* Keep adding: AboutSection, LearningSection ... */}
    </div>
  );
}

export default App;
