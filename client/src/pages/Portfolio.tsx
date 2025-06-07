import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "kitchens",
      title: "Modern Modular Kitchen",
      location: "Ambalappuzha, Kerala",
      image: "/images/kitchen1.jpg",
      alt: "Contemporary modular kitchen with island and pendant lighting",
      details: "Premium granite countertops • Custom cabinetry • Smart appliances"
    },
    {
      id: 2,
      category: "kitchens",
      title: "Premium Kitchen Design",
      location: "Kerala",
      image: "/images/kitchen2.jpg",
      alt: "Modern kitchen with bar seating and premium finishes",
      details: "Granite surfaces • Soft-close drawers • Under-cabinet lighting"
    },
    {
      id: 3,
      category: "residential",
      title: "Master Bedroom Interior",
      location: "Kerala",
      image: "/images/bedroom.jpg",
      alt: "Contemporary master bedroom with accent lighting",
      details: "King-size bed • Reading nooks • Ambient lighting"
    },
    {
      id: 4,
      category: "residential",
      title: "Custom Wardrobe Design",
      location: "Kerala",
      image: "/images/wardrobe.jpg",
      alt: "Modern wardrobe with integrated mirror and storage",
      details: "Sliding doors • LED lighting • Organized compartments"
    },
    {
      id: 5,
      category: "residential",
      title: "Living Room Mirror Feature",
      location: "Kerala",
      image: "/images/living-room.jpg",
      alt: "Elegant living room with decorative mirror and plants",
      details: "Decorative mirrors • Plant integration • Modern lighting"
    },
    {
      id: 6,
      category: "residential",
      title: "Home Office Design",
      location: "Kerala",
      image: "/images/office.jpg",
      alt: "Modern home office with ergonomic furniture",
      details: "Ergonomic furniture • Cable management • Privacy solutions"
    },
    {
      id: 7,
      category: "residential",
      title: "Custom Storage Solutions",
      location: "Kerala",
      image: "/images/storage.jpg",
      alt: "Innovative wooden partition and storage design",
      details: "Wooden partitions • Hidden storage • Space optimization"
    },
    {
      id: 8,
      category: "commercial",
      title: "Showroom Display Design",
      location: "Kerala",
      image: "/images/showroom.jpg",
      alt: "Modern furniture showroom with contemporary displays",
      details: "Display systems • Accent lighting • Brand showcasing"
    },
    {
      id: 9,
      category: "residential",
      title: "Ceiling Design with Mirror",
      location: "Kerala",
      image: "/images/ceiling.jpg",
      alt: "Innovative ceiling design with geometric mirror feature",
      details: "Geometric mirrors • Ceiling features • Artistic elements"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: "fas fa-th-large" },
    { id: "kitchens", label: "Kitchens", icon: "fas fa-utensils" },
    { id: "residential", label: "Residential", icon: "fas fa-home" },
    { id: "commercial", label: "Commercial", icon: "fas fa-building" },
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-28 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 floating-elements pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight">
              Our Portfolio
            </motion.h1>
            <motion.div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-12 rounded-full" />
            <motion.p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Explore our collection of transformative designs that showcase our commitment to excellence and innovation.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Enhanced Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:text-orange-600 border border-gray-200/50 hover:border-orange-300"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <div className="flex items-center space-x-2">
                  <i className={`${filter.icon} text-sm`}></i>
                  <span>{filter.label}</span>
                </div>
                {activeFilter === filter.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl"
                    layoutId="activeFilter"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredItems.map((item, index) => (
                <StaggerItem key={item.id}>
                  <motion.div
                    className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/20 relative cursor-pointer"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    layout
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6 right-6">
                          <motion.h3
                            className="text-white font-bold text-xl mb-2 font-display"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p
                            className="text-white/90 text-sm mb-3"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.location}
                          </motion.p>
                          <motion.p
                            className="text-orange-300 text-xs font-medium"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {item.details}
                          </motion.p>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-xl text-xs font-semibold capitalize shadow-lg">
                          {item.category === "kitchens" ? "Kitchen" : 
                           item.category === "residential" ? "Residential" : "Commercial"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display group-hover:text-orange-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.location}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <ScrollReveal>
          <motion.div
            className="mt-24 relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-white" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent" />
            
            <div className="relative p-12 lg:p-16 text-center">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Inspired by Our Work?
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Let's create something beautiful together. Contact us to discuss your project and see how we can transform your space.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 inline-block shadow-lg"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://wa.me/919895516163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-orange-600/60 text-orange-600 hover:bg-orange-600 hover:text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 inline-block glass-effect"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> Chat with Us
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}
