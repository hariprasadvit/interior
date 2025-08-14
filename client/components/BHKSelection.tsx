interface BHKOption {
  type: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  sqft: string;
  ideal: string;
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
      features: [
        "1 Bedroom",
        "Living Room",
        "Kitchen",
        "1 Bathroom",
        "Balcony",
      ],
      price: "₹8-15 Lakhs",
      sqft: "450-650 sq ft",
      ideal: "Singles & Couples",
      image:
        "https://www.indextap.com/blog/wp-content/uploads/2023/12/1-bhk-flat-interior-design-service.jpg",
    },
    {
      type: "2BHK",
      title: "2 BHK Apartment",
      description: "Ideal for small families",
      features: [
        "2 Bedrooms",
        "Living Room",
        "Kitchen",
        "2 Bathrooms",
        "Balcony",
      ],
      price: "₹15-30 Lakhs",
      sqft: "650-950 sq ft",
      ideal: "Small Families",
      image:
        "https://homesunderbudget.com/wp-content/uploads/2024/10/2-bhk-isometric-768x486.png",
    },
    {
      type: "3BHK",
      title: "3 BHK Apartment",
      description: "Spacious home for larger families",
      features: [
        "3 Bedrooms",
        "Living Room",
        "Kitchen",
        "3 Bathrooms",
        "2 Balconies",
      ],
      price: "₹25-50 Lakhs",
      sqft: "950-1300 sq ft",
      ideal: "Large Families",
      image: "https://glamwoodinteriors.com/wp-content/uploads/2024/11/p.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6 leading-tight">
            Choose Your Home Size
          </h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            Select the apartment configuration that best fits your lifestyle and
            family needs
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
                  ? "ring-4 ring-indigo-600 shadow-2xl scale-105"
                  : "hover:shadow-xl"
              }`}
            >
              {/* Card Content */}
              <div className="bg-white p-8 h-full relative">
                {/* Popular Badge for 2BHK */}
                {option.type === "2BHK" && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    POPULAR
                  </div>
                )}

                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-brand-text">
                      {option.title}
                    </h3>
                    {selected === option.type && (
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </div>

                  <p className="text-brand-muted mb-4">{option.description}</p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-brand-muted">Area</p>
                      <p className="text-sm font-semibold text-brand-text">
                        {option.sqft}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-brand-muted">Ideal for</p>
                      <p className="text-sm font-semibold text-brand-text">
                        {option.ideal}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        <span className="text-sm text-brand-text">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-lg font-bold text-indigo-600">
                        {option.price}
                      </span>
                      <p className="text-xs text-brand-muted">
                        Estimated range
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-brand-muted">Starting from</p>
                      <p className="text-sm font-semibold text-brand-text">
                        ₹
                        {Math.floor(
                          parseInt(
                            option.price.split("-")[0].replace(/[^\d]/g, ""),
                          ) / parseInt(option.sqft.split("-")[0]),
                        )}
                        <span className="text-xs">/sq ft</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selection Overlay */}
              {selected === option.type && (
                <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none" />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </button>
          ))}
        </div>

        {/* Selection Info */}
        {selected && (
          <div className="text-center bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🏠</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-brand-text">
                  {bhkOptions.find((opt) => opt.type === selected)?.title}{" "}
                  Selected
                </h3>
                <p className="text-brand-muted">
                  Ready to choose your design style
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                🎨 All design options and room previews will be customized
                specifically for your <strong>{selected}</strong> apartment
                layout
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
