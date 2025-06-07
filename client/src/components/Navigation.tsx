import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: "fas fa-home" },
    { path: "/services", label: "Services", icon: "fas fa-concierge-bell" },
    { path: "/portfolio", label: "Portfolio", icon: "fas fa-images" },
    { path: "/contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 z-50"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-4 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <img
                  src="/images/logo.png"
                  alt="Fine Builders & Interiors Logo"
                  className="relative h-10 lg:h-12 w-auto"
                />
              </motion.div>
              <motion.div 
                className="hidden sm:block"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <h1 className="text-xl lg:text-2xl font-light text-white tracking-wider">
                  <span className="font-thin">Fine</span>
                  <span className="font-bold text-orange-400 ml-1">Builders</span>
                </h1>
                <div className="text-xs text-white/60 tracking-widest uppercase font-light">
                  Interiors
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
              >
                <Link
                  href={item.path}
                  className="group relative flex items-center space-x-2 py-2"
                >
                  <motion.div
                    className={`relative overflow-hidden px-6 py-3 transition-all duration-500 ${
                      location === item.path
                        ? "text-orange-400"
                        : "text-white/80 hover:text-white"
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="relative z-10 font-light tracking-wide text-sm uppercase">
                      {item.label}
                    </span>
                    
                    {/* Active indicator */}
                    {location === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500"
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/919895516163"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-none overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center text-sm uppercase tracking-wide">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Connect
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="lg:hidden z-50"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-full h-0.5 bg-white rounded-full transform transition-all duration-300"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 2 }
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white rounded-full transform transition-all duration-300 mt-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white rounded-full transform transition-all duration-300 mt-1"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center space-y-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center space-x-4 text-3xl font-light tracking-wider transition-all duration-300 ${
                      location === item.path
                        ? "text-orange-400"
                        : "text-white hover:text-orange-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <i className={`${item.icon} text-xl`}></i>
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-8"
              >
                <a
                  href="https://wa.me/919895516163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-none text-lg font-medium hover:shadow-2xl transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>Get in Touch</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
