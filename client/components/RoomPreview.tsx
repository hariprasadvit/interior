import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { getRoomImage, getAvailableMaterials } from "../utils/imageMap";
import { ImageIcon, Loader2, RefreshCw } from "lucide-react";

interface RoomPreviewProps {
  room: "living" | "kitchen" | "bedroom";
  selections: Record<string, string>;
  title: string;
  bhkType: string;
  houseStyle: string;
}

export function RoomPreview({ room, selections, title, bhkType, houseStyle }: RoomPreviewProps) {
  const [previewImage, setPreviewImage] = useState("");
  const [currentMaterial, setCurrentMaterial] = useState<string>("");
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    console.log('RoomPreview selections changed:', { room, selections, bhkType, houseStyle });
    
    if (!bhkType || !houseStyle) {
      console.warn('Missing bhkType or houseStyle');
      return;
    }

    updatePreviewImage();
  }, [selections, room, bhkType, houseStyle]);

  const updatePreviewImage = () => {
    const selectedValues = Object.values(selections).filter(Boolean);
    const lastSelection = selectedValues[selectedValues.length - 1];
    
    console.log('Updating preview image:', { lastSelection, selectedValues });
    
    setImageLoading(true);
    setImageError(false);
    
    try {
      let imageUrl: string;
      
      if (lastSelection) {
        imageUrl = getRoomImage(bhkType, houseStyle, room, lastSelection);
        setCurrentMaterial(lastSelection);
        console.log('Selected material image:', imageUrl);
      } else {
        imageUrl = getRoomImage(bhkType, houseStyle, room);
        setCurrentMaterial("");
        console.log('Default room image:', imageUrl);
      }
      
      // Pre-load the image to check if it's valid
      const img = new Image();
      img.onload = () => {
        console.log('Image loaded successfully:', imageUrl);
        setPreviewImage(imageUrl);
        setImageLoading(false);
        setImageError(false);
        setRetryCount(0);
      };
      
      img.onerror = () => {
        console.error('Image failed to load:', imageUrl);
        setImageLoading(false);
        setImageError(true);
        
        // Try fallback image on first error
        if (retryCount === 0) {
          const fallbackUrl = `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop`;
          setRetryCount(1);
          img.src = fallbackUrl;
        }
      };
      
      img.src = imageUrl;
      
    } catch (error) {
      console.error('Error in updatePreviewImage:', error);
      setImageLoading(false);
      setImageError(true);
    }
  };

  const handleRetryImage = () => {
    setRetryCount(0);
    updatePreviewImage();
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    console.error('Image load error in img element');
    setImageLoading(false);
    setImageError(true);
  };

  const getColorPalette = () => {
    const selectionValues = Object.values(selections);
    
    const stylePalettes = {
      "Modern": {
        base: ["#2C2C2C", "#F5F5F5", "#E8E8E8"],
        variants: {
          "Warm White": ["#FAF6F2", "#E8E2D5", "#D4C5B9"],
          "Cool Grey": ["#3A3A3A", "#6B6B6B", "#9E9E9E"],
          "Granite Black": ["#2C2C2C", "#4A4A4A", "#6B6B6B"],
          "Quartz White": ["#FFFFFF", "#F8F8F8", "#E8E8E8"]
        }
      },
      "Minimalist": {
        base: ["#FFFFFF", "#F8F8F8", "#E0E0E0"],
        variants: {
          "Warm White": ["#FEFEFE", "#F9F9F9", "#F0F0F0"],
          "Cool Grey": ["#E8E8E8", "#D0D0D0", "#B8B8B8"]
        }
      },
      "Traditional": {
        base: ["#8B4513", "#DAA520", "#F5DEB3"],
        variants: {
          "Warm White": ["#F5DEB3", "#DEB887", "#D2B48C"],
          "Soft Beige": ["#F5E6D3", "#E6D2B5", "#D7BE97"],
          "Wood Laminate": ["#8B4513", "#A0522D", "#CD853F"]
        }
      },
      "Industrial": {
        base: ["#2F2F2F", "#696969", "#B8860B"],
        variants: {
          "Cool Grey": ["#2F2F2F", "#4A4A4A", "#696969"],
          "Textured Stone": ["#5D5D5D", "#7A7A7A", "#9E9E9E"],
          "Granite Black": ["#1C1C1C", "#2F2F2F", "#4A4A4A"]
        }
      }
    };

    const styleData = stylePalettes[houseStyle as keyof typeof stylePalettes];
    if (!styleData) return ["#E8E2D5", "#D4C5B9", "#B8A082"];

    for (const selection of selectionValues) {
      if (styleData.variants[selection as keyof typeof styleData.variants]) {
        return styleData.variants[selection as keyof typeof styleData.variants];
      }
    }

    return styleData.base;
  };

  const getMaterialSwatch = (material: string) => {
    const swatchColors: Record<string, string> = {
      // Paint colors
      "Warm White": "#FAF6F2",
      "Greige": "#8D7B68",
      "Soft Beige": "#F5E6D3",
      "Cool Grey": "#7A7A7A",
      "Calming Blue": "#4A90E2",
      "Warm Taupe": "#A8987A",
      "Ivory": "#FFFFF0",
      // Tiles
      "Matte Porcelain": "#F5F5F5",
      "Glossy Ceramic": "#FFFFFF",
      "Textured Stone": "#8B7355",
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

  const getStyleBadge = () => {
    const badges = {
      "Modern": { color: "bg-blue-100 text-blue-800", icon: "🏢" },
      "Minimalist": { color: "bg-gray-100 text-gray-800", icon: "⚪" },
      "Traditional": { color: "bg-orange-100 text-orange-800", icon: "🏛️" },
      "Industrial": { color: "bg-slate-100 text-slate-800", icon: "🏭" }
    };
    
    return badges[houseStyle as keyof typeof badges] || badges.Modern;
  };

  const styleBadge = getStyleBadge();

  return (
    <div className="sticky top-8">
      <Card className="overflow-hidden shadow-2xl border-0 bg-white">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl text-brand-text">{title} Preview</CardTitle>
              <CardDescription>
                <span className="font-medium">{bhkType}</span> · <span className="font-medium">{houseStyle}</span> Style
              </CardDescription>
            </div>
            <div className={`px-3 py-1 rounded-full ${styleBadge.color} flex items-center space-x-1 text-sm`}>
              <span>{styleBadge.icon}</span>
              <span className="font-medium">{houseStyle}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-[4/3] relative bg-gray-100">
            {/* Loading State */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-brand-primary mx-auto mb-2" />
                  <p className="text-sm text-brand-muted">Loading preview...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {imageError && !imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                <div className="text-center">
                  <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-brand-muted mb-3">Preview temporarily unavailable</p>
                  <p className="text-xs text-gray-400 mb-4">{bhkType} {houseStyle} {room}</p>
                  <button
                    onClick={handleRetryImage}
                    className="flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 text-sm mx-auto"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Retry</span>
                  </button>
                </div>
              </div>
            )}

            {/* Main Image */}
            {previewImage && (
              <img
                src={previewImage}
                alt={`${room} preview for ${bhkType} ${houseStyle}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: imageError ? 'none' : 'block' }}
              />
            )}
            
            {/* Overlays - only show when image is loaded */}
            {!imageLoading && !imageError && previewImage && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* BHK Type Badge */}
                <div className="absolute top-4 left-4 bg-brand-primary px-3 py-1 rounded-full shadow-lg">
                  <span className="text-white text-sm font-medium">{bhkType}</span>
                </div>
                
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
                
                {/* Current Material Indicator */}
                {currentMaterial && (
                  <div className="absolute top-16 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                    <span className="text-xs font-medium text-brand-text">Latest: {currentMaterial}</span>
                  </div>
                )}
                
                {/* Selection Summary */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-brand-text">{title} Design</h3>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        Style Locked
                      </span>
                    </div>
                    
                    {Object.keys(selections).filter(key => selections[key]).length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(selections).filter(([_, value]) => value).map(([key, value]) => (
                          <div key={key} className="flex items-center space-x-2">
                            <div
                              className="w-3 h-3 rounded border border-gray-300 shadow-sm"
                              style={{ backgroundColor: getMaterialSwatch(value) }}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-medium text-brand-text capitalize truncate">{key}</p>
                              <p className="text-xs text-brand-muted truncate">{value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-2">
                        <p className="text-sm text-brand-muted">
                          Start selecting materials to see your {houseStyle.toLowerCase()} {bhkType} design
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Available Materials Info */}
      <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">
          Available for {houseStyle} {bhkType}:
        </h4>
        <div className="flex flex-wrap gap-1">
          {getAvailableMaterials(bhkType, houseStyle, room).slice(0, 6).map((material, index) => (
            <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
              {material}
            </span>
          ))}
          {getAvailableMaterials(bhkType, houseStyle, room).length > 6 && (
            <span className="text-xs text-blue-600">
              +{getAvailableMaterials(bhkType, houseStyle, room).length - 6} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
