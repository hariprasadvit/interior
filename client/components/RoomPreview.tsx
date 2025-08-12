import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface RoomPreviewProps {
  room: "living" | "kitchen" | "bedroom";
  selections: Record<string, string>;
  title: string;
}

export function RoomPreview({ room, selections, title }: RoomPreviewProps) {
  const [previewImage, setPreviewImage] = useState("");

  // Base room layouts - consistent room structure
  const baseRoomImages = {
    living: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", // Modern living room base
    kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", // Kitchen base layout
    bedroom: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop" // Bedroom base layout
  };

  // Material-specific variations for each room
  const materialImages = {
    living: {
      // Tile variations
      "Matte Porcelain": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      "Glossy Ceramic": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop",
      "Textured Stone": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      // Paint variations
      "Warm White": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      "Greige": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop", 
      "Soft Beige": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop",
      "Cool Grey": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      // Furniture variations
      "Modern Sofa": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      "Classic Sofa": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop",
      "Sectional": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop",
      // Carpet variations
      "Persian Rug": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      "Modern Geometric": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      "Solid Color": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop"
    },
    kitchen: {
      // Slab variations
      "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      "Quartz White": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "Marble Carrara": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      // Wall tile variations
      "Subway Gloss": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "Hex Matte": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      "Patterned Porcelain": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      // Door knob styles
      "Modern Handle": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      "Classic Knob": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "Brushed Steel": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      // Sink styles
      "Single Bowl": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      "Double Bowl": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      "Farmhouse": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop"
    },
    bedroom: {
      // Flooring variations
      "Wood Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop",
      "Vitrified Tile": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop",
      "Engineered Wood": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      // Paint variations
      "Calming Blue": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop",
      "Warm Taupe": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop",
      "Ivory": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      // Wardrobe variations
      "Matte Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop",
      "High-Gloss Laminate": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop",
      "Veneer": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      // Lighting variations
      "Warm Recessed": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop",
      "Pendant": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop",
      "Cove": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      // Bed types
      "Platform Bed": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop",
      "Storage Bed": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?w=600&h=400&fit=crop",
      "Four Poster": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    }
  };

  useEffect(() => {
    // Get the most recent selection to determine the preview image
    const selectedValues = Object.values(selections).filter(Boolean);
    const lastSelection = selectedValues[selectedValues.length - 1];
    
    if (lastSelection && materialImages[room][lastSelection as keyof typeof materialImages[typeof room]]) {
      setPreviewImage(materialImages[room][lastSelection as keyof typeof materialImages[typeof room]]);
    } else {
      setPreviewImage(baseRoomImages[room]);
    }
  }, [selections, room]);

  const getColorPalette = () => {
    const selectionValues = Object.values(selections);
    
    // Generate color palette based on selections
    if (selectionValues.includes("Warm White") || selectionValues.includes("Ivory")) {
      return ["#F8F6F0", "#E8E2D5", "#D4C5B9"];
    } else if (selectionValues.includes("Cool Grey") || selectionValues.includes("Granite Black")) {
      return ["#3A3A3A", "#6B6B6B", "#9E9E9E"];
    } else if (selectionValues.includes("Calming Blue")) {
      return ["#4A90E2", "#7BB3F0", "#A8C8F0"];
    } else if (selectionValues.includes("Greige") || selectionValues.includes("Warm Taupe")) {
      return ["#8D7B68", "#A8987A", "#C4B49A"];
    } else {
      return ["#E8E2D5", "#D4C5B9", "#B8A082"];
    }
  };

  const getMaterialSwatch = (material: string) => {
    const swatchColors: Record<string, string> = {
      // Tiles
      "Matte Porcelain": "#F5F5F5",
      "Glossy Ceramic": "#FFFFFF",
      "Textured Stone": "#8B7355",
      // Paints
      "Warm White": "#FAF6F2",
      "Greige": "#8D7B68",
      "Soft Beige": "#F5E6D3",
      "Cool Grey": "#7A7A7A",
      "Calming Blue": "#4A90E2",
      "Warm Taupe": "#A8987A",
      "Ivory": "#FFFFF0",
      // Kitchen materials
      "Granite Black": "#2C2C2C",
      "Quartz White": "#FFFFFF",
      "Marble Carrara": "#F8F8F8",
      "Subway Gloss": "#FFFFFF",
      "Hex Matte": "#E8E8E8",
      "Patterned Porcelain": "#F0F0F0",
      // Bedroom materials
      "Wood Laminate": "#8B4513",
      "Vitrified Tile": "#D3D3D3",
      "Engineered Wood": "#A0522D",
      "Matte Laminate": "#696969",
      "High-Gloss Laminate": "#2F2F2F",
      "Veneer": "#8B4513"
    };
    
    return swatchColors[material] || "#E8E8E8";
  };

  return (
    <div className="sticky top-8">
      <Card className="overflow-hidden shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-2xl text-brand-text">{title} Preview</CardTitle>
          <CardDescription>See your selections come to life</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-[4/3] relative">
            <img
              src={previewImage}
              alt={`${room} preview`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Color Palette Overlay */}
            <div className="absolute top-4 right-4 flex space-x-1">
              {getColorPalette().map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            
            {/* Material Swatches */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-bold text-brand-text mb-3">Current Selections</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selections).filter(([_, value]) => value).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded border border-gray-300"
                        style={{ backgroundColor: getMaterialSwatch(value) }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-brand-text capitalize truncate">{key}</p>
                        <p className="text-xs text-brand-muted truncate">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
