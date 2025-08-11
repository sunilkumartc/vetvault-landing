"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  FileText,
  Calendar,
  CreditCard,
  Database,
  Smartphone,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Play,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
  Bot,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Target,
  Rocket,
  Heart,
  Globe,
} from "lucide-react";

const detailedFeatures = [
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Electronic Health Records",
    description:
      "Comprehensive digital health records with SOAP templates, treatment history, and collaborative notes.",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=400&fit=crop&crop=center",
    features: [
      "SOAP note templates",
      "Treatment history tracking",
      "Collaborative notes",
      "Digital signatures",
      "Automated reminders",
    ],
    color: "from-blue-500 to-indigo-600",
    badge: "Most Popular",
    badgeColor: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Appointment Management",
    description:
      "Advanced scheduling system with online booking, automated reminders, and calendar integration.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&crop=center",
    features: [
      "Online booking portal",
      "Automated SMS/email reminders",
      "Calendar synchronization",
      "Waitlist management",
      "Recurring appointments",
    ],
    color: "from-green-500 to-emerald-600",
    badge: "Time Saver",
    badgeColor: "from-green-400 to-emerald-500",
  },
  {
    icon: <CreditCard className="w-12 h-12" />,
    title: "Billing & Payments",
    description:
      "Streamlined invoicing with integrated payment processing and financial reporting.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
    features: [
      "Automated invoicing",
      "Credit card processing",
      "Payment plans",
      "Insurance claims",
      "Financial reporting",
    ],
    color: "from-purple-500 to-violet-600",
    badge: "Revenue Booster",
    badgeColor: "from-purple-400 to-violet-500",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Inventory Management",
    description:
      "Real-time stock tracking with automated reordering and supplier management.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&crop=center",
    features: [
      "Real-time stock levels",
      "Automated reordering",
      "Supplier management",
      "Expiration tracking",
      "Cost analysis",
    ],
    color: "from-orange-500 to-red-600",
    badge: "Smart Tracking",
    badgeColor: "from-orange-400 to-red-500",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Pet Parent App",
    description:
      "Custom-branded mobile app for pet owners with appointment booking and health records access.",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&h=400&fit=crop&crop=center",
    features: [
      "Custom branding",
      "Appointment booking",
      "Health record access",
      "Medication reminders",
      "Direct messaging",
    ],
    color: "from-cyan-500 to-blue-600",
    badge: "Client Favorite",
    badgeColor: "from-cyan-400 to-blue-500",
  },
  {
    icon: <MessageCircle className="w-12 h-12" />,
    title: "Communication Tools",
    description:
      "Integrated chat, telemedicine, and client communication platform.",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop&crop=center",
    features: [
      "In-app messaging",
      "Video consultations",
      "File sharing",
      "Automated notifications",
      "Communication history",
    ],
    color: "from-pink-500 to-rose-600",
    badge: "Communication Hub",
    badgeColor: "from-pink-400 to-rose-500",
  },
];

const stats = [
  {
    icon: <Clock className="w-8 h-8" />,
    number: "15+",
    label: "Hours Saved Weekly",
    description: "Automate routine tasks",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Always available when you need it",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "50K+",
    label: "Pets Managed Daily",
    description: "Trusted by practices nationwide",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: "4.9/5",
    label: "Customer Rating",
    description: "Loved by veterinarians",
    color: "from-orange-500 to-red-600",
  },
];

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increase Efficiency by 40%",
    description: "Streamline workflows and automate routine tasks",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
    metric: "+40%",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Improve Client Satisfaction",
    description: "Better communication and faster service delivery",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
    metric: "+35%",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Reduce Errors by 90%",
    description: "Digital records and automated systems minimize mistakes",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    color: "from-red-500 to-pink-600",
    metric: "-90%",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Scale Your Practice",
    description: "Handle more patients without increasing overhead",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
    metric: "+60%",
  },
];

