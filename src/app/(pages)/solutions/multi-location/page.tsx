import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  BarChart3,
  Database,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Centralized Management",
    description: "Manage all locations from one dashboard with real-time data sync",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Staff Coordination",
    description: "Share staff, resources, and expertise across all locations seamlessly",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Unified Analytics",
    description: "Get comprehensive insights across all locations and performance metrics",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Shared Pet Records",
    description: "Access patient records from any location for better continuity of care",
  },
];

const features = [
  {
    title: "Multi-Location Dashboard",
    description: "Centralized control panel to manage all your veterinary locations from one place",
    details: [
      "Real-time location overview",
      "Cross-location reporting",
      "Resource allocation",
      "Performance comparisons",
      "Unified settings management",
    ],
  },
  {
    title: "Shared Pet Health Records",
    description: "Seamless access to patient records across all locations for better care coordination",
    details: [
      "Unified patient database",
      "Cross-location record access",
      "Treatment history sharing",
      "Vaccination tracking",
      "Medical image sharing",
    ],
  },
  {
    title: "Staff Management",
    description: "Coordinate staff schedules, training, and resources across multiple locations",
    details: [
      "Cross-location scheduling",
      "Staff performance tracking",
      "Training management",
      "Resource sharing",
      "Communication tools",
    ],
  },
  {
    title: "Inventory & Supply Chain",
    description: "Centralized inventory management with location-specific tracking and automated reordering",
    details: [
      "Centralized inventory control",
      "Location-specific stock levels",
      "Automated reordering",
      "Cost analysis by location",
      "Supplier management",
    ],
  },
  {
    title: "Financial Management",
    description: "Comprehensive financial reporting and billing across all locations",
    details: [
      "Unified financial reporting",
      "Location-specific analytics",
      "Cross-location billing",
      "Revenue optimization",
      "Cost tracking",
    ],
  },
  {
    title: "Client Experience",
    description: "Consistent pet owner experience across all locations with unified branding",
    details: [
      "Unified mobile app",
      "Consistent communication",
      "Cross-location appointments",
      "Shared loyalty programs",
      "Brand consistency",
    ],
  },
];

const challenges = [
  {
    title: "Fragmented Data",
    description: "Different systems at each location create data silos and inefficiencies",
    solution: "Unified platform with real-time data synchronization across all locations",
  },
  {
    title: "Inconsistent Care",
    description: "Pet owners receive different experiences and care quality across locations",
    solution: "Standardized protocols and shared medical records ensure consistent care",
  },
  {
    title: "Resource Waste",
    description: "Duplicated efforts and inefficient resource allocation across locations",
    solution: "Centralized management and resource sharing optimize operations",
  },
  {
    title: "Staff Coordination",
    description: "Difficulty coordinating staff, training, and expertise across locations",
    solution: "Integrated staff management and communication tools",
  },
];

const testimonials = [
  {
    name: "Dr. Emily Rodriguez",
    practice: "Pawsome Veterinary Group",
    locations: "5 locations across California",
    quote: "VetVault's multi-location features have transformed how we operate. We can now provide consistent care across all our locations while maintaining local flexibility.",
    rating: 5,
  },
  {
    name: "Dr. James Wilson",
    practice: "Metro Animal Hospitals",
    locations: "8 locations in Texas",
    quote: "The centralized dashboard gives us complete visibility into all locations. We've increased efficiency by 40% and improved patient care coordination.",
    rating: 5,
  },
];

export default function MultiLocationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Multi-Location Veterinary Management
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Unify Your Multi-Location Veterinary Practice
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Manage multiple veterinary locations seamlessly with centralized pet management, 
                shared records, and unified operations all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Demo
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
                Why Multi-Location Practices Choose VetVault
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Streamline operations, improve care coordination, and grow your veterinary group efficiently
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

        {/* Challenges & Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Common Multi-Location Challenges & Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how VetVault addresses the unique challenges of managing multiple veterinary locations
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {challenge.description}
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-green-800 font-medium">
                              {challenge.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
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
                Complete Multi-Location Pet Management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every feature designed specifically for managing multiple veterinary locations
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
                Trusted by Multi-Location Groups Nationwide
              </h2>
              <p className="text-xl text-slate-600">
                See how veterinary groups are transforming their operations with VetVault
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
                        {testimonial.locations}
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
              Ready to Unify Your Multi-Location Practice?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start your free 14-day trial and see how VetVault can transform your veterinary group.
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
              Join 500+ multi-location veterinary groups already using VetVault
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 