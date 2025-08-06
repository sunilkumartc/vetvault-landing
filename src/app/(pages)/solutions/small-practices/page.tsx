"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Heart,
  Shield,
  Star,
  Play,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save 15+ Hours Weekly",
    description:
      "Automate routine tasks and focus on what matters most - patient care",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Increase Revenue by 25%",
    description:
      "Streamlined billing and better client retention boost your bottom line",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Improve Patient Care",
    description:
      "Better record keeping and communication lead to better outcomes",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reduce Errors by 90%",
    description: "Digital records and automated systems minimize human error",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
  },
];

const features = [
  {
    title: "Pet Health Records",
    description:
      "Comprehensive digital records for every patient with vaccination history, treatment plans, and medical notes",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=400&fit=crop&crop=center",
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
    description:
      "Easy scheduling with online booking and automated reminders for pet owners",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&crop=center",
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
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop&crop=center",
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
    description:
      "Streamlined invoicing and payment processing for better cash flow",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
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
    description:
      "Custom-branded app that keeps pet owners engaged and informed",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&h=400&fit=crop&crop=center",
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
    description:
      "Track medications, supplies, and equipment with automated reordering",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&crop=center",
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
    quote:
      "VetVault transformed our small practice. We're now seeing 30% more patients while spending less time on paperwork.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Chen",
    practice: "Companion Animal Hospital",
    location: "Portland, OR",
    quote:
      "The pet owner app has been a game-changer. Our clients love being able to book appointments and access records anytime.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

export default function SmallPracticesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1920&h=1080&fit=crop&crop=center"
              alt="Veterinary clinic background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-300 to-indigo-300 rounded-full opacity-15 animate-ping"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Users className="w-4 h-4 mr-2" />
                Perfect for 1-5 Veterinarians
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                Pet Management Made{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Simple
                </span>{" "}
                for Small Practices
              </h1>
              <p className="text-xl lg:text-2xl text-indigo-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                Everything you need to manage your veterinary practice
                efficiently, from pet health records to client communication,
                all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Small Practices Choose{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  VetVault
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Join thousands of small veterinary practices that have
                transformed their operations with VetVault
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="relative mb-6">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Complete Pet Management{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Solution
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Every feature you need to run your small veterinary practice
                efficiently
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1920&h=1080&fit=crop&crop=center"
              alt="Veterinary background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Trusted by Small Practices{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Nationwide
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600">
                See what other veterinarians are saying about VetVault
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 border-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
                      />
                      <div>
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <div className="font-semibold text-slate-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-600">
                          {testimonial.practice}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-xl text-slate-700 mb-6 italic leading-relaxed group-hover:text-slate-900 transition-colors">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600"></div>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1920&h=1080&fit=crop&crop=center"
              alt="Happy pets"
              fill
              className="object-cover opacity-10"
            />
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                Small Practice?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-indigo-100 mb-12 leading-relaxed">
              Start your free 14-day trial today. No credit card required, no
              setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-5 rounded-xl backdrop-blur-sm bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-indigo-200 text-lg">
              Join <span className="font-bold text-white">2,000+</span> small
              veterinary practices already using VetVault
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
