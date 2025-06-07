import { useState } from "react";
import { Link } from "wouter";
import PortfolioFilter from "@/components/PortfolioFilter";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "residential",
      title: "Luxury Living Room",
      location: "Kochi, Kerala",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern luxury living room interior design"
    },
    {
      id: 2,
      category: "commercial",
      title: "Corporate Office Design",
      location: "Thiruvananthapuram, Kerala",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern commercial office interior design"
    },
    {
      id: 3,
      category: "kitchens",
      title: "Modular Kitchen Design",
      location: "Alappuzha, Kerala",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern modular kitchen design"
    },
    {
      id: 4,
      category: "residential",
      title: "Master Bedroom Suite",
      location: "Kollam, Kerala",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Contemporary master bedroom"
    },
    {
      id: 5,
      category: "commercial",
      title: "Restaurant Interior",
      location: "Kottayam, Kerala",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Restaurant interior design"
    },
    {
      id: 6,
      category: "kitchens",
      title: "Kitchen Island Design",
      location: "Palakkad, Kerala",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Kitchen island design"
    },
    {
      id: 7,
      category: "residential",
      title: "Luxury Bathroom",
      location: "Ernakulam, Kerala",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury bathroom design"
    },
    {
      id: 8,
      category: "commercial",
      title: "Boutique Store Design",
      location: "Thrissur, Kerala",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Retail store design"
    },
    {
      id: 9,
      category: "residential",
      title: "Home Study & Library",
      location: "Kozhikode, Kerala",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Home study design"
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
