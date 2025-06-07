import { Link } from "wouter";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Our Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Promise</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Fine Builders & Interiors, we believe every space has a story. Our commitment is to transform your vision into reality with exceptional craftsmanship, innovative designs, and personalized service that exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center card-hover bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">Premium materials and meticulous attention to detail in every project we undertake.</p>
            </div>

            <div className="text-center card-hover bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Centric Approach</h3>
              <p className="text-gray-600">Your vision guides our design process, ensuring personalized solutions that reflect your style.</p>
            </div>

            <div className="text-center card-hover bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">Efficient project management ensures your dream space is ready when promised.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Services Preview */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h3>
              <p className="text-gray-600 mb-6">From residential interiors to commercial spaces, we offer comprehensive design solutions tailored to your needs.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-home text-orange-600 mr-3"></i>
                  <span>Residential Interiors</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-building text-orange-600 mr-3"></i>
                  <span>Commercial Spaces</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-utensils text-orange-600 mr-3"></i>
                  <span>Modular Kitchens</span>
                </div>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
              >
                Explore All Services <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            {/* Portfolio Preview */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Work</h3>
              <p className="text-gray-600 mb-6">Discover our portfolio of stunning transformations that showcase our commitment to excellence and innovation.</p>
              {/* Elegant bedroom with modern furniture and warm lighting */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Elegant bedroom interior with modern furniture"
                  className="w-full h-40 object-cover"
                />
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
              >
                View Complete Portfolio <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
