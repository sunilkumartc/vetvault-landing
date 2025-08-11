"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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
  Sparkles,
  TrendingUp,
  Zap,
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
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Advanced Pet Health Records",
    description:
      "Learn to create comprehensive digital health records for optimal patient care",
    duration: "3 hours",
    level: "Intermediate",
    lessons: 18,
    rating: 4.9,
    students: 1800,
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "AI Assistant Mastery",
    description:
      "Unlock the full potential of Pet Vault AI for veterinary practice",
    duration: "4 hours",
    level: "Advanced",
    lessons: 24,
    rating: 4.7,
    students: 1200,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Client Communication Excellence",
    description:
      "Build stronger relationships with pet owners through effective communication",
    duration: "2.5 hours",
    level: "Intermediate",
    lessons: 15,
    rating: 4.6,
    students: 2100,
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop&crop=center",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Practice Management Optimization",
    description: "Streamline operations and maximize practice efficiency",
    duration: "3.5 hours",
    level: "Advanced",
    lessons: 20,
    rating: 4.8,
    students: 1600,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Emergency Protocols & Triage",
    description: "Master emergency response and critical care management",
    duration: "4 hours",
    level: "Advanced",
    lessons: 22,
    rating: 4.9,
    students: 900,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    color: "from-red-500 to-pink-600",
  },
];

const categories = [
  {
    title: "Practice Management",
    description: "Learn to optimize your veterinary practice operations",
    courses: 8,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Pet Health Records",
    description: "Master digital health record management and documentation",
    courses: 6,
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=300&h=200&fit=crop&crop=center",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Client Communication",
    description: "Build stronger relationships with pet owners",
    courses: 5,
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&h=200&fit=crop&crop=center",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "AI & Technology",
    description: "Leverage AI and technology for better veterinary care",
    courses: 7,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&crop=center",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Emergency Care",
    description: "Master emergency protocols and critical care",
    courses: 4,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Business Growth",
    description: "Strategies for growing your veterinary practice",
    courses: 6,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center",
    color: "from-orange-500 to-yellow-600",
  },
];

const benefits = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Expert-Led Training",
    description: "Learn from veterinary professionals and industry experts",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Learning",
    description: "Learn at your own pace with on-demand video courses",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification",
    description: "Earn certificates to showcase your expertise",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    description: "Connect with other veterinary professionals",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
  },
];

const testimonials = [
  {
    name: "Dr. Emily Chen",
    practice: "Pawsome Veterinary Clinic",
    location: "San Francisco, CA",
    quote:
      "The VetVault Academy transformed how I use the platform. The courses are comprehensive and practical.",
    rating: 5,
    course: "Advanced Pet Health Records",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Robert Johnson",
    practice: "Companion Animal Hospital",
    location: "Austin, TX",
    quote:
      "The AI Assistant Mastery course helped me save hours every week. Highly recommended!",
    rating: 5,
    course: "AI Assistant Mastery",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

const learningFormats = [
  {
    title: "Video Courses",
    description: "High-quality video lessons with expert instructors",
    icon: <Video className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center",
    features: [
      "HD video quality",
      "Expert instructors",
      "Downloadable resources",
      "Mobile-friendly",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Interactive Workshops",
    description: "Live sessions with hands-on practice and Q&A",
    icon: <Users className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
    features: [
      "Live instructor-led",
      "Real-time Q&A",
      "Hands-on practice",
      "Peer collaboration",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and reference materials",
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
    features: [
      "Step-by-step guides",
      "Best practices",
      "Troubleshooting tips",
      "Reference materials",
    ],
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Webinars",
    description: "Regular webinars on new features and industry trends",
    icon: <Headphones className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center",
    features: [
      "Monthly webinars",
      "Industry experts",
      "Latest updates",
      "Interactive sessions",
    ],
    color: "from-orange-500 to-red-600",
  },
];

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "15K+",
    label: "Students Enrolled",
    description: "Active learners",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    number: "50+",
    label: "Courses Available",
    description: "Expert-led content",
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "95%",
    label: "Completion Rate",
    description: "Student success",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "4.8/5",
    label: "Average Rating",
    description: "Student satisfaction",
  },
];

export default function AcademyPage() {
  const [isVisible, setIsVisible] = useState(false);

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
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=1080&fit=crop&crop=center"
              alt="Educational technology and learning"
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
                <GraduationCap className="w-4 h-4 mr-2" />
                Veterinary Education Platform
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                VetVault <span className="text-cyan-300">Academy</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Master veterinary practice management with expert-led courses,
                interactive workshops, and comprehensive training resources
                designed for modern veterinary professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Learning Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Browse Courses
                </Button>
              </div>
            </div>

            {/* Stats Section - More Compact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
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

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  VetVault Academy?
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive veterinary education designed for modern practice
                management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={400}
                        height={300}
                        className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Courses
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Master veterinary practice management with our most popular
                courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`bg-gradient-to-r ${course.color} text-white border-0`}
                        >
                          {course.level}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-bold text-white">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-slate-700">
                            {course.rating}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.duration}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-slate-500">
                          {course.students} students
                        </span>
                        <span className="text-sm text-slate-500">
                          {course.lessons} lessons
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Course{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Explore comprehensive training across all aspects of veterinary
                practice management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {category.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-200 text-sm">
                            {category.courses} courses
                          </span>
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Formats */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Multiple{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Learning Formats
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the learning style that works best for you and your team
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningFormats.map((format, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={format.image || "/placeholder.svg"}
                        alt={format.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${format.color} rounded-xl flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {format.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {format.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {format.description}
                      </p>
                      <ul className="space-y-2">
                        {format.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-slate-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {feature}
                            </span>
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

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Students Say
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600">
                See how VetVault Academy is transforming veterinary practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
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
                    <blockquote className="text-lg text-slate-700 italic leading-relaxed group-hover:text-slate-900 transition-colors mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm text-blue-600 font-medium">
                      Completed: {testimonial.course}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Master{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Veterinary Practice
              </span>{" "}
              Management?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Start your learning journey with VetVault Academy today and
              transform your veterinary practice with expert knowledge and
              skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Learning Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Courses
              </Button>
            </div>

            <p className="text-blue-200">
              Join <span className="font-bold text-white">15,000+</span>{" "}
              veterinary professionals already learning with VetVault Academy
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
