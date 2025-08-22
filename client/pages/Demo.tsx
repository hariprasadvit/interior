import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Layers3, 
  Home, 
  Palette, 
  Upload, 
  Monitor,
  Sparkles,
  Users,
  Target,
  Workflow
} from "lucide-react";

export default function Demo() {
  const demoFeatures = [
    {
      icon: Home,
      title: "BHK Type Selection",
      description: "Choose from 1BHK, 2BHK, or 3BHK apartment configurations",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Palette,
      title: "Design Style Customization",
      description: "Select from Modern, Minimalist, Traditional, or Industrial themes",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Layers3,
      title: "Material Selection",
      description: "Customize materials for each room - flooring, paint, furniture, and more",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Upload,
      title: "Floor Plan Upload",
      description: "Upload your floor plans for accurate measurements and planning",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Monitor,
      title: "Project Dashboard",
      description: "Step-by-step guidance showing project timeline and what to expect",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const benefits = [
    "Visualize complete digital transformation process",
    "Experience seamless user journey from selection to completion",
    "Understand how technology simplifies interior design",
    "See real-time material customization and previews",
    "Experience automated project timeline generation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-brand-text">InteriorFlow</div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full">
                <span className="text-emerald-800 font-medium text-sm">🎯 Demo Version</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            {/* Demo Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-8 shadow-lg">
              <Sparkles className="h-5 w-5 text-indigo-600" />
              <span className="text-indigo-800 font-bold text-lg">Interactive Demo Experience</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-brand-text mb-8 leading-tight">
              Welcome to the Future of 
              <br />
              <span className="relative">
                Interior Design
                <div className="absolute -bottom-3 left-0 w-full h-4 bg-gradient-to-r from-indigo-600/30 to-transparent -skew-x-12"></div>
              </span>
            </h1>
            
            <p className="text-xl text-brand-muted max-w-4xl mx-auto leading-relaxed mb-8">
              This is a comprehensive demo created to showcase how we can digitalize and streamline 
              the entire interior design process for your company. Experience the complete customer journey 
              from initial selection to project completion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/home">
                <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all">
                  <Target className="mr-3 h-6 w-6" />
                  Start Demo Experience
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Button variant="outline" className="px-12 py-4 text-lg rounded-xl border-2 border-indigo-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all">
                <Users className="mr-3 h-5 w-5" />
                Learn More About Implementation
              </Button>
            </div>
          </div>

          {/* Demo Overview Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {demoFeatures.map((feature, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-4">{feature.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full mb-6">
                <Workflow className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-800 font-medium">Complete Digital Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-8">
                Experience the Complete Digital Transformation
              </h2>
              
              <p className="text-xl text-brand-muted mb-8 leading-relaxed">
                This demo demonstrates how we can revolutionize your interior design business 
                by creating a seamless digital experience for your customers.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/home">
                <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg transition-all">
                  Begin Demo Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-500 to-indigo-600">
                  <CardContent className="p-6 text-white text-center">
                    <Home className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Smart Selection</h3>
                    <p className="text-blue-100">Intelligent BHK and style matching</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-500 to-pink-600 mt-8">
                  <CardContent className="p-6 text-white text-center">
                    <Palette className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Visual Customization</h3>
                    <p className="text-purple-100">Real-time material previews</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-xl border-0 bg-gradient-to-br from-emerald-500 to-teal-600 -mt-8">
                  <CardContent className="p-6 text-white text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Seamless Upload</h3>
                    <p className="text-emerald-100">Easy floor plan integration</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-500 to-red-600">
                  <CardContent className="p-6 text-white text-center">
                    <Monitor className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Project Tracking</h3>
                    <p className="text-orange-100">Complete timeline visibility</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Process Overview */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Complete Demo Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow this guided experience to see how digital transformation can enhance every step of the interior design process
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-16">
            {[
              { step: "1", title: "Choose BHK", desc: "Select apartment size", icon: "🏠" },
              { step: "2", title: "Pick Style", desc: "Choose design theme", icon: "🎨" },
              { step: "3", title: "Customize", desc: "Select room materials", icon: "⚡" },
              { step: "4", title: "Upload Plan", desc: "Share floor layout", icon: "📐" },
              { step: "5", title: "Track Progress", desc: "See project timeline", icon: "📊" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/home">
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-4 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all">
                <Sparkles className="mr-3 h-6 w-6" />
                Experience the Demo Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-text text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">InteriorFlow Demo</div>
          <p className="text-gray-300 mb-4">
            A comprehensive demonstration of digital interior design transformation
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 InteriorFlow. This is a demo showcasing digital interior design capabilities.
          </p>
        </div>
      </footer>
    </div>
  );
}
