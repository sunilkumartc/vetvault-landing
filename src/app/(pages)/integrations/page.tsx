import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Link,
  CheckCircle,
  ArrowRight,
  Database,
  Smartphone,
  CreditCard,
  FileText,
  Users,
  Shield,
  Zap,
  Globe,
  Settings,
  Clock,
} from "lucide-react";

const categories = [
  {
    title: "Lab & Diagnostics",
    description: "Connect with leading veterinary laboratories and diagnostic services",
    integrations: [
      "IDEXX Laboratories",
      "Antech Diagnostics",
      "VetCor Laboratories",
      "Zoetis Reference Laboratories",
      "Marshfield Labs",
    ],
  },
  {
    title: "Imaging & Radiology",
    description: "Integrate with imaging systems and radiology services",
    integrations: [
      "Sound Technologies",
      "IDEXX Telemedicine",
      "VetConnect Plus",
      "Radiology Services",
      "Digital X-Ray Systems",
    ],
  },
  {
    title: "Pharmacy & Medications",
    description: "Connect with veterinary pharmacies and medication management systems",
    integrations: [
      "VetSource",
      "VetRxDirect",
      "PetMeds",
      "Compounding Pharmacies",
      "Medication Tracking",
    ],
  },
  {
    title: "Payment & Billing",
    description: "Integrate with payment processors and billing systems",
    integrations: [
      "Stripe",
      "Square",
      "PayPal",
      "CareCredit",
      "Pet Insurance",
    ],
  },
  {
    title: "Client Communication",
    description: "Connect with communication platforms and client engagement tools",
    integrations: [
      "Twilio SMS",
      "Mailchimp",
      "Slack",
      "Microsoft Teams",
      "Client Portals",
    ],
  },
  {
    title: "Practice Management",
    description: "Integrate with other practice management and business tools",
    integrations: [
      "QuickBooks",
      "Xero",
      "Google Workspace",
      "Microsoft 365",
      "CRM Systems",
    ],
  },
];

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Seamless Data Flow",
    description: "Automatic data synchronization between all your veterinary systems",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Compliant",
    description: "HIPAA-compliant integrations with enterprise-grade security",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save Time",
    description: "Eliminate manual data entry and reduce administrative tasks",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Better Care",
    description: "Access all patient information in one place for better decision making",
  },
];

const popularIntegrations = [
  {
    name: "IDEXX Laboratories",
    description: "Direct lab result integration with automatic patient record updates",
    logo: "🔬",
    status: "Available",
  },
  {
    name: "Stripe Payments",
    description: "Seamless payment processing with automatic invoice generation",
    logo: "💳",
    status: "Available",
  },
  {
    name: "QuickBooks",
    description: "Automatic financial data sync for comprehensive accounting",
    logo: "📊",
    status: "Available",
  },
  {
    name: "Twilio SMS",
    description: "Automated appointment reminders and client communication",
    logo: "📱",
    status: "Available",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Williams",
    practice: "Advanced Animal Hospital",
    location: "Chicago, IL",
    quote: "The integrations have streamlined our entire workflow. Lab results automatically appear in patient records, and payments are processed seamlessly.",
    rating: 5,
  },
  {
    name: "Dr. Michael Rodriguez",
    practice: "Comprehensive Pet Care",
    location: "Miami, FL",
    quote: "VetVault's integration capabilities have eliminated hours of manual data entry. Everything works together perfectly.",
    rating: 5,
  },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Seamless Integrations
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Connect Your Veterinary Ecosystem
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Integrate VetVault with your favorite veterinary tools and services for 
                seamless pet management and streamlined workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100">
                  View All Integrations
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Request Integration
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
                Why Choose VetVault Integrations?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Connect all your veterinary tools and services for a unified pet management experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-4">
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

        {/* Popular Integrations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Popular Integrations
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Connect with the most trusted veterinary services and tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularIntegrations.map((integration, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{integration.logo}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {integration.description}
                      </p>
                      <Badge className="bg-green-100 text-green-800">
                        {integration.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Integration Categories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Connect with tools and services across every aspect of veterinary care
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {categories.map((category, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.integrations.map((integration, integrationIndex) => (
                        <li key={integrationIndex} className="flex items-center text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {integration}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Simple Integration Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get connected with your favorite tools in just a few clicks
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Choose Integration
                </h3>
                <p className="text-slate-600">
                  Browse our catalog of integrations and select the tools you need
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Connect Accounts
                </h3>
                <p className="text-slate-600">
                  Securely connect your existing accounts with just a few clicks
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Start Using
                </h3>
                <p className="text-slate-600">
                  Begin enjoying seamless data flow and automated workflows
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API & Custom Integrations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  API & Custom Integrations
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Need a custom integration? Our robust API makes it easy to connect with any system.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <Settings className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">RESTful API</h3>
                      <p className="text-slate-600">Comprehensive API for custom integrations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Secure Authentication</h3>
                      <p className="text-slate-600">OAuth 2.0 and API key authentication</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Comprehensive Documentation</h3>
                      <p className="text-slate-600">Detailed API docs and integration guides</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Developer Support</h3>
                      <p className="text-slate-600">Expert support for custom integrations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Build Custom Integrations
                  </h3>
                  <p className="text-slate-700 mb-6">
                    Connect VetVault with any system using our powerful API
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      View API Documentation
                    </Button>
                    <Button variant="outline" className="w-full">
                      Contact Developer Support
                    </Button>
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
                Trusted by Veterinary Practices Nationwide
              </h2>
              <p className="text-xl text-slate-600">
                See how integrations are transforming veterinary workflows
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
              Ready to Connect Your Veterinary Tools?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start integrating VetVault with your favorite veterinary services today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View All Integrations
              </Button>
              <Button size="lg" variant="outline">
                Request Integration
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Join 10,000+ veterinary practices already using VetVault integrations
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 