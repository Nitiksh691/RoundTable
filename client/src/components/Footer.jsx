import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-black border-t border-[#FDFD00] py-20 px-12 md:px-32 text-[#FDFD00] font-sans select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">

        {/* Brand & Tagline */}
        <div>
          <h1 className="text-5xl font-bold mb-6 tracking-wide font-[Montserrat]">The Roundtable</h1>
          <p className="text-gray-300 max-w-xs leading-relaxed text-lg">
            Bringing together the brightest minds to master video editing, freelancing, and creative growth.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-8 text-2xl">Contact Us</h3>
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@roundtable.in" className="hover:text-white transition">
              contact@roundtable.in
            </a>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong>{" "}
            <a href="tel:+911234567890" className="hover:text-white transition">
              +91 12345 67890
            </a>
          </p>
          <p>
            <strong>Address:</strong>{" "}
            <span className="text-gray-400">123, Creative Ave, Mumbai, India</span>
          </p>
        </div>

        {/* Social Follow */}
        <div>
          <h3 className="font-semibold mb-8 text-2xl">Follow Us</h3>
          <div className="flex space-x-8">
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M10 15l5-3-5-3v6z" />
                <path d="M21 3H3v18h18V3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M4 4h4v16H4zM8 8h4v2h.1a4 4 0 0 1 4 4v6h-4v-6a2 2 0 0 0-2-2h-.1V8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter & Back to Top */}
        <div>
          <h3 className="font-semibold mb-8 text-2xl">Subscribe</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-5 max-w-xs">
            <input
              type="email"
              placeholder="Your email address"
              className="px-5 py-3 rounded bg-yellow-50 text-black outline-none focus:ring-2 focus:ring-[#FDFD00] transition"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#FDFD00] text-black font-bold px-6 py-3 rounded hover:brightness-95 transition"
            >
              Subscribe
            </button>
          </form>
          <button
            onClick={scrollToTop}
            className="mt-10 underline hover:text-white cursor-pointer text-lg"
          >
            Move to Top &uarr;
          </button>
        </div>
      </div>

      <div className="text-gray-500 text-center mt-16 text-base">
        &copy; {new Date().getFullYear()} The Roundtable. All Rights Reserved.
      </div>
    </footer>
  );
}
