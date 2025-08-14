import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle, Users, Calendar, Award, Star, Home, Palette, Calculator } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-brand-text">InteriorFlow</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-brand-muted hover:text-brand-text transition-colors font-medium">About</a>
              <a href="#services" className="text-brand-muted hover:text-brand-text transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-brand-muted hover:text-brand-text transition-colors font-medium">Portfolio</a>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary/10 to-blue-100 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-indigo-600" />
                  <span className="text-indigo-600 font-medium text-sm">Rated #1 Interior Design Platform</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold text-brand-text leading-tight">
                  Transform
                  <br />
                  <span className="relative">
                    your space
                    <div className="absolute -bottom-3 left-0 w-full h-4 bg-gradient-to-r from-indigo-600/30 to-transparent -skew-x-12"></div>
                  </span>
                </h1>
                <p className="text-xl text-brand-muted max-w-lg leading-relaxed">
                  Design your dream home with our guided 5-step process. 
                  From theme selection to final payment - we make interior design simple and affordable.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg rounded-full group shadow-xl hover:shadow-2xl transition-all">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-10 py-4 text-lg rounded-full border-2 border-gray-300 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  View Portfolio
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-text">500+</div>
                  <div className="text-sm text-brand-muted">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-text">15+</div>
                  <div className="text-sm text-brand-muted">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-text">4.9★</div>
                  <div className="text-sm text-brand-muted">Customer Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=600&h=600&fit=crop"
                  alt="Modern interior design"
                  className="rounded-3xl shadow-2xl w-full"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560448204-e8207845c6d3?ixlib=rb-4.0.3&w=600&h=600&fit=crop";
                  }}
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-15"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="text-lg font-bold text-brand-text">300+</div>
                    <div className="text-sm text-brand-muted">Projects Completed</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="text-lg font-bold text-brand-text">Award</div>
                    <div className="text-sm text-brand-muted">Best Design 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">Our Recent Work</h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Discover stunning transformations across different home styles
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&w=300&h=300&fit=crop", alt: "Modern Living Room" },
              { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=300&h=300&fit=crop", alt: "Contemporary Kitchen" },
              { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&w=300&h=300&fit=crop", alt: "Elegant Bedroom" },
              { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=300&h=300&fit=crop", alt: "Stylish Interior" }
            ].map((image, index) => (
              <img 
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=300&h=300&fit=crop";
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Dream Home in 5 Simple Steps
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes interior design accessible and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-16">
            {[
              { step: "1", title: "Choose BHK", desc: "Select your apartment size", icon: <Home className="h-8 w-8" /> },
              { step: "2", title: "Pick Style", desc: "Choose from 4 design themes", icon: <Palette className="h-8 w-8" /> },
              { step: "3", title: "Customize Rooms", desc: "Select materials for each room", icon: "🏠" },
              { step: "4", title: "Upload Plan", desc: "Share your floor layout", icon: "📐" },
              { step: "5", title: "Get Quote", desc: "Instant pricing with 5% advance", icon: <Calculator className="h-8 w-8" /> }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  {typeof item.icon === 'string' ? item.icon : item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                Begin Your Design Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-indigo-600">300+</div>
              <div className="text-lg font-semibold text-brand-text">Successful Projects</div>
              <div className="text-brand-muted">Completed across India</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-indigo-600">500+</div>
              <div className="text-lg font-semibold text-brand-text">Happy Families</div>
              <div className="text-brand-muted">Living their dream homes</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-indigo-600">15+</div>
              <div className="text-lg font-semibold text-brand-text">Years Experience</div>
              <div className="text-brand-muted">In interior design</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-indigo-600">4.9★</div>
              <div className="text-lg font-semibold text-brand-text">Customer Rating</div>
              <div className="text-brand-muted">Average review score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-text text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-6">InteriorFlow</div>
              <p className="text-gray-300 leading-relaxed">Transforming spaces, creating dreams since 1998. Your trusted partner in interior design excellence.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Interior Design</li>
                <li className="hover:text-white transition-colors cursor-pointer">Space Planning</li>
                <li className="hover:text-white transition-colors cursor-pointer">3D Visualization</li>
                <li className="hover:text-white transition-colors cursor-pointer">Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <div className="text-gray-300 space-y-3">
                <p>support@booleanbeyond.com</p>
                <p>+91 9876543210</p>
                <div className="pt-4">
                  <p className="text-sm">Available 24/7 for support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InteriorFlow. All rights reserved. Made with ❤️ in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
