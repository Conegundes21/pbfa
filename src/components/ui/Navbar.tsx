import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Projetos", href: "#projects" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-dark-200/90 backdrop-blur-md shadow-dark" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-nature-green/20 rounded-full filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  className="text-nature-green relative z-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60,40 C70,38 75,45 75,50 C75,55 70,62 60,60 C55,59 50,55 48,50 C46,45 50,41 55,40 C57,39.5 59,39.5 60,40Z"
                    fill="currentColor"
                  />
                  <path
                    d="M48,50 C46,52 42,53 38,52 C34,51 30,48 32,44 C34,40 38,38 42,39 C46,40 48,45 48,50Z"
                    fill="#10b981"
                  />
                  <path d="M75,50 L90,48 L75,52Z" fill="#fbbf24" />
                  <path
                    d="M48,50 C45,60 35,65 25,60 C15,55 10,45 15,40 C20,35 30,38 40,42 C45,44 47,47 48,50Z"
                    fill="#34d399"
                  />
                </svg>
              </motion.div>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-xl font-bold text-white">Projeto</span>
                <span className="text-xl font-bold text-nature-green">
                  BeijaFlor
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-nature-green scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-nature-green hover:bg-nature-green-dark text-white rounded-md px-5 py-6 text-sm font-medium transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              Agendar Consultoria
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none bg-dark-300/80 p-2 rounded-md"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-200/95 backdrop-blur-md border-t border-dark-400"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white py-3 border-b border-dark-400 transition-colors duration-300 flex items-center justify-between"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="h-4 w-4 text-nature-green" />
                  </a>
                ))}
                <Button className="bg-nature-green hover:bg-nature-green-dark text-white w-full mt-4 py-6 transition-all duration-300">
                  Agendar Consultoria
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
