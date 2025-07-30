import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Monitor,
  Tablet,
  Apple,
  FileText,
  Video,
  Users,
  Star,
} from "lucide-react";

const mobileApps = [
  {
    name: "VetVault Mobile App",
    description: "Complete pet management on your mobile device",
    platform: "iOS & Android",
    version: "2.4.1",
    size: "45 MB",
    rating: 4.8,
    downloads: "50K+",
    icon: "📱",
    features: [
      "Pet health records access",
      "Appointment booking",
      "Client communication",
      "Payment processing",
      "Offline capability",
    ],
  },
  {
    name: "VetVault Pet Owner App",
    description: "Mobile app for pet owners to manage their pets",
    platform: "iOS & Android",
    version: "1.8.3",
    size: "32 MB",
    rating: 4.7,
    downloads: "25K+",
    icon: "🐾",
    features: [
      "Pet health records",
      "Appointment scheduling",
      "Medication reminders",
      "Direct messaging",
      "Payment history",
    ],
  },
];

const desktopApps = [
  {
    name: "VetVault Desktop",
    description: "Full-featured desktop application for veterinary practices",
    platform: "Windows, Mac, Linux",
    version: "3.2.0",
    size: "125 MB",
    rating: 4.9,
    downloads: "15K+",
    icon: "💻",
    features: [
      "Complete practice management",
      "Advanced reporting",
      "Multi-user support",
      "Data backup",
      "Offline mode",
    ],
  },
];

const resources = [
  {
    title: "VetVault User Manual",
    description: "Comprehensive guide to using VetVault for pet management",
    type: "PDF",
    size: "8.5 MB",
    downloads: 12500,
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "API Documentation",
    description: "Complete API reference for custom integrations",
    type: "PDF",
    size: "12.3 MB",
    downloads: 3200,
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Setup Guide Video",
    description: "Step-by-step video guide for initial setup",
    type: "MP4",
    size: "45.2 MB",
    downloads: 8900,
    icon: <Video className="w-6 h-6" />,
  },
  {
    title: "Training Materials",
    description: "Staff training resources and templates",
    type: "ZIP",
    size: "28.7 MB",
    downloads: 5600,
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Best Practices Guide",
    description: "Veterinary practice management best practices",
    type: "PDF",
    size: "5.1 MB",
    downloads: 7800,
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Integration Templates",
    description: "Templates for common integrations and workflows",
    type: "ZIP",
    size: "15.8 MB",
    downloads: 2100,
    icon: <FileText className="w-6 h-6" />,
  },
];

const systemRequirements = [
  {
    platform: "iOS",
    requirements: [
      "iOS 13.0 or later",
      "iPhone 6s or newer",
      "iPad (5th generation) or newer",
      "2GB RAM minimum",
      "100MB available storage",
    ],
    icon: <Apple className="w-8 h-8" />,
  },
  {
    platform: "Android",
    requirements: [
      "Android 8.0 or later",
      "2GB RAM minimum",
      "100MB available storage",
      "Google Play Services",
      "Internet connection",
    ],
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    platform: "Windows",
    requirements: [
      "Windows 10 or later",
      "4GB RAM minimum",
      "500MB available storage",
      ".NET Framework 4.7.2",
      "Internet connection",
    ],
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    platform: "macOS",
    requirements: [
      "macOS 10.15 or later",
      "4GB RAM minimum",
      "500MB available storage",
      "Intel or Apple Silicon",
      "Internet connection",
    ],
    icon: <Monitor className="w-8 h-8" />,
  },
];

const testimonials = [
  {
    name: "Dr. Lisa Thompson",
    practice: "Mobile Vet Care",
    location: "Denver, CO",
    quote: "The mobile app is fantastic! I can manage my practice from anywhere and the offline capability is a lifesaver.",
    rating: 5,
  },
  {
    name: "Dr. Robert Kim",
    practice: "Comprehensive Pet Hospital",
    location: "Seattle, WA",
    quote: "The desktop app is incredibly powerful. The reporting features have given us insights we never had before.",
    rating: 5,
  },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Apps & Resources
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Download VetVault Apps & Resources
              </h1>
              <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                Get the latest VetVault applications, documentation, and resources 
                for comprehensive pet management across all your devices.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Apps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Mobile Applications
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Manage your veterinary practice and pet care on the go
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mobileApps.map((app, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="text-6xl">{app.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900">
                            {app.name}
                          </h3>
                          <Badge className="bg-teal-100 text-teal-800">
                            {app.platform}
                          </Badge>
                        </div>
                        <p className="text-slate-600 mb-4">
                          {app.description}
                        </p>
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                          <span>v{app.version}</span>
                          <span>{app.size}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{app.rating}</span>
                          </div>
                          <span>{app.downloads} downloads</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {app.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Desktop Apps */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Desktop Applications
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Powerful desktop applications for comprehensive practice management
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {desktopApps.map((app, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="text-6xl">{app.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900">
                            {app.name}
                          </h3>
                          <Badge className="bg-teal-100 text-teal-800">
                            {app.platform}
                          </Badge>
                        </div>
                        <p className="text-slate-600 mb-4">
                          {app.description}
                        </p>
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                          <span>v{app.version}</span>
                          <span>{app.size}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{app.rating}</span>
                          </div>
                          <span>{app.downloads} downloads</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {app.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Documentation & Resources
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Download guides, documentation, and training materials
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                          <span>{resource.type}</span>
                          <span>{resource.size}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">
                            {resource.downloads.toLocaleString()} downloads
                          </span>
                          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                            <Download className="w-4 h-4 mr-1" />
                            Download
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

        {/* System Requirements */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                System Requirements
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ensure your devices meet the requirements for optimal performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {systemRequirements.map((system, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-4">
                      {system.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {system.platform}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {system.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">100K+</div>
                <div className="text-slate-600">Total Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">4.8</div>
                <div className="text-slate-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">5</div>
                <div className="text-slate-600">Platforms Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-slate-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-slate-600">
                See how our apps and resources help veterinary practices
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Download VetVault apps and resources to transform your veterinary practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Download All Apps
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              All downloads are free and include comprehensive support
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 