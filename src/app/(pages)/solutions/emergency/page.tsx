"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertTriangle,
  Users,
  Activity,
  Zap,
  Heart,
  FileText,
  Bell,
  Phone,
  Star,
  Sparkles,
  Play,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Emergency Response",
    description:
      "Round-the-clock emergency protocols and critical care management",
    image:
      "https://i.ibb.co/R4vSjg85/close-up-veterinarian-taking-care-dog-1.jpg",
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Triage Management",
    description:
      "Prioritize critical cases and manage emergency workflows efficiently",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Staff Scheduling",
    description: "Manage rotating shifts and emergency on-call schedules",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Real-Time Monitoring",
    description: "Track patient vitals and critical care metrics in real-time",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
  },
];

const features = [
  {
    title: "Emergency Triage System",
    description:
      "Prioritize critical cases and manage emergency workflows with intelligent triage protocols",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=400&fit=crop&crop=center",
    color: "from-slate-500 to-slate-700",
    details: [
      "Automated triage scoring",
      "Critical case prioritization",
      "Emergency protocols",
      "Rapid patient intake",
      "Status tracking",
    ],
  },
  {
    title: "Critical Care Management",
    description:
      "Comprehensive tools for managing critical patients and emergency treatments",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    color: "from-gray-500 to-gray-700",
    details: [
      "Vital signs monitoring",
      "Treatment protocols",
      "Medication tracking",
      "Lab result alerts",
      "Emergency procedures",
    ],
  },
  {
    title: "24/7 Staff Scheduling",
    description:
      "Manage rotating shifts, on-call schedules, and emergency response teams",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&crop=center",
    color: "from-stone-500 to-stone-700",
    details: [
      "Shift management",
      "On-call scheduling",
      "Emergency response teams",
      "Staff notifications",
      "Overtime tracking",
    ],
  },
  {
    title: "Emergency Communication",
    description:
      "Rapid communication with pet owners, referring vets, and emergency contacts",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop&crop=center",
    color: "from-zinc-500 to-zinc-700",
    details: [
      "Emergency notifications",
      "Status updates",
      "Referral coordination",
      "Owner communication",
      "Emergency contacts",
    ],
  },
  {
    title: "Emergency Billing",
    description:
      "Streamlined billing for emergency services with payment plans and insurance processing",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
    color: "from-neutral-500 to-neutral-700",
    details: [
      "Emergency service billing",
      "Payment plans",
      "Insurance claims",
      "Cost estimates",
      "Financial assistance",
    ],
  },
  {
    title: "Emergency Records",
    description:
      "Comprehensive emergency medical records with rapid access and sharing capabilities",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center",
    color: "from-slate-600 to-slate-800",
    details: [
      "Emergency medical records",
      "Rapid record access",
      "Treatment documentation",
      "Image sharing",
      "Discharge summaries",
    ],
  },
];

const emergencyWorkflow = [
  {
    step: "1",
    title: "Emergency Intake",
    description: "Rapid patient registration and triage assessment",
    icon: <AlertTriangle className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=300&h=200&fit=crop&crop=center",
  },
  {
    step: "2",
    title: "Critical Assessment",
    description: "Immediate evaluation and treatment prioritization",
    icon: <Heart className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&h=400&fit=crop&crop=center",
  },
  {
    step: "3",
    title: "Emergency Treatment",
    description: "Provide critical care with protocol guidance",
    icon: <Shield className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop&crop=center",
  },
  {
    step: "4",
    title: "Monitoring & Updates",
    description: "Continuous monitoring and owner communication",
    icon: <Activity className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
  },
];

const emergencyFeatures = [
  {
    title: "Rapid Patient Intake",
    description: "Get critical patients into the system in under 30 seconds",
    icon: <Zap className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=300&h=200&fit=crop&crop=center",
  },
  {
    title: "Emergency Protocols",
    description: "Built-in protocols for common emergency scenarios",
    icon: <FileText className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop&crop=center",
  },
  {
    title: "Real-Time Alerts",
    description: "Instant notifications for critical changes and updates",
    icon: <Bell className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
  },
  {
    title: "Emergency Contacts",
    description: "Quick access to all emergency contacts and specialists",
    icon: <Phone className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&h=200&fit=crop&crop=center",
  },
];

