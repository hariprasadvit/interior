import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useToast } from "../hooks/use-toast";

export default function Payment() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [bankName, setBankName] = useState("");
  
  // 5% of total quote (₹5,00,000)
  const advanceAmount = 25000;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handlePayment = () => {
    // Simulate payment processing
    toast({
      title: "Processing Payment...",
      description: "Please wait while we process your payment",
    });

    setTimeout(() => {
      // Simulate success
      localStorage.setItem("paymentCompleted", "true");
      navigate("/success");
    }, 2000);
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
    <div className="min-h-screen bg-brand-bg py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-brand-text text-center">
              Secure Payment
            </CardTitle>
            <CardDescription className="text-center text-brand-muted">
              Design Consulting Advance (5%)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Summary */}
            <div className="bg-brand-primary bg-opacity-10 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-brand-text">Amount to Pay</span>
                <span className="text-2xl font-bold text-brand-primary">
                  {formatCurrency(advanceAmount)}
                </span>
              </div>
              <p className="text-sm text-brand-muted mt-2">
                This secures your design consultation and will be adjusted in the final invoice.
              </p>
            </div>

            {/* Payment Methods */}
            <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upi">UPI</TabsTrigger>
                <TabsTrigger value="card">Card</TabsTrigger>
                <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
              </TabsList>

              {/* UPI Payment */}
              <TabsContent value="upi" className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-brand-text">UPI ID</label>
                  <Input
                    type="text"
                    placeholder="yourname@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div className="flex items-center space-x-4 text-sm text-brand-muted">
                  <span>Supported:</span>
                  <span className="bg-blue-100 px-2 py-1 rounded">GPay</span>
                  <span className="bg-purple-100 px-2 py-1 rounded">PhonePe</span>
                  <span className="bg-green-100 px-2 py-1 rounded">Paytm</span>
                </div>
              </TabsContent>

              {/* Card Payment */}
              <TabsContent value="card" className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-brand-text">Card Number</label>
                  <Input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                    className="mt-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-brand-text">Expiry Date</label>
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
                      className="mt-2"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-text">CVV</label>
                    <Input
                      type="password"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                      className="mt-2"
                      maxLength={3}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Net Banking */}
              <TabsContent value="netbanking" className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-brand-text">Select Bank</label>
                  <select
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full mt-2 p-3 border border-gray-200 rounded-lg"
                  >
                    <option value="">Choose your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                    <option value="pnb">Punjab National Bank</option>
                  </select>
                </div>
              </TabsContent>
            </Tabs>

            {/* Security Notice */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔒</span>
                </div>
                <p className="text-sm text-green-800">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>

            {/* Pay Button */}
            <Button
              onClick={handlePayment}
              disabled={!isFormValid()}
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 text-lg font-semibold"
            >
              Pay {formatCurrency(advanceAmount)}
            </Button>

            {/* Terms */}
            <p className="text-xs text-brand-muted text-center">
              By proceeding, you agree to our Terms of Service and Privacy Policy. 
              This payment secures your design consultation booking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
