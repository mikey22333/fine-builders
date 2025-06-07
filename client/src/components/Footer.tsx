import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Fine Builders & Interiors</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming spaces into extraordinary experiences with premium interior design services in Kerala. Your dream space awaits.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/fine__solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://facebook.com/finealwaysfine"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://wa.me/919895516163"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Ambalappuzha, Kerala</p>
              <p>
                <a
                  href="tel:+919895516163"
                  className="hover:text-white transition-colors duration-200"
                >
                  +91 9895516163
                </a>
              </p>
              <p>
                <a
                  href="mailto:finebuildersandinteriors@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  finebuildersandinteriors@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Fine Builders & Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
