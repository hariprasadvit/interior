import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, CheckCircle, Home, Palette, Eye, ArrowRight } from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  
  // Get user selections from localStorage or state management
  const userSelections = {
    bhkType: "2BHK",
    houseStyle: "Modern",
    living: {
      tile: "Matte Porcelain",
      paint: "Warm White",
      furniture: "KIVIK Sofa",
      carpet: "Modern Geometric"
    },
    kitchen: {
      slab: "Quartz White",
      wallTile: "Subway Gloss",
      doorKnob: "Modern Handle",
      sink: "Single Bowl"
    },
    bedroom: {
      flooring: "Wood Laminate",
      bedroomPaint: "Calming Blue",
      wardrobe: "Matte Laminate",
      lighting: "Warm Recessed",
      bed: "Platform Bed"
    }
  };

  const handleProceed = () => {
    localStorage.setItem("userSelections", JSON.stringify(userSelections));
    navigate("/what-happens-next");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/quote" className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-2xl font-bold">InteriorFlow</span>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-brand-muted">
              <CheckCircle className="h-4 w-4" />
              <span>Design Summary</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-brand-text mb-4">Your Design is Ready!</h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-8">
            Review your complete interior design selections below
          </p>

          {/* Premium CTA at top */}
          <div className="mb-8">
            <Button
              onClick={handleProceed}
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl transition-all"
            >
              <span>Proceed to Next Steps</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-sm text-brand-muted mt-3">
              Learn about our process and timeline
            </p>
          </div>
        </div>

        {/* Design Summary Card */}
        <Card className="shadow-2xl border-0 mb-8">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-brand-text flex items-center justify-center space-x-2">
              <Eye className="h-6 w-6" />
              <span>Complete Design Summary</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Your personalized {userSelections.bhkType} interior in {userSelections.houseStyle} style
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* BHK and Style */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <Home className="h-6 w-6 text-brand-primary" />
                <div>
                  <p className="text-xl font-bold text-brand-text">{userSelections.bhkType}</p>
                  <p className="text-brand-muted">Apartment Type</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <Palette className="h-6 w-6 text-brand-primary" />
                <div>
                  <p className="text-xl font-bold text-brand-text">{userSelections.houseStyle}</p>
                  <p className="text-brand-muted">Design Style</p>
                </div>
              </div>
            </div>

            {/* Room by Room Breakdown */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-brand-text text-center">Room-by-Room Selections</h3>
              
              {/* Living Room */}
              <div className="border border-blue-200 rounded-xl p-6 bg-blue-50/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <h4 className="text-lg font-bold text-brand-text">Living Room</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(userSelections.living).map(([key, value]) => (
                    <div key={key} className="bg-white p-3 rounded-lg">
                      <p className="text-sm font-medium text-brand-muted capitalize">
                        {key === 'tile' ? 'Floor Tile' : key === 'paint' ? 'Wall Paint' : key}
                      </p>
                      <p className="text-brand-text font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kitchen */}
              <div className="border border-orange-200 rounded-xl p-6 bg-orange-50/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <h4 className="text-lg font-bold text-brand-text">Kitchen</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(userSelections.kitchen).map(([key, value]) => (
                    <div key={key} className="bg-white p-3 rounded-lg">
                      <p className="text-sm font-medium text-brand-muted capitalize">
                        {key === 'slab' ? 'Countertop' : key === 'wallTile' ? 'Wall Tile' : key === 'doorKnob' ? 'Cabinet Hardware' : key}
                      </p>
                      <p className="text-brand-text font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bedroom */}
              <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <h4 className="text-lg font-bold text-brand-text">Bedroom</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(userSelections.bedroom).map(([key, value]) => (
                    <div key={key} className="bg-white p-3 rounded-lg">
                      <p className="text-sm font-medium text-brand-muted capitalize">
                        {key === 'bedroomPaint' ? 'Wall Paint' : key}
                      </p>
                      <p className="text-brand-text font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-brand-text mb-4 text-center">What's Included in Your Project</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Complete material procurement",
                  "Professional installation team",
                  "Quality assurance checks",
                  "1-year warranty coverage",
                  "3D design visualization",
                  "Site measurement & planning",
                  "Project management support",
                  "Final quality inspection"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-brand-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
