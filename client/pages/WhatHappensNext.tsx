import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, Phone, Ruler, FileText, CheckSquare, Factory, Truck, Wrench, Search, Home, Download, Calendar, Clock } from "lucide-react";

export default function WhatHappensNext() {
  const projectSteps = [
    {
      id: 1,
      title: "Request Received",
      description: "We've received your request and our senior designer will call you",
      icon: Phone,
      color: "bg-green-500",
      deliverable: null,
      timeline: "Within 24 hours"
    },
    {
      id: 2,
      title: "Site Measurements",
      description: "Our team is conducting precise site measurements to ensure a perfect fit for your interiors.",
      icon: Ruler,
      color: "bg-blue-500",
      deliverable: null,
      timeline: "2-3 business days"
    },
    {
      id: 3,
      title: "Design",
      description: "Our design experts are curating concepts tailored to your dream home.",
      icon: FileText,
      color: "bg-purple-500",
      deliverable: "Designs (PDF)",
      timeline: "5-7 business days"
    },
    {
      id: 4,
      title: "Validation",
      description: "We're validating the proposed design with our site and technical team for execution readiness.",
      icon: CheckSquare,
      color: "bg-orange-500",
      deliverable: null,
      timeline: "2-3 business days"
    },
    {
      id: 5,
      title: "Production",
      description: "Raw materials have been procured, and production is underway at our factory.",
      icon: Factory,
      color: "bg-orange-500",
      deliverable: null,
      timeline: "15-20 business days"
    },
    {
      id: 6,
      title: "Clear for Delivery",
      description: "Production is complete. Your project is now ready for dispatch.",
      icon: CheckSquare,
      color: "bg-teal-500",
      deliverable: null,
      timeline: "1-2 business days"
    },
    {
      id: 7,
      title: "Delivery",
      description: "All materials have been delivered to the site.",
      icon: Truck,
      color: "bg-indigo-500",
      deliverable: null,
      timeline: "2-3 business days"
    },
    {
      id: 8,
      title: "Installation",
      description: "Installation work is in progress at your site.",
      icon: Wrench,
      color: "bg-yellow-500",
      deliverable: "Site Pictures (multiple jpeg)",
      timeline: "10-15 business days"
    },
    {
      id: 9,
      title: "Quality Check",
      description: "A final inspection is being conducted to ensure everything meets our quality standards.",
      icon: Search,
      color: "bg-pink-500",
      deliverable: null,
      timeline: "1-2 business days"
    },
    {
      id: 10,
      title: "Handover",
      description: "Congratulations! Your unit is ready for the handover",
      icon: Home,
      color: "bg-green-600",
      deliverable: "Handover documents (PDF)",
      timeline: "1 business day"
    }
  ];

  const totalTimelineWeeks = "8-12 weeks";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/payment" className="flex items-center space-x-2 text-brand-text hover:text-brand-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-2xl font-bold">InteriorFlow</span>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-brand-muted">
              <Calendar className="h-4 w-4" />
              <span>Project Timeline</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Clock className="h-10 w-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-brand-text mb-4">What Happens Next?</h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-6">
            Here's your complete project timeline from design to handover
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full mb-8">
            <Clock className="h-4 w-4 text-indigo-600" />
            <span className="text-indigo-800 font-semibold">Total Timeline: {totalTimelineWeeks}</span>
          </div>

          {/* Premium CTA at top */}
          <div className="mb-8">
            <Button
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.location.href = "/"}
            >
              Return to Homepage
            </Button>
            <p className="text-sm text-brand-muted mt-3">
              Our team will contact you within 24 hours
            </p>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-6">
          {projectSteps.map((step, index) => (
            <Card key={step.id} className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-start space-x-0">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-brand-text">
                        {step.id}
                      </div>
                      <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 pl-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-brand-text mb-2">{step.title}</h3>
                        <p className="text-brand-muted leading-relaxed">{step.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="inline-flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                          <Clock className="h-3 w-3 text-gray-600" />
                          <span className="text-gray-700 font-medium">{step.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Deliverable */}
                    {step.deliverable && (
                      <div className="flex items-center space-x-2 mt-4">
                        <Download className="h-4 w-4 text-green-600" />
                        <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                          Deliverable: {step.deliverable}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Connector */}
                {index < projectSteps.length - 1 && (
                  <div className="flex justify-start pl-12">
                    <div className="w-px h-4 bg-gray-200"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 shadow-2xl border-0 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900">
          <CardContent className="p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Dream Home Journey?</h3>
            <p className="text-lg mb-6 text-purple-100">
              Our team is excited to bring your vision to life. We'll be in touch within 24 hours to begin this exciting process.
            </p>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📞 Quick Support</h4>
                  <p className="text-sm text-purple-100">Call us at +91-98765-43210 for any immediate questions</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📧 Stay Updated</h4>
                  <p className="text-sm text-purple-100">Receive regular updates on your project progress via email</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 p-6 rounded-xl">
          <h4 className="font-bold text-blue-900 mb-3">Important Notes:</h4>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• Timelines may vary based on project complexity and material availability</li>
            <li>• You'll receive regular updates at each milestone</li>
            <li>• Our project manager will be your single point of contact throughout</li>
            <li>• Any changes to design or materials can be discussed during the validation phase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
