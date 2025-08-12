import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle, Users, Calendar, Award } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-brand-text">Boolean & Beyond</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-brand-muted hover:text-brand-text transition-colors">About</a>
          <a href="#services" className="text-brand-muted hover:text-brand-text transition-colors">Services</a>
          <a href="#portfolio" className="text-brand-muted hover:text-brand-text transition-colors">Portfolio</a>
          <Link to="/auth">
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold text-brand-text leading-tight">
                  Transform
                  <br />
                  <span className="relative">
                    your space
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-brand-primary/20 -skew-x-12"></div>
                  </span>
                </h1>
                <p className="text-xl text-brand-muted max-w-lg">
                  Design your dream home with our guided 5-step process. 
                  From theme selection to final payment - we make interior design simple and affordable.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 text-lg rounded-full group">
                    Start Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-2">
                  Learn More
                </Button>
              </div>

              <div className="text-sm text-brand-muted">
                Interior design agency since 1998
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center"
                  alt="Modern interior design"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary rounded-full opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400 rounded-full opacity-60"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">500+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop"
              alt="Living room design"
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop"
              alt="Kitchen design"
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop"
              alt="Bedroom design"
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop"
              alt="Modern interior"
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The key difference between ordinary and special.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No matter the season, our spaces are as nuanced as the lifestyles they reflect. 
              Don't just dream it - live it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">300+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">200+</div>
              <div className="text-gray-300">Product Launched</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">180K</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/auth">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 text-lg rounded-full">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              Your Dream Home in 5 Simple Steps
            </h2>
            <p className="text-xl text-brand-muted max-w-3xl mx-auto">
              Our streamlined process makes interior design accessible and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "OTP Login", desc: "Quick authentication via phone or email", icon: "📱" },
              { step: "2", title: "Choose Theme", desc: "Pick from 4 curated design styles", icon: "🎨" },
              { step: "3", title: "Select Materials", desc: "Room-by-room material selection", icon: "🏠" },
              { step: "4", title: "Upload Floor Plan", desc: "Share your space layout with us", icon: "📐" },
              { step: "5", title: "Get Quote & Pay", desc: "Instant quote with 5% advance", icon: "💳" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/auth">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-12 py-4 text-lg rounded-full">
                Begin Your Design Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-text text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Boolean & Beyond</div>
              <p className="text-gray-300">Transforming spaces, creating dreams since 1998.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Interior Design</li>
                <li>Space Planning</li>
                <li>3D Visualization</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="text-gray-300">
                <p>support@booleanbeyond.com</p>
                <p>+91 9876543210</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Boolean & Beyond. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
