"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  TrendingUp,
  Star,
  Play,
  Zap,
} from "lucide-react";

const featuredPosts = [
  {
    title: "10 Ways AI is Transforming Veterinary Practice Management",
    excerpt:
      "Discover how artificial intelligence is revolutionizing pet care and practice operations in modern veterinary clinics.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    views: 15420,
    likes: 892,
    comments: 45,
    color: "from-blue-500 to-indigo-600",
    featured: true,
  },
  {
    title: "The Complete Guide to Digital Pet Health Records",
    excerpt:
      "Learn how to implement and optimize digital health records for better patient care and practice efficiency.",
    author: "Dr. Michael Chen",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Best Practices",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop&crop=center",
    views: 12850,
    likes: 756,
    comments: 32,
    color: "from-green-500 to-emerald-600",
    featured: true,
  },
  {
    title: "Emergency Protocols: Streamlining Critical Care with Technology",
    excerpt:
      "How modern veterinary practices are using technology to improve emergency response and patient outcomes.",
    author: "Dr. Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Emergency Care",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    views: 11230,
    likes: 634,
    comments: 28,
    color: "from-red-500 to-pink-600",
    featured: true,
  },
];

const recentPosts = [
  {
    title:
      "Building Stronger Client Relationships Through Digital Communication",
    excerpt:
      "Strategies for enhancing pet owner engagement and satisfaction through modern communication tools.",
    author: "Dr. Lisa Thompson",
    date: "March 8, 2024",
    readTime: "6 min read",
    category: "Client Care",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop&crop=center",
    views: 9870,
    likes: 445,
    comments: 23,
    color: "from-purple-500 to-violet-600",
  },
  {
    title:
      "Inventory Management: Optimizing Your Veterinary Practice Supply Chain",
    excerpt:
      "Best practices for managing medications, supplies, and equipment with automated systems.",
    author: "Dr. Robert Kim",
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&crop=center",
    views: 8650,
    likes: 398,
    comments: 19,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Mobile Veterinary Care: Technology Solutions for House Calls",
    excerpt:
      "How mobile veterinarians are leveraging technology to provide better care in the field.",
    author: "Dr. Amanda Foster",
    date: "March 3, 2024",
    readTime: "7 min read",
    category: "Mobile Care",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&h=300&fit=crop&crop=center",
    views: 7430,
    likes: 321,
    comments: 15,
    color: "from-teal-500 to-green-600",
  },
  {
    title:
      "Financial Management: Maximizing Revenue with Smart Billing Systems",
    excerpt:
      "Tips for optimizing your practice's financial performance through automated billing and payment processing.",
    author: "Dr. David Wilson",
    date: "March 1, 2024",
    readTime: "11 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    views: 6780,
    likes: 287,
    comments: 12,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title:
      "Staff Training: Implementing Effective Learning Programs in Veterinary Practices",
    excerpt:
      "How to create comprehensive training programs that improve staff performance and patient care.",
    author: "Dr. Jennifer Martinez",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Staff Development",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
    views: 5920,
    likes: 234,
    comments: 8,
    color: "from-pink-500 to-rose-600",
  },
  {
    title:
      "Data Security in Veterinary Practice: Protecting Patient Information",
    excerpt:
      "Essential cybersecurity measures for safeguarding sensitive pet and client data in digital systems.",
    author: "Dr. Carlos Mendez",
    date: "February 25, 2024",
    readTime: "10 min read",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
    views: 5340,
    likes: 198,
    comments: 6,
    color: "from-gray-500 to-slate-600",
  },
];

const categories = [
  { name: "Technology", count: 25, color: "from-blue-500 to-indigo-600" },
  { name: "Best Practices", count: 18, color: "from-green-500 to-emerald-600" },
  { name: "Emergency Care", count: 12, color: "from-red-500 to-pink-600" },
  { name: "Client Care", count: 15, color: "from-purple-500 to-violet-600" },
  { name: "Operations", count: 20, color: "from-orange-500 to-red-600" },
  { name: "Mobile Care", count: 8, color: "from-teal-500 to-green-600" },
  { name: "Business", count: 14, color: "from-indigo-500 to-purple-600" },
  { name: "Staff Development", count: 10, color: "from-pink-500 to-rose-600" },
];

