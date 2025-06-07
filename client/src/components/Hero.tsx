import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative pt-16 lg:pt-20 min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-gradient"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
            Crafting Beautiful{" "}
            <span className="text-orange-300">Interiors</span> That Tell Your Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
            Premium interior design services in Kerala, transforming spaces into extraordinary experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Link
              href="/portfolio"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 text-center"
            >
              View Our Work
            </Link>
            <a
              href="tel:+919895516163"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 text-center"
            >
              <i className="fas fa-phone mr-2"></i> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75">Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}
