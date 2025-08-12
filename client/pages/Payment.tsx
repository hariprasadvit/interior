import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft, Shield, CreditCard, Smartphone, Building, Lock, CheckCircle } from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [bankName, setBankName] = useState("");
  const [processing, setProcessing] = useState(false);
  
  const advanceAmount = 25000;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handlePayment = () => {
    setProcessing(true);
    
    toast({
      title: "Processing Payment...",
      description: "Please wait while we securely process your payment",
    });

    setTimeout(() => {
      localStorage.setItem("paymentCompleted", "true");
      setProcessing(false);
      navigate("/success");
    }, 3000);
  };

  const isFormValid = () => {
    switch (paymentMethod) {
      case "upi":
        return upiId.trim().length > 0;
      case "card":
        return cardNumber.length >= 16 && expiryDate.length >= 5 && cvv.length >= 3;
      case "netbanking":
        return bankName.trim().length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/quote" className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-2xl font-bold">Boolean & Beyond</span>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-brand-muted">
              <Lock className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-3xl text-brand-text mb-2">Secure Payment</CardTitle>
                <CardDescription className="text-lg text-brand-muted">
                  Complete your design advance payment to proceed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Payment Method Tabs */}
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-3 h-14 mb-8">
                    <TabsTrigger value="upi" className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <span>UPI</span>
                    </TabsTrigger>
                    <TabsTrigger value="card" className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Card</span>
                    </TabsTrigger>
                    <TabsTrigger value="netbanking" className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span>Net Banking</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* UPI Payment */}
                  <TabsContent value="upi" className="space-y-6">
                    <div>
                      <label className="text-sm font-semibold text-brand-text block mb-3">
                        UPI ID
                      </label>
                      <Input
                        type="text"
                        placeholder="yourname@paytm"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="h-12 text-lg"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: "Google Pay", color: "bg-blue-100", icon: "🔵" },
                        { name: "PhonePe", color: "bg-purple-100", icon: "🟣" },
                        { name: "Paytm", color: "bg-green-100", icon: "🟢" }
                      ].map((app) => (
                        <div key={app.name} className={`${app.color} p-4 rounded-xl text-center`}>
                          <div className="text-2xl mb-2">{app.icon}</div>
                          <div className="text-sm font-medium">{app.name}</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Card Payment */}
                  <TabsContent value="card" className="space-y-6">
                    <div>
                      <label className="text-sm font-semibold text-brand-text block mb-3">
                        Card Number
                      </label>
                      <Input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                          setCardNumber(value);
                        }}
                        className="h-12 text-lg"
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-brand-text block mb-3">
                          Expiry Date
                        </label>
                        <Input
                          type="text"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, '');
                            if (value.length >= 2) {
                              value = value.substring(0, 2) + '/' + value.substring(2, 4);
                            }
                            setExpiryDate(value);
                          }}
                          className="h-12 text-lg"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-brand-text block mb-3">
                          CVV
                        </label>
                        <Input
                          type="password"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                          className="h-12 text-lg"
                          maxLength={3}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {["Visa", "Mastercard", "RuPay", "Amex"].map((card) => (
                        <div key={card} className="bg-gray-100 p-3 rounded-lg text-center">
                          <div className="text-sm font-medium text-brand-muted">{card}</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Net Banking */}
                  <TabsContent value="netbanking" className="space-y-6">
                    <div>
                      <label className="text-sm font-semibold text-brand-text block mb-3">
                        Select Your Bank
                      </label>
                      <select
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full h-12 p-3 border border-gray-200 rounded-lg text-lg"
                      >
                        <option value="">Choose your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                        <option value="bob">Bank of Baroda</option>
                        <option value="canara">Canara Bank</option>
                      </select>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Security Notice */}
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">256-bit SSL Encryption</h4>
                      <p className="text-sm text-green-800">
                        Your payment information is protected with bank-grade security. 
                        We never store your card details.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <Button
                  onClick={handlePayment}
                  disabled={!isFormValid() || processing}
                  className="w-full h-14 bg-brand-primary hover:bg-brand-primary/90 text-white text-xl font-semibold rounded-xl disabled:opacity-50"
                >
                  {processing ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    `Pay ${formatCurrency(advanceAmount)}`
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="shadow-lg border-0 sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-brand-text">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-muted">Project Total</span>
                    <span className="font-semibold text-brand-text">₹5,00,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-muted">Advance Payment (5%)</span>
                    <span className="font-semibold text-brand-text">{formatCurrency(advanceAmount)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-brand-text">Total Due Today</span>
                      <span className="text-2xl font-bold text-brand-primary">{formatCurrency(advanceAmount)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  {[
                    "Secures your design consultation",
                    "Priority project scheduling",
                    "Adjusted in final invoice",
                    "100% refundable protection"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-brand-muted">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-blue-800">
                    🎉 <strong>Limited Time:</strong> Get 3D visualization worth ₹15,000 
                    free with advance payment!
                  </p>
                </div>

                <div className="text-xs text-brand-muted text-center">
                  By proceeding, you agree to our{" "}
                  <span className="text-brand-primary hover:underline cursor-pointer">Terms</span>
                  {" "}and{" "}
                  <span className="text-brand-primary hover:underline cursor-pointer">Privacy Policy</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
