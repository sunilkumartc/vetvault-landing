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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section - Compact */}
        <section className="relative py-16 lg:py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center"
              alt="Technology integration and connectivity"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-teal-600/70 to-cyan-600/80"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full opacity-15 animate-ping"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Link className="w-4 h-4 mr-2" />
                Seamless Integrations
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Connect Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
                  Veterinary Ecosystem
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Integrate VetVault with your favorite veterinary tools and
                services for seamless pet management and streamlined workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
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

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-fade-in-up`}
                  style={{ animationDelay: `${800 + index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-cyan-200 font-semibold text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-green-200 text-xs">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Slide Animation */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  VetVault Integrations?
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Connect all your veterinary tools and services for a unified pet
                management experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-slate-50"
                  style={{
                    animation: `slideInFromBottom 0.8s ease-out ${
                      index * 200
                    }ms both`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="relative mb-6">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={400}
                        height={300}
                        className={`w-full h-48 object-cover rounded-xl mb-6 transition-all duration-700 ${
                          hoveredCard === index
                            ? "scale-110 rotate-1"
                            : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
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

        {/* Popular Integrations with Flip Animation */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Popular{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Integrations
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Connect with the most trusted veterinary services and tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularIntegrations.map((integration, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 bg-white/80 backdrop-blur-sm border-0"
                  style={{
                    animation: `flipInX 0.8s ease-out ${index * 150}ms both`,
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={integration.image || "/placeholder.svg"}
                        alt={integration.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white border-0">
                          {integration.status}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {integration.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
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

        {/* Integration Categories with Stagger Animation */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center"
              alt="Integration background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Integration{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Connect with tools and services across every aspect of
                veterinary care
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 border-0"
                  style={{
                    animation: `slideInFromSide 0.8s ease-out ${
                      index * 200
                    }ms both`,
                    animationDirection: index % 2 === 0 ? "normal" : "reverse",
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                        {category.description}
                      </p>
                      <ul className="space-y-3">
                        {category.integrations.map(
                          (integration, integrationIndex) => (
                            <li
                              key={integrationIndex}
                              className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="font-medium">{integration}</span>
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

        {/* Integration Process with Scale Animation */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Simple{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Integration Process
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
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
                <div
                  key={index}
                  className="text-center"
                  style={{
                    animation: `scaleIn 0.6s ease-out ${index * 200}ms both`,
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">{process.step}</span>
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
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
                style={{
                  animation: `slideInFromLeft 0.8s ease-out both`,
                }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                  API &{" "}
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Custom Integrations
                  </span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
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
                    <div
                      key={index}
                      className="flex items-start space-x-4"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${
                          300 + index * 100
                        }ms both`,
                      }}
                    >
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
              <div
                className="relative"
                style={{
                  animation: `slideInFromRight 0.8s ease-out 200ms both`,
                }}
              >
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-500">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-green-600 mx-auto mb-6 animate-spin-slow" />
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
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-400 to-green-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Trusted by Veterinary{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Practices Nationwide
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600">
                See how integrations are transforming veterinary workflows
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 border-0"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 300}ms both`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-teal-600 to-cyan-300"></div>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center"
              alt="Integration success"
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
              Ready to Connect Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                Veterinary Tools?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-green-100 mb-12 leading-relaxed">
              Start integrating VetVault with your favorite veterinary services
              today and transform your practice workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-slate-100 text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View All Integrations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-5 rounded-xl backdrop-blur-sm bg-transparent"
              >
                <Settings className="w-5 h-5 mr-2" />
                Request Integration
              </Button>
            </div>
            <p className="text-green-200 text-lg">
              Join <span className="font-bold text-white">10,000+</span>{" "}
              veterinary practices already using VetVault integrations
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromSide {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes flipInX {
          from {
            opacity: 0;
            transform: perspective(400px) rotateX(-90deg);
          }
          to {
            opacity: 1;
            transform: perspective(400px) rotateX(0deg);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
