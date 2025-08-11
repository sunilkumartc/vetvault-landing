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
  TrendingUp,
  Zap,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save 15+ Hours Weekly",
    description:
      "Automate routine tasks and focus on what matters most - patient care",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
    stat: "15+ Hours",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Increase Revenue by 25%",
    description:
      "Streamlined billing and better client retention boost your bottom line",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
    stat: "+25% Revenue",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Improve Patient Care",
    description:
      "Better record keeping and communication lead to better outcomes",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
    color: "from-pink-500 to-rose-600",
    stat: "Better Care",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reduce Errors by 90%",
    description: "Digital records and automated systems minimize human error",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
    stat: "-90% Errors",
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
    color: "from-blue-500 to-indigo-600",
    icon: <Heart className="w-6 h-6" />,
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
    color: "from-green-500 to-emerald-600",
    icon: <Clock className="w-6 h-6" />,
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
    color: "from-pink-500 to-rose-600",
    icon: <Users className="w-6 h-6" />,
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
    color: "from-orange-500 to-red-600",
    icon: <DollarSign className="w-6 h-6" />,
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
    color: "from-cyan-500 to-blue-600",
    icon: <Sparkles className="w-6 h-6" />,
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
    color: "from-purple-500 to-violet-600",
    icon: <Shield className="w-6 h-6" />,
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
    improvement: "30% More Patients",
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
    improvement: "Game Changer",
  },
];

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "2K+",
    label: "Small Practices",
    description: "Trust VetVault",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "25%",
    label: "Revenue Increase",
    description: "Average improvement",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "15+",
    label: "Hours Saved",
    description: "Per week",
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "4.9/5",
    label: "Customer Rating",
    description: "Satisfaction score",
  },
];

export default function SmallPracticesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section - Image Only with Reduced Height */}
        <section className="relative py-8 lg:py-12 overflow-hidden">
          {/* Background Image Only */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.ibb.co/R4vSjg85/close-up-veterinarian-taking-care-dog-1.jpg"
              alt="Veterinary clinic background"
              fill
              className="object-cover"
              priority
            />
            {/* Minimal overlay for text readability only */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Users className="w-4 h-4 mr-2" />
                Perfect for 1-5 Veterinarians
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Pet Management Made{" "}
                <span className="text-cyan-300">Simple</span> for Small
                Practices
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Everything you need to manage your veterinary practice
                efficiently, from pet health records to client communication,
                all in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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

            {/* Stats Section - More Compact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-semibold text-xs mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/70 text-xs">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Small Practices Choose{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  VetVault
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Join thousands of small veterinary practices that have
                transformed their operations with VetVault
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border-0 bg-white"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 group-hover:from-indigo-50 group-hover:via-cyan-50 group-hover:to-slate-50 transition-all duration-700"></div>

                  {/* Floating stat badge */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge
                      className={`bg-gradient-to-r ${benefit.color} text-white border-0 px-3 py-2 text-xs font-bold shadow-lg transform group-hover:scale-110 transition-all duration-300 whitespace-nowrap min-w-fit`}
                    >
                      {benefit.stat}
                    </Badge>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={400}
                        height={300}
                        className={`w-full h-40 object-cover transition-all duration-700 ${
                          hoveredCard === index
                            ? "scale-110 rotate-1"
                            : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Floating icon */}
                      <div className="absolute bottom-3 right-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        >
                          {benefit.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Progress bar animation */}
                    <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          benefit.color
                        } rounded-full transform origin-left transition-all duration-1000 ${
                          hoveredCard === index ? "scale-x-100" : "scale-x-0"
                        }`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section with Enhanced Cards */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Complete Pet Management{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Solution
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Every feature you need to run your small veterinary practice
                efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 bg-white border-0 relative"
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-indigo-500/20 group-hover:via-cyan-500/20 group-hover:to-indigo-500/20 rounded-lg transition-all duration-700"></div>

                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Feature icon */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        >
                          {feature.icon}
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      <div className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
                            style={{
                              animation: `fadeInLeft 0.6s ease-out ${
                                detailIndex * 100
                              }ms both`,
                            }}
                          >
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm font-medium">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Call to action */}
                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 h-auto font-semibold group-hover:translate-x-2 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Trusted by Small Practices{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Nationwide
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600">
                See what other veterinarians are saying about VetVault
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white border-0"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-indigo-50 group-hover:to-cyan-50 transition-all duration-700"></div>

                  {/* Success badge */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-2 text-xs font-bold shadow-lg transform group-hover:scale-110 transition-all duration-300 whitespace-nowrap min-w-fit">
                      {testimonial.improvement}
                    </Badge>
                  </div>

                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={200}
                          height={200}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
                        />
                        {/* Online indicator */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>

                      <div className="ml-4">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300"
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </div>
                        <div className="font-semibold text-slate-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-600 text-sm">
                          {testimonial.practice}
                        </div>
                        <div className="text-slate-500 text-xs">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-lg text-slate-700 italic leading-relaxed group-hover:text-slate-900 transition-colors duration-300 relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-indigo-200 font-serif">
                        "
                      </div>
                      {testimonial.quote}
                      <div className="absolute -bottom-4 -right-2 text-4xl text-indigo-200 font-serif">
                        "
                      </div>
                    </blockquote>

                    {/* Animated underline */}
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transform origin-left transition-all duration-1000 group-hover:scale-x-100 scale-x-0"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Limited Time Offer
              </Badge>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Small Practice?
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-indigo-100 mb-8 leading-relaxed">
              Start your free 14-day trial today. No credit card required, no
              setup fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-indigo-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>

            <p className="text-indigo-200 text-lg mt-6">
              Join <span className="font-bold text-white">2,000+</span> small
              veterinary practices already using VetVault
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
