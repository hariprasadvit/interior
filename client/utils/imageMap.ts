// Comprehensive image mapping system for BHK + Style + Room + Material combinations
// Using reliable Unsplash images with proper IDs and fallbacks
export const imageMap = {
  "1BHK": {
    "Modern": {
      "living": {
        // Paint colors - Modern living rooms
        "Warm White": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Greige": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Soft Beige": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Cool Grey": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        // Tile types
        "Matte Porcelain": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Glossy Ceramic": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Textured Stone": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Quartz White": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Marble Carrara": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Subway Gloss": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Hex Matte": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Vitrified Tile": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Engineered Wood": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Calming Blue": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Warm Taupe": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      }
    },
    "Minimalist": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50",
        "Greige": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50",
        "Soft Beige": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50",
        "Cool Grey": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50",
        "Quartz White": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50",
        "Marble Carrara": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50",
        "Vitrified Tile": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50",
        "Calming Blue": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-50"
      }
    },
    "Traditional": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=30",
        "Greige": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=30",
        "Soft Beige": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=30"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=30",
        "Quartz White": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=30"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=30",
        "Warm Taupe": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=30"
      }
    },
    "Industrial": {
      "living": {
        "Cool Grey": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=20",
        "Textured Stone": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=20"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=20",
        "Hex Matte": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=20"
      },
      "bedroom": {
        "Engineered Wood": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=20"
      }
    }
  },
  "2BHK": {
    "Modern": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Greige": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Soft Beige": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Cool Grey": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Matte Porcelain": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Glossy Ceramic": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Textured Stone": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Quartz White": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Marble Carrara": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Subway Gloss": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Hex Matte": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Vitrified Tile": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Engineered Wood": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Calming Blue": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Warm Taupe": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      }
    },
    "Minimalist": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-60",
        "Greige": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-60",
        "Cool Grey": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-60"
      },
      "kitchen": {
        "Quartz White": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-60",
        "Marble Carrara": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-60"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-60",
        "Calming Blue": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-60"
      }
    },
    "Traditional": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=40",
        "Soft Beige": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=40"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=40",
        "Marble Carrara": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=40"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=40",
        "Warm Taupe": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=40"
      }
    },
    "Industrial": {
      "living": {
        "Cool Grey": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=30",
        "Textured Stone": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=30"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=30",
        "Hex Matte": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=30"
      },
      "bedroom": {
        "Engineered Wood": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=30"
      }
    }
  },
  "3BHK": {
    "Modern": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Greige": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Soft Beige": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Cool Grey": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Matte Porcelain": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Glossy Ceramic": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Textured Stone": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Quartz White": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Marble Carrara": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Subway Gloss": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Hex Matte": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Vitrified Tile": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Engineered Wood": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Calming Blue": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
        "Warm Taupe": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
      }
    },
    "Minimalist": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-70",
        "Cool Grey": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-70"
      },
      "kitchen": {
        "Quartz White": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-70",
        "Marble Carrara": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-70"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sat=-70"
      }
    },
    "Traditional": {
      "living": {
        "Warm White": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=50",
        "Soft Beige": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=50"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=50",
        "Marble Carrara": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=50"
      },
      "bedroom": {
        "Wood Laminate": "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=800&h=600&fit=crop&sepia=50"
      }
    },
    "Industrial": {
      "living": {
        "Cool Grey": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=40",
        "Textured Stone": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=40"
      },
      "kitchen": {
        "Granite Black": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=40"
      },
      "bedroom": {
        "Engineered Wood": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop&contrast=40"
      }
    }
  }
};

// Reliable fallback images for each room type with proper Unsplash URLs
const defaultImages = {
  "living": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
  "kitchen": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
  "bedroom": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
};

/**
 * Get room image based on BHK type, house style, room name, and selected material
 * Ensures all images are locked to the selected BHK + style combination
 * Includes proper error handling and fallbacks
 */
export function getRoomImage(
  bhkType: string, 
  houseStyle: string, 
  roomName: string, 
  selectedMaterial?: string
): string {
  // Validate inputs
  if (!bhkType || !houseStyle || !roomName) {
    return defaultImages[roomName as keyof typeof defaultImages] || defaultImages.living;
  }

  try {
    // Navigate through the imageMap structure
    const bhkData = imageMap[bhkType as keyof typeof imageMap];
    if (!bhkData) {
      return defaultImages[roomName as keyof typeof defaultImages] || defaultImages.living;
    }

    const styleData = bhkData[houseStyle as keyof typeof bhkData];
    if (!styleData) {
      return defaultImages[roomName as keyof typeof defaultImages] || defaultImages.living;
    }

    const roomData = styleData[roomName as keyof typeof styleData];
    if (!roomData) {
      return defaultImages[roomName as keyof typeof defaultImages] || defaultImages.living;
    }

    // If a specific material is selected, try to get its image
    if (selectedMaterial && roomData[selectedMaterial as keyof typeof roomData]) {
      return roomData[selectedMaterial as keyof typeof roomData];
    }

    // Otherwise, return the first available image for this room in this BHK + style
    const firstImageKey = Object.keys(roomData)[0];
    return roomData[firstImageKey as keyof typeof roomData] || defaultImages[roomName as keyof typeof defaultImages];
  } catch (error) {
    console.warn(`Failed to get room image for ${bhkType} ${houseStyle} ${roomName}:`, error);
    return defaultImages[roomName as keyof typeof defaultImages] || defaultImages.living;
  }
}

/**
 * Get all available materials for a specific BHK + style + room combination
 */
export function getAvailableMaterials(bhkType: string, houseStyle: string, roomName: string): string[] {
  try {
    const bhkData = imageMap[bhkType as keyof typeof imageMap];
    if (!bhkData) return [];

    const styleData = bhkData[houseStyle as keyof typeof bhkData];
    if (!styleData) return [];

    const roomData = styleData[roomName as keyof typeof styleData];
    if (!roomData) return [];

    return Object.keys(roomData);
  } catch (error) {
    console.warn(`Failed to get available materials for ${bhkType} ${houseStyle} ${roomName}:`, error);
    return [];
  }
}

/**
 * Check if a material combination is available for the selected BHK + style
 */
export function isMaterialAvailable(
  bhkType: string, 
  houseStyle: string, 
  roomName: string, 
  material: string
): boolean {
  try {
    const availableMaterials = getAvailableMaterials(bhkType, houseStyle, roomName);
    return availableMaterials.includes(material);
  } catch (error) {
    console.warn(`Failed to check material availability:`, error);
    return false;
  }
}
