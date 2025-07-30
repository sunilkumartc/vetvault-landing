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
} from "lucide-react";

const benefits = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations for pet care and treatment plans",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save 10+ Hours Weekly",
    description: "Automate routine tasks and documentation with AI assistance",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reduce Errors by 95%",
    description: "AI-powered validation and error checking for better accuracy",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Enhanced Client Care",
    description: "Provide better pet care with AI-driven insights and recommendations",
  },
];

const features = [
  {
    title: "AI-Powered Pet Health Analysis",
    description: "Intelligent analysis of pet health data with predictive insights and treatment recommendations",
    details: [
      "Symptom analysis",
      "Treatment recommendations",
      "Medication interactions",
      "Risk assessment",
      "Preventive care suggestions",
    ],
  },
  {
    title: "Smart Documentation Assistant",
    description: "Automated SOAP notes and medical record generation with AI assistance",
    details: [
      "Auto-generated SOAP notes",
      "Voice-to-text transcription",
      "Template suggestions",
      "Medical terminology",
      "Compliance checking",
    ],
  },
  {
    title: "Intelligent Appointment Scheduling",
    description: "AI-optimized scheduling with predictive demand and resource allocation",
    details: [
      "Predictive scheduling",
      "Resource optimization",
      "Waitlist management",
      "Emergency slot allocation",
      "Staff scheduling",
    ],
  },
  {
    title: "AI Chatbot for Pet Owners",
    description: "24/7 AI-powered support for pet owners with instant answers and guidance",
    details: [
      "Instant pet care answers",
      "Appointment scheduling",
      "Medication reminders",
      "Emergency guidance",
      "Health tips",
    ],
  },
  {
    title: "Predictive Analytics",
    description: "Advanced analytics to predict pet health trends and practice performance",
    details: [
      "Health trend analysis",
      "Revenue forecasting",
      "Patient retention",
      "Inventory optimization",
      "Performance insights",
    ],
  },
  {
    title: "AI-Powered Communication",
    description: "Intelligent communication tools for better client engagement and follow-up",
    details: [
      "Personalized messaging",
      "Follow-up automation",
      "Health updates",
      "Medication reminders",
      "Appointment confirmations",
    ],
  },
];

const aiCapabilities = [
  {
    title: "Natural Language Processing",
    description: "Understand and process veterinary terminology and pet health data",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Machine Learning",
    description: "Learn from your practice data to provide better recommendations",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast pet health trends and practice performance",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Computer Vision",
    description: "Analyze medical images and detect abnormalities",
    icon: <Search className="w-6 h-6" />,
  },
];

const useCases = [
  {
    title: "Diagnostic Assistance",
    description: "AI helps veterinarians with differential diagnoses and treatment planning",
    example: "Analyzing symptoms and suggesting possible conditions with confidence scores",
  },
  {
    title: "Medical Record Automation",
    description: "Automatically generate comprehensive medical records from voice notes",
    example: "Converting exam notes to structured SOAP format with proper medical terminology",
  },
  {
    title: "Client Communication",
    description: "AI-powered messaging that provides personalized pet care information",
    example: "Sending tailored health updates and care instructions based on pet's condition",
  },
  {
    title: "Practice Optimization",
    description: "AI insights help optimize practice operations and improve efficiency",
    example: "Predicting busy periods and suggesting optimal staffing levels",
  },
];

const testimonials = [
  {
    name: "Dr. Jennifer Martinez",
    practice: "Advanced Veterinary Care",
    location: "San Diego, CA",
    quote: "VetVault's AI assistant has transformed how I practice. It saves me hours on documentation and provides valuable insights for better patient care.",
    rating: 5,
  },
  {
    name: "Dr. David Thompson",
    practice: "Comprehensive Pet Hospital",
    location: "Austin, TX",
    quote: "The AI-powered recommendations have improved our diagnostic accuracy by 30%. It's like having a brilliant colleague available 24/7.",
    rating: 5,
  },
];

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                AI-Powered Veterinary Assistant
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Meet Pet Vault AI, Your AI Veterinary Assistant
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Revolutionize your veterinary practice with AI-powered pet management, 
                intelligent insights, and automated workflows that save time and improve care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100">
                  Try AI Assistant Free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center"
                  alt="AI-powered veterinary analytics and efficiency dashboard"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Veterinarians Love Pet Vault AI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Experience the future of veterinary care with AI-powered assistance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
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

        {/* AI Capabilities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Powered by cutting-edge artificial intelligence designed for veterinary medicine
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <Card key={index} className="text-center p-8">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-slate-600">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Real-World AI Applications
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how Pet Vault AI transforms everyday veterinary tasks
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center"
                  alt="Complete AI-powered veterinary management system dashboard"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Complete AI-Powered Pet Management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every feature enhanced with artificial intelligence for better veterinary care
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Demo Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* AI Dashboard Preview */}
            <div className="text-center mb-16">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=300&fit=crop&crop=center"
                  alt="Pet Vault AI dashboard interface showing AI-powered features, analytics, and intelligent insights"
                  width={1200}
                  height={300}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Experience Pet Vault AI in Action
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Instant Responses</h3>
                      <p className="text-slate-600">Get AI-powered answers to veterinary questions in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Smart Documentation</h3>
                      <p className="text-slate-600">Automatically generate comprehensive medical records</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Intelligent Insights</h3>
                      <p className="text-slate-600">Get AI-driven recommendations for better patient care</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Client Engagement</h3>
                      <p className="text-slate-600">AI-powered communication that keeps pet owners informed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Try Pet Vault AI Today
                  </h3>
                  <p className="text-slate-700 mb-6">
                    Experience the power of AI in veterinary care with a free trial
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Demo
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500 mt-4">
                    No credit card required • 14-day free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&crop=center"
                  alt="AI-powered veterinary analytics and success metrics dashboard"
                  width={200}
                  height={100}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Trusted by Veterinarians Nationwide
              </h2>
              <p className="text-xl text-slate-600">
                See how Pet Vault AI is transforming veterinary practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
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
            <div className="flex justify-center mb-8">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=150&fit=crop&crop=center"
                alt="AI-powered veterinary transformation dashboard showing efficiency gains"
                width={300}
                height={150}
                className="rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Experience AI-Powered Veterinary Care?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
                              Start your free trial and see how Pet Vault AI can transform your veterinary practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Try Pet Vault AI Free
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
                              Join 5,000+ veterinarians already using Pet Vault AI
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 