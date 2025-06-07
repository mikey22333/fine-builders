import { Link } from "wouter";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function Services() {
  const services = [
    {
      title: "Residential Interiors",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern residential living room interior",
      icon: "fas fa-home",
      color: "from-emerald-500 to-teal-600",
      features: ["Living & Dining Rooms", "Bedroom Design", "Home Offices", "Complete Home Makeovers"]
    },
    {
      title: "Commercial Spaces",
      description: "Create inspiring work environments that enhance productivity and reflect your brand identity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern commercial office interior design",
      icon: "fas fa-building",
      color: "from-blue-500 to-indigo-600",
      features: ["Office Design", "Retail Spaces", "Restaurants & Cafes", "Corporate Headquarters"]
    },
    {
      title: "Modular Kitchens",
      description: "Functional and stylish kitchen solutions that maximize space and enhance your culinary experience.",
      image: "/images/kitchen1.jpg",
      alt: "Contemporary modular kitchen design",
      icon: "fas fa-utensils",
      color: "from-orange-500 to-red-600",
      features: ["Custom Cabinet Design", "Space Optimization", "Premium Appliances", "Storage Solutions"]
    },
    {
      title: "3D Visualizations",
      description: "See your design come to life before construction with photorealistic 3D renderings and walkthroughs.",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "3D interior design visualization and rendering",
      icon: "fas fa-cube",
      color: "from-purple-500 to-pink-600",
      features: ["Photorealistic Renders", "Virtual Walkthroughs", "Design Presentations", "Concept Visualization"]
    },
    {
      title: "Renovation & Remodeling",
      description: "Complete transformation of existing spaces with modern design solutions and structural improvements.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Home renovation and remodeling project in progress",
      icon: "fas fa-hammer",
      color: "from-amber-500 to-orange-600",
      features: ["Complete Makeovers", "Structural Changes", "Modern Upgrades", "Value Enhancement"]
    },
    {
      title: "Custom Solutions",
      description: "Bespoke design solutions tailored to your unique requirements and lifestyle preferences.",
      image: "/images/wardrobe.jpg",
      alt: "Custom interior design solutions and furniture",
      icon: "fas fa-cog",
      color: "from-slate-500 to-gray-600",
      features: ["Custom Furniture", "Unique Installations", "Specialty Projects", "Personalized Designs"]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 floating-elements pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-24">
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight">
              Our Services
            </motion.h1>
            <motion.div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-12 rounded-full" />
            <motion.p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive interior design solutions that transform your space into a reflection of your unique style and functional needs.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group card-hover bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/20 relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-colors duration-300" />
                  
                  <motion.div
                    className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <i className={`${service.icon} text-xl`}></i>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-gray-700 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm font-medium group-hover/item:text-orange-600 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollReveal>
          <motion.div
            className="mt-24 relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
            
            <div className="relative p-12 lg:p-16 text-center">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to Transform Your Space?
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Let's discuss your vision and create a space that reflects your style and meets your needs.
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
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 inline-block"
                  >
                    Get Free Consultation
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
                    className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 inline-block glass-effect"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
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
