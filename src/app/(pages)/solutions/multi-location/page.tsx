"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Globe,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
  TrendingUp,
  Clock,
} from "lucide-react";
import Image from "next/image";

const locations = [
  { name: "Downtown Clinic", status: "online", patients: 45, staff: 8 },
  { name: "Suburban Branch", status: "online", patients: 32, staff: 6 },
  { name: "Emergency Center", status: "busy", patients: 18, staff: 12 },
  { name: "Mobile Unit", status: "online", patients: 12, staff: 3 },
];

const features = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Centralized Management",
    description: "Control all locations from one unified dashboard",
    stats: "Manage up to 50+ locations",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Staff Coordination",
    description: "Share resources and staff across locations seamlessly",
    stats: "30% improvement in staff utilization",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Cross-Location Analytics",
    description: "Compare performance and identify growth opportunities",
    stats: "Real-time insights across all locations",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Unified Security",
    description: "Enterprise-grade security with role-based access",
    stats: "HIPAA compliant across all locations",
  },
];

export default function MultiLocationPage() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-95"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&h=1080&fit=crop"
            alt="Multi-location veterinary practice"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`text-white transition-all duration-1000 ${
                isAnimated
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Building2 className="w-4 h-4 mr-2" />
                Multi-Location Solution
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                Scale Your{" "}
                <span className="text-cyan-300">Veterinary Empire</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Manage multiple locations, staff, and operations from one
                powerful platform designed for growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-slate-100"
                >
                  Schedule Enterprise Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View Case Studies
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">500+</div>
                  <div className="text-blue-100">Multi-location practices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">2000+</div>
                  <div className="text-blue-100">Connected locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">99.9%</div>
                  <div className="text-blue-100">Uptime guarantee</div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isAnimated
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Live Location Status
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedLocation === index
                          ? "bg-white/20"
                          : "bg-white/10 hover:bg-white/15"
                      }`}
                      onClick={() => setSelectedLocation(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              location.status === "online"
                                ? "bg-green-400"
                                : location.status === "busy"
                                ? "bg-yellow-400"
                                : "bg-red-400"
                            }`}
                          ></div>
                          <span className="text-white font-medium">
                            {location.name}
                          </span>
                        </div>
                        <div className="text-white/70 text-sm">
                          {location.patients} patients • {location.staff} staff
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Enterprise Features for{" "}
              <span className="text-blue-600">Multi-Location Success</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to manage, scale, and optimize multiple
              veterinary locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <div className="text-blue-600 font-semibold">
                    {feature.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Unified Dashboard Experience
            </h2>
            <p className="text-xl text-blue-200">
              Monitor all your locations in real-time
            </p>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
              alt="Multi-location dashboard"
              width={1200}
              height={800}
              className="rounded-2xl shadow-2xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

            {/* Floating Stats */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Revenue: +23% this month</span>
              </div>
            </div>

            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Avg Wait Time: 12 min</span>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-sm text-slate-600">Active Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">107</div>
                  <div className="text-sm text-slate-600">
                    Today's Appointments
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">29</div>
                  <div className="text-sm text-slate-600">Active Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Proven Results Across Locations
            </h2>
            <p className="text-xl text-slate-600">
              See the impact VetVault has on multi-location practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <div className="text-slate-600">
                Average revenue increase across all locations
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-slate-600">
                Reduction in administrative overhead
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-slate-600">
                Staff satisfaction improvement
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Scale Your Practice?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the leading multi-location veterinary practices already using
            VetVault to grow and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4"
            >
              Schedule Enterprise Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
