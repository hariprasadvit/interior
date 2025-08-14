import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft, Shield, RefreshCw, CheckCircle, Timer } from "lucide-react";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
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

  const handleVerifyOTP = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter all 6 digits",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      setIsVerifying(false);
      toast({
        title: "Verification Successful",
        description: "Welcome to InteriorFlow!",
      });
      navigate("/wizard?step=1");
    }, 1500);
  };

  const handleResendOTP = () => {
    if (!canResend) return;
    
    setTimeLeft(30);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
    
    toast({
      title: "OTP Resent",
      description: "A new verification code has been sent",
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/auth" className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors group">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-2xl font-bold">InteriorFlow</span>
            </Link>
            <div className="hidden md:flex items-center space-x-2 text-sm text-brand-muted">
              <Shield className="h-4 w-4" />
              <span>Secure Verification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          {/* Main OTP Card */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 px-8 pt-12">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-3xl text-brand-text mb-3 font-bold">Verify Your Identity</CardTitle>
              <CardDescription className="text-lg text-brand-muted leading-relaxed">
                📱 <strong>Demo:</strong> Enter any 6-digit code to continue
              </CardDescription>
              <div className="mt-2 px-4 py-2 bg-brand-primary/10 rounded-lg inline-block">
                <span className="font-semibold text-brand-primary">
                  {localStorage.getItem("authIdentifier")}
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="px-8 pb-12 space-y-8">
              {/* OTP Input */}
              <div>
                <label className="text-sm font-semibold text-brand-text block mb-6 text-center">
                  Verification Code
                </label>
                <div className="flex justify-center space-x-3 mb-6">
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
                      className="w-14 h-16 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  ))}
                </div>
              </div>
              
              <Button
                onClick={handleVerifyOTP}
                disabled={otp.join("").length !== 6 || isVerifying}
                className="w-full h-14 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
              >
                {isVerifying ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  "Verify & Continue"
                )}
              </Button>
              
              {/* Resend Section */}
              <div className="text-center space-y-4">
                {!canResend ? (
                  <div className="flex items-center justify-center space-x-2 text-brand-muted">
                    <Timer className="h-4 w-4" />
                    <span className="text-sm">
                      Resend code in {formatTime(timeLeft)}
                    </span>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={handleResendOTP}
                    className="text-brand-primary hover:text-brand-primary/80 hover:bg-brand-primary/10 font-semibold flex items-center space-x-2 mx-auto px-6 py-3 rounded-xl transition-all"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Resend Code</span>
                  </Button>
                )}
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-blue-900 mb-2">Security Notice</p>
                    <p className="text-blue-800 leading-relaxed">
                      Never share this code with anyone. InteriorFlow will never ask for your OTP over phone or email.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-brand-muted mb-4">Having trouble?</p>
            <div className="flex justify-center space-x-6 text-sm">
              <button className="text-brand-primary hover:underline">
                Contact Support
              </button>
              <button className="text-brand-primary hover:underline">
                Try Different Method
              </button>
            </div>
          </div>

          {/* Benefits Reminder */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <h3 className="text-base font-bold text-brand-text mb-3 text-center">Almost there!</h3>
            <div className="flex items-center justify-center space-x-6 text-sm text-brand-muted">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>3D Previews</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Instant Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
