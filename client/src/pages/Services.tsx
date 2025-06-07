import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Residential Interiors",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Modern residential living room interior",
      icon: "fas fa-home",
      features: ["Living & Dining Rooms", "Bedroom Design", "Home Offices", "Complete Home Makeovers"]
    },
    {
      title: "Commercial Spaces",
      description: "Create inspiring work environments that enhance productivity and reflect your brand identity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Modern commercial office interior design",
      icon: "fas fa-building",
      features: ["Office Design", "Retail Spaces", "Restaurants & Cafes", "Corporate Headquarters"]
    },
    {
      title: "Modular Kitchens",
      description: "Functional and stylish kitchen solutions that maximize space and enhance your culinary experience.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Contemporary modular kitchen design",
      icon: "fas fa-utensils",
      features: ["Custom Cabinet Design", "Space Optimization", "Premium Appliances", "Storage Solutions"]
    },
    {
      title: "3D Visualizations",
      description: "See your design come to life before construction with photorealistic 3D renderings and walkthroughs.",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "3D interior design visualization and rendering",
      icon: "fas fa-cube",
      features: ["Photorealistic Renders", "Virtual Walkthroughs", "Design Presentations", "Concept Visualization"]
    },
    {
      title: "Vastu & Space Planning",
      description: "Harmonious space planning that balances functionality with traditional Vastu principles for positive energy.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Architectural floor plan and space planning design",
      icon: "fas fa-compass",
      features: ["Vastu Consultation", "Space Optimization", "Layout Planning", "Energy Flow Design"]
    },
    {
      title: "Custom Solutions",
      description: "Bespoke design solutions tailored to your unique requirements and lifestyle preferences.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Custom interior design solutions and furniture",
      icon: "fas fa-cog",
      features: ["Custom Furniture", "Unique Installations", "Specialty Projects", "Personalized Designs"]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interior design solutions that transform your space into a reflection of your unique style and functional needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gray-900 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a space that reflects your style and meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/919895516163"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
