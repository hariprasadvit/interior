import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Smartphone, Mail, ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-2xl font-bold">Boolean & Beyond</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏠</span>
              </div>
              <CardTitle className="text-3xl text-brand-text mb-2">Welcome Back</CardTitle>
              <CardDescription className="text-lg text-brand-muted">
                Sign up or sign in to start designing your dream home
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                  <TabsTrigger value="phone" className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4" />
                    <span>Phone</span>
                  </TabsTrigger>
                  <TabsTrigger value="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="phone" className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-brand-text block mb-3">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="email" className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-brand-text block mb-3">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                </TabsContent>
                
                <Button
                  onClick={handleSendOTP}
                  disabled={!identifier.trim()}
                  className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 text-white text-lg font-semibold rounded-xl disabled:opacity-50"
                >
                  Send OTP
                </Button>
              </Tabs>

              <div className="text-center pt-4">
                <p className="text-sm text-brand-muted">
                  By continuing, you agree to our{" "}
                  <span className="text-brand-primary hover:underline cursor-pointer">Terms of Service</span>
                  {" "}and{" "}
                  <span className="text-brand-primary hover:underline cursor-pointer">Privacy Policy</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <div className="mt-8 text-center">
            <p className="text-sm text-brand-muted mb-4">Trusted by 500+ homeowners</p>
            <div className="flex justify-center space-x-4 text-xs text-brand-muted">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Secure</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Fast</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Trusted</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
