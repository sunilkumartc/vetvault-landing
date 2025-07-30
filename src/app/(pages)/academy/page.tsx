import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  Clock,
  Award,
  Star,
  FileText,
  Video,
  Headphones,
} from "lucide-react";

const courses = [
  {
    title: "Getting Started with VetVault",
    description: "Master the basics of pet management and practice operations",
    duration: "2 hours",
    level: "Beginner",
    lessons: 12,
    rating: 4.8,
    students: 2500,
    image: "🎓",
  },
  {
    title: "Advanced Pet Health Records",
    description: "Learn to create comprehensive digital health records for optimal patient care",
    duration: "3 hours",
    level: "Intermediate",
    lessons: 18,
    rating: 4.9,
    students: 1800,
    image: "📋",
  },
  {
    title: "AI Assistant Mastery",
    description: "Unlock the full potential of Pet Vault AI for veterinary practice",
    duration: "4 hours",
    level: "Advanced",
    lessons: 24,
    rating: 4.7,
    students: 1200,
    image: "🤖",
  },
  {
    title: "Client Communication Excellence",
    description: "Build stronger relationships with pet owners through effective communication",
    duration: "2.5 hours",
    level: "Intermediate",
    lessons: 15,
    rating: 4.6,
    students: 2100,
    image: "💬",
  },
  {
    title: "Practice Management Optimization",
    description: "Streamline operations and maximize practice efficiency",
    duration: "3.5 hours",
    level: "Advanced",
    lessons: 20,
    rating: 4.8,
    students: 1600,
    image: "⚙️",
  },
  {
    title: "Emergency Protocols & Triage",
    description: "Master emergency response and critical care management",
    duration: "4 hours",
    level: "Advanced",
    lessons: 22,
    rating: 4.9,
    students: 900,
    image: "🚨",
  },
];

const categories = [
  {
    title: "Practice Management",
    description: "Learn to optimize your veterinary practice operations",
    courses: 8,
    image: "🏥",
  },
  {
    title: "Pet Health Records",
    description: "Master digital health record management and documentation",
    courses: 6,
    image: "📊",
  },
  {
    title: "Client Communication",
    description: "Build stronger relationships with pet owners",
    courses: 5,
    image: "💬",
  },
  {
    title: "AI & Technology",
    description: "Leverage AI and technology for better veterinary care",
    courses: 7,
    image: "🤖",
  },
  {
    title: "Emergency Care",
    description: "Master emergency protocols and critical care",
    courses: 4,
    image: "🚨",
  },
  {
    title: "Business Growth",
    description: "Strategies for growing your veterinary practice",
    courses: 6,
    image: "📈",
  },
];

const benefits = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Expert-Led Training",
    description: "Learn from veterinary professionals and industry experts",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Learning",
    description: "Learn at your own pace with on-demand video courses",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification",
    description: "Earn certificates to showcase your expertise",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    description: "Connect with other veterinary professionals",
  },
];

const testimonials = [
  {
    name: "Dr. Emily Chen",
    practice: "Pawsome Veterinary Clinic",
    location: "San Francisco, CA",
    quote: "The VetVault Academy transformed how I use the platform. The courses are comprehensive and practical.",
    rating: 5,
    course: "Advanced Pet Health Records",
  },
  {
    name: "Dr. Robert Johnson",
    practice: "Companion Animal Hospital",
    location: "Austin, TX",
    quote: "The AI Assistant Mastery course helped me save hours every week. Highly recommended!",
    rating: 5,
    course: "AI Assistant Mastery",
  },
];

const learningFormats = [
  {
    title: "Video Courses",
    description: "High-quality video lessons with expert instructors",
    icon: <Video className="w-6 h-6" />,
    features: [
      "HD video quality",
      "Expert instructors",
      "Downloadable resources",
      "Mobile-friendly",
    ],
  },
  {
    title: "Interactive Workshops",
    description: "Live sessions with hands-on practice and Q&A",
    icon: <Users className="w-6 h-6" />,
    features: [
      "Live instructor-led",
      "Real-time Q&A",
      "Hands-on practice",
      "Peer collaboration",
    ],
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and reference materials",
    icon: <FileText className="w-6 h-6" />,
    features: [
      "Step-by-step guides",
      "Best practices",
      "Troubleshooting tips",
      "Reference materials",
    ],
  },
  {
    title: "Webinars",
    description: "Regular webinars on new features and industry trends",
    icon: <Headphones className="w-6 h-6" />,
    features: [
      "Monthly webinars",
      "Industry experts",
      "Latest updates",
      "Interactive sessions",
    ],
  },
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Veterinary Education Platform
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                VetVault Academy
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Master veterinary practice management with expert-led courses, 
                interactive workshops, and comprehensive training resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                  Start Learning Free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse Courses
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Choose VetVault Academy?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive veterinary education designed for modern practice management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Featured Courses
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Master veterinary practice management with our most popular courses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{course.image}</div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-blue-100 text-blue-800">
                          {course.level}
                        </Badge>
                        <Badge variant="outline">
                          {course.duration}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-slate-600">{course.rating}</span>
                        </div>
                        <span className="text-sm text-slate-500">{course.students} students</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{course.lessons} lessons</span>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Course Categories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore comprehensive training across all aspects of veterinary practice management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{category.image}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{category.courses} courses</span>
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Formats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Multiple Learning Formats
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the learning style that works best for you and your team
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {learningFormats.map((format, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                        {format.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {format.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {format.description}
                        </p>
                        <ul className="space-y-2">
                          {format.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-slate-600">
                See how VetVault Academy is transforming veterinary practices
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
                      <div className="text-sm text-blue-600 mt-2">
                        Completed: {testimonial.course}
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
              Ready to Master Veterinary Practice Management?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start your learning journey with VetVault Academy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Learning Free
              </Button>
              <Button size="lg" variant="outline">
                Browse All Courses
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Join 15,000+ veterinary professionals already learning with VetVault Academy
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 