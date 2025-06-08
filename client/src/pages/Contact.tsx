import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
      <SEO
        title="Contact Us - Fine Builders & Interiors Kerala | Get Free Consultation"
        description="Contact Fine Builders & Interiors for your interior design needs in Kerala. Get free consultation, quotes, and expert advice. Located in Ambalappuzha. Call +91-9895516163."
        keywords="contact interior designer Kerala, interior design consultation, Fine Builders contact, Ambalappuzha interior designers, interior design quotes Kerala, free consultation interior design"
        url="https://fine-builders.netlify.app/contact"
      />
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Let's Start Your Dream Project
              </motion.div>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Touch</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ready to transform your space into something extraordinary? We're here to bring your vision to life with our expert design and construction services.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Methods Grid */}
          <ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <StaggerItem>
                <motion.div
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-whatsapp text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Chat</h3>
                  <p className="text-gray-600 mb-6">Get instant responses to your queries</p>
                  <a
                    href="https://wa.me/919895516163?text=Hi%20Fine%20Builders%20%26%20Interiors!%20I'm%20interested%20in%20your%20interior%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-200 font-medium"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Chat Now
                  </a>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-phone text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                  <p className="text-gray-600 mb-6">Speak directly with our design team</p>
                  <a
                    href="tel:+919895516163"
                    className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 font-medium"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    +91 9895516163
                  </a>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                  <p className="text-gray-600 mb-6">Send detailed project requirements</p>
                  <a
                    href="mailto:finebuildersandinteriors@gmail.com?subject=Interior%20Design%20Inquiry"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors duration-200 font-medium"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Send Email
                  </a>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </ScrollReveal>

          {/* Form and Info Section */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Information - Takes 1 column */}
            <div className="space-y-8">
              {/* Office Location */}
              <ScrollReveal>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">Our Office</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Navarakkal–Ambalappuzha Temple Road<br />
                        Ambalappuzha, Kerala 688561<br />
                        India
                      </p>
                      <a
                        href="https://maps.app.goo.gl/tTRaZUCUbyLuvMoZA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i>
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Business Hours */}
              <ScrollReveal>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Business Hours</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-gray-700">Monday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-gray-700">Tuesday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-gray-700">Wednesday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-gray-700">Thursday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="py-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Friday</span>
                        <span className="text-gray-600">9:00 AM - 11:00 AM</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span></span>
                        <span className="text-gray-600">2:00 PM - 6:00 PM</span>
                      </div>
                    </div>
                    <div className="py-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Saturday</span>
                        <span className="text-gray-600">9:00 AM - 11:00 AM</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span></span>
                        <span className="text-gray-600">2:00 PM - 6:00 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-gray-700">Sunday</span>
                      <span className="text-red-500 font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Social Media */}
              <ScrollReveal>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-share-alt text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
                      <p className="text-gray-600 text-sm">Stay updated with our latest projects</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href="https://instagram.com/fine__solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://facebook.com/finealwaysfine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              <div className="p-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Visit Our Office
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                  Located in the heart of Ambalappuzha, Kerala. Schedule a visit to our office for a personal consultation and see our design portfolio in person.
                </p>
                <a
                  href="https://maps.app.goo.gl/tTRaZUCUbyLuvMoZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200 font-medium"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Get Directions
                </a>
              </div>
              <div className="h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.890574712266!2d76.33837815!3d9.377408499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0624b5c0b6b8cf%3A0x8f5a5b5b6e5f5b5!2sAmbalappuzha%2C%20Kerala%20688561!5e0!3m2!1sen!2sin!4v1649999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fine Builders & Interiors Location - Ambalappuzha, Kerala"
                  className="rounded-b-2xl"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your vision and create a space that reflects your style and personality. Our team is ready to bring your dreams to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://wa.me/919895516163?text=Hi%20Fine%20Builders%20%26%20Interiors!%20I'm%20ready%20to%20start%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Start WhatsApp Chat
                  </motion.a>
                  <motion.a
                    href="tel:+919895516163"
                    className="inline-flex items-center px-8 py-4 bg-orange-700 text-white rounded-xl font-semibold hover:bg-orange-800 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Call Now
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
