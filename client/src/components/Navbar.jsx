import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full sticky z-40 bg-[#0a0702] px-5">
            <div className="max-w-6xl mx-auto flex items-center justify-between relative">
                <img
                    src="https://www.roundtabledtu.in/_next/image?url=%2Fassets%2Fimages%2Frtlogo.png&w=256&q=75"
                    alt="RoundTable Logo"
                    className="w-24 h-24"
                />

                <ul className="hidden sm:flex items-center gap-8 text-white font-medium absolute left-1/2 -translate-x-1/2 font-sans text-[18px]">
                    <li><a href="#home" className="hover:text-[#ff9900] px-5 py-2 hover:border hover:rounded-xl">Home</a></li>
                    <li><a href="#intro" className="hover:text-[#ff9900] px-5 py-2 hover:border hover:rounded-xl">About</a></li>
                    <li><a href="#projects" className="hover:text-[#ff9900] px-5 py-2 hover:border hover:rounded-xl">Events</a></li>
                    <li><a href="#certificate" className="hover:text-[#ff9900] px-5 py-2 hover:border hover:rounded-xl">Projects</a></li>
                    <li><a href="#contact" className="hover:text-[#ff9900] px-5 py-2 hover:border hover:rounded-xl">Team</a></li>
                </ul>

                {/* Join Now (Desktop → rightmost) */}
                <button className="hidden sm:block bg-[#FDFD00] text-black px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-all ring-2 ring-[#FDFD00]/40 cursor-pointer">
                    Join Now
                </button>

                {/* Join Now (Mobile → center) */}
                <button className="sm:hidden bg-[#FDFD00] text-black px-4 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-all ring-2 ring-[#FDFD00]/40 absolute left-1/2 -translate-x-1/2">
                    Join Now
                </button>

                {!menuOpen && (
                    <button className="text-white text-3xl sm:hidden absolute right-2" onClick={() => setMenuOpen(true)}>
                        <HamburgerMenuIcon width={28} height={28} />
                    </button>
                )}

            </div>

            {/* Sidebar (Mobile only) */}

            <div className={`fixed inset-0 bg-black/30 sm:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setMenuOpen(false)} >

                <div className={`absolute top-[95px] left-0 w-1/2 bg-[#0a0702] p-6 rounded-br-[50px] border-r-4 border-[#ff9900]  transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >

                    <button className="text-white text-2xl mb-4" onClick={() => setMenuOpen(false)} >
                        <Cross1Icon width={24} height={24} />
                    </button>
                    
                    <ul className="flex flex-col gap-4 text-white text-lg">
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#intro" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Events</a></li>
                        <li><a href="#certificate" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Team</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
