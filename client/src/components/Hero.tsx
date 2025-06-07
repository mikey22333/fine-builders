import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const words = "Crafting Beautiful".split("");
  const highlightWords = "Interiors".split("");
  const endWords = "That Tell Your Story".split(" ");

  return (
    <section className="relative pt-16 lg:pt-20 min-h-screen flex items-center overflow-hidden floating-elements">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-gradient parallax-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
      />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 dark-glass-effect" />
      
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center lg:text-left lg:max-w-3xl">
          <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
            <div className="flex flex-wrap justify-center lg:justify-start">
              {words.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <span className="mr-4" />
              {highlightWords.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={words.length + i}
                  variants={letterVariants}
                  className="inline-block text-orange-300 text-shimmer"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light"
            >
              {endWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={words.length + highlightWords.length + i}
                  variants={letterVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-100 mb-12 font-light leading-relaxed"
          >
            Premium interior design services in Kerala, transforming spaces into extraordinary experiences through innovative design and meticulous craftsmanship.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href="/portfolio"
                className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 text-center block glass-effect border-orange-500"
              >
                View Our Work
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href="tel:+919895516163"
                className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 text-center block glass-effect"
              >
                <i className="fas fa-phone mr-2"></i> Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.button
          className="flex flex-col items-center cursor-pointer group focus:outline-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const nextSection = document.querySelector('#our-promise');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-sm mb-2 opacity-75 font-light group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <motion.div
            className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <i className="fas fa-chevron-down text-sm" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
