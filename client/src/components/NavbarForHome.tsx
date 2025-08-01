import { useState, useEffect } from "react";
import { CheckCircle, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 100
          ? "bg-dark-slate/90 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gaming-purple to-gaming-blue rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gaming-blue bg-clip-text text-transparent">
              Ascendia
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skill Trees
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="text-gray-300 hover:text-white"
              onClick={() => {
                window.location.href = "/auth";
              }}
            >
              Sign In
            </Button>
            <Button onClick={() => { window.location.href = "/auth"; }} className="px-6 py-2 bg-gradient-to-r from-gaming-purple to-gaming-blue hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Start Quest
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-slate/95 backdrop-blur-lg border-b border-gray-800"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Skill Trees
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Reviews
            </button>
            <Button className="w-full bg-gradient-to-r from-gaming-purple to-gaming-blue">
              Start Quest
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;