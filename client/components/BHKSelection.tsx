interface BHKOption {
  type: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}

interface BHKSelectionProps {
  selected?: string;
  onSelect: (bhkType: string) => void;
}

export function BHKSelection({ selected, onSelect }: BHKSelectionProps) {
  const bhkOptions: BHKOption[] = [
    {
      type: "1BHK",
      title: "1 BHK Apartment",
      description: "Perfect for individuals or couples",
      features: ["1 Bedroom", "Living Room", "Kitchen", "1 Bathroom", "Balcony"],
      price: "₹8-15 Lakhs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=enhance"
    },
    {
      type: "2BHK",
      title: "2 BHK Apartment", 
      description: "Ideal for small families",
      features: ["2 Bedrooms", "Living Room", "Kitchen", "2 Bathrooms", "Balcony"],
      price: "₹15-30 Lakhs",
      image: "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=400&h=300&fit=crop&auto=enhance"
    },
    {
      type: "3BHK",
      title: "3 BHK Apartment",
      description: "Spacious home for larger families",
      features: ["3 Bedrooms", "Living Room", "Kitchen", "3 Bathrooms", "2 Balconies"],
      price: "₹25-50 Lakhs",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&auto=enhance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6">
            Choose Your Home Size
          </h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Select the apartment configuration that best fits your lifestyle and family needs
          </p>
        </div>

        {/* BHK Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {bhkOptions.map((option) => (
            <button
              key={option.type}
              onClick={() => onSelect(option.type)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                selected === option.type
                  ? "ring-4 ring-brand-primary shadow-2xl scale-105"
                  : "hover:shadow-xl"
              }`}
            >
              {/* Card Content */}
              <div className="bg-white p-8 h-full">
                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-brand-text">{option.title}</h3>
                    {selected === option.type && (
                      <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-brand-muted mb-4">{option.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        <span className="text-sm text-brand-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-primary">{option.price}</span>
                    <span className="text-sm text-brand-muted">Estimated range</span>
                  </div>
                </div>
              </div>

              {/* Selection Overlay */}
              {selected === option.type && (
                <div className="absolute inset-0 bg-brand-primary/10 pointer-events-none" />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </button>
          ))}
        </div>

        {/* Selection Info */}
        {selected && (
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-text">
                  {bhkOptions.find(opt => opt.type === selected)?.title} Selected
                </h3>
                <p className="text-brand-muted">Ready to choose your design style</p>
              </div>
            </div>
            <p className="text-sm text-brand-muted">
              All design options and previews will be customized for your {selected} apartment layout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
