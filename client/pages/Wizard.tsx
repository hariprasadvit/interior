import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProgressSteps } from "../components/ProgressSteps";
import { OptionGrid } from "../components/OptionGrid";
import { MaterialPicker } from "../components/MaterialPicker";
import { RoomPreview } from "../components/RoomPreview";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Upload, FileText, CheckCircle } from "lucide-react";

interface WizardState {
  step: number;
  theme: string;
  living: { tile: string; paint: string; furniture: string; carpet: string };
  kitchen: { slab: string; wallTile: string; doorKnob: string; sink: string };
  bedroom: { flooring: string; bedroomPaint: string; wardrobe: string; lighting: string; bed: string };
  floorPlanUrl: string;
  quote: { living: number; kitchen: number; bedroom: number; total: number };
}

export default function Wizard() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [state, setState] = useState<WizardState>({
    step: parseInt(searchParams.get("step") || "1"),
    theme: "",
    living: { tile: "", paint: "", furniture: "", carpet: "" },
    kitchen: { slab: "", wallTile: "", doorKnob: "", sink: "" },
    bedroom: { flooring: "", bedroomPaint: "", wardrobe: "", lighting: "", bed: "" },
    floorPlanUrl: "",
    quote: { living: 0, kitchen: 0, bedroom: 0, total: 0 }
  });

  const steps = ["Theme", "Living Room", "Kitchen", "Bedroom", "Upload & Quote"];

  const themeOptions = [
    { 
      label: "Minimalist", 
      value: "minimalist",
      description: "Clean lines, neutral colors, simple elegance"
    },
    { 
      label: "Modern", 
      value: "modern",
      description: "Contemporary design with bold accents"
    },
    { 
      label: "Traditional", 
      value: "traditional",
      description: "Classic warmth with timeless appeal"
    },
    { 
      label: "Industrial", 
      value: "industrial",
      description: "Raw materials with urban sophistication"
    }
  ];

  // Enhanced Living Room Fields
  const livingFields = [
    { name: "tile", label: "Floor Tile Style", options: ["Matte Porcelain", "Glossy Ceramic", "Textured Stone"], type: "material" as const },
    { name: "paint", label: "Wall Paint Color", options: ["Warm White", "Greige", "Soft Beige", "Cool Grey"], type: "color" as const },
    { name: "furniture", label: "Seating Furniture", options: ["Modern Sofa", "Classic Sofa", "Sectional"], type: "style" as const },
    { name: "carpet", label: "Area Carpet", options: ["Persian Rug", "Modern Geometric", "Solid Color"], type: "style" as const }
  ];

  // Enhanced Kitchen Fields
  const kitchenFields = [
    { name: "slab", label: "Countertop Slab", options: ["Granite Black", "Quartz White", "Marble Carrara"], type: "material" as const },
    { name: "wallTile", label: "Wall Tile", options: ["Subway Gloss", "Hex Matte", "Patterned Porcelain"], type: "material" as const },
    { name: "doorKnob", label: "Cabinet Hardware", options: ["Modern Handle", "Classic Knob", "Brushed Steel"], type: "style" as const },
    { name: "sink", label: "Sink Style", options: ["Single Bowl", "Double Bowl", "Farmhouse"], type: "style" as const }
  ];

  // Enhanced Bedroom Fields
  const bedroomFields = [
    { name: "flooring", label: "Floor Material", options: ["Wood Laminate", "Vitrified Tile", "Engineered Wood"], type: "material" as const },
    { name: "bedroomPaint", label: "Wall Paint", options: ["Calming Blue", "Warm Taupe", "Ivory"], type: "color" as const },
    { name: "wardrobe", label: "Wardrobe Finish", options: ["Matte Laminate", "High-Gloss Laminate", "Veneer"], type: "material" as const },
    { name: "lighting", label: "Lighting Style", options: ["Warm Recessed", "Pendant", "Cove"], type: "style" as const },
    { name: "bed", label: "Bed Type", options: ["Platform Bed", "Storage Bed", "Four Poster"], type: "style" as const }
  ];

  const handleThemeSelect = (theme: string) => {
    setState(prev => ({ ...prev, theme }));
  };

  const handleMaterialSelect = (room: "living" | "kitchen" | "bedroom", field: string, value: string) => {
    setState(prev => ({
      ...prev,
      [room]: { ...prev[room], [field]: value }
    }));
  };

  const handleNext = (nextStep: number) => {
    navigate(`/wizard?step=${nextStep}`);
    setState(prev => ({ ...prev, step: nextStep }));
  };

  const handleBack = (prevStep: number) => {
    navigate(`/wizard?step=${prevStep}`);
    setState(prev => ({ ...prev, step: prevStep }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fakeUrl = URL.createObjectURL(file);
      setState(prev => ({ ...prev, floorPlanUrl: fakeUrl }));
    }
  };

  const generateQuote = () => {
    const quote = {
      living: 150000,
      kitchen: 220000,
      bedroom: 130000,
      total: 500000
    };
    setState(prev => ({ ...prev, quote }));
    navigate("/quote");
  };

  const isStepComplete = () => {
    switch (state.step) {
      case 1: return !!state.theme;
      case 2: return state.living.tile && state.living.paint && state.living.furniture && state.living.carpet;
      case 3: return state.kitchen.slab && state.kitchen.wallTile && state.kitchen.doorKnob && state.kitchen.sink;
      case 4: return state.bedroom.flooring && state.bedroom.bedroomPaint && state.bedroom.wardrobe && state.bedroom.lighting && state.bedroom.bed;
      case 5: return !!state.floorPlanUrl;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-brand-text">Boolean & Beyond</div>
            <div className="text-sm text-brand-muted">Step {state.step} of 5</div>
          </div>
        </div>
      </div>

      <ProgressSteps steps={steps} current={state.step} />
      
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Step 1: Theme Selection */}
        {state.step === 1 && (
          <div className="space-y-12">
            <OptionGrid
              title="Select Your Design Theme"
              options={themeOptions}
              selected={state.theme}
              onSelect={handleThemeSelect}
            />
            <div className="text-center">
              <Button
                onClick={() => handleNext(2)}
                disabled={!state.theme}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-12 py-4 text-lg rounded-full disabled:opacity-50"
              >
                Next: Living Room Design
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Living Room */}
        {state.step === 2 && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <MaterialPicker
              title="Living Room Materials"
              fields={livingFields}
              selections={state.living}
              onSelectionChange={(field, value) => handleMaterialSelect("living", field, value)}
            />
            
            <RoomPreview
              room="living"
              selections={state.living}
              title="Living Room"
            />

            <div className="lg:col-span-2 flex justify-between pt-8">
              <Button variant="outline" onClick={() => handleBack(1)} className="px-8 py-3">
                Back to Themes
              </Button>
              <Button
                onClick={() => handleNext(3)}
                disabled={!isStepComplete()}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 disabled:opacity-50"
              >
                Next: Kitchen Design
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Kitchen */}
        {state.step === 3 && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <MaterialPicker
              title="Kitchen Materials"
              fields={kitchenFields}
              selections={state.kitchen}
              onSelectionChange={(field, value) => handleMaterialSelect("kitchen", field, value)}
            />
            
            <RoomPreview
              room="kitchen"
              selections={state.kitchen}
              title="Kitchen"
            />

            <div className="lg:col-span-2 flex justify-between pt-8">
              <Button variant="outline" onClick={() => handleBack(2)} className="px-8 py-3">
                Back to Living Room
              </Button>
              <Button
                onClick={() => handleNext(4)}
                disabled={!isStepComplete()}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 disabled:opacity-50"
              >
                Next: Bedroom Design
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Bedroom */}
        {state.step === 4 && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <MaterialPicker
              title="Bedroom Materials"
              fields={bedroomFields}
              selections={state.bedroom}
              onSelectionChange={(field, value) => handleMaterialSelect("bedroom", field, value)}
            />
            
            <RoomPreview
              room="bedroom"
              selections={state.bedroom}
              title="Bedroom"
            />

            <div className="lg:col-span-2 flex justify-between pt-8">
              <Button variant="outline" onClick={() => handleBack(3)} className="px-8 py-3">
                Back to Kitchen
              </Button>
              <Button
                onClick={() => handleNext(5)}
                disabled={!isStepComplete()}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 disabled:opacity-50"
              >
                Upload Floor Plan
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Upload & Quote */}
        {state.step === 5 && (
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-brand-text">Upload Floor Plan & Get Quote</CardTitle>
                <CardDescription className="text-lg text-brand-muted">
                  Share your floor plan to receive an accurate, personalized quote
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-brand-primary transition-colors">
                  <Upload className="h-12 w-12 text-brand-muted mx-auto mb-4" />
                  <label className="cursor-pointer">
                    <span className="text-lg font-medium text-brand-text">Click to upload floor plan</span>
                    <p className="text-brand-muted mt-2">PDF, JPG, PNG up to 10MB</p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  
                  {state.floorPlanUrl && (
                    <div className="mt-6 flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Floor plan uploaded successfully!</span>
                    </div>
                  )}
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">How we calculate your quote:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Your material selections from each room</li>
                        <li>• Floor plan dimensions and layout</li>
                        <li>• Labor costs and installation requirements</li>
                        <li>• Project management and design consultation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={generateQuote}
                  disabled={!state.floorPlanUrl}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 text-lg font-semibold rounded-xl disabled:opacity-50"
                >
                  Generate My Quote
                </Button>
                
                <div className="flex justify-center">
                  <Button variant="outline" onClick={() => handleBack(4)} className="px-8 py-3">
                    Back to Bedroom
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
