import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Heart,
  Shield,
  Smartphone,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save 15+ Hours Weekly",
    description: "Automate routine tasks and focus on what matters most - patient care",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Increase Revenue by 25%",
    description: "Streamlined billing and better client retention boost your bottom line",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Improve Patient Care",
    description: "Better record keeping and communication lead to better outcomes",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reduce Errors by 90%",
    description: "Digital records and automated systems minimize human error",
  },
];

const features = [
  {
    title: "Pet Health Records",
    description: "Comprehensive digital records for every patient with vaccination history, treatment plans, and medical notes",
    details: [
      "SOAP note templates",
      "Vaccination tracking",
      "Medication history",
      "Lab results storage",
      "Treatment protocols",
    ],
  },
  {
    title: "Appointment Management",
    description: "Easy scheduling with online booking and automated reminders for pet owners",
    details: [
      "Online appointment booking",
      "SMS/email reminders",
      "Calendar integration",
      "Waitlist management",
      "Recurring appointments",
    ],
  },
  {
    title: "Client Communication",
    description: "Stay connected with pet owners through multiple channels",
    details: [
      "In-app messaging",
      "Automated follow-ups",
      "Health updates",
      "Medication reminders",
      "Appointment confirmations",
    ],
  },
  {
    title: "Billing & Payments",
    description: "Streamlined invoicing and payment processing for better cash flow",
    details: [
      "Automated invoicing",
      "Credit card processing",
      "Payment plans",
      "Insurance claims",
      "Financial reporting",
    ],
  },
  {
    title: "Mobile App for Pet Owners",
    description: "Custom-branded app that keeps pet owners engaged and informed",
    details: [
      "Appointment booking",
      "Health record access",
      "Medication reminders",
      "Direct messaging",
      "Payment processing",
    ],
  },
  {
    title: "Inventory Management",
    description: "Track medications, supplies, and equipment with automated reordering",
    details: [
      "Real-time stock levels",
      "Automated reordering",
      "Expiration tracking",
      "Cost analysis",
      "Supplier management",
    ],
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    practice: "Paws & Claws Veterinary Clinic",
    location: "Austin, TX",
    quote: "VetVault transformed our small practice. We're now seeing 30% more patients while spending less time on paperwork.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    practice: "Companion Animal Hospital",
    location: "Portland, OR",
    quote: "The pet owner app has been a game-changer. Our clients love being able to book appointments and access records anytime.",
    rating: 5,
  },
];

export default function SmallPracticesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Perfect for 1-5 Veterinarians
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Pet Management Made Simple for Small Practices
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Everything you need to manage your veterinary practice efficiently, 
                from pet health records to client communication, all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Small Practices Choose VetVault
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join thousands of small veterinary practices that have transformed their operations with VetVault
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Complete Pet Management Solution
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every feature you need to run your small veterinary practice efficiently
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Trusted by Small Practices Nationwide
              </h2>
              <p className="text-xl text-slate-600">
                See what other veterinarians are saying about VetVault
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <blockquote className="text-lg text-slate-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-600">
                        {testimonial.practice}, {testimonial.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Small Practice?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start your free 14-day trial today. No credit card required, no setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Join 2,000+ small veterinary practices already using VetVault
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 