import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function Quote() {
  const navigate = useNavigate();
  
  // In real app, this would come from state management
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

  return (
    <div className="min-h-screen bg-brand-bg py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-brand-text text-center">
              Estimate Summary
            </CardTitle>
            <CardDescription className="text-center text-brand-muted">
              Your personalized interior design quote
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Room-wise breakdown */}
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-brand-text">Living Room</span>
                <span className="text-lg font-bold text-brand-text">
                  {formatCurrency(quote.living)}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-brand-text">Kitchen</span>
                <span className="text-lg font-bold text-brand-text">
                  {formatCurrency(quote.kitchen)}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-brand-text">Bedroom</span>
                <span className="text-lg font-bold text-brand-text">
                  {formatCurrency(quote.bedroom)}
                </span>
              </div>
              
              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center p-4 bg-brand-primary bg-opacity-10 rounded-lg">
                  <span className="text-xl font-bold text-brand-text">Total Estimate</span>
                  <span className="text-2xl font-bold text-brand-primary">
                    {formatCurrency(quote.total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote details */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 This estimate includes materials, labor, and basic design consultation. 
                Final costs may vary based on site conditions and customizations.
              </p>
            </div>

            {/* CTA */}
            <Button
              onClick={() => navigate("/payment")}
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 text-lg font-semibold"
            >
              Proceed to Pay 5% Design Advance
            </Button>

            {/* Additional info */}
            <p className="text-center text-sm text-brand-muted">
              Secure your booking with a 5% advance payment
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
