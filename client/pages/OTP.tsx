import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP",
        variant: "destructive",
      });
      return;
    }
    
    // In real implementation, verify OTP with backend
    // For demo, accept any 6-digit code
    localStorage.setItem("isAuthenticated", "true");
    navigate("/wizard?step=1");
  };

  const handleResendOTP = () => {
    toast({
      title: "OTP Resent",
      description: "A new OTP has been sent to your device",
    });
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-brand-text">Verify OTP</CardTitle>
          <CardDescription className="text-brand-muted">
            Enter the 6-digit code we sent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium text-brand-text">OTP</label>
            <Input
              type="text"
              placeholder="______"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="mt-2 text-center text-2xl tracking-widest"
              maxLength={6}
            />
          </div>
          
          <Button
            onClick={handleVerifyOTP}
            disabled={otp.length !== 6}
            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
          >
            Verify & Continue
          </Button>
          
          <Button
            variant="ghost"
            onClick={handleResendOTP}
            className="w-full text-brand-muted hover:text-brand-text"
          >
            Resend OTP
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
