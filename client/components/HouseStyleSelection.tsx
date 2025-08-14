interface StyleOption {
  value: string;
  title: string;
  description: string;
  characteristics: string[];
  colorPalette: string[];
  image: string;
  mood: string;
}

interface HouseStyleSelectionProps {
  selected?: string;
  onSelect: (style: string) => void;
  bhkType: string;
}

export function HouseStyleSelection({ selected, onSelect, bhkType }: HouseStyleSelectionProps) {
  const styleOptions: StyleOption[] = [
    {
      value: "Modern",
      title: "Modern Contemporary",
      description: "Clean lines, open spaces, and sophisticated minimalism",
      characteristics: ["Neutral color schemes", "Geometric patterns", "High-tech materials", "Open floor plans"],
      colorPalette: ["#2C2C2C", "#F5F5F5", "#E8E8E8", "#4A90E2"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&auto=enhance",
      mood: "Sophisticated & Clean"
    },
    {
      value: "Minimalist",
      title: "Minimalist Zen",
      description: "Less is more - focus on functionality and tranquility",
      characteristics: ["Monochromatic palettes", "Natural materials", "Uncluttered spaces", "Simple forms"],
      colorPalette: ["#FFFFFF", "#F8F8F8", "#E0E0E0", "#CCCCCC"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fb419a54b0da842d5b0350a48628594a0?format=webp&width=800",
      mood: "Peaceful & Serene"
    },
    {
      value: "Traditional",
      title: "Classic Traditional",
      description: "Timeless elegance with rich textures and warm colors",
      characteristics: ["Warm wood tones", "Rich fabrics", "Ornate details", "Classic furniture"],
      colorPalette: ["#8B4513", "#DAA520", "#F5DEB3", "#CD853F"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Faf54d6c82c2c428fa406fa6aa6d65a07?format=webp&width=800",
      mood: "Warm & Inviting"
    },
    {
      value: "Industrial",
      title: "Urban Industrial",
      description: "Raw materials and exposed elements with urban sophistication",
      characteristics: ["Exposed brick", "Metal accents", "Concrete surfaces", "Dark color schemes"],
      colorPalette: ["#2F2F2F", "#696969", "#B8860B", "#A0522D"],
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&h=400&fit=crop&auto=enhance&contrast=20",
      mood: "Bold & Edgy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation CTA at top */}
        {selected && (
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl max-w-2xl mx-auto">
              <div className="text-xl font-bold text-indigo-800 mb-4">Perfect! Your style is selected</div>
              <p className="text-indigo-600 mb-6">Now let's start customizing your {bhkType} {selected} home room by room</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-600/10 px-4 py-2 rounded-full mb-6">
            <span className="text-indigo-600 font-medium">{bhkType} Selected</span>
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6">
            Choose Your Design Style
          </h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Select a design aesthetic that reflects your personality and lifestyle preferences
          </p>
        </div>

        {/* Style Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {styleOptions.map((style) => (
            <button
              key={style.value}
              onClick={() => onSelect(style.value)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                selected === style.value
                  ? "ring-4 ring-indigo-600 shadow-2xl scale-105"
                  : "hover:shadow-xl"
              }`}
            >
              {/* Card Content */}
              <div className="bg-white h-full">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Style Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-brand-text">{style.mood}</span>
                  </div>

                  {/* Selection Indicator */}
                  {selected === style.value && (
                    <div className="absolute top-4 left-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  )}

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{style.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-brand-muted text-sm mb-4">{style.description}</p>
                  
                  {/* Color Palette */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xs font-medium text-brand-text">Colors:</span>
                    <div className="flex space-x-1">
                      {style.colorPalette.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Characteristics */}
                  <div className="space-y-1">
                    {style.characteristics.slice(0, 2).map((char, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-indigo-600 rounded-full"></div>
                        <span className="text-xs text-brand-text">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selection Overlay */}
              {selected === style.value && (
                <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none" />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </button>
          ))}
        </div>

        {/* Detailed Preview for Selected Style */}
        {selected && (
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-brand-text mb-4">
                  {styleOptions.find(s => s.value === selected)?.title}
                </h3>
                <p className="text-brand-muted mb-6">
                  {styleOptions.find(s => s.value === selected)?.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Key Characteristics:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {styleOptions.find(s => s.value === selected)?.characteristics.map((char, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                          <span className="text-sm text-brand-text">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Color Palette:</h4>
                    <div className="flex space-x-3">
                      {styleOptions.find(s => s.value === selected)?.colorPalette.map((color, index) => (
                        <div key={index} className="text-center">
                          <div
                            className="w-8 h-8 rounded-lg border border-gray-200 mb-1"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs text-brand-muted">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-3 bg-green-50 px-6 py-4 rounded-2xl">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">Style Locked</h4>
                    <p className="text-green-700 text-sm">All room previews will match {selected} aesthetic</p>
                  </div>
                </div>
                <p className="text-xs text-brand-muted mt-4">
                  Designed specifically for {bhkType} layouts
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
