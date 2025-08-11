"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Download,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Monitor,
  Apple,
  FileText,
  Video,
  Star,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Sparkles,
  Play,
} from "lucide-react";

const mobileApps = [
  {
    name: "VetVault Mobile App",
    description: "Complete pet management on your mobile device",
    platform: "iOS & Android",
    version: "2.4.1",
    size: "45 MB",
    rating: 4.8,
    downloads: "50K+",
    icon: "📱",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
    features: [
      "Pet health records access",
      "Appointment booking",
      "Client communication",
      "Payment processing",
      "Offline capability",
    ],
  },
  {
    name: "VetVault Pet Owner App",
    description: "Mobile app for pet owners to manage their pets",
    platform: "iOS & Android",
    version: "1.8.3",
    size: "32 MB",
    rating: 4.7,
    downloads: "25K+",
    icon: "🐾",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
    features: [
      "Pet health records",
      "Appointment scheduling",
      "Medication reminders",
      "Direct messaging",
      "Payment history",
    ],
  },
];

const desktopApps = [
  {
    name: "VetVault Desktop",
    description: "Full-featured desktop application for veterinary practices",
    platform: "Windows, Mac, Linux",
    version: "3.2.0",
    size: "125 MB",
    rating: 4.9,
    downloads: "15K+",
    icon: "💻",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
    features: [
      "Complete practice management",
      "Advanced reporting",
      "Multi-user support",
      "Data backup",
      "Offline mode",
    ],
  },
];

const resources = [
  {
    title: "VetVault User Manual",
    description: "Comprehensive guide to using VetVault for pet management",
    type: "PDF",
    size: "8.5 MB",
    downloads: 12500,
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "API Documentation",
    description: "Complete API reference for custom integrations",
    type: "PDF",
    size: "12.3 MB",
    downloads: 3200,
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Setup Guide Video",
    description: "Step-by-step video guide for initial setup",
    type: "MP4",
    size: "45.2 MB",
    downloads: 8900,
    icon: <Video className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Training Materials",
    description: "Staff training resources and templates",
    type: "ZIP",
    size: "28.7 MB",
    downloads: 5600,
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Best Practices Guide",
    description: "Veterinary practice management best practices",
    type: "PDF",
    size: "5.1 MB",
    downloads: 7800,
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=300&h=200&fit=crop&crop=center",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Integration Templates",
    description: "Templates for common integrations and workflows",
    type: "ZIP",
    size: "15.8 MB",
    downloads: 2100,
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop&crop=center",
    color: "from-cyan-500 to-blue-600",
  },
];

const systemRequirements = [
  {
    platform: "iOS",
    requirements: [
      "iOS 13.0 or later",
      "iPhone 6s or newer",
      "iPad (5th generation) or newer",
      "2GB RAM minimum",
      "100MB available storage",
    ],
    icon: <Apple className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300&h=200&fit=crop&crop=center",
    color: "from-gray-500 to-slate-600",
  },
  {
    platform: "Android",
    requirements: [
      "Android 8.0 or later",
      "2GB RAM minimum",
      "100MB available storage",
      "Google Play Services",
      "Internet connection",
    ],
    icon: <Smartphone className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
  },
  {
    platform: "Windows",
    requirements: [
      "Windows 10 or later",
      "4GB RAM minimum",
      "500MB available storage",
      ".NET Framework 4.7.2",
      "Internet connection",
    ],
    icon: <Monitor className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
  },
  {
    platform: "macOS",
    requirements: [
      "macOS 10.15 or later",
      "4GB RAM minimum",
      "500MB available storage",
      "Intel or Apple Silicon",
      "Internet connection",
    ],
    icon: <Monitor className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
  },
];

const testimonials = [
  {
    name: "Dr. Lisa Thompson",
    practice: "Mobile Vet Care",
    location: "Denver, CO",
    quote:
      "The mobile app is fantastic! I can manage my practice from anywhere and the offline capability is a lifesaver.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    improvement: "Mobile First",
  },
  {
    name: "Dr. Robert Kim",
    practice: "Comprehensive Pet Hospital",
    location: "Seattle, WA",
    quote:
      "The desktop app is incredibly powerful. The reporting features have given us insights we never had before.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    improvement: "Advanced Analytics",
  },
];

const stats = [
  {
    icon: <Download className="w-8 h-8" />,
    number: "100K+",
    label: "Total Downloads",
    description: "Across all platforms",
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: "4.8",
    label: "Average Rating",
    description: "User satisfaction",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    number: "5",
    label: "Platforms",
    description: "Supported devices",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    number: "24/7",
    label: "Support",
    description: "Always available",
  },
];

