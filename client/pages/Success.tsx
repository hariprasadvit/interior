import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Download, Calendar, Phone, Mail, Star } from "lucide-react";

export default function Success() {
  const [bookingId, setBookingId] = useState("");
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const id = `BB-${Math.floor(Math.random() * 900000) + 100000}`;
    setBookingId(id);
    
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              🎉
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-2xl font-bold text-brand-text">Boolean & Beyond</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Hero */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6">
            🎉 Congratulations!
          </h1>
          <h2 className="text-3xl font-bold text-brand-text mb-4">
            Your Design Journey Begins Now
          </h2>
          <p className="text-xl text-brand-muted mb-6">
            Payment successful! Your booking is confirmed.
          </p>
          
          {/* Booking Details */}
          <div className="bg-brand-primary bg-opacity-10 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-brand-muted mb-2">Booking Reference</p>
            <p className="text-3xl font-bold text-brand-primary font-mono">#{bookingId}</p>
            <p className="text-sm text-brand-muted mt-2">Keep this for your records</p>
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/quote">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 text-lg rounded-xl">
                View My Quote
              </Button>
            </Link>
            <Button variant="outline" className="px-8 py-4 text-lg rounded-xl flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Receipt</span>
            </Button>
            <Link to="/">
              <Button variant="outline" className="px-8 py-4 text-lg rounded-xl">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* What's Next */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-text flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>What Happens Next</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1">Designer Contact</h3>
                    <p className="text-brand-muted text-sm">
                      Our senior designer will call you within 24 hours to discuss your project
                    </p>
                    <div className="mt-2 text-xs text-green-600 font-medium">
                      Expected: Today by 6 PM
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1">Design Review</h3>
                    <p className="text-brand-muted text-sm">
                      We'll review your floor plan, selections, and create initial concepts
                    </p>
                    <div className="mt-2 text-xs text-blue-600 font-medium">
                      Expected: Within 2-3 days
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1">Site Visit & Final Quote</h3>
                    <p className="text-brand-muted text-sm">
                      On-site measurements, final material selection, and detailed BOQ
                    </p>
                    <div className="mt-2 text-xs text-purple-600 font-medium">
                      Expected: Within 1 week
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-1">Priority Treatment</h4>
                    <p className="text-sm text-yellow-800">
                      As an advance payment customer, you get priority scheduling and 
                      exclusive access to premium materials!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Support */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-brand-text">Your Design Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-text">Ananya Desai</h4>
                    <p className="text-sm text-brand-muted">Senior Interior Designer</p>
                    <p className="text-xs text-brand-muted">8+ years experience</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-brand-primary" />
                    <span className="text-brand-text">+91 9876-543-210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <span className="text-brand-text">ananya@booleanbeyond.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-brand-text">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-brand-text mb-1">Customer Support</h4>
                    <p className="text-brand-muted">Available 9 AM - 9 PM, Mon-Sat</p>
                    <p className="text-brand-primary font-medium">support@booleanbeyond.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-text mb-1">WhatsApp Support</h4>
                    <p className="text-brand-muted">Quick responses for urgent queries</p>
                    <p className="text-brand-primary font-medium">+91 9876-543-211</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-blue-800">
                    💬 <strong>Pro tip:</strong> Join our WhatsApp group for project updates, 
                    design tips, and exclusive offers!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-brand-primary/10 to-purple-100 rounded-2xl">
          <h3 className="text-2xl font-bold text-brand-text mb-4">
            Thank You for Choosing Boolean & Beyond
          </h3>
          <p className="text-brand-muted max-w-2xl mx-auto">
            We're excited to transform your space into something extraordinary. 
            Our team of expert designers is ready to bring your vision to life with 
            precision, creativity, and unmatched attention to detail.
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span className="text-brand-muted ml-2">Rated 4.9/5 by 500+ customers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
