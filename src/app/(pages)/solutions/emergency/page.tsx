import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency protocols and critical care management",
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Triage Management",
    description: "Prioritize critical cases and manage emergency workflows efficiently",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Staff Scheduling",
    description: "Manage rotating shifts and emergency on-call schedules",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Real-Time Monitoring",
    description: "Track patient vitals and critical care metrics in real-time",
  },
];

const features = [
  {
    title: "Emergency Triage System",
    description: "Prioritize critical cases and manage emergency workflows with intelligent triage protocols",
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
    description: "Comprehensive tools for managing critical patients and emergency treatments",
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
    description: "Manage rotating shifts, on-call schedules, and emergency response teams",
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
    description: "Rapid communication with pet owners, referring vets, and emergency contacts",
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
    description: "Streamlined billing for emergency services with payment plans and insurance processing",
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
    description: "Comprehensive emergency medical records with rapid access and sharing capabilities",
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
  },
  {
    step: "2",
    title: "Critical Assessment",
    description: "Immediate evaluation and treatment prioritization",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    step: "3",
    title: "Emergency Treatment",
    description: "Provide critical care with protocol guidance",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    step: "4",
    title: "Monitoring & Updates",
    description: "Continuous monitoring and owner communication",
    icon: <Activity className="w-6 h-6" />,
  },
];

const emergencyFeatures = [
  {
    title: "Rapid Patient Intake",
    description: "Get critical patients into the system in under 30 seconds",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Emergency Protocols",
    description: "Built-in protocols for common emergency scenarios",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: "Real-Time Alerts",
    description: "Instant notifications for critical changes and updates",
    icon: <Bell className="w-8 h-8" />,
  },
  {
    title: "Emergency Contacts",
    description: "Quick access to all emergency contacts and specialists",
    icon: <Phone className="w-8 h-8" />,
  },
];

const testimonials = [
  {
    name: "Dr. Amanda Foster",
    practice: "Emergency Animal Hospital",
    location: "Phoenix, AZ",
    quote: "VetVault's emergency features have transformed our critical care workflow. We can now handle 40% more emergency cases with better outcomes.",
    rating: 5,
  },
  {
    name: "Dr. Robert Kim",
    practice: "24/7 Emergency Veterinary Center",
    location: "Seattle, WA",
    quote: "The triage system and emergency protocols have improved our response time by 60%. Pet owners appreciate the real-time updates.",
    rating: 5,
  },
];

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                24/7 Emergency Veterinary Care
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Emergency Pet Care Management
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
                Complete emergency veterinary management system with triage protocols, 
                critical care tracking, and 24/7 emergency response capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Demo
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
                Why Emergency Clinics Choose VetVault
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Designed specifically for emergency veterinary care with critical response capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-4">
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

        {/* Emergency Workflow */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Streamlined Emergency Workflow
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From emergency intake to discharge, every step optimized for critical care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyWorkflow.map((step, index) => (
                <Card key={index} className="text-center p-8 relative">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </CardContent>
                  {index < emergencyWorkflow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-red-300" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Emergency-Specific Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every feature designed for emergency veterinary care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Complete Emergency Pet Management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every feature designed specifically for emergency veterinary care
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

        {/* Emergency Advantages */}
        <section className="py-20 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Built for Emergency Veterinary Success
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Rapid Response</h3>
                      <p className="text-slate-600">Get critical patients into the system in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Emergency Protocols</h3>
                      <p className="text-slate-600">Built-in protocols for common emergency scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">24/7 Support</h3>
                      <p className="text-slate-600">Round-the-clock technical support for emergency clinics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Critical Alerts</h3>
                      <p className="text-slate-600">Instant notifications for critical changes and updates</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Emergency-Ready Platform
                  </h3>
                  <p className="text-slate-700 mb-6">
                    Designed specifically for emergency veterinary care with critical response capabilities and 24/7 reliability
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-slate-900">Rapid Intake</div>
                      <div className="text-slate-600">30-second patient registration</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-slate-900">Triage System</div>
                      <div className="text-slate-600">Automated case prioritization</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-slate-900">Critical Alerts</div>
                      <div className="text-slate-600">Real-time notifications</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-slate-900">24/7 Support</div>
                      <div className="text-slate-600">Always available assistance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Trusted by Emergency Clinics Nationwide
              </h2>
              <p className="text-xl text-slate-600">
                See how emergency veterinary clinics are transforming their critical care with VetVault
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Emergency Practice?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start your free 14-day trial and see how VetVault can enhance your emergency veterinary care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Join 300+ emergency veterinary clinics already using VetVault
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 