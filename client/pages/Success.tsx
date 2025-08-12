import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Success() {
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    // Generate booking ID
    const id = `BB-${Math.floor(Math.random() * 900000) + 100000}`;
    setBookingId(id);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Hero */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-white">✓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Thank you! Booking Confirmed.
          </h1>
          <p className="text-xl text-brand-muted mb-6">
            Your design advance is received. Booking ID: <span className="font-mono font-bold text-brand-primary">#{bookingId}</span>
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3">
                View Quote
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="px-8 py-3">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="text-left">
          <CardHeader>
            <CardTitle className="text-2xl text-brand-text">What happens next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text">Designer Contact</h3>
                  <p className="text-brand-muted">A designer will contact you within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text">Plan Review</h3>
                  <p className="text-brand-muted">We'll review your floor plan and preferences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text">Site Visit</h3>
                  <p className="text-brand-muted">Next: on-site visit & final BOQ</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-brand-text mb-2">Need help?</h4>
              <p className="text-sm text-brand-muted">
                Contact us at <span className="font-semibold">support@booleanbeyond.com</span> or 
                call <span className="font-semibold">+91 9876543210</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Brand Footer */}
        <div className="mt-8 text-center">
          <p className="text-brand-muted">
            Thank you for choosing <span className="font-bold text-brand-text">Boolean & Beyond</span>
          </p>
        </div>
      </div>
    </div>
  );
}
