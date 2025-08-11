"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Link,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Shield,
  Zap,
  Globe,
  Settings,
  Clock,
  Star,
  Sparkles,
  Play,
  TrendingUp,
  Activity,
} from "lucide-react";

const categories = [
  {
    title: "Lab & Diagnostics",
    description:
      "Connect with leading veterinary laboratories and diagnostic services",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
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
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
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
    description:
      "Connect with veterinary pharmacies and medication management systems",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
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
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    color: "from-orange-500 to-red-600",
    integrations: ["Stripe", "Square", "PayPal", "CareCredit", "Pet Insurance"],
  },
  {
    title: "Client Communication",
    description:
      "Connect with communication platforms and client engagement tools",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop&crop=center",
    color: "from-pink-500 to-rose-600",
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    color: "from-cyan-500 to-blue-600",
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
    description:
      "Automatic data synchronization between all your veterinary systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Compliant",
    description: "HIPAA-compliant integrations with enterprise-grade security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save Time",
    description: "Eliminate manual data entry and reduce administrative tasks",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Better Care",
    description:
      "Access all patient information in one place for better decision making",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
  },
];

const popularIntegrations = [
  {
    name: "IDEXX Laboratories",
    description:
      "Direct lab result integration with automatic patient record updates",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop&crop=center",
    status: "Available",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Stripe Payments",
    description:
      "Seamless payment processing with automatic invoice generation",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center",
    status: "Available",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "QuickBooks",
    description: "Automatic financial data sync for comprehensive accounting",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
    status: "Available",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Twilio SMS",
    description: "Automated appointment reminders and client communication",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&h=200&fit=crop&crop=center",
    status: "Available",
    color: "from-pink-500 to-rose-600",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Williams",
    practice: "Advanced Animal Hospital",
    location: "Chicago, IL",
    quote:
      "The integrations have streamlined our entire workflow. Lab results automatically appear in patient records, and payments are processed seamlessly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Rodriguez",
    practice: "Comprehensive Pet Care",
    location: "Miami, FL",
    quote:
      "VetVault's integration capabilities have eliminated hours of manual data entry. Everything works together perfectly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

const stats = [
  {
    icon: <Activity className="w-8 h-8" />,
    number: "100+",
    label: "Integrations",
    description: "Available connections",
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "10K+",
    label: "Practices Connected",
    description: "Using integrations",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "99.9%",
    label: "Uptime",
    description: "Integration reliability",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "50%",
    label: "Time Saved",
    description: "On admin tasks",
  },
];

export default function IntegrationsPage() {
  const [isVisible, setIsVisible] = useState(false);

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
              src="https://i.ibb.co/HfJwc3x4/checking-breath-male-veterinarian-work-uniform-listening-breath-small-dog-with-phonendoscope-veterin.jpg"
              alt="Technology integration and connectivity"
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
                <Link className="w-4 h-4 mr-2" />
                Seamless Integrations
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Connect Your{" "}
                <span className="text-cyan-300">Veterinary Ecosystem</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Integrate VetVault with your favorite veterinary tools and
                services for seamless pet management and streamlined workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  View All Integrations
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Request Integration
                </Button>
              </div>
            </div>

            {/* Stats Section - More Compact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
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

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  VetVault Integrations?
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Connect all your veterinary tools and services for a unified pet
                management experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={400}
                        height={300}
                        className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Integrations */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Popular{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Integrations
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Connect with the most trusted veterinary services and tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularIntegrations.map((integration, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={integration.image || "/placeholder.svg"}
                        alt={integration.name}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white border-0">
                          {integration.status}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-sm font-bold text-white">
                          {integration.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {integration.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Integration{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Connect with tools and services across every aspect of
                veterinary care
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <ul className="space-y-2">
                        {category.integrations.map(
                          (integration, integrationIndex) => (
                            <li
                              key={integrationIndex}
                              className="flex items-center text-slate-700"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm font-medium">
                                {integration}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Simple{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Integration Process
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Get connected with your favorite tools in just a few clicks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Integration",
                  description:
                    "Browse our catalog of integrations and select the tools you need",
                },
                {
                  step: "2",
                  title: "Connect Accounts",
                  description:
                    "Securely connect your existing accounts with just a few clicks",
                },
                {
                  step: "3",
                  title: "Start Using",
                  description:
                    "Begin enjoying seamless data flow and automated workflows",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API & Custom Integrations */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  API &{" "}
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Custom Integrations
                  </span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Need a custom integration? Our robust API makes it easy to
                  connect with any system.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: Settings,
                      title: "RESTful API",
                      description: "Comprehensive API for custom integrations",
                    },
                    {
                      icon: Shield,
                      title: "Secure Authentication",
                      description: "OAuth 2.0 and API key authentication",
                    },
                    {
                      icon: FileText,
                      title: "Comprehensive Documentation",
                      description: "Detailed API docs and integration guides",
                    },
                    {
                      icon: Users,
                      title: "Developer Support",
                      description: "Expert support for custom integrations",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-500">
                  <div className="text-center">
                    <Globe className="w-20 h-20 text-green-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Build Custom Integrations
                    </h3>
                    <p className="text-slate-700 mb-6">
                      Connect VetVault with any system using our powerful API
                    </p>
                    <div className="space-y-4">
                      <Button className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300">
                        <FileText className="w-4 h-4 mr-2" />
                        View API Documentation
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full hover:bg-green-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Contact Developer Support
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Trusted by Veterinary{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Practices Nationwide
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600">
                See how integrations are transforming veterinary workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300"
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
                    <blockquote className="text-lg text-slate-700 italic leading-relaxed group-hover:text-slate-900 transition-colors">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-cyan-600 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Connect Your{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Veterinary Tools?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-green-100 mb-8 leading-relaxed">
              Start integrating VetVault with your favorite veterinary services
              today and transform your practice workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View All Integrations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
              >
                <Settings className="w-5 h-5 mr-2" />
                Request Integration
              </Button>
            </div>

            <p className="text-green-200">
              Join <span className="font-bold text-white">10,000+</span>{" "}
              veterinary practices already using VetVault integrations
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
