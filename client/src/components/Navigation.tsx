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

      // Only hide navbar on desktop, keep it visible on mobile for better UX
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      if (!isMobile && !isOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true); // Always visible on mobile
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  // Handle location changes
  useEffect(() => {
    setIsOpen(false);
    setIsVisible(true); // Always show navigation when navigating to a new page
    setLastScrollY(0); // Reset scroll position tracking
  }, [location]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home", icon: "fas fa-home" },
    { path: "/services", label: "Services", icon: "fas fa-concierge-bell" },
    { path: "/portfolio", label: "Portfolio", icon: "fas fa-images" },
    { path: "/contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled || location !== "/"
          ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
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
                <h1 className={`text-xl lg:text-2xl font-light tracking-wider ${
                  location === "/" ? "text-white" : "text-gray-900"
                }`}>
                  <span className="font-thin">Fine</span>
                  <span className="font-bold text-orange-400 ml-1">Builders</span>
                </h1>
                <div className={`text-xs tracking-widest uppercase font-light ${
                  location === "/" ? "text-white/60" : "text-gray-600"
                }`}>
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
                        : location === "/"
                        ? "text-white/80 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
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
                      className={`absolute inset-0 rounded-lg ${
                        location === "/" ? "bg-white/5" : "bg-gray-100"
                      }`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}

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
              className={`relative w-14 h-14 backdrop-blur-sm rounded-xl border flex items-center justify-center touch-manipulation ${
                location === "/"
                  ? "bg-white/10 border-white/20"
                  : "bg-gray-100/80 border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.span
                  className={`w-full h-0.5 rounded-full transform transition-all duration-300 ${
                    location === "/" ? "bg-white" : "bg-gray-700"
                  }`}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 2 }
                  }}
                />
                <motion.span
                  className={`w-full h-0.5 rounded-full transform transition-all duration-300 mt-1 ${
                    location === "/" ? "bg-white" : "bg-gray-700"
                  }`}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <motion.span
                  className={`w-full h-0.5 rounded-full transform transition-all duration-300 mt-1 ${
                    location === "/" ? "bg-white" : "bg-gray-700"
                  }`}
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
            className="lg:hidden mobile-menu-container z-[60] overflow-hidden"
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
            
            {/* Close button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 z-10 touch-manipulation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl"></i>
            </motion.button>

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center space-y-8 px-6 py-20 overflow-y-auto mobile-scroll"
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
                    className={`flex items-center space-x-4 text-2xl md:text-3xl font-light tracking-wider transition-all duration-300 py-4 px-6 rounded-xl touch-manipulation ${
                      location === item.path
                        ? "text-orange-400 bg-orange-400/10"
                        : "text-white hover:text-orange-300 hover:bg-white/5"
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
                  className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-5 rounded-xl text-lg font-medium hover:shadow-2xl transition-all duration-300 touch-manipulation min-h-[56px]"
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
