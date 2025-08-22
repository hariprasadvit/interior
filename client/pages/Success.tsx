import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  CheckCircle,
  Download,
  Calendar,
  Phone,
  Mail,
  Star,
  Award,
  Home,
  Palette,
  Eye,
  FileText,
  Users,
  MessageCircle,
} from "lucide-react";

export default function Success() {
  const [bookingId, setBookingId] = useState("");
  const [showConfetti, setShowConfetti] = useState(true);
  const [userSelections, setUserSelections] = useState<any>(null);

  useEffect(() => {
    const id = `BB-${Math.floor(Math.random() * 900000) + 100000}`;
    setBookingId(id);

    // Get user selections from localStorage
    const selections = localStorage.getItem("userSelections");
    if (selections) {
      setUserSelections(JSON.parse(selections));
    }

    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {["🎉", "✨", "🏠", "🎨", "💫"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-2xl font-bold text-brand-text">InteriorFlow</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Success Hero */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-2xl">
            <CheckCircle className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6 leading-tight">
            🎉 Congratulations!
          </h1>
          <h2 className="text-3xl font-bold text-brand-text mb-6">
            Your Design Journey Begins Now
          </h2>
          <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Payment successful! Your booking is confirmed and our design team is
            ready to transform your space.
          </p>

          {/* Booking Details */}
          <div className="bg-gradient-to-r from-brand-primary/10 to-green-100 rounded-3xl p-8 mb-12 max-w-2xl mx-auto shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-brand-muted mb-2">Booking Reference</p>
                <p className="text-2xl font-bold text-indigo-600 font-mono">
                  #{bookingId}
                </p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-brand-muted mb-2">Premium Package</p>
                <p className="text-lg font-bold text-brand-text">
                  5% Advance Paid
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/quote">
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Eye className="mr-2 h-5 w-5" />
                View My Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="px-8 py-4 text-lg rounded-xl border-2 flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="h-5 w-5" />
              <span>Download Receipt</span>
            </Button>
            <Link to="/home">
              <Button
                variant="outline"
                className="px-8 py-4 text-lg rounded-xl border-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Design Summary */}
          {userSelections && (
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-text flex items-center space-x-2">
                  <Palette className="h-6 w-6" />
                  <span>Your Design Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* BHK and Style */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-xl text-center">
                    <Home className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-blue-900">
                      {userSelections.bhkType}
                    </p>
                    <p className="text-sm text-blue-700">Apartment</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-xl text-center">
                    <Palette className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-purple-900">
                      {userSelections.houseStyle}
                    </p>
                    <p className="text-sm text-purple-700">Style</p>
                  </div>
                </div>

                {/* Room Details */}
                <div className="space-y-4">
                  <h4 className="font-bold text-brand-text">Room Selections</h4>

                  {/* Living Room */}
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <h5 className="font-semibold text-blue-900 mb-3 flex items-center space-x-2">
                      <span>🛋️</span>
                      <span>Living Room</span>
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(userSelections.living).map(
                        ([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-blue-700 capitalize">
                              {key}:
                            </span>
                            <span className="text-blue-900 font-medium">
                              {value as string}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Kitchen */}
                  <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <h5 className="font-semibold text-orange-900 mb-3 flex items-center space-x-2">
                      <span>🍳</span>
                      <span>Kitchen</span>
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(userSelections.kitchen).map(
                        ([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-orange-700 capitalize">
                              {key
                                .replace("wallTile", "Wall Tile")
                                .replace("doorKnob", "Hardware")}
                              :
                            </span>
                            <span className="text-orange-900 font-medium">
                              {value as string}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Bedroom */}
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                    <h5 className="font-semibold text-purple-900 mb-3 flex items-center space-x-2">
                      <span>🛏️</span>
                      <span>Bedroom</span>
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(userSelections.bedroom).map(
                        ([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-purple-700 capitalize">
                              {key.replace("bedroomPaint", "Paint")}:
                            </span>
                            <span className="text-purple-900 font-medium">
                              {value as string}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* What's Next */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-text flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>What Happens Next</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-2">
                      Designer Contact
                    </h3>
                    <p className="text-brand-muted text-sm mb-2">
                      Our senior designer will call you within 24 hours to
                      discuss your project
                    </p>
                    <div className="bg-green-100 px-3 py-1 rounded-full inline-block">
                      <span className="text-xs text-green-800 font-medium">
                        Expected: Today by 6 PM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-2">
                      3D Visualization
                    </h3>
                    <p className="text-brand-muted text-sm mb-2">
                      We'll create 3D renders of your selected design and
                      materials
                    </p>
                    <div className="bg-blue-100 px-3 py-1 rounded-full inline-block">
                      <span className="text-xs text-blue-800 font-medium">
                        Expected: Within 2-3 days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-2">
                      Site Visit & Final Quote
                    </h3>
                    <p className="text-brand-muted text-sm mb-2">
                      On-site measurements, final material selection, and
                      detailed BOQ
                    </p>
                    <div className="bg-purple-100 px-3 py-1 rounded-full inline-block">
                      <span className="text-xs text-purple-800 font-medium">
                        Expected: Within 1 week
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      Premium Benefits Unlocked!
                    </h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>✨ Priority project scheduling</li>
                      <li>🎨 Free 3D visualization (₹15,000 value)</li>
                      <li>📞 Dedicated project manager</li>
                      <li>🏆 Premium material options access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact & Support */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-brand-text flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Your Design Team</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text">
                    Ananya Desai
                  </h4>
                  <p className="text-sm text-brand-muted">
                    Senior Interior Designer
                  </p>
                  <p className="text-xs text-brand-muted">
                    8+ years experience
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-indigo-600" />
                  <span className="text-brand-text">+91 9876-543-210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <span className="text-brand-text">
                    ananya@booleanbeyond.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-brand-text">
                    WhatsApp: +91 9876-543-211
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-brand-text">
                Important Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-12">
                  <FileText className="h-5 w-5 mr-3" />
                  Download Payment Receipt
                </Button>
                <Button variant="outline" className="w-full justify-start h-12">
                  <Download className="h-5 w-5 mr-3" />
                  Design Agreement Contract
                </Button>
                <Button variant="outline" className="w-full justify-start h-12">
                  <Eye className="h-5 w-5 mr-3" />
                  Project Timeline PDF
                </Button>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  💡 <strong>Keep these handy:</strong> All documents are also
                  emailed to you. Save our contact details for quick
                  communication!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-indigo-600/10 via-purple-100 to-blue-100 rounded-3xl border border-gray-100">
          <h3 className="text-3xl font-bold text-brand-text mb-6">
            Thank You for Choosing InteriorFlow
          </h3>
          <p className="text-brand-muted max-w-3xl mx-auto leading-relaxed text-lg">
            We're excited to transform your{" "}
            <strong>
              {userSelections?.bhkType} {userSelections?.houseStyle}
            </strong>{" "}
            space into something extraordinary. Our team of expert designers is
            ready to bring your vision to life with precision, creativity, and
            unmatched attention to detail.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-500 fill-current"
                />
              ))}
            </div>
            <span className="text-brand-muted text-lg">
              Rated 4.9/5 by 500+ customers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
