import { useState } from "react";
import { Link } from "wouter";
import PortfolioFilter from "@/components/PortfolioFilter";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "kitchens",
      title: "Modern Modular Kitchen",
      location: "Ambalappuzha, Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.21_d88b7c74_1749311740966.jpg",
      alt: "Contemporary modular kitchen with island and pendant lighting"
    },
    {
      id: 2,
      category: "kitchens",
      title: "Premium Kitchen Design",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.19_4a8af288_1749311740967.jpg",
      alt: "Modern kitchen with bar seating and premium finishes"
    },
    {
      id: 3,
      category: "residential",
      title: "Master Bedroom Interior",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.20_aa9f3400_1749311740966.jpg",
      alt: "Contemporary master bedroom with accent lighting"
    },
    {
      id: 4,
      category: "residential",
      title: "Custom Wardrobe Design",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.19_422978ee_1749311740967.jpg",
      alt: "Modern wardrobe with integrated mirror and storage"
    },
    {
      id: 5,
      category: "residential",
      title: "Living Room Mirror Feature",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.22_160a8173_1749311740965.jpg",
      alt: "Elegant living room with decorative mirror and plants"
    },
    {
      id: 6,
      category: "residential",
      title: "Home Office Design",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.20_0efcec1b_1749311740967.jpg",
      alt: "Modern home office with ergonomic furniture"
    },
    {
      id: 7,
      category: "residential",
      title: "Custom Storage Solutions",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.20_8d7d53d7_1749311740966.jpg",
      alt: "Innovative wooden partition and storage design"
    },
    {
      id: 8,
      category: "commercial",
      title: "Showroom Display Design",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.22_bc39937e_1749311740967.jpg",
      alt: "Modern furniture showroom with contemporary displays"
    },
    {
      id: 9,
      category: "residential",
      title: "Ceiling Design with Mirror",
      location: "Kerala",
      image: "/attached_assets/WhatsApp Image 2025-06-07 at 20.33.21_ac096849_1749311740968.jpg",
      alt: "Innovative ceiling design with geometric mirror feature"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of transformative designs that showcase our commitment to excellence and innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <PortfolioFilter onFilterChange={setActiveFilter} />

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Inspired by Our Work?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us to discuss your project and see how we can transform your space.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
