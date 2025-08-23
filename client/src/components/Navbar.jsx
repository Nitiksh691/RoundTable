import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full md:fixed md:top-0 z-40 bg-black/90 border-b border-[#23253a] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <span className="text-[22px] font-bold text-[#FDFD00] tracking-wide font-[Montserrat]">
          Roundtable
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#home"
            className="text-white hover:text-[#FDFD00] text-base font-medium transition-all"
          >
            Home
          </a>
          <a
            href="#faq"
            className="text-white hover:text-[#FDFD00] text-base font-medium transition-all"
          >
            FAQ
          </a>
          <a
            href="#blog"
            className="text-white hover:text-[#FDFD00] text-base font-medium transition-all"
          >
            Blog
          </a>
          <a
            href="#programs"
            className="text-white hover:text-[#FDFD00] text-base font-medium transition-all"
          >
            Programs
          </a>
        </div>

        {/* CTA Always Visible */}
        <button className="bg-[#FDFD00] text-black px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all ring-2 ring-[#FDFD00]/40">
          Join Now
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden ml-4 text-[#FDFD00] text-2xl"
        >
          <HamburgerMenuIcon />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8"
          >
            <span className="text-[#FDFD00] text-3xl">&times;</span>
          </button>
          <nav className="flex flex-col gap-10 text-xl font-bold text-[#FDFD00] items-center mt-8">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
            <a href="#programs" onClick={() => setMenuOpen(false)}>
              Programs
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
