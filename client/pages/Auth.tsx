import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function Auth() {
  const [identifier, setIdentifier] = useState("");
  const [activeTab, setActiveTab] = useState("phone");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (!identifier.trim()) return;
    
    // Store identifier for OTP verification
    localStorage.setItem("authIdentifier", identifier);
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-brand-text">Welcome</CardTitle>
          <CardDescription className="text-brand-muted">
            Sign up / Sign in with OTP
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="phone">Phone</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>
            
            <TabsContent value="phone" className="space-y-4">
              <div>
                <label className="text-sm font-medium text-brand-text">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="e.g. +91 9xxxxxxxxx"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="mt-2"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="email" className="space-y-4">
              <div>
                <label className="text-sm font-medium text-brand-text">Email Address</label>
                <Input
                  type="email"
                  placeholder="you@domain.com"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="mt-2"
                />
              </div>
            </TabsContent>
            
            <Button
              onClick={handleSendOTP}
              disabled={!identifier.trim()}
              className="w-full mt-6 bg-brand-primary hover:bg-brand-primary/90 text-white"
            >
              Send OTP
            </Button>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
