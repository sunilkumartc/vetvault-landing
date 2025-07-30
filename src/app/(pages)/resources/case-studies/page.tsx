import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Zap,
} from "lucide-react";

const featuredCaseStudies = [
  {
    title: "Pawsome Veterinary Group: 40% Efficiency Increase with VetVault",
    excerpt: "How a multi-location veterinary group transformed their operations and improved patient care with comprehensive pet management.",
    practice: "Pawsome Veterinary Group",
    location: "California",
    size: "5 locations, 25 veterinarians",
    results: [
      "40% increase in operational efficiency",
      "25% reduction in administrative time",
      "30% improvement in client satisfaction",
      "50% faster appointment scheduling",
    ],
    image: "🏥",
    category: "Multi-Location",
    readTime: "8 min read",
  },
  {
    title: "Mobile Vet Care: Revolutionizing House Call Services",
    excerpt: "A mobile veterinary practice increased their patient capacity by 60% while improving care quality with VetVault's mobile solutions.",
    practice: "Mobile Vet Care Services",
    location: "Colorado",
    size: "3 mobile veterinarians",
    results: [
      "60% increase in patient capacity",
      "45% reduction in travel time",
      "90% improvement in record accuracy",
      "35% increase in revenue",
    ],
    image: "🚐",
    category: "Mobile Care",
    readTime: "10 min read",
  },
  {
    title: "Emergency Animal Hospital: Streamlining Critical Care",
    excerpt: "How an emergency veterinary hospital improved response times and patient outcomes with VetVault's emergency protocols.",
    practice: "Emergency Animal Hospital",
    location: "Texas",
    size: "24/7 emergency facility",
    results: [
      "50% faster emergency response",
      "40% improvement in patient outcomes",
      "25% reduction in wait times",
      "60% better staff coordination",
    ],
    image: "🚨",
    category: "Emergency Care",
    readTime: "12 min read",
  },
];

const caseStudies = [
  {
    title: "Small Practice Success: From Paper to Digital Transformation",
    excerpt: "A single-location practice modernized their operations and doubled their patient capacity with VetVault.",
    practice: "Companion Animal Clinic",
    location: "Oregon",
    size: "2 veterinarians",
    results: [
      "100% increase in patient capacity",
      "70% reduction in paperwork",
      "45% improvement in client retention",
      "80% faster billing process",
    ],
    image: "🐾",
    category: "Small Practice",
    readTime: "6 min read",
  },
  {
    title: "Specialty Hospital: Advanced Care with AI-Powered Insights",
    excerpt: "A specialty veterinary hospital leveraged VetVault's AI assistant to improve diagnostic accuracy and treatment planning.",
    practice: "Advanced Veterinary Specialists",
    location: "Florida",
    size: "8 specialists",
    results: [
      "30% improvement in diagnostic accuracy",
      "25% faster treatment planning",
      "40% reduction in medical errors",
      "50% better client communication",
    ],
    image: "🔬",
    category: "Specialty Care",
    readTime: "9 min read",
  },
  {
    title: "Rural Veterinary Clinic: Connecting Remote Communities",
    excerpt: "A rural veterinary clinic improved access to care and expanded their services with VetVault's telemedicine features.",
    practice: "Rural Animal Care",
    location: "Montana",
    size: "3 veterinarians",
    results: [
      "200% increase in service area",
      "60% improvement in patient access",
      "40% reduction in travel costs",
      "80% better follow-up care",
    ],
    image: "🌾",
    category: "Rural Practice",
    readTime: "7 min read",
  },
  {
    title: "Corporate Veterinary Chain: Scaling Operations Nationwide",
    excerpt: "A national veterinary chain standardized operations and improved consistency across 50+ locations with VetVault.",
    practice: "National Pet Care Centers",
    location: "Nationwide",
    size: "50+ locations",
    results: [
      "Standardized operations across all locations",
      "35% improvement in operational efficiency",
      "25% reduction in training time",
      "40% better resource allocation",
    ],
    image: "🏢",
    category: "Corporate Chain",
    readTime: "11 min read",
  },
  {
    title: "Exotic Animal Practice: Specialized Care Management",
    excerpt: "An exotic animal practice improved their specialized care protocols and client education with VetVault's custom features.",
    practice: "Exotic Animal Hospital",
    location: "Arizona",
    size: "4 veterinarians",
    results: [
      "50% improvement in specialized care protocols",
      "60% better client education",
      "40% reduction in treatment errors",
      "70% improvement in follow-up compliance",
    ],
    image: "🦎",
    category: "Exotic Care",
    readTime: "8 min read",
  },
  {
    title: "Shelter Medicine: Managing High-Volume Care",
    excerpt: "An animal shelter improved their high-volume care management and adoption processes with VetVault.",
    practice: "Hope Animal Shelter",
    location: "Michigan",
    size: "High-volume shelter",
    results: [
      "300% increase in adoption efficiency",
      "50% improvement in medical record accuracy",
      "40% reduction in administrative overhead",
      "60% better volunteer coordination",
    ],
    image: "🏠",
    category: "Shelter Medicine",
    readTime: "9 min read",
  },
];

