import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  ArrowLeft, 
  Phone, 
  MapPin, 
  Mail, 
  Clock,
  Send,
  MessageCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/home"
              className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-2xl font-bold">InteriorFlow</span>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-brand-muted">
              <MessageCircle className="h-4 w-4" />
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MessageCircle className="h-10 w-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Please feel free to contact us and we will get back to you as soon as we can.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  Please feel free to contact us and we will get back to you as soon as we can.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-indigo-400 focus:ring-indigo-400"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-indigo-400 focus:ring-indigo-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-indigo-400 focus:ring-indigo-400 min-h-[120px]"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send
                </Button>
              </form>

              {/* Contact Details in Form */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Visit Us</h4>
                    <p className="text-gray-300 text-sm">
                      Door no 389, 1st Main Rd<br />
                      Nehru Nagar, Kottivakkam<br />
                      Chennai, Tamil Nadu 600041
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Talk to Us</h4>
                    <p className="text-gray-300 text-sm">
                      +91 087545 75637<br />
                      support@interiorflow.com
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white text-sm">in</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white text-sm">ig</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white text-sm">@</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  Please feel free to contact us and we will get back to you as soon as we can.
                </p>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Door no 389, 1st Main Rd<br />
                      Nehru Nagar, Kottivakkam<br />
                      Chennai, Tamil Nadu 600041
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Talk to Us</h3>
                    <p className="text-gray-300">
                      +91 087545 75637<br />
                      support@interiorflow.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-gray-300">
                      General Inquiries: info@interiorflow.com<br />
                      Support: support@interiorflow.com<br />
                      Career: careers@interiorflow.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                    <span className="text-white font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                    <span className="text-white font-bold">ig</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <span className="text-white font-bold">@</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="mt-12 shadow-2xl border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-gray-500 text-sm">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Contact CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
                Get started with your dream interior design project today. Our expert team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all"
                  onClick={() => window.location.href = "tel:+91087545756370"}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
                <Link to="/wizard">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold rounded-xl transition-all"
                  >
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
