import { Link } from "wouter";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function Home() {
  const features = [
    {
      icon: "fas fa-award",
      title: "Quality Excellence",
      description: "Premium materials and meticulous attention to detail in every project we undertake.",
      color: "from-orange-500 to-orange-600",
      delay: 0,
    },
    {
      icon: "fas fa-users",
      title: "Client-Centric Approach",
      description: "Your vision guides our design process, ensuring personalized solutions that reflect your style.",
      color: "from-green-500 to-green-600",
      delay: 0.2,
    },
    {
      icon: "fas fa-clock",
      title: "Timely Delivery",
      description: "Efficient project management ensures your dream space is ready when promised.",
      color: "from-blue-500 to-blue-600",
      delay: 0.4,
    },
  ];

  return (
    <div className="overflow-hidden">
      <SEO
        title="Fine Builders & Interiors - Premium Interior Design Services in Kerala"
        description="Transform your space with Fine Builders & Interiors, Kerala's leading interior design company. Specializing in residential & commercial interiors, modular kitchens, 3D visualizations, and custom solutions in Ambalappuzha."
        keywords="interior design Kerala, interior designers Ambalappuzha, modular kitchen Kerala, home interior design, commercial interior design, 3D visualization, interior decoration Kerala, Fine Builders Interiors"
        url="https://fine-builders.netlify.app/"
      />
      {/* Hero Section */}
      <Hero />

      {/* Our Promise Section */}
      <section id="our-promise" className="section-padding bg-gradient-to-br from-white via-gray-50/50 to-white relative">
        <div className="absolute inset-0 floating-elements pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8">
                Our Promise
              </motion.h2>
              <motion.div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-12 rounded-full" />
              <motion.p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                At Fine Builders & Interiors, we believe every space has a story. Our commitment is to transform your vision into reality with exceptional craftsmanship, innovative designs, and personalized service that exceeds expectations.
              </motion.p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group text-center card-hover bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/20 relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <i className={`${feature.icon} text-2xl`}></i>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quick Access Sections */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Services Preview */}
            <ScrollReveal direction="left" className="relative">
              <motion.div
                className="card-hover bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Our Services
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  From residential interiors to commercial spaces, we offer comprehensive design solutions tailored to your needs.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { icon: "fas fa-home", text: "Residential Interiors" },
                    { icon: "fas fa-building", text: "Commercial Spaces" },
                    { icon: "fas fa-utensils", text: "Modular Kitchens" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-gray-700 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <i className={`${item.icon} text-sm`}></i>
                      </motion.div>
                      <span className="text-lg font-medium group-hover:text-orange-600 transition-colors duration-300">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-lg group"
                  >
                    Explore All Services 
                    <motion.i
                      className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </ScrollReveal>

            {/* Portfolio Preview */}
            <ScrollReveal direction="right" className="relative">
              <motion.div
                className="card-hover bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full -translate-y-16 -translate-x-16" />
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Featured Work
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Discover our portfolio of stunning transformations that showcase our commitment to excellence and innovation.
                </p>
                
                {/* Featured project - Modern modular kitchen */}
                <motion.div
                  className="mb-8 rounded-2xl overflow-hidden shadow-lg group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Modern modular kitchen with island and premium finishes"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-colors duration-300" />
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-lg group"
                  >
                    View Complete Portfolio 
                    <motion.i
                      className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
