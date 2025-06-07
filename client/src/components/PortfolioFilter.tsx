import { useState } from "react";

interface PortfolioFilterProps {
  onFilterChange: (filter: string) => void;
}

export default function PortfolioFilter({ onFilterChange }: PortfolioFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "kitchens", label: "Kitchens" },
  ];

  const handleFilterClick = (filterKey: string) => {
    setActiveFilter(filterKey);
    onFilterChange(filterKey);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => handleFilterClick(filter.key)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            activeFilter === filter.key
              ? "bg-orange-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-orange-600 hover:text-white"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
