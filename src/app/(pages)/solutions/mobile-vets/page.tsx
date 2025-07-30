import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  CheckCircle,
  ArrowRight,
  MapPin,
  Wifi,
  Smartphone,
  CreditCard,
  Clock,
  Shield,
  Zap,
  Navigation,
  FileText,
} from "lucide-react";

const benefits = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "GPS Route Optimization",
    description: "Efficient routing to maximize daily appointments and reduce travel time",
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Offline Capability",
    description: "Work seamlessly even without internet connection, sync when online",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First Design",
    description: "Optimized for tablets and phones for on-the-go veterinary care",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Mobile Payments",
    description: "Accept payments anywhere with integrated card processing",
  },
];

const features = [
  {
    title: "Mobile Pet Health Records",
    description: "Access and update patient records from anywhere with offline capability",
    details: [
      "Offline record access",
      "Real-time sync when online",
      "Photo documentation",
      "Treatment notes",
      "Vaccination records",
    ],
  },
  {
    title: "GPS Navigation & Scheduling",
    description: "Optimize your route and schedule with intelligent navigation",
    details: [
      "Route optimization",
      "Traffic-aware scheduling",
      "Location-based reminders",
      "Travel time calculations",
      "Appointment clustering",
    ],
  },
  {
    title: "Mobile Payment Processing",
    description: "Accept payments on-site with integrated card readers and digital invoicing",
    details: [
      "Card reader integration",
      "Digital invoicing",
      "Payment plans",
      "Receipt generation",
      "Financial reporting",
    ],
  },
  {
    title: "Client Communication",
    description: "Stay connected with pet owners through mobile messaging and updates",
    details: [
      "SMS notifications",
      "In-app messaging",
      "Appointment confirmations",
      "Treatment updates",
      "Follow-up reminders",
    ],
  },
  {
    title: "Inventory Management",
    description: "Track medications and supplies with mobile inventory control",
    details: [
      "Mobile stock tracking",
      "Automated reordering",
      "Expiration alerts",
      "Usage tracking",
      "Supply requests",
    ],
  },
  {
    title: "Emergency Response",
    description: "Quick access to emergency protocols and critical patient information",
    details: [
      "Emergency protocols",
      "Critical patient alerts",
      "Emergency contact info",
      "Quick reference guides",
      "Emergency billing",
    ],
  },
];

const workflow = [
  {
    step: "1",
    title: "Route Planning",
    description: "Plan your day with optimized routes and appointment scheduling",
    icon: <Navigation className="w-6 h-6" />,
  },
  {
    step: "2",
    title: "Patient Records",
    description: "Access complete pet health records offline or online",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    step: "3",
    title: "On-Site Care",
    description: "Provide veterinary care with mobile-optimized tools",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    step: "4",
    title: "Payment & Documentation",
    description: "Process payments and update records immediately",
    icon: <CreditCard className="w-6 h-6" />,
  },
];

const testimonials = [
  {
    name: "Dr. Lisa Thompson",
    practice: "Mobile Vet Care Services",
    location: "Denver, CO",
    quote: "VetVault's mobile features have revolutionized my practice. I can now see 50% more patients while providing better care documentation.",
    rating: 5,
  },
  {
    name: "Dr. Carlos Mendez",
    practice: "House Call Veterinary",
    location: "Miami, FL",
    quote: "The offline capability is a game-changer. I can work in rural areas without internet and sync everything when I get back to civilization.",
    rating: 5,
  },
];

export default function MobileVetsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Mobile Veterinary Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Veterinary Care on the Go
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Complete pet management solution for mobile veterinarians with offline capability, 
                GPS navigation, and mobile payment processing.
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
                Why Mobile Veterinarians Choose VetVault
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Designed specifically for veterinarians who provide care in the field
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

        {/* Workflow Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Streamlined Mobile Workflow
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From route planning to payment processing, everything optimized for mobile veterinary care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((step, index) => (
                <Card key={index} className="text-center p-8 relative">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </CardContent>
                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-indigo-300" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Complete Mobile Pet Management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every feature optimized for mobile veterinary practice
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

        {/* Mobile Advantages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Built for Mobile Veterinary Success
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Offline-First Design</h3>
                      <p className="text-slate-600">Work without internet and sync when connected</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">GPS Integration</h3>
                      <p className="text-slate-600">Optimize routes and reduce travel time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Mobile Payments</h3>
                      <p className="text-slate-600">Accept payments anywhere with integrated processing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Real-Time Sync</h3>
                      <p className="text-slate-600">Keep all data synchronized across devices</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl p-8">
                <div className="text-center">
                  <Smartphone className="w-24 h-24 text-indigo-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Mobile-Optimized Interface
                  </h3>
                  <p className="text-slate-700 mb-6">
                    Designed specifically for tablets and phones with touch-friendly controls and intuitive navigation
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-slate-900">Touch-Friendly</div>
                      <div className="text-slate-600">Large buttons and easy navigation</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-slate-900">Fast Loading</div>
                      <div className="text-slate-600">Optimized for mobile networks</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-slate-900">Battery Efficient</div>
                      <div className="text-slate-600">Minimal power consumption</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-slate-900">Secure</div>
                      <div className="text-slate-600">HIPAA compliant data protection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Trusted by Mobile Veterinarians Nationwide
              </h2>
              <p className="text-xl text-slate-600">
                See how mobile vets are transforming their practices with VetVault
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
                        {testimonial.practice}
                      </div>
                      <div className="text-sm text-slate-500">
                        {testimonial.location}
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
              Ready to Take Your Practice Mobile?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start your free 14-day trial and see how VetVault can transform your mobile veterinary practice.
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
              Join 1,200+ mobile veterinarians already using VetVault
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 