import { Link } from "react-router-dom";
import { FeatureGrid } from "../components/FeatureGrid";
import { Button } from "../components/ui/button";

export default function Index() {
  const features = [
    { title: "OTP Login", desc: "Frictionless sign-in via phone/email OTP." },
    { title: "Themes", desc: "Minimalist, Modern, Traditional, Industrial." },
    { title: "Room-by-room", desc: "Living, Kitchen, Bedroom with visual previews." },
    { title: "Instant Quote", desc: "Auto cost breakdown + room-wise totals." },
    { title: "Floor Plan Upload", desc: "PDF/JPG/PNG file uploader." },
    { title: "5% Advance", desc: "Secure gateway: UPI, cards, netbanking." }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <div className="relative py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6">
            Design Your Dream Home in 5 Steps
          </h1>
          <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto">
            A guided flow to pick themes, materials, upload your floor plan, get a quote, and pay a 5% design advance.
          </p>
          <Link to="/auth">
            <Button 
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
        
        {/* Placeholder Image */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <p className="text-brand-muted">Interior Design Preview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <FeatureGrid items={features} />
      
      {/* Brand Footer */}
      <div className="py-8 text-center border-t border-gray-100">
        <p className="text-brand-muted">
          Powered by <span className="font-bold text-brand-text">Boolean & Beyond</span>
        </p>
      </div>
    </div>
  );
}
