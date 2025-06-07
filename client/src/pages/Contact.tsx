import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 floating-elements pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight">
              Get In Touch
            </motion.h1>
            <motion.div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-12 rounded-full" />
            <motion.p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to transform your space? Let's discuss your vision and create something extraordinary together.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      Navarakkal–Ambalappuzha Temple Road<br />
                      Ambalappuzha, Kerala 688561<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a
                      href="tel:+919895516163"
                      className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
                    >
                      +91 9895516163
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:finebuildersandinteriors@gmail.com"
                      className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
                    >
                      finebuildersandinteriors@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Connect</h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/919895516163?text=Hi%20Fine%20Builders%20%26%20Interiors!%20I'm%20interested%20in%20your%20interior%20design%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <i className="fab fa-whatsapp text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold">WhatsApp Chat</p>
                    <p className="text-sm text-green-100">Quick response guaranteed</p>
                  </div>
                </a>

                <a
                  href="mailto:finebuildersandinteriors@gmail.com?subject=Interior%20Design%20Inquiry"
                  className="flex items-center w-full bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  <i className="fas fa-envelope text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-orange-100">Detailed project discussion</p>
                  </div>
                </a>

                <a
                  href="tel:+919895516163"
                  className="flex items-center w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <i className="fas fa-phone text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Call Now</p>
                    <p className="text-sm text-blue-100">Speak to our design team</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/fine__solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="https://facebook.com/finealwaysfine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
              </div>
              <p className="text-gray-600 mt-4 text-sm">Get inspired by our latest projects and design tips!</p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Find Us</h2>
              <p className="text-gray-600 mt-2">Visit our office for a personal consultation</p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.890574712266!2d76.33837815!3d9.377408499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0624b5c0b6b8cf%3A0x8f5a5b5b6e5f5b5!2sAmbalappuzha%2C%20Kerala%20688561!5e0!3m2!1sen!2sin!4v1649999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fine Builders & Interiors Location - Ambalappuzha, Kerala"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