const categories = [
  { name: "Multi-Location", count: 8, color: "bg-blue-100 text-blue-800" },
  { name: "Small Practice", count: 12, color: "bg-green-100 text-green-800" },
  { name: "Emergency Care", count: 6, color: "bg-red-100 text-red-800" },
  { name: "Mobile Care", count: 5, color: "bg-purple-100 text-purple-800" },
  { name: "Specialty Care", count: 7, color: "bg-orange-100 text-orange-800" },
  { name: "Rural Practice", count: 4, color: "bg-teal-100 text-teal-800" },
  { name: "Corporate Chain", count: 3, color: "bg-indigo-100 text-indigo-800" },
  { name: "Exotic Care", count: 4, color: "bg-pink-100 text-pink-800" },
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    practice: "Pawsome Veterinary Group",
    location: "California",
    quote: "VetVault transformed our multi-location practice. We've seen incredible improvements in efficiency and patient care across all our locations.",
    rating: 5,
    improvement: "40% efficiency increase",
  },
  {
    name: "Dr. Michael Chen",
    practice: "Mobile Vet Care Services",
    location: "Colorado",
    quote: "The mobile features are game-changing. We can now serve more patients while providing better care documentation.",
    rating: 5,
    improvement: "60% patient capacity increase",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Success Stories
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Veterinary Practice Success Stories
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Discover how veterinary practices across the country are transforming 
                their operations and improving pet care with VetVault.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real results from veterinary practices using VetVault for comprehensive pet management
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{study.image}</div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-purple-100 text-purple-800">
                          {study.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
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
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{study.readTime}</span>
                        <Button size="sm" variant="outline">
                          Read Full Case Study
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Browse by Practice Type
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Find case studies relevant to your practice type and size
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {category.name}
                      </h3>
                      <Badge className="bg-slate-100 text-slate-600">
                        {category.count} case studies
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                All Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive case studies from veterinary practices of all sizes and specialties
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="text-4xl flex-shrink-0">{study.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-slate-100 text-slate-800">
                            {study.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {study.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
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
                          {study.results.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">{study.readTime}</span>
                          <Button size="sm" variant="outline">
                            Read Full Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Proven Results Across All Practice Types
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See the measurable improvements that veterinary practices achieve with VetVault
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600">Average Efficiency Increase</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">50%</div>
                <div className="text-slate-600">Time Saved on Admin Tasks</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">35%</div>
                <div className="text-slate-600">Improvement in Patient Care</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-slate-600">Revenue Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Our Success Stories Say
              </h2>
              <p className="text-xl text-slate-600">
                Hear directly from veterinary practices that have transformed with VetVault
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
                      <div className="text-sm text-purple-600 mt-2 font-semibold">
                        {testimonial.improvement}
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of veterinary practices that have transformed their operations with VetVault.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
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