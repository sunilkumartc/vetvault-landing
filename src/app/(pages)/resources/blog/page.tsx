import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const featuredPosts = [
  {
    title: "10 Ways AI is Transforming Veterinary Practice Management",
    excerpt: "Discover how artificial intelligence is revolutionizing pet care and practice operations in modern veterinary clinics.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "🤖",
    views: 15420,
    likes: 892,
    comments: 45,
  },
  {
    title: "The Complete Guide to Digital Pet Health Records",
    excerpt: "Learn how to implement and optimize digital health records for better patient care and practice efficiency.",
    author: "Dr. Michael Chen",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Best Practices",
    image: "📋",
    views: 12850,
    likes: 756,
    comments: 32,
  },
  {
    title: "Emergency Protocols: Streamlining Critical Care with Technology",
    excerpt: "How modern veterinary practices are using technology to improve emergency response and patient outcomes.",
    author: "Dr. Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Emergency Care",
    image: "🚨",
    views: 11230,
    likes: 634,
    comments: 28,
  },
];

const recentPosts = [
  {
    title: "Building Stronger Client Relationships Through Digital Communication",
    excerpt: "Strategies for enhancing pet owner engagement and satisfaction through modern communication tools.",
    author: "Dr. Lisa Thompson",
    date: "March 8, 2024",
    readTime: "6 min read",
    category: "Client Care",
    image: "💬",
    views: 9870,
    likes: 445,
    comments: 23,
  },
  {
    title: "Inventory Management: Optimizing Your Veterinary Practice Supply Chain",
    excerpt: "Best practices for managing medications, supplies, and equipment with automated systems.",
    author: "Dr. Robert Kim",
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "Operations",
    image: "📦",
    views: 8650,
    likes: 398,
    comments: 19,
  },
  {
    title: "Mobile Veterinary Care: Technology Solutions for House Calls",
    excerpt: "How mobile veterinarians are leveraging technology to provide better care in the field.",
    author: "Dr. Amanda Foster",
    date: "March 3, 2024",
    readTime: "7 min read",
    category: "Mobile Care",
    image: "🚐",
    views: 7430,
    likes: 321,
    comments: 15,
  },
  {
    title: "Financial Management: Maximizing Revenue with Smart Billing Systems",
    excerpt: "Tips for optimizing your practice's financial performance through automated billing and payment processing.",
    author: "Dr. David Wilson",
    date: "March 1, 2024",
    readTime: "11 min read",
    category: "Business",
    image: "💰",
    views: 6780,
    likes: 287,
    comments: 12,
  },
  {
    title: "Staff Training: Implementing Effective Learning Programs in Veterinary Practices",
    excerpt: "How to create comprehensive training programs that improve staff performance and patient care.",
    author: "Dr. Jennifer Martinez",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Staff Development",
    image: "👥",
    views: 5920,
    likes: 234,
    comments: 8,
  },
  {
    title: "Data Security in Veterinary Practice: Protecting Patient Information",
    excerpt: "Essential cybersecurity measures for safeguarding sensitive pet and client data in digital systems.",
    author: "Dr. Carlos Mendez",
    date: "February 25, 2024",
    readTime: "10 min read",
    category: "Security",
    image: "🔒",
    views: 5340,
    likes: 198,
    comments: 6,
  },
];

const categories = [
  { name: "Technology", count: 25, color: "bg-blue-100 text-blue-800" },
  { name: "Best Practices", count: 18, color: "bg-green-100 text-green-800" },
  { name: "Emergency Care", count: 12, color: "bg-red-100 text-red-800" },
  { name: "Client Care", count: 15, color: "bg-purple-100 text-purple-800" },
  { name: "Operations", count: 20, color: "bg-orange-100 text-orange-800" },
  { name: "Mobile Care", count: 8, color: "bg-teal-100 text-teal-800" },
  { name: "Business", count: 14, color: "bg-indigo-100 text-indigo-800" },
  { name: "Staff Development", count: 10, color: "bg-pink-100 text-pink-800" },
];

const popularTags = [
  "AI Assistant", "Pet Health Records", "Appointment Scheduling", "Billing", 
  "Inventory Management", "Client Communication", "Emergency Protocols", 
  "Mobile Apps", "Practice Management", "Staff Training", "Data Security", 
  "Telemedicine", "Payment Processing", "Reporting", "Integrations"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Veterinary Insights & News
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                VetVault Blog
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights, best practices, and innovations 
                in veterinary practice management and pet care technology.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our most popular and insightful articles on veterinary practice management
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{post.image}</div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={post.category === "Technology" ? "bg-blue-100 text-blue-800" : 
                                         post.category === "Best Practices" ? "bg-green-100 text-green-800" : 
                                         "bg-red-100 text-red-800"}>
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-4">
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
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </span>
                        </div>
                        <Button size="sm" variant="outline">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories & Recent Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Recent Posts */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  Recent Articles
                </h2>
                <div className="space-y-8">
                  {recentPosts.map((post, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-6">
                          <div className="text-4xl flex-shrink-0">{post.image}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-slate-100 text-slate-800">
                                {post.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                              {post.title}
                            </h3>
                            <p className="text-slate-600 mb-4">
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
                                  <Clock className="w-4 h-4" />
                                  {post.readTime}
                                </span>
                              </div>
                              <Button size="sm" variant="outline">
                                Read More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <span className="text-slate-700">{category.name}</span>
                        <Badge className="bg-slate-100 text-slate-600">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-slate-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Get the latest veterinary insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Subscribe to our newsletter for the latest veterinary practice management insights, tips, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Join 15,000+ veterinary professionals already subscribed
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start implementing these insights with VetVault's comprehensive pet management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Join 10,000+ veterinary practices already using VetVault
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 