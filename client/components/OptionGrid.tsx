interface Option {
  label: string;
  value: string;
  image?: string;
  description?: string;
}

interface OptionGridProps {
  title: string;
  options: Option[];
  selected?: string;
  onSelect: (value: string) => void;
}

export function OptionGrid({ title, options, selected, onSelect }: OptionGridProps) {
  const getThemeImage = (theme: string) => {
    const images = {
      minimalist: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      modern: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
      traditional: "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=400&h=300&fit=crop",
      industrial: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop"
    };
    return images[theme.toLowerCase() as keyof typeof images] || images.modern;
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-brand-text text-center mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
              selected === option.value
                ? "ring-4 ring-brand-primary scale-105 shadow-2xl"
                : "hover:scale-102 hover:shadow-xl"
            }`}
          >
            <div className="aspect-[4/3] relative">
              <img
                src={option.image || getThemeImage(option.value)}
                alt={option.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Selection indicator */}
              {selected === option.value && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              )}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{option.label}</h3>
              {option.description && (
                <p className="text-sm opacity-90">{option.description}</p>
              )}
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
}
