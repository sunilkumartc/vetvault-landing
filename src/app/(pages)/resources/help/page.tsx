"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  HelpCircle,
  CheckCircle,
  ArrowRight,
  Search,
  BookOpen,
  Video,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  Star,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of VetVault pet management",
    articles: 15,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Pet Health Records",
    description: "Manage patient records and medical documentation",
    articles: 25,
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=300&h=200&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Appointments & Scheduling",
    description: "Schedule appointments and manage your calendar",
    articles: 18,
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Billing & Payments",
    description: "Handle invoicing and payment processing",
    articles: 20,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "AI Assistant (Pet Vault AI)",
    description: "Master the AI-powered veterinary assistant",
    articles: 12,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&crop=center",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Integrations",
    description: "Connect with third-party services and tools",
    articles: 16,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Mobile App",
    description: "Use VetVault on mobile devices",
    articles: 14,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300&h=200&fit=crop&crop=center",
    color: "from-teal-500 to-green-600",
  },
  {
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    articles: 22,
    image:
      "https://i.ibb.co/R4vSjg85/close-up-veterinarian-taking-care-dog-1.jpg",
    color: "from-red-500 to-pink-600",
  },
];

const popularArticles = [
  {
    title: "How to Create Your First Pet Health Record",
    category: "Pet Health Records",
    views: 15420,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=250&fit=crop&crop=center",
  },
  {
    title: "Setting Up Online Appointment Booking",
    category: "Appointments & Scheduling",
    views: 12850,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop&crop=center",
  },
  {
    title: "Getting Started with Pet Vault AI Assistant",
    category: "AI Assistant (Pet Vault AI)",
    views: 11230,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
  },
  {
    title: "Configuring Payment Processing",
    category: "Billing & Payments",
    views: 9870,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center",
  },
  {
    title: "Mobile App Setup Guide",
    category: "Mobile App",
    views: 8650,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&h=250&fit=crop&crop=center",
  },
  {
    title: "Integrating with IDEXX Laboratories",
    category: "Integrations",
    views: 7430,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop&crop=center",
  },
];

const supportOptions = [
  {
    title: "Knowledge Base",
    description: "Search our comprehensive documentation",
    icon: <Search className="w-6 h-6" />,
    action: "Search Articles",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: <Video className="w-6 h-6" />,
    action: "Watch Videos",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: <MessageCircle className="w-6 h-6" />,
    action: "Start Chat",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&h=200&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Phone Support",
    description: "Speak directly with our experts",
    icon: <Phone className="w-6 h-6" />,
    action: "Call Now",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop&crop=center",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    icon: <Mail className="w-6 h-6" />,
    action: "Send Email",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop&crop=center",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Community Forum",
    description: "Connect with other veterinarians",
    icon: <Users className="w-6 h-6" />,
    action: "Join Forum",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
    color: "from-cyan-500 to-blue-600",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    practice: "Paws & Claws Veterinary",
    location: "Portland, OR",
    quote:
      "The help center is incredibly comprehensive. I found solutions to all my questions quickly and easily.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Chen",
    practice: "Companion Animal Hospital",
    location: "Austin, TX",
    quote:
      "The video tutorials are excellent. They made setting up our practice management system a breeze.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

const stats = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    number: "500+",
    label: "Help Articles",
    description: "Comprehensive guides",
  },
  {
    icon: <Video className="w-8 h-8" />,
    number: "50+",
    label: "Video Tutorials",
    description: "Step-by-step videos",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "24/7",
    label: "Support Available",
    description: "Always here to help",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Happy customers",
  },
];

export default function HelpCenterPage() {
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
              src="https://i.ibb.co/xS4kYMGb/front-view-female-veterinarian-observing-little-dog-yellow-wall.jpg"
              alt="Help and support documentation"
              fill
              className="object-cover"
              priority
            />
            {/* Minimal overlay for text readability only */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                Support & Documentation
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                How Can We <span className="text-cyan-300">Help You?</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Find answers to your questions about VetVault pet management,
                get support, and learn how to maximize your veterinary practice
                efficiency.
              </p>

              <div className="max-w-2xl mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, tutorials, or guides..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
                  />
                </div>
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

        {/* Support Options with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Get the{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Help You Need
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Multiple ways to get support and find answers to your questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white border-0"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={option.image || "/placeholder.svg"}
                        alt={option.title}
                        width={300}
                        height={200}
                        className={`w-full h-48 object-cover transition-all duration-700 ${
                          hoveredCard === index
                            ? "scale-110 rotate-1"
                            : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                        >
                          {option.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {option.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${option.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300`}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        {option.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Browse{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Help Categories
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Find comprehensive guides and tutorials organized by topic
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 cursor-pointer bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {category.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-200 text-sm">
                            {category.articles} articles
                          </span>
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Popular{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Help Articles
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Most viewed articles and guides from our community
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-500 text-white border-0">
                          {article.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>{article.views.toLocaleString()} views</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{article.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Still Need{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Help?
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 mb-12 leading-relaxed">
                Our support team is here to help you succeed with VetVault
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Clock,
                    title: "Response Time",
                    description: "Average response time: 2 hours",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Veterinary professionals and tech experts",
                    color: "from-red-500 to-pink-500",
                  },
                  {
                    icon: CheckCircle,
                    title: "Guaranteed Help",
                    description: "We'll solve your issue or escalate it",
                    color: "from-pink-500 to-orange-500",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 rounded-xl hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What Our Users Say About{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Support
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600">
                See how our help center and support team assist veterinary
                practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white border-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300"
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
                    <blockquote className="text-lg text-slate-700 italic leading-relaxed group-hover:text-slate-900 transition-colors relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-orange-200 font-serif">
                        "
                      </div>
                      {testimonial.quote}
                      <div className="absolute -bottom-4 -right-2 text-4xl text-orange-200 font-serif">
                        "
                      </div>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-600 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started with{" "}
              <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
                VetVault?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-orange-100 mb-8 leading-relaxed">
              Our support team is here to help you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
                <Users className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </div>

            <p className="text-orange-200">
              Join <span className="font-bold text-white">10,000+</span>{" "}
              veterinary practices already using VetVault
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