const integrations = [
  { name: "IDEXX Laboratories", logo: "🧪", category: "Lab Services" },
  { name: "QuickBooks", logo: "💰", category: "Accounting" },
  { name: "Stripe", logo: "💳", category: "Payments" },
  { name: "Twilio", logo: "📱", category: "Communication" },
  { name: "Google Calendar", logo: "📅", category: "Scheduling" },
  { name: "Mailchimp", logo: "📧", category: "Marketing" },
  { name: "Zoom", logo: "🎥", category: "Telemedicine" },
  { name: "Dropbox", logo: "☁️", category: "Storage" },
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    practice: "Pawsome Veterinary Clinic",
    location: "San Francisco, CA",
    quote:
      "VetVault has revolutionized our practice. The efficiency gains are incredible!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    improvement: "40% more efficient",
  },
  {
    name: "Dr. Michael Chen",
    practice: "Advanced Animal Hospital",
    location: "Austin, TX",
    quote:
      "Our clients love the mobile app. It's transformed how we communicate with pet owners.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    improvement: "35% better satisfaction",
  },
];

export default function FeaturesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate featured benefits
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section - Enhanced with Parallax Effect */}
        <section className="relative py-8 lg:py-12 overflow-hidden">
          {/* Background Image Only */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.ibb.co/VYLx2qmM/close-up-hand-holding-dog-paw.jpg"
              alt="Modern veterinary technology"
              fill
              className="object-cover"
              priority
            />
            {/* Minimal overlay for text readability only */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Remove all floating elements and geometric shapes */}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete Practice Management
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Powerful Features for{" "}
                <span className="text-cyan-300">Modern</span> Veterinary
                Practices
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Discover comprehensive tools designed to streamline your
                practice, improve patient care, and accelerate business growth.
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

        {/* Benefits Showcase with Interactive Elements */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                <Target className="w-4 h-4 mr-2" />
                Proven Results
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Practice Today
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Join thousands of veterinary practices experiencing
                unprecedented growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-2 border-0 bg-white"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Floating metric badge */}
                  <div className="absolute -top-4 -right-4 z-20">
                    <Badge
                      className={`bg-gradient-to-r ${benefit.color} text-white border-0 px-4 py-2 text-lg font-bold shadow-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 rounded-full`}
                    >
                      {benefit.metric}
                    </Badge>
                  </div>

                  {/* Glowing border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                  ></div>

                  <CardContent className="p-8 relative z-10">
                    <div className="relative mb-8">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={400}
                        height={300}
                        className={`w-full h-48 object-cover rounded-xl transition-all duration-700 ${
                          hoveredCard === index
                            ? "scale-110 rotate-3"
                            : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>

                      {/* Floating icon */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                        >
                          {benefit.icon}
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Animated progress bar */}
                    <div className="mt-6 h-2 bg-slate-200 rounded-full overflow-hidden">
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

        {/* Enhanced Detailed Features */}
        <section className="py-20 lg:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                <Lightbulb className="w-4 h-4 mr-2" />
                Complete Solution
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Everything You Need in{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  One Platform
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive tools designed specifically for veterinary
                practices of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {detailedFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border-0 bg-white"
                >
                  {/* Feature badge */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <Badge
                      className={`bg-gradient-to-r ${feature.badgeColor} text-white border-0 px-3 py-2 text-xs font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 rounded-full`}
                    >
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Glowing border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                  ></div>

                  <CardContent className="p-0 relative z-10">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={600}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Floating icon */}
                      <div className="absolute bottom-6 left-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                        >
                          {feature.icon}
                        </div>
                      </div>

                      {/* Feature title overlay */}
                      <div className="absolute bottom-6 right-6">
                        <h3 className="text-2xl font-bold text-white">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                        {feature.description}
                      </p>

                      <div className="space-y-4">
                        {feature.features.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
                            style={{
                              animation: `slideInLeft 0.6s ease-out ${
                                itemIndex * 0.1
                              }s both`,
                            }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-lg">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Call to action */}
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <Button
                          className={`w-full bg-gradient-to-r ${feature.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300 text-lg py-4 rounded-xl shadow-lg hover:shadow-xl`}
                        >
                          <Rocket className="w-5 h-5 mr-2" />
                          Explore {feature.title}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Integration Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                  <Globe className="w-4 h-4 mr-2" />
                  Seamless Connections
                </Badge>

                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Seamless{" "}
                  <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Integration
                  </span>
                </h2>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  VetVault integrates with your existing tools and workflows,
                  making the transition smooth and effortless. Connect with 100+
                  popular services.
                </p>

                {/* Integration grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {integrations.slice(0, 4).map((integration, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-100"
                    >
                      <div className="text-2xl mr-3">{integration.logo}</div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {integration.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {integration.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-500 text-lg px-8 py-4 rounded-xl shadow-xl"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  View All Integrations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="relative">
                {/* Main integration image */}
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                    alt="Technology integration"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating integration badges */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                    <div className="text-2xl">🧪</div>
                    <div className="text-xs font-bold text-slate-600">
                      IDEXX
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-2xl">💰</div>
                    <div className="text-xs font-bold text-slate-600">
                      QuickBooks
                    </div>
                  </div>

                  <div
                    className="absolute top-1/2 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-bounce"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="text-2xl">💳</div>
                    <div className="text-xs font-bold text-slate-600">
                      Stripe
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-20 lg:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                <Heart className="w-4 h-4 mr-2" />
                Customer Love
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Veterinarians
                </span>{" "}
                Nationwide
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                See what veterinary professionals are saying about VetVault
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 bg-white border-0"
                >
                  {/* Success badge */}
                  <div className="absolute -top-4 -right-4 z-20">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 text-sm font-bold shadow-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 rounded-full">
                      {testimonial.improvement}
                    </Badge>
                  </div>

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>

                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center mb-8">
                      <div className="relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={200}
                          height={200}
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-yellow-100 group-hover:ring-yellow-200 transition-all duration-300 shadow-lg"
                        />
                        {/* Online indicator */}
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      </div>

                      <div className="ml-6">
                        <div className="flex items-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current transform group-hover:scale-125 transition-transform duration-300"
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </div>
                        <div className="font-bold text-slate-900 text-xl">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-600 text-lg">
                          {testimonial.practice}
                        </div>
                        <div className="text-slate-500">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-xl text-slate-700 italic leading-relaxed group-hover:text-slate-900 transition-colors duration-300 relative">
                      <div className="absolute -top-4 -left-4 text-6xl text-yellow-200 font-serif">
                        "
                      </div>
                      {testimonial.quote}
                      <div className="absolute -bottom-8 -right-4 text-6xl text-yellow-200 font-serif">
                        "
                      </div>
                    </blockquote>

                    {/* Animated underline */}
                    <div className="mt-8 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transform origin-left transition-all duration-1000 group-hover:scale-x-100 scale-x-0"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ultimate CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:32px_32px] animate-pulse"></div>

          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
          <div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-10">
              <Badge className="bg-white/20 text-white border-white/30 mb-8 px-8 py-4 text-lg font-bold backdrop-blur-sm rounded-full shadow-2xl animate-bounce">
                <Rocket className="w-6 h-6 mr-3" />
                Limited Time Offer
              </Badge>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent animate-pulse">
                All These Features?
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-indigo-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Start your free 14-day trial and see how VetVault can transform
              your practice with powerful, integrated tools. No credit card
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-white/25 transform hover:scale-110 transition-all duration-500 group"
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white/50 text-white hover:bg-white/20 text-xl px-12 py-6 rounded-2xl backdrop-blur-md bg-white/10 transform hover:scale-110 transition-all duration-500 group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform duration-300" />
                Book a Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-indigo-200 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                <span className="text-lg">14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                <span className="text-lg">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                <span className="text-lg">Setup in 5 minutes</span>
              </div>
            </div>

            <p className="text-indigo-200 text-xl">
              Join <span className="font-bold text-white text-2xl">5,000+</span>{" "}
              veterinary practices already using VetVault
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
