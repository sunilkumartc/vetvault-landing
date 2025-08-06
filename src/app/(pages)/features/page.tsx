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
  },
];

const stats = [
  {
    icon: <Clock className="w-8 h-8" />,
    number: "15+",
    label: "Hours Saved Weekly",
    description: "Automate routine tasks",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Always available when you need it",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "50K+",
    label: "Pets Managed Daily",
    description: "Trusted by practices nationwide",
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: "4.9/5",
    label: "Customer Rating",
    description: "Loved by veterinarians",
  },
];

export default function FeaturesPage() {
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
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&h=1080&fit=crop&crop=center"
              alt="Modern veterinary technology"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/50 via-indigo-900/5 to-cyan-300/60"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-300 to-indigo-300 rounded-full opacity-15 animate-ping"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete Practice Management
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                Powerful Features for{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Modern
                </span>{" "}
                Veterinary Practices
              </h1>
              <p className="text-xl lg:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover all the tools you need to streamline your practice,
                improve patient care, and grow your business with cutting-edge
                technology.
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

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cyan-200 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-indigo-200 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Everything You Need in{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  One Platform
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Comprehensive tools designed specifically for veterinary
                practices of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {detailedFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className="relative overflow-hidden">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {feature.icon}
                        </div>
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
                        {feature.features.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">{item}</span>
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

        {/* Integration Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Seamless{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    Integration
                  </span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  VetVault integrates with your existing tools and workflows,
                  making the transition smooth and effortless.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-slate-700">
                      Popular accounting software
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-slate-700">
                      Laboratory systems
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-slate-700">
                      Pharmacy management
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-slate-700">
                      Digital imaging systems
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                  alt="Technology integration"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600"></div>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1920&h=1080&fit=crop&crop=center"
              alt="Veterinary success"
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
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                All These Features?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-indigo-100 mb-12 leading-relaxed">
              Start your free 14-day trial and see how VetVault can transform
              your practice with powerful, integrated tools.
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
                <Play className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </div>
            <p className="text-indigo-200 text-lg">
              Join <span className="font-bold text-white">5,000+</span>{" "}
              veterinary practices already using VetVault
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
