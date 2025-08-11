"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Star,
  MapPin,
  Building2,
  Heart,
  DollarSign,
  Award,
  Target,
  BarChart3,
  Sparkles,
  Play,
} from "lucide-react";

const featuredCaseStudies = [
  {
    title: "Pawsome Veterinary Group: 40% Efficiency Increase with VetVault",
    excerpt:
      "How a multi-location veterinary group transformed their operations and improved patient care with comprehensive pet management.",
    practice: "Pawsome Veterinary Group",
    location: "California",
    size: "5 locations, 25 veterinarians",
    results: [
      "40% increase in operational efficiency",
      "25% reduction in administrative time",
      "30% improvement in client satisfaction",
      "50% faster appointment scheduling",
    ],
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop&crop=center",
    category: "Multi-Location",
    readTime: "8 min read",
    color: "from-blue-500 to-indigo-600",
    featured: true,
  },
  {
    title: "Mobile Vet Care: Revolutionizing House Call Services",
    excerpt:
      "A mobile veterinary practice increased their patient capacity by 60% while improving care quality with VetVault's mobile solutions.",
    practice: "Mobile Vet Care Services",
    location: "Colorado",
    size: "3 mobile veterinarians",
    results: [
      "60% increase in patient capacity",
      "45% reduction in travel time",
      "90% improvement in record accuracy",
      "35% increase in revenue",
    ],
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&h=400&fit=crop&crop=center",
    category: "Mobile Care",
    readTime: "10 min read",
    color: "from-green-500 to-emerald-600",
    featured: true,
  },
  {
    title: "Emergency Animal Hospital: Streamlining Critical Care",
    excerpt:
      "How an emergency veterinary hospital improved response times and patient outcomes with VetVault's emergency protocols.",
    practice: "Emergency Animal Hospital",
    location: "Texas",
    size: "24/7 emergency facility",
    results: [
      "50% faster emergency response",
      "40% improvement in patient outcomes",
      "25% reduction in wait times",
      "60% better staff coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    category: "Emergency Care",
    readTime: "12 min read",
    color: "from-red-500 to-pink-600",
    featured: true,
  },
];

const caseStudies = [
  {
    title: "Small Practice Success: From Paper to Digital Transformation",
    excerpt:
      "A single-location practice modernized their operations and doubled their patient capacity with VetVault.",
    practice: "Companion Animal Clinic",
    location: "Oregon",
    size: "2 veterinarians",
    results: [
      "100% increase in patient capacity",
      "70% reduction in paperwork",
      "45% improvement in client retention",
      "80% faster billing process",
    ],
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
    category: "Small Practice",
    readTime: "6 min read",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Specialty Hospital: Advanced Care with AI-Powered Insights",
    excerpt:
      "A specialty veterinary hospital leveraged VetVault's AI assistant to improve diagnostic accuracy and treatment planning.",
    practice: "Advanced Veterinary Specialists",
    location: "Florida",
    size: "8 specialists",
    results: [
      "30% improvement in diagnostic accuracy",
      "25% faster treatment planning",
      "40% reduction in medical errors",
      "50% better client communication",
    ],
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop&crop=center",
    category: "Specialty Care",
    readTime: "9 min read",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Rural Veterinary Clinic: Connecting Remote Communities",
    excerpt:
      "A rural veterinary clinic improved access to care and expanded their services with VetVault's telemedicine features.",
    practice: "Rural Animal Care",
    location: "Montana",
    size: "3 veterinarians",
    results: [
      "200% increase in service area",
      "60% improvement in patient access",
      "40% reduction in travel costs",
      "80% better follow-up care",
    ],
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    category: "Rural Practice",
    readTime: "7 min read",
    color: "from-teal-500 to-green-600",
  },
  {
    title: "Corporate Veterinary Chain: Scaling Operations Nationwide",
    excerpt:
      "A national veterinary chain standardized operations and improved consistency across 50+ locations with VetVault.",
    practice: "National Pet Care Centers",
    location: "Nationwide",
    size: "50+ locations",
    results: [
      "Standardized operations across all locations",
      "35% improvement in operational efficiency",
      "25% reduction in training time",
      "40% better resource allocation",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    category: "Corporate Chain",
    readTime: "11 min read",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Exotic Animal Practice: Specialized Care Management",
    excerpt:
      "An exotic animal practice improved their specialized care protocols and client education with VetVault's custom features.",
    practice: "Exotic Animal Hospital",
    location: "Arizona",
    size: "4 veterinarians",
    results: [
      "50% improvement in specialized care protocols",
      "60% better client education",
      "40% reduction in treatment errors",
      "70% improvement in follow-up compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center",
    category: "Exotic Care",
    readTime: "8 min read",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Shelter Medicine: Managing High-Volume Care",
    excerpt:
      "An animal shelter improved their high-volume care management and adoption processes with VetVault.",
    practice: "Hope Animal Shelter",
    location: "Michigan",
    size: "High-volume shelter",
    results: [
      "300% increase in adoption efficiency",
      "50% improvement in medical record accuracy",
      "40% reduction in administrative overhead",
      "60% better volunteer coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop&crop=center",
    category: "Shelter Medicine",
    readTime: "9 min read",
    color: "from-cyan-500 to-blue-600",
  },
];

const categories = [
  { name: "Multi-Location", count: 8, color: "from-blue-500 to-indigo-600" },
  { name: "Small Practice", count: 12, color: "from-green-500 to-emerald-600" },
  { name: "Emergency Care", count: 6, color: "from-red-500 to-pink-600" },
  { name: "Mobile Care", count: 5, color: "from-purple-500 to-violet-600" },
  { name: "Specialty Care", count: 7, color: "from-orange-500 to-red-600" },
  { name: "Rural Practice", count: 4, color: "from-teal-500 to-green-600" },
  { name: "Corporate Chain", count: 3, color: "from-indigo-500 to-purple-600" },
  { name: "Exotic Care", count: 4, color: "from-pink-500 to-rose-600" },
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    practice: "Pawsome Veterinary Group",
    location: "California",
    quote:
      "VetVault transformed our multi-location practice. We've seen incredible improvements in efficiency and patient care across all our locations.",
    rating: 5,
    improvement: "40% efficiency increase",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Chen",
    practice: "Mobile Vet Care Services",
    location: "Colorado",
    quote:
      "The mobile features are game-changing. We can now serve more patients while providing better care documentation.",
    rating: 5,
    improvement: "60% patient capacity increase",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

const stats = [
  {
    icon: <FileText className="w-8 h-8" />,
    number: "50+",
    label: "Success Stories",
    description: "Documented cases",
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "10K+",
    label: "Practices Served",
    description: "Nationwide coverage",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "40%",
    label: "Avg. Efficiency Gain",
    description: "Proven results",
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "98%",
    label: "Success Rate",
    description: "Client satisfaction",
  },
];

const resultMetrics = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "40%",
    label: "Average Efficiency Increase",
    description: "Across all practice types",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "50%",
    label: "Time Saved on Admin Tasks",
    description: "More time for patient care",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: "35%",
    label: "Improvement in Patient Care",
    description: "Better health outcomes",
    color: "from-red-500 to-pink-600",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    value: "30%",
    label: "Revenue Growth",
    description: "Sustainable business growth",
    color: "from-purple-500 to-violet-600",
  },
];

export default function CaseStudiesPage() {
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
              src="https://i.ibb.co/VpqFhMhG/top-view-paper-paw-print-bone-with-stethoscope-planet-earth-animal-day-23-2148668868.jpg"
              alt="Veterinary success stories and case studies"
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
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Veterinary Practice{" "}
                <span className="text-cyan-300">Success Stories</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Discover how veterinary practices across the country are
                transforming their operations and improving pet care with
                VetVault.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  View All Stories
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video Stories
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

        {/* Featured Case Studies with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Real results from veterinary practices using VetVault for
                comprehensive pet management
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="group relative overflow-visible hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border-0 bg-white"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Featured badge */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-3 py-2 text-xs font-bold shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>

                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        width={600}
                        height={400}
                        className={`w-full h-48 object-cover transition-all duration-700 ${
                          hoveredCard === index
                            ? "scale-110 rotate-1"
                            : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`bg-gradient-to-r ${study.color} text-white border-0`}
                        >
                          {study.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          {study.readTime}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {study.excerpt}
                      </p>

                      <div className="space-y-2 mb-4 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{study.practice}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{study.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{study.size}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {study.results
                          .slice(0, 2)
                          .map((result, resultIndex) => (
                            <div
                              key={resultIndex}
                              className="flex items-center text-sm text-slate-700"
                              style={{
                                animation: `fadeInLeft 0.6s ease-out ${
                                  resultIndex * 100
                                }ms both`,
                              }}
                            >
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="font-medium">{result}</span>
                            </div>
                          ))}
                      </div>

                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${study.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      {/* Progress bar animation */}
                      <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${
                            study.color
                          } rounded-full transform origin-left transition-all duration-1000 ${
                            hoveredCard === index ? "scale-x-100" : "scale-x-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Browse by{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Practice Type
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Find case studies relevant to your practice type and size
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 cursor-pointer bg-white border-0"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                    <Badge
                      className={`bg-gradient-to-r ${category.color} text-white border-0`}
                    >
                      {category.count} case studies
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                All{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive case studies from veterinary practices of all
                sizes and specialties
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 bg-white border-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          width={400}
                          height={300}
                          className="w-24 h-24 object-cover rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                        />
                        <div className="absolute -bottom-2 -right-2">
                          <Badge
                            className={`bg-gradient-to-r ${study.color} text-white border-0 text-xs px-2 py-1`}
                          >
                            New
                          </Badge>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer">
                            {study.category}
                          </Badge>
                          <span className="text-xs text-slate-500">•</span>
                          <span className="text-xs text-slate-500">
                            {study.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                          {study.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {study.excerpt}
                        </p>

                        <div className="space-y-2 mb-4 text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            <span>{study.practice}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{study.location}</span>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          {study.results
                            .slice(0, 2)
                            .map((result, resultIndex) => (
                              <div
                                key={resultIndex}
                                className="flex items-center text-sm text-slate-700"
                              >
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                                <span className="font-medium">{result}</span>
                              </div>
                            ))}
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transform hover:scale-105 transition-all duration-300 bg-transparent"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Overview with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Proven Results Across{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  All Practice Types
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                See the measurable improvements that veterinary practices
                achieve with VetVault
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resultMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="group text-center p-8 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      {metric.icon}
                    </div>
                    <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-slate-700 mb-2">
                      {metric.label}
                    </div>
                    <div className="text-sm text-slate-500">
                      {metric.description}
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
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What Our Success Stories{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600">
                Hear directly from veterinary practices that have transformed
                with VetVault
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
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-2 text-xs font-bold shadow-lg transform group-hover:scale-110 transition-all duration-300">
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
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
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
                        <div className="text-slate-600">
                          {testimonial.practice}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-lg text-slate-700 italic leading-relaxed group-hover:text-slate-900 transition-colors duration-300 relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-purple-200 font-serif">
                        "
                      </div>
                      {testimonial.quote}
                      <div className="absolute -bottom-4 -right-2 text-4xl text-purple-200 font-serif">
                        "
                      </div>
                    </blockquote>

                    {/* Animated underline */}
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transform origin-left transition-all duration-1000 group-hover:scale-x-100 scale-x-0"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-purple-100 mb-8 leading-relaxed">
              Join thousands of veterinary practices that have transformed their
              operations with VetVault.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>

            <p className="text-purple-200">
              Join <span className="font-bold text-white">10,000+</span>{" "}
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
