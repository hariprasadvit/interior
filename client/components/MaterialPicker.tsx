interface MaterialField {
  name: string;
  label: string;
  options: string[];
}

interface MaterialPickerProps {
  title: string;
  fields: MaterialField[];
  selections: Record<string, string>;
  onSelectionChange: (field: string, value: string) => void;
}

export function MaterialPicker({ title, fields, selections, onSelectionChange }: MaterialPickerProps) {
  const getMaterialImage = (fieldName: string, option: string) => {
    const imageMap: Record<string, Record<string, string>> = {
      // Living Room
      tile: {
        "Matte Porcelain": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=200&fit=crop",
        "Glossy Ceramic": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop",
        "Textured Stone": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=200&fit=crop"
      },
      paint: {
        "Warm White": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
        "Greige": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=300&h=200&fit=crop",
        "Soft Beige": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=200&fit=crop",
        "Cool Grey": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=200&fit=crop"
      },
      // Kitchen
      slab: {
        "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
        "Quartz White": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=200&fit=crop",
        "Marble Carrara": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop"
      },
      sink: {
        "Single Bowl": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
        "Double Bowl": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop",
        "Farmhouse": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=200&fit=crop"
      },
      // Bedroom
      flooring: {
        "Wood Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=200&fit=crop",
        "Vitrified Tile": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=200&fit=crop",
        "Engineered Wood": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=200&fit=crop"
      },
      wardrobe: {
        "Matte Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=200&fit=crop",
        "High-Gloss Laminate": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=300&h=200&fit=crop",
        "Veneer": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=200&fit=crop"
      },
      lighting: {
        "Warm Recessed": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=200&fit=crop",
        "Pendant": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=300&h=200&fit=crop",
        "Cove": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
      }
    };

    return imageMap[fieldName]?.[option] || "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop";
  };

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-brand-text mb-8">{title}</h2>
      <div className="space-y-8">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-lg font-semibold text-brand-text mb-4">
              {field.label}
            </label>
            <div className="grid grid-cols-1 gap-4">
              {field.options.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelectionChange(field.name, option)}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                    selections[field.name] === option
                      ? "ring-3 ring-brand-primary shadow-lg"
                      : "hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-4 p-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={getMaterialImage(field.name, option)}
                        alt={option}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <span className={`font-medium ${
                        selections[field.name] === option
                          ? "text-brand-primary"
                          : "text-brand-text"
                      }`}>
                        {option}
                      </span>
                    </div>
                    {selections[field.name] === option && (
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
