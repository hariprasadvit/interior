import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Download, Share2, Calculator, CheckCircle } from "lucide-react";

export default function Quote() {
  const navigate = useNavigate();
  
  const quote = {
    living: 150000,
    kitchen: 220000,
    bedroom: 130000,
    total: 500000
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const advanceAmount = Math.round(quote.total * 0.05);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/wizard?step=5" className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-2xl font-bold">InteriorFlow</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Your Design Quote
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            Based on your selections and floor plan, here's your personalized interior design estimate
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quote Breakdown */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-text flex items-center space-x-2">
                  <span>💰</span>
                  <span>Cost Breakdown</span>
                </CardTitle>
                <CardDescription>Detailed room-wise estimates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Living Room */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🛋️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-text">Living Room</h3>
                      <p className="text-sm text-brand-muted">Tiles, paint, lighting & decor</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-brand-text">
                    {formatCurrency(quote.living)}
                  </span>
                </div>

                {/* Kitchen */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🍳</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-text">Kitchen</h3>
                      <p className="text-sm text-brand-muted">Countertop, tiles, sink & fittings</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-brand-text">
                    {formatCurrency(quote.kitchen)}
                  </span>
                </div>

                {/* Bedroom */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🛏️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-text">Bedroom</h3>
                      <p className="text-sm text-brand-muted">Flooring, wardrobe, paint & lighting</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-brand-text">
                    {formatCurrency(quote.bedroom)}
                  </span>
                </div>

                {/* Total */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between p-6 bg-brand-primary bg-opacity-10 rounded-xl">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-text">Total Project Cost</h3>
                      <p className="text-brand-muted">Including materials, labor & design</p>
                    </div>
                    <span className="text-3xl font-bold text-brand-primary">
                      {formatCurrency(quote.total)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-brand-text">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Premium materials as selected",
                    "Professional installation",
                    "3D design visualization",
                    "Project management",
                    "Quality assurance",
                    "1-year warranty",
                    "Post-completion support",
                    "Interior styling consultation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-brand-text">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 sticky top-8">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-brand-text">Next Steps</CardTitle>
                <CardDescription>Secure your project with a small advance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-brand-primary bg-opacity-10 rounded-xl">
                  <p className="text-sm text-brand-muted mb-2">Design Advance (5%)</p>
                  <p className="text-3xl font-bold text-brand-primary">
                    {formatCurrency(advanceAmount)}
                  </p>
                </div>

                <Button
                  onClick={() => navigate("/what-happens-next")}
                  className="w-full h-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
                >
                  Proceed with Project
                </Button>

                <div className="space-y-3 text-sm text-brand-muted">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Complete design consultation included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professional installation team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>1-year quality warranty</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Next Step:</strong> Our senior designer will call you within 24 hours
                    to begin your project journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
