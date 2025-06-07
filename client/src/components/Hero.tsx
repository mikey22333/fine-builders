import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Luxury Interior Design",
      subtitle: "Creating Extraordinary Living Spaces"
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Premium Kitchen Solutions",
      subtitle: "Where Culinary Dreams Come to Life"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Commercial Excellence",
      subtitle: "Transforming Workspaces with Style"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const slideUpVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
        
        {/* Sophisticated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-orange-500/20 rotate-45"
          animate={{ rotate: [45, 405], y: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main content */}
        <motion.div
          className="mb-8"
          variants={slideUpVariants}
        >
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white mb-6 tracking-tight"
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="block font-thin">Fine</span>
            <span className="block font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Builders
            </span>
          </motion.h1>
          
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.div>

        <motion.div
          variants={slideUpVariants}
          className="mb-12"
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-4 tracking-wide"
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {slides[currentSlide].subtitle}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
            variants={slideUpVariants}
          >
            Award-winning interior design studio in Kerala, crafting bespoke spaces that reflect your unique vision and lifestyle through innovative design excellence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={slideUpVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div
            variants={fadeInVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/portfolio"
              className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-none overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25"
            >
              <span className="relative z-10 flex items-center">
                Explore Portfolio
                <motion.i 
                  className="fas fa-arrow-right ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </motion.div>
          
          <motion.div
            variants={fadeInVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="tel:+919895516163"
              className="group px-12 py-6 border-2 border-white/30 text-white font-medium rounded-none backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-500 hover:shadow-2xl"
            >
              <span className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                Schedule Consultation
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <motion.div
          className="flex justify-center space-x-3 mb-12"
          variants={slideUpVariants}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
            >
              <div className={`w-12 h-1 transition-all duration-500 ${
                currentSlide === index 
                  ? 'bg-orange-500' 
                  : 'bg-white/30 hover:bg-white/50'
              }`} />
              {currentSlide === index && (
                <motion.div
                  className="absolute inset-0 bg-orange-400"
                  layoutId="activeSlide"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.button
          className="group flex flex-col items-center cursor-pointer focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const nextSection = document.querySelector('#our-promise');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-white/60 text-sm font-light mb-4 group-hover:text-white/90 transition-colors duration-300">
            Discover More
          </span>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent relative"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, -20, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
