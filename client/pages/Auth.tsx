import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Smartphone, Mail, ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [identifier, setIdentifier] = useState("");
  const [activeTab, setActiveTab] = useState("phone");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (!identifier.trim()) return;

    localStorage.setItem("authIdentifier", identifier);
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-2xl font-bold">InteriorFlow</span>
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm text-brand-muted">
              <Shield className="h-4 w-4" />
              <span>Secure Login</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          {/* Main Auth Card */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 px-8 pt-12">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-4xl text-white">🏠</span>
              </div>
              <CardTitle className="text-3xl text-brand-text mb-3 font-bold">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-lg text-brand-muted leading-relaxed">
                Sign up or sign in to start designing your dream home
              </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-12 space-y-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8 h-14 bg-gray-100 p-1 rounded-xl">
                  <TabsTrigger
                    value="phone"
                    className="flex items-center space-x-2 h-12 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    <Smartphone className="h-4 w-4" />
                    <span className="font-medium">Phone</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="email"
                    className="flex items-center space-x-2 h-12 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="font-medium">Email</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="phone" className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-brand-text block mb-3">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="h-14 text-lg px-4 border-2 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl transition-all"
                    />
                    <p className="text-xs text-brand-muted mt-2">
                      📱 <strong>Demo:</strong> You can test with any dummy
                      number
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="email" className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-brand-text block mb-3">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="h-14 text-lg px-4 border-2 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl transition-all"
                    />
                    <p className="text-xs text-brand-muted mt-2">
                      📧 <strong>Demo:</strong> You can test with any dummy
                      email
                    </p>
                  </div>
                </TabsContent>

                <Button
                  onClick={handleSendOTP}
                  disabled={!identifier.trim()}
                  className="w-full h-14 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                >
                  Send Verification Code
                </Button>
              </Tabs>

              {/* Terms & Privacy */}
              <div className="text-center pt-6 border-t border-gray-100">
                <p className="text-sm text-brand-muted leading-relaxed">
                  By continuing, you agree to our{" "}
                  <span className="text-brand-primary hover:underline cursor-pointer font-medium">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-brand-primary hover:underline cursor-pointer font-medium">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-sm text-brand-muted mb-6">
              Trusted by 500+ homeowners
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-brand-muted">256-bit Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-brand-muted">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-brand-muted">ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Benefits Preview */}
          <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-brand-text mb-4 text-center">
              What you'll get access to:
            </h3>
            <div className="space-y-3">
              {[
                "Personalized interior design recommendations",
                "Real-time 3D room previews",
                "Expert designer consultations",
                "Transparent pricing with instant quotes",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-brand-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