export default function DownloadsPage() {
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
              src="https://i.ibb.co/CKGfx9d3/hand-woman-arranging-wood-cube-stacking-with-icon-healthcare-medical-blue-52701-108.jpg"
              alt="Technology and downloads"
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
                <Download className="w-4 h-4 mr-2" />
                Apps & Resources
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Download VetVault{" "}
                <span className="text-cyan-300">Apps & Resources</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Get the latest VetVault applications, documentation, and
                resources for comprehensive pet management across all your
                devices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Download All Apps
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Documentation
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

        {/* Mobile Apps with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Mobile{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Applications
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Manage your veterinary practice and pet care on the go
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mobileApps.map((app, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border-0 bg-white"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-slate-50 transition-all duration-700"></div>

                  {/* Floating download badge */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge
                      className={`bg-gradient-to-r ${app.color} text-white border-0 px-3 py-2 text-xs font-bold shadow-lg transform group-hover:scale-110 transition-all duration-300 whitespace-nowrap min-w-fit`}
                    >
                      {app.downloads}
                    </Badge>
                  </div>

                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <Image
                          src={app.image || "/placeholder.svg"}
                          alt={app.name}
                          width={400}
                          height={300}
                          className={`w-20 h-20 object-cover rounded-2xl transition-all duration-700 ${
                            hoveredCard === index
                              ? "scale-110 rotate-3"
                              : "scale-100"
                          }`}
                        />
                        <div className="absolute -bottom-2 -right-2 text-2xl">
                          {app.icon}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                            {app.name}
                          </h3>
                          <Badge className="bg-teal-100 text-teal-800">
                            {app.platform}
                          </Badge>
                        </div>

                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {app.description}
                        </p>

                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4" />v{app.version}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {app.size}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{app.rating}</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          {app.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
                              style={{
                                animation: `fadeInLeft 0.6s ease-out ${
                                  featureIndex * 100
                                }ms both`,
                              }}
                            >
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button
                          className={`bg-gradient-to-r ${app.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Progress bar animation */}
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          app.color
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

        {/* Desktop Apps with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Desktop{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Applications
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Powerful desktop applications for comprehensive practice
                management
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {desktopApps.map((app, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 bg-white border-0"
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-teal-500/20 group-hover:via-cyan-500/20 group-hover:to-teal-500/20 rounded-lg transition-all duration-700"></div>

                  {/* Floating rating badge */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge
                      className={`bg-gradient-to-r ${app.color} text-white border-0 px-3 py-2 text-xs font-bold shadow-lg transform group-hover:scale-110 transition-all duration-300 whitespace-nowrap min-w-fit`}
                    >
                      ⭐ {app.rating}
                    </Badge>
                  </div>

                  <CardContent className="p-8 relative">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <Image
                          src={app.image || "/placeholder.svg"}
                          alt={app.name}
                          width={600}
                          height={400}
                          className="w-24 h-24 object-cover rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                        />
                        <div className="absolute -bottom-2 -right-2 text-3xl">
                          {app.icon}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                            {app.name}
                          </h3>
                          <Badge className="bg-teal-100 text-teal-800">
                            {app.platform}
                          </Badge>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {app.description}
                        </p>

                        <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4" />v{app.version}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {app.size}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {app.downloads} downloads
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {app.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
                            >
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button
                          size="lg"
                          className={`bg-gradient-to-r ${app.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Animated underline */}
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transform origin-left transition-all duration-1000 group-hover:scale-x-100 scale-x-0"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Documentation &{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Download guides, documentation, and training materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`bg-gradient-to-r ${resource.color} text-white border-0`}
                        >
                          {resource.type}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        >
                          {resource.icon}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {resource.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {resource.downloads.toLocaleString()}
                        </span>
                      </div>

                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${resource.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                System{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Requirements
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Ensure your devices meet the requirements for optimal
                performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {systemRequirements.map((system, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 text-center bg-white border-0"
                >
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Image
                        src={system.image || "/placeholder.svg"}
                        alt={system.platform}
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${system.color} rounded-2xl flex items-center justify-center text-white mx-auto -mt-8 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {system.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {system.platform}
                    </h3>

                    <ul className="space-y-2 text-sm text-slate-600">
                      {system.requirements.map((requirement, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-center text-left"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What Our Users{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600">
                See how our apps and resources help veterinary practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white border-0"
                >
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
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-100 group-hover:ring-teal-200 transition-all duration-300"
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
                      <div className="absolute -top-2 -left-2 text-4xl text-teal-200 font-serif">
                        "
                      </div>
                      {testimonial.quote}
                      <div className="absolute -bottom-4 -right-2 text-4xl text-teal-200 font-serif">
                        "
                      </div>
                    </blockquote>

                    {/* Animated underline */}
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transform origin-left transition-all duration-1000 group-hover:scale-x-100 scale-x-0"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Started?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-teal-100 mb-8 leading-relaxed">
              Download VetVault apps and resources to transform your veterinary
              practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Download All Apps
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>

            <p className="text-teal-200">
              All downloads are{" "}
              <span className="font-bold text-white">free</span> and include
              comprehensive support
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