const testimonials = [
  {
    name: "Dr. Amanda Foster",
    practice: "Emergency Animal Hospital",
    location: "Phoenix, AZ",
    quote:
      "VetVault's emergency features have transformed our critical care workflow. We can now handle 40% more emergency cases with better outcomes.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Robert Kim",
    practice: "24/7 Emergency Veterinary Center",
    location: "Seattle, WA",
    quote:
      "The triage system and emergency protocols have improved our response time by 60%. Pet owners appreciate the real-time updates.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

const stats = [
  {
    icon: <Clock className="w-8 h-8" />,
    number: "24/7",
    label: "Emergency Support",
    description: "Always available",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "40%",
    label: "More Cases",
    description: "Handled efficiently",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "30s",
    label: "Patient Intake",
    description: "Rapid registration",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    number: "300+",
    label: "Emergency Clinics",
    description: "Trust VetVault",
  },
];

export default function EmergencyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeCase, setActiveCase] = useState(0);

  const emergencyCases = [
    {
      id: 1,
      patient: "Max",
      species: "Dog",
      condition: "Trauma - Hit by car",
      severity: "Critical",
      status: "In Treatment",
      arrivalTime: "14:30",
      waitTime: "5 min",
      doctor: "Dr. Foster",
      color: "bg-red-500",
    },
    {
      id: 2,
      patient: "Luna",
      species: "Cat",
      condition: "Respiratory distress",
      severity: "Urgent",
      status: "Waiting",
      arrivalTime: "14:45",
      waitTime: "12 min",
      doctor: "Dr. Kim",
      color: "bg-orange-500",
    },
    {
      id: 3,
      patient: "Buddy",
      species: "Dog",
      condition: "Seizures",
      severity: "Critical",
      status: "Stabilized",
      arrivalTime: "15:00",
      waitTime: "2 min",
      doctor: "Dr. Martinez",
      color: "bg-red-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section - Compact with Muted Colors */}
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 opacity-95"></div>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&h=1080&fit=crop"
              alt="Emergency veterinary clinic"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-pulse">
                  <Shield className="w-4 h-4 mr-2" />
                  24/7 Emergency Solution
                </Badge>
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                  Save Lives with{" "}
                  <span className="text-cyan-300">Emergency-Ready</span>{" "}
                  Technology
                </h1>
                <p className="text-xl mb-8 text-red-100">
                  Purpose-built for emergency veterinary clinics with critical
                  care workflows, triage management, and 24/7 operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-slate-100"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Emergency Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">24/7</div>
                    <div className="text-red-100">Always Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">60s</div>
                    <div className="text-red-100">Patient Intake</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">
                      99.9%
                    </div>
                    <div className="text-red-100">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Emergency Dashboard */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-xl font-bold">
                    Emergency Dashboard
                  </h3>
                  <div className="text-white text-sm">
                    {currentTime.toLocaleTimeString()}
                  </div>
                </div>

                <div className="space-y-4">
                  {emergencyCases.map((case_, index) => (
                    <div
                      key={case_.id}
                      className={`p-4 rounded-lg transition-all cursor-pointer ${
                        activeCase === index
                          ? "bg-white/20 border border-white/40 ring-2 ring-white/50"
                          : "bg-white/10 border border-white/20 hover:bg-white/15"
                      }`}
                      onClick={() => setActiveCase(index)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${case_.color} ${
                              case_.severity === "Critical"
                                ? "animate-pulse"
                                : ""
                            }`}
                          ></div>
                          <div>
                            <div className="text-white font-medium">
                              {case_.patient} ({case_.species})
                            </div>
                            <div className="text-white/70 text-sm">
                              {case_.condition}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={`${case_.color} text-white text-xs`}
                          >
                            {case_.severity}
                          </Badge>
                          <div className="text-white/70 text-xs mt-1">
                            {case_.status}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>Arrived: {case_.arrivalTime}</span>
                        <span>Wait: {case_.waitTime}</span>
                        <span>{case_.doctor}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-500/20 rounded-lg border border-red-400/30">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span className="flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                      Critical Cases:
                    </span>
                    <span className="font-semibold text-red-300">2 Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section with Slide Animation */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Emergency Clinics Choose{" "}
                <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                  VetVault
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Designed specifically for emergency veterinary care with
                critical response capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-slate-50"
                  style={{
                    animation: `slideInFromLeft 0.8s ease-out ${
                      index * 200
                    }ms both`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">
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

        {/* Emergency Workflow with Bounce Animation */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-gray-400 to-stone-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Streamlined{" "}
                <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                  Emergency Workflow
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                From emergency intake to discharge, every step optimized for
                critical care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyWorkflow.map((step, index) => (
                <Card
                  key={index}
                  className="group text-center p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
                  style={{
                    animation: `bounceIn 0.8s ease-out ${index * 200}ms both`,
                  }}
                >
                  <CardContent className="p-0 relative z-10">
                    <div className="relative mb-4">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                  {index < emergencyWorkflow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-slate-300" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Features with Rotate Animation */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop&crop=center"
              alt="Emergency care background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Emergency-Specific{" "}
                <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Every feature designed for emergency veterinary care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:rotate-1 hover:scale-105 cursor-pointer bg-gradient-to-br from-white to-slate-50 border-0"
                  style={{
                    animation: `rotateIn 0.8s ease-out ${index * 150}ms both`,
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-500 rounded-xl flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section with Stagger Animation */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-slate-400 to-stone-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-stone-400 to-slate-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Complete Emergency{" "}
                <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                  Pet Management
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
                Every feature designed specifically for emergency veterinary
                care
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0"
                  style={{
                    animation: `slideInFromRight 0.8s ease-out ${
                      index * 200
                    }ms both`,
                    animationDirection: index % 2 === 0 ? "normal" : "reverse",
                  }}
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

        {/* Emergency Advantages with Scale Animation */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
                style={{
                  animation: `slideInFromLeft 0.8s ease-out both`,
                }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                  Built for Emergency{" "}
                  <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                    Veterinary Success
                  </span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Rapid Response",
                      description:
                        "Get critical patients into the system in seconds",
                    },
                    {
                      title: "Emergency Protocols",
                      description:
                        "Built-in protocols for common emergency scenarios",
                    },
                    {
                      title: "24/7 Support",
                      description:
                        "Round-the-clock technical support for emergency clinics",
                    },
                    {
                      title: "Critical Alerts",
                      description:
                        "Instant notifications for critical changes and updates",
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
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                        <CheckCircle className="w-5 h-5" />
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
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-500">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-slate-600 mx-auto mb-6 animate-pulse-slow" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Emergency-Ready Platform
                    </h3>
                    <p className="text-slate-700 mb-6">
                      Designed specifically for emergency veterinary care with
                      critical response capabilities and 24/7 reliability
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {[
                        {
                          title: "Rapid Intake",
                          description: "30-second patient registration",
                        },
                        {
                          title: "Triage System",
                          description: "Automated case prioritization",
                        },
                        {
                          title: "Critical Alerts",
                          description: "Real-time notifications",
                        },
                        {
                          title: "24/7 Support",
                          description: "Always available assistance",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-slate-100 rounded-lg p-3"
                        >
                          <div className="font-semibold text-slate-900">
                            {item.title}
                          </div>
                          <div className="text-slate-600">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full opacity-40 animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section with Fade Animation */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-gray-400 to-stone-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Trusted by Emergency Clinics{" "}
                <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                  Nationwide
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600">
                See how emergency veterinary clinics are transforming their
                critical care with VetVault
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
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-slate-100 group-hover:ring-slate-200 transition-all duration-300"
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-800 to-stone-800"></div>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop&crop=center"
              alt="Emergency veterinary success"
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
              <span className="bg-gradient-to-r from-slate-300 to-gray-300 bg-clip-text text-transparent">
                Emergency Practice?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-200 mb-12 leading-relaxed">
              Start your free 14-day trial and see how VetVault can enhance your
              emergency veterinary care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-slate-700 hover:bg-slate-100 text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
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
                <Shield className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
            <p className="text-slate-300 text-lg">
              Join <span className="font-bold text-white">300+</span> emergency
              veterinary clinics already using VetVault
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-200deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

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

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
