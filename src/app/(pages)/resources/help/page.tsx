import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  FileText,
  Star,
} from "lucide-react";

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of VetVault pet management",
    articles: 15,
    icon: "🚀",
  },
  {
    title: "Pet Health Records",
    description: "Manage patient records and medical documentation",
    articles: 25,
    icon: "📋",
  },
  {
    title: "Appointments & Scheduling",
    description: "Schedule appointments and manage your calendar",
    articles: 18,
    icon: "📅",
  },
  {
    title: "Billing & Payments",
    description: "Handle invoicing and payment processing",
    articles: 20,
    icon: "💳",
  },
  {
    title: "AI Assistant (Tails)",
    description: "Master the AI-powered veterinary assistant",
    articles: 12,
    icon: "🤖",
  },
  {
    title: "Integrations",
    description: "Connect with third-party services and tools",
    articles: 16,
    icon: "🔗",
  },
  {
    title: "Mobile App",
    description: "Use VetVault on mobile devices",
    articles: 14,
    icon: "📱",
  },
  {
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    articles: 22,
    icon: "🔧",
  },
];

const popularArticles = [
  {
    title: "How to Create Your First Pet Health Record",
    category: "Pet Health Records",
    views: 15420,
    rating: 4.9,
  },
  {
    title: "Setting Up Online Appointment Booking",
    category: "Appointments & Scheduling",
    views: 12850,
    rating: 4.8,
  },
  {
    title: "Getting Started with Pet Vault AI Assistant",
    category: "AI Assistant (Pet Vault)",
    views: 11230,
    rating: 4.7,
  },
  {
    title: "Configuring Payment Processing",
    category: "Billing & Payments",
    views: 9870,
    rating: 4.6,
  },
  {
    title: "Mobile App Setup Guide",
    category: "Mobile App",
    views: 8650,
    rating: 4.8,
  },
  {
    title: "Integrating with IDEXX Laboratories",
    category: "Integrations",
    views: 7430,
    rating: 4.5,
  },
];

const supportOptions = [
  {
    title: "Knowledge Base",
    description: "Search our comprehensive documentation",
    icon: <Search className="w-6 h-6" />,
    action: "Search Articles",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: <Video className="w-6 h-6" />,
    action: "Watch Videos",
  },
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: <MessageCircle className="w-6 h-6" />,
    action: "Start Chat",
  },
  {
    title: "Phone Support",
    description: "Speak directly with our experts",
    icon: <Phone className="w-6 h-6" />,
    action: "Call Now",
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    icon: <Mail className="w-6 h-6" />,
    action: "Send Email",
  },
  {
    title: "Community Forum",
    description: "Connect with other veterinarians",
    icon: <Users className="w-6 h-6" />,
    action: "Join Forum",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    practice: "Paws & Claws Veterinary",
    location: "Portland, OR",
    quote: "The help center is incredibly comprehensive. I found solutions to all my questions quickly and easily.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    practice: "Companion Animal Hospital",
    location: "Austin, TX",
    quote: "The video tutorials are excellent. They made setting up our practice management system a breeze.",
    rating: 5,
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Support & Documentation
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                How Can We Help You?
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Find answers to your questions about VetVault pet management, 
                get support, and learn how to maximize your veterinary practice efficiency.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, tutorials, or guides..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Get the Help You Need
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Multiple ways to get support and find answers to your questions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-4">
                        {option.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {option.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {option.description}
                      </p>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        {option.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Browse Help Categories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Find comprehensive guides and tutorials organized by topic
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{category.articles} articles</span>
                        <ArrowRight className="w-4 h-4 text-orange-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Popular Help Articles
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Most viewed articles and guides from our community
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">
                          {article.category}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span>{article.views.toLocaleString()} views</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{article.rating}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-orange-600 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-slate-600">Help Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-slate-600">Video Tutorials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-slate-600">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-slate-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Our support team is here to help you succeed with VetVault
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Response Time
                  </h3>
                  <p className="text-slate-600">
                    Average response time: 2 hours
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Expert Team
                  </h3>
                  <p className="text-slate-600">
                    Veterinary professionals and tech experts
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Guaranteed Help
                  </h3>
                  <p className="text-slate-600">
                    We'll solve your issue or escalate it
                  </p>
                </div>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Our Users Say About Support
              </h2>
              <p className="text-xl text-slate-600">
                See how our help center and support team assist veterinary practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-slate-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-600">
                        {testimonial.practice}
                      </div>
                      <div className="text-sm text-slate-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Get Started with VetVault?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Our support team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
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