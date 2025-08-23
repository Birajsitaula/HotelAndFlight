import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Logo */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">KoalaRoute AI</h2>
          <p className="text-sm">Your Smart Travel Planner</p>
        </div>

        {/* Center - Navigation */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="/" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/miraz.chudal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="text-xs text-center mt-6">
        © {new Date().getFullYear()} KoalaRoute AI. All rights reserved.
      </p>
    </footer>
  );
}
