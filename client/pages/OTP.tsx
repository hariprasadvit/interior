import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft, Shield, RefreshCw } from "lucide-react";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter all 6 digits",
        variant: "destructive",
      });
      return;
    }
    
    localStorage.setItem("isAuthenticated", "true");
    navigate("/wizard?step=1");
  };

  const handleResendOTP = () => {
    if (!canResend) return;
    
    setTimeLeft(30);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
    
    toast({
      title: "OTP Resent",
      description: "A new OTP has been sent to your device",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/auth" className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors">
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
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-brand-text mb-2">Verify Your Identity</CardTitle>
              <CardDescription className="text-lg text-brand-muted">
                Enter the 6-digit code we sent to{" "}
                <span className="font-semibold text-brand-text">
                  {localStorage.getItem("authIdentifier")}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* OTP Input */}
              <div>
                <label className="text-sm font-semibold text-brand-text block mb-4 text-center">
                  Verification Code
                </label>
                <div className="flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => inputRefs.current[index] = el}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-14 text-center text-2xl font-bold border-2 rounded-xl focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  ))}
                </div>
              </div>
              
              <Button
                onClick={handleVerifyOTP}
                disabled={otp.join("").length !== 6}
                className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 text-white text-lg font-semibold rounded-xl disabled:opacity-50"
              >
                Verify & Continue
              </Button>
              
              {/* Resend Section */}
              <div className="text-center space-y-3">
                {!canResend ? (
                  <p className="text-sm text-brand-muted">
                    Resend code in {timeLeft} seconds
                  </p>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={handleResendOTP}
                    className="text-brand-primary hover:text-brand-primary/80 font-semibold flex items-center space-x-2 mx-auto"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Resend Code</span>
                  </Button>
                )}
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-blue-900 mb-1">Security Notice</p>
                    <p className="text-blue-800">
                      Never share this code with anyone. Boolean & Beyond will never ask for your OTP.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