const popularTags = [
  "AI Assistant",
  "Pet Health Records",
  "Appointment Scheduling",
  "Billing",
  "Inventory Management",
  "Client Communication",
  "Emergency Protocols",
  "Mobile Apps",
  "Practice Management",
  "Staff Training",
  "Data Security",
  "Telemedicine",
  "Payment Processing",
  "Reporting",
  "Integrations",
];

const stats = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    number: "150+",
    label: "Articles Published",
    description: "Expert insights",
  },
  {
    icon: <User className="w-8 h-8" />,
    number: "25+",
    label: "Expert Authors",
    description: "Veterinary professionals",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    number: "500K+",
    label: "Monthly Readers",
    description: "Growing community",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "4.9/5",
    label: "Reader Rating",
    description: "Quality content",
  },
];

export default function BlogPage() {
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
              src="https://i.ibb.co/bjTFj3Sc/brown-border-collie-dog-visit-vet-high-quality-photo-470178-21410.jpg"
              alt="Veterinary blog and insights"
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
                <BookOpen className="w-4 h-4 mr-2" />
                Veterinary Insights & News
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                VetVault <span className="text-cyan-300">Blog</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest insights, best practices, and
                innovations in veterinary practice management and pet care
                technology.
              </p>

              <div className="max-w-2xl mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
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

        {/* Featured Posts with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Our most popular and insightful articles on veterinary practice
                management
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
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
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={300}
                        className={`w-full h-48 object-cover transition-all duration-700 ${
                          hoveredCard === index
                            ? "scale-110 rotate-1"
                            : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`bg-gradient-to-r ${post.color} text-white border-0`}
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Eye className="w-4 h-4" />
                          <span>{(post.views / 1000).toFixed(1)}K</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </span>
                          <span className="flex items-center gap-1 hover:text-green-500 transition-colors cursor-pointer">
                            <Share2 className="w-4 h-4" />
                          </span>
                        </div>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${post.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300`}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>

                      {/* Progress bar animation */}
                      <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${
                            post.color
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

        {/* Categories & Recent Posts with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Recent Posts */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                  Recent Articles
                </h2>
                <div className="space-y-8">
                  {recentPosts.map((post, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 bg-white border-0"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-6">
                          <div className="relative flex-shrink-0">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              width={400}
                              height={300}
                              className="w-24 h-24 object-cover rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                            />
                            <div className="absolute -bottom-2 -right-2">
                              <Badge
                                className={`bg-gradient-to-r ${post.color} text-white border-0 text-xs px-2 py-1`}
                              >
                                New
                              </Badge>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer">
                                {post.category}
                              </Badge>
                              <span className="text-xs text-slate-500">•</span>
                              <span className="text-xs text-slate-500">
                                {post.readTime}
                              </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                              {post.title}
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  {(post.views / 1000).toFixed(1)}K
                                </span>
                              </div>
                              <Button
                                size="sm"
                                variant="outline"
                                className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 bg-transparent"
                              >
                                Read More
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Enhanced Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Categories */}
                <Card className="p-6 bg-gradient-to-br from-slate-50 to-white border-0 shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                      <Tag className="w-5 h-5 mr-2 text-blue-600" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="group flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105"
                        >
                          <span className="text-slate-700 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </span>
                          <Badge
                            className={`bg-gradient-to-r ${category.color} text-white border-0`}
                          >
                            {category.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                      <p className="text-sm text-blue-100 mb-4">
                        Get the latest veterinary insights delivered to your
                        inbox.
                      </p>
                      <div className="space-y-3">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <Button className="w-full bg-white text-blue-600 hover:bg-slate-100 transform hover:scale-105 transition-all duration-300">
                          <Zap className="w-4 h-4 mr-2" />
                          Subscribe
                        </Button>
                      </div>
                      <p className="text-xs text-blue-200 mt-3">
                        Join 15,000+ subscribers
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA with Enhanced Design */}
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Never Miss an{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Update
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest veterinary practice
              management insights, tips, and industry news.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              Join <span className="font-bold text-blue-600">15,000+</span>{" "}
              veterinary professionals already subscribed
            </p>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Practice?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Start implementing these insights with VetVault's comprehensive
              pet management platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>

            <p className="text-blue-200">
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
