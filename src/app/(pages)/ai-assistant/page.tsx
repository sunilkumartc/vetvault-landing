"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Brain,
  MessageSquare,
  FileText,
  Search,
  Lightbulb,
  Clock,
  Shield,
  Users,
  BarChart3,
  Sparkles,
  Play,
  Star,
  Bot,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Insights",
    description:
      "Get intelligent recommendations for pet care and treatment plans",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save 10+ Hours Weekly",
    description: "Automate routine tasks and documentation with AI assistance",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reduce Errors by 95%",
    description: "AI-powered validation and error checking for better accuracy",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Enhanced Client Care",
    description:
      "Provide better pet care with AI-driven insights and recommendations",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
  },
];

const features = [
  {
    title: "AI-Powered Pet Health Analysis",
    description:
      "Intelligent analysis of pet health data with predictive insights and treatment recommendations",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=400&fit=crop&crop=center",
    details: [
      "Symptom analysis",
      "Treatment recommendations",
      "Medication interactions",
      "Risk assessment",
      "Preventive care suggestions",
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Smart Documentation Assistant",
    description:
      "Automated SOAP notes and medical record generation with AI assistance",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center",
    details: [
      "Auto-generated SOAP notes",
      "Voice-to-text transcription",
      "Template suggestions",
      "Medical terminology",
      "Compliance checking",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Intelligent Appointment Scheduling",
    description:
      "AI-optimized scheduling with predictive demand and resource allocation",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&crop=center",
    details: [
      "Predictive scheduling",
      "Resource optimization",
      "Waitlist management",
      "Emergency slot allocation",
      "Staff scheduling",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "AI Chatbot for Pet Owners",
    description:
      "24/7 AI-powered support for pet owners with instant answers and guidance",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop&crop=center",
    details: [
      "Instant pet care answers",
      "Appointment scheduling",
      "Medication reminders",
      "Emergency guidance",
      "Health tips",
    ],
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Predictive Analytics",
    description:
      "Advanced analytics to predict pet health trends and practice performance",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    details: [
      "Health trend analysis",
      "Revenue forecasting",
      "Patient retention",
      "Inventory optimization",
      "Performance insights",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "AI-Powered Communication",
    description:
      "Intelligent communication tools for better client engagement and follow-up",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&h=400&fit=crop&crop=center",
    details: [
      "Personalized messaging",
      "Follow-up automation",
      "Health updates",
      "Medication reminders",
      "Appointment confirmations",
    ],
    color: "from-cyan-500 to-blue-600",
  },
];

const aiCapabilities = [
  {
    title: "Natural Language Processing",
    description:
      "Understand and process veterinary terminology and pet health data",
    icon: <MessageSquare className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&crop=center",
  },
  {
    title: "Machine Learning",
    description:
      "Learn from your practice data to provide better recommendations",
    icon: <Brain className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=200&fit=crop&crop=center",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast pet health trends and practice performance",
    icon: <BarChart3 className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
  },
  {
    title: "Computer Vision",
    description: "Analyze medical images and detect abnormalities",
    icon: <Search className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center",
  },
];

const useCases = [
  {
    title: "Diagnostic Assistance",
    description:
      "AI helps veterinarians with differential diagnoses and treatment planning",
    example:
      "Analyzing symptoms and suggesting possible conditions with confidence scores",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Medical Record Automation",
    description:
      "Automatically generate comprehensive medical records from voice notes",
    example:
      "Converting exam notes to structured SOAP format with proper medical terminology",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Client Communication",
    description:
      "AI-powered messaging that provides personalized pet care information",
    example:
      "Sending tailored health updates and care instructions based on pet's condition",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Practice Optimization",
    description:
      "AI insights help optimize practice operations and improve efficiency",
    example: "Predicting busy periods and suggesting optimal staffing levels",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
  },
];

const testimonials = [
  {
    name: "Dr. Jennifer Martinez",
    practice: "Advanced Veterinary Care",
    location: "San Diego, CA",
    quote:
      "VetVault's AI assistant has transformed how I practice. It saves me hours on documentation and provides valuable insights for better patient care.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. David Thompson",
    practice: "Comprehensive Pet Hospital",
    location: "Austin, TX",
    quote:
      "The AI-powered recommendations have improved our diagnostic accuracy by 30%. It's like having a brilliant colleague available 24/7.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "95%",
    label: "Accuracy Rate",
    description: "AI diagnostic accuracy",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "10+",
    label: "Hours Saved",
    description: "Weekly time savings",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    number: "24/7",
    label: "AI Support",
    description: "Always available",
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "5K+",
    label: "Veterinarians",
    description: "Trust Pet Vault AI",
  },
];

export default function AIAssistantPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-10 lg:py-22 overflow-hidden">
          {/* Background Image with Light Overlay */}
          <div className="absolute inset-0 z-0 ">
            <Image
              src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&h=400&fit=crop&crop=center"
              alt="AI-powered veterinary technology"
              fill
              className="object-cover"
              priority
            />
            {/* Light overlay instead of dark */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-indigo-900/35 to-cyan-800/60"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full opacity-15 animate-ping"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Bot className="w-4 h-4 mr-2" />
                AI-Powered Veterinary Assistant
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                Meet{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Pet Vault AI
                </span>
                , Your AI Veterinary Assistant
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your veterinary practice with AI-powered pet
                management, intelligent insights, and automated workflows that
                save time and improve care.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try AI Assistant Free
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
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cyan-200 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-purple-200 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Veterinarians Love{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Pet Vault AI
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Experience the future of veterinary care with AI-powered
                assistance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
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

        {/* AI Capabilities */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Advanced{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  AI Capabilities
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Powered by cutting-edge artificial intelligence designed for
                veterinary medicine
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={capability.image || "/placeholder.svg"}
                        alt={capability.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-2">
                          {capability.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {capability.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center"
              alt="AI background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Real-World{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  AI Applications
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                See how Pet Vault AI transforms everyday veterinary tasks
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 border-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className="relative overflow-hidden">
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {useCase.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                        {useCase.description}
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <p className="text-purple-800 font-medium">
                            {useCase.example}
                          </p>
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
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Complete{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Pet Management
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Every feature enhanced with artificial intelligence for better
                veterinary care
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

        {/* AI Demo Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                  Experience{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Pet Vault AI
                  </span>{" "}
                  in Action
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Instant Responses
                      </h3>
                      <p className="text-slate-600">
                        Get AI-powered answers to veterinary questions in
                        seconds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Smart Documentation
                      </h3>
                      <p className="text-slate-600">
                        Automatically generate comprehensive medical records
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Intelligent Insights
                      </h3>
                      <p className="text-slate-600">
                        Get AI-driven recommendations for better patient care
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Client Engagement
                      </h3>
                      <p className="text-slate-600">
                        AI-powered communication that keeps pet owners informed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                  alt="Pet Vault AI dashboard interface"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Trusted by Veterinarians{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Nationwide
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600">
                See how Pet Vault AI is transforming veterinary practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 border-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-700 to-cyan-600"></div>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center"
              alt="AI-powered veterinary success"
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
                AI-Powered
              </span>{" "}
              Veterinary Care?
            </h2>
            <p className="text-xl lg:text-2xl text-purple-100 mb-12 leading-relaxed">
              Start your free trial and see how Pet Vault AI can transform your
              veterinary practice with intelligent automation and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-slate-100 text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Try Pet Vault AI Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-5 rounded-xl backdrop-blur-sm bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
            <p className="text-purple-200 text-lg">
              Join <span className="font-bold text-white">5,000+</span>{" "}
              veterinarians already using Pet Vault AI
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
