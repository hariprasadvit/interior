import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProgressSteps } from "../components/ProgressSteps";
import { OptionGrid } from "../components/OptionGrid";
import { MaterialPicker } from "../components/MaterialPicker";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

interface WizardState {
  step: number;
  theme: string;
  living: { tile: string; paint: string };
  kitchen: { slab: string; tile: string; sink: string };
  bedroom: { flooring: string; paint: string; wardrobe: string; lighting: string };
  floorPlanUrl: string;
  quote: { living: number; kitchen: number; bedroom: number; total: number };
}

export default function Wizard() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [state, setState] = useState<WizardState>({
    step: parseInt(searchParams.get("step") || "1"),
    theme: "",
    living: { tile: "", paint: "" },
    kitchen: { slab: "", tile: "", sink: "" },
    bedroom: { flooring: "", paint: "", wardrobe: "", lighting: "" },
    floorPlanUrl: "",
    quote: { living: 0, kitchen: 0, bedroom: 0, total: 0 }
  });

  const steps = ["Theme", "Living Room", "Kitchen", "Bedroom", "Upload & Quote"];

  const themeOptions = [
    { label: "Minimalist", value: "minimalist" },
    { label: "Modern", value: "modern" },
    { label: "Traditional", value: "traditional" },
    { label: "Industrial", value: "industrial" }
  ];

  const livingFields = [
    { name: "tile", label: "Tile Style", options: ["Matte Porcelain", "Glossy Ceramic", "Textured Stone"] },
    { name: "paint", label: "Paint Color", options: ["Warm White", "Greige", "Soft Beige", "Cool Grey"] }
  ];

  const kitchenFields = [
    { name: "slab", label: "Countertop / Slab", options: ["Granite Black", "Quartz White", "Marble Carrara"] },
    { name: "tile", label: "Wall Tile", options: ["Subway Gloss", "Hex Matte", "Patterned Porcelain"] },
    { name: "sink", label: "Sink Style", options: ["Single Bowl", "Double Bowl", "Farmhouse"] }
  ];

  const bedroomFields = [
    { name: "flooring", label: "Flooring", options: ["Wood Laminate", "Vitrified Tile", "Engineered Wood"] },
    { name: "paint", label: "Wall Paint", options: ["Calming Blue", "Warm Taupe", "Ivory"] },
    { name: "wardrobe", label: "Wardrobe Finish", options: ["Matte Laminate", "High-Gloss Laminate", "Veneer"] },
    { name: "lighting", label: "Lighting Style", options: ["Warm Recessed", "Pendant", "Cove"] }
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
      // In real implementation, upload to cloud storage
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
      case 2: return state.living.tile && state.living.paint;
      case 3: return state.kitchen.slab && state.kitchen.tile && state.kitchen.sink;
      case 4: return state.bedroom.flooring && state.bedroom.paint && state.bedroom.wardrobe && state.bedroom.lighting;
      case 5: return !!state.floorPlanUrl;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <ProgressSteps steps={steps} current={state.step} />
      
      <div className="max-w-6xl mx-auto px-4 pb-8">
        {/* Step 1: Theme Selection */}
        {state.step === 1 && (
          <div>
            <OptionGrid
              title="Select House Theme"
              options={themeOptions}
              selected={state.theme}
              onSelect={handleThemeSelect}
            />
            <div className="text-center mt-8">
              <Button
                onClick={() => handleNext(2)}
                disabled={!state.theme}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3"
              >
                Next: Living Room
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Living Room */}
        {state.step === 2 && (
          <div className="grid md:grid-cols-2 gap-8">
            <MaterialPicker
              title="Living Room"
              fields={livingFields}
              selections={state.living}
              onSelectionChange={(field, value) => handleMaterialSelect("living", field, value)}
            />
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4"></div>
                <p className="text-brand-muted">Living Room Preview</p>
                <p className="text-sm text-brand-muted mt-2">
                  {state.living.tile && `Tile: ${state.living.tile}`}
                  {state.living.tile && state.living.paint && " | "}
                  {state.living.paint && `Paint: ${state.living.paint}`}
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-between">
              <Button variant="outline" onClick={() => handleBack(1)}>Back</Button>
              <Button
                onClick={() => handleNext(3)}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white"
              >
                Next: Kitchen
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Kitchen */}
        {state.step === 3 && (
          <div className="grid md:grid-cols-2 gap-8">
            <MaterialPicker
              title="Kitchen"
              fields={kitchenFields}
              selections={state.kitchen}
              onSelectionChange={(field, value) => handleMaterialSelect("kitchen", field, value)}
            />
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4"></div>
                <p className="text-brand-muted">Kitchen Preview</p>
                <p className="text-sm text-brand-muted mt-2">
                  {Object.entries(state.kitchen).filter(([_, v]) => v).map(([k, v]) => `${k}: ${v}`).join(" | ")}
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-between">
              <Button variant="outline" onClick={() => handleBack(2)}>Back</Button>
              <Button
                onClick={() => handleNext(4)}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white"
              >
                Next: Bedroom
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Bedroom */}
        {state.step === 4 && (
          <div className="grid md:grid-cols-2 gap-8">
            <MaterialPicker
              title="Bedroom"
              fields={bedroomFields}
              selections={state.bedroom}
              onSelectionChange={(field, value) => handleMaterialSelect("bedroom", field, value)}
            />
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4"></div>
                <p className="text-brand-muted">Bedroom Preview</p>
                <p className="text-sm text-brand-muted mt-2">
                  {Object.entries(state.bedroom).filter(([_, v]) => v).map(([k, v]) => `${k}: ${v}`).join(" | ")}
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-between">
              <Button variant="outline" onClick={() => handleBack(3)}>Back</Button>
              <Button
                onClick={() => handleNext(5)}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white"
              >
                Next: Upload & Quote
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Upload & Quote */}
        {state.step === 5 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-text">Upload Floor Plan & Get Quote</CardTitle>
                <CardDescription className="text-brand-muted">
                  Upload your floor plan to get an accurate quote
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Floor Plan (PDF, JPG, PNG)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="w-full p-3 border border-gray-200 rounded-lg"
                  />
                  {state.floorPlanUrl && (
                    <p className="text-sm text-green-600 mt-2">✓ Floor plan uploaded</p>
                  )}
                </div>
                
                <Button
                  onClick={generateQuote}
                  disabled={!state.floorPlanUrl}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                >
                  Generate Quote
                </Button>
                
                <p className="text-sm text-brand-muted text-center">
                  We use your selections + floor plan to estimate BOQ and costs.
                </p>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => handleBack(4)}>Back</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
