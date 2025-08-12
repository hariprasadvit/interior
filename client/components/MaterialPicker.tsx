interface MaterialField {
  name: string;
  label: string;
  options: string[];
  type?: 'material' | 'color' | 'style';
}

interface MaterialPickerProps {
  title: string;
  fields: MaterialField[];
  selections: Record<string, string>;
  onSelectionChange: (field: string, value: string) => void;
}

export function MaterialPicker({ title, fields, selections, onSelectionChange }: MaterialPickerProps) {
  const getMaterialSwatch = (fieldName: string, option: string) => {
    const swatchMap: Record<string, Record<string, { color: string; pattern?: string; texture?: string }>> = {
      // Living Room Materials
      tile: {
        "Matte Porcelain": { color: "#F5F5F5", texture: "matte" },
        "Glossy Ceramic": { color: "#FFFFFF", texture: "glossy" },
        "Textured Stone": { color: "#8B7355", texture: "rough" }
      },
      paint: {
        "Warm White": { color: "#FAF6F2" },
        "Greige": { color: "#8D7B68" },
        "Soft Beige": { color: "#F5E6D3" },
        "Cool Grey": { color: "#7A7A7A" }
      },
      furniture: {
        "Modern Sofa": { color: "#4A4A4A", pattern: "solid" },
        "Classic Sofa": { color: "#8B4513", pattern: "fabric" },
        "Sectional": { color: "#2C2C2C", pattern: "leather" }
      },
      carpet: {
        "Persian Rug": { color: "#8B0000", pattern: "ornate" },
        "Modern Geometric": { color: "#4A90E2", pattern: "geometric" },
        "Solid Color": { color: "#D3D3D3", pattern: "solid" }
      },
      // Kitchen Materials
      slab: {
        "Granite Black": { color: "#2C2C2C", texture: "speckled" },
        "Quartz White": { color: "#FFFFFF", texture: "smooth" },
        "Marble Carrara": { color: "#F8F8F8", pattern: "veined" }
      },
      wallTile: {
        "Subway Gloss": { color: "#FFFFFF", texture: "glossy" },
        "Hex Matte": { color: "#E8E8E8", texture: "matte" },
        "Patterned Porcelain": { color: "#F0F0F0", pattern: "geometric" }
      },
      doorKnob: {
        "Modern Handle": { color: "#C0C0C0", texture: "brushed" },
        "Classic Knob": { color: "#FFD700", texture: "polished" },
        "Brushed Steel": { color: "#A8A8A8", texture: "brushed" }
      },
      sink: {
        "Single Bowl": { color: "#E8E8E8", texture: "satin" },
        "Double Bowl": { color: "#F5F5F5", texture: "matte" },
        "Farmhouse": { color: "#FFFFFF", texture: "glossy" }
      },
      // Bedroom Materials
      flooring: {
        "Wood Laminate": { color: "#8B4513", pattern: "wood-grain" },
        "Vitrified Tile": { color: "#D3D3D3", texture: "smooth" },
        "Engineered Wood": { color: "#A0522D", pattern: "wood-grain" }
      },
      bedroomPaint: {
        "Calming Blue": { color: "#4A90E2" },
        "Warm Taupe": { color: "#A8987A" },
        "Ivory": { color: "#FFFFF0" }
      },
      wardrobe: {
        "Matte Laminate": { color: "#696969", texture: "matte" },
        "High-Gloss Laminate": { color: "#2F2F2F", texture: "glossy" },
        "Veneer": { color: "#8B4513", pattern: "wood-grain" }
      },
      lighting: {
        "Warm Recessed": { color: "#FFF8DC" },
        "Pendant": { color: "#F0F8FF" },
        "Cove": { color: "#F5F5DC" }
      },
      bed: {
        "Platform Bed": { color: "#8B4513", pattern: "wood-grain" },
        "Storage Bed": { color: "#A0522D", texture: "upholstered" },
        "Four Poster": { color: "#654321", pattern: "wood-grain" }
      }
    };

    return swatchMap[fieldName]?.[option] || { color: "#E8E8E8" };
  };

  const getSwatchStyle = (swatch: { color: string; pattern?: string; texture?: string }) => {
    let style: React.CSSProperties = {
      backgroundColor: swatch.color
    };

    // Add patterns and textures
    if (swatch.pattern === "wood-grain") {
      style.backgroundImage = `repeating-linear-gradient(
        90deg,
        ${swatch.color},
        ${swatch.color} 2px,
        rgba(0,0,0,0.1) 2px,
        rgba(0,0,0,0.1) 4px
      )`;
    } else if (swatch.pattern === "geometric") {
      style.backgroundImage = `repeating-conic-gradient(
        from 0deg,
        ${swatch.color} 0deg 90deg,
        rgba(0,0,0,0.1) 90deg 180deg
      )`;
    } else if (swatch.pattern === "veined") {
      style.backgroundImage = `linear-gradient(
        45deg,
        ${swatch.color} 70%,
        rgba(128,128,128,0.3) 71%,
        rgba(128,128,128,0.3) 73%,
        ${swatch.color} 74%
      )`;
    } else if (swatch.texture === "speckled") {
      style.backgroundImage = `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 1px, transparent 1px),
                               radial-gradient(circle at 40% 40%, rgba(0,0,0,0.2) 1px, transparent 1px)`;
    }

    return style;
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
              {field.options.map((option) => {
                const swatch = getMaterialSwatch(field.name, option);
                const isSelected = selections[field.name] === option;
                
                return (
                  <button
                    key={option}
                    onClick={() => onSelectionChange(field.name, option)}
                    className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                      isSelected
                        ? "ring-3 ring-brand-primary shadow-lg scale-[1.02]"
                        : "hover:shadow-md hover:scale-[1.01]"
                    }`}
                  >
                    <div className="flex items-center space-x-4 p-4">
                      {/* Large Material Swatch */}
                      <div className="relative">
                        <div 
                          className="w-16 h-16 rounded-lg border-2 border-gray-200 shadow-inner"
                          style={getSwatchStyle(swatch)}
                        />
                        {/* Texture overlay indicators */}
                        {swatch.texture === "glossy" && (
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                        )}
                        {swatch.texture === "matte" && (
                          <div className="absolute inset-0 rounded-lg bg-black/5 pointer-events-none" />
                        )}
                      </div>
                      
                      <div className="flex-1 text-left">
                        <span className={`font-medium text-lg block ${
                          isSelected ? "text-brand-primary" : "text-brand-text"
                        }`}>
                          {option}
                        </span>
                        <span className="text-sm text-brand-muted">
                          {swatch.texture && `${swatch.texture} finish`}
                          {swatch.pattern && !swatch.texture && `${swatch.pattern} pattern`}
                        </span>
                      </div>
                      
                      {/* Selection Indicator */}
                      <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                        isSelected 
                          ? "bg-brand-primary border-brand-primary" 
                          : "border-gray-300 group-hover:border-brand-primary"
                      }`}>
                        {isSelected && (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
