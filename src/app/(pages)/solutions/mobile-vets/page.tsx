"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  MapPin,
  Smartphone,
  Wifi,
  WifiOff,
  Navigation,
  Clock,
  CreditCard,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";

const mobileFeatures = [
  {
    icon: <WifiOff className="w-8 h-8" />,
    title: "Offline Capability",
    description:
      "Work seamlessly without internet connection, sync when back online",
    demo: "Continue working during network outages",
    color: "bg-green-500",
  },
  {
    icon: <Navigation className="w-8 h-8" />,
    title: "GPS Integration",
    description:
      "Automatic location tracking and route optimization for house calls",
    demo: "Smart routing to minimize travel time",
    color: "bg-blue-500",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Mobile Payments",
    description: "Accept payments on-site with integrated card readers",
    demo: "Process payments anywhere, anytime",
    color: "bg-purple-500",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First Design",
    description: "Optimized interface for tablets and smartphones",
    demo: "Touch-friendly controls and gestures",
    color: "bg-orange-500",
  },
];

const routeStops = [
  {
    time: "9:00 AM",
    client: "Johnson Family",
    pet: "Max (Golden Retriever)",
    status: "completed",
    location: "Downtown",
  },
  {
    time: "10:30 AM",
    client: "Smith Residence",
    pet: "Luna (Persian Cat)",
    status: "current",
    location: "Suburbs",
  },
  {
    time: "12:00 PM",
    client: "Brown Farm",
    pet: "Multiple Horses",
    status: "upcoming",
    location: "Rural Area",
  },
  {
    time: "2:00 PM",
    client: "Davis Home",
    pet: "Buddy (Labrador)",
    status: "upcoming",
    location: "Westside",
  },
];

const testimonials = [
  {
    name: "Dr. Maria Gonzalez",
    practice: "Mobile Vet Solutions",
    image:
      "https://images.unsplash.com/photo-1594824388853-d0c2d4e5b1b5?w=100&h=100&fit=crop&crop=face",
    quote:
      "VetVault's mobile solution transformed my house call practice. The offline capability is a game-changer!",
    rating: 5,
    specialty: "Mobile Veterinarian",
  },
  {
    name: "Dr. Robert Kim",
    practice: "On-the-Go Animal Care",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    quote:
      "GPS routing saves me 2+ hours daily. My clients love the convenience and professional service.",
    rating: 5,
    specialty: "House Call Specialist",
  },
];

export default function MobileVetsPage() {
  const [currentStop, setCurrentStop] = useState(1);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 opacity-95"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=1080&fit=crop"
            alt="Mobile veterinarian with van"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-pulse">
                <Truck className="w-4 h-4 mr-2" />
                Mobile Veterinary Solution
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                Take Your{" "}
                <span className="text-cyan-300">Practice on the Road</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Complete veterinary practice management designed for mobile
                vets, house calls, and on-the-go animal care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-slate-100"
                >
                  <Truck className="w-5 h-5 mr-2" />
                  Start Mobile Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  See Mobile Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">100%</div>
                  <div className="text-green-100">Offline Capable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">50%</div>
                  <div className="text-green-100">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">24/7</div>
                  <div className="text-green-100">Sync Available</div>
                </div>
              </div>
            </div>

            {/* Mobile Route Tracker */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xl font-bold">Today's Route</h3>
                <div className="flex items-center space-x-2">
                  {isOnline ? (
                    <Wifi className="w-5 h-5 text-green-400" />
                  ) : (
                    <WifiOff className="w-5 h-5 text-orange-400" />
                  )}
                  <span className="text-white text-sm">
                    {isOnline ? "Online" : "Offline Mode"}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {routeStops.map((stop, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all cursor-pointer ${
                      stop.status === "completed"
                        ? "bg-green-500/20 border border-green-400/30"
                        : stop.status === "current"
                        ? "bg-blue-500/20 border border-blue-400/30 ring-2 ring-blue-400/50"
                        : "bg-white/10 border border-white/20"
                    }`}
                    onClick={() => setCurrentStop(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            stop.status === "completed"
                              ? "bg-green-400"
                              : stop.status === "current"
                              ? "bg-blue-400 animate-pulse"
                              : "bg-white/50"
                          }`}
                        ></div>
                        <div>
                          <div className="text-white font-medium">
                            {stop.client}
                          </div>
                          <div className="text-white/70 text-sm">
                            {stop.pet}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-sm">{stop.time}</div>
                        <div className="text-white/70 text-xs">
                          {stop.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center justify-between text-white text-sm">
                  <span>Estimated completion:</span>
                  <span className="font-semibold">4:30 PM</span>
                </div>
                <div className="flex items-center justify-between text-white text-sm mt-2">
                  <span>Total distance:</span>
                  <span className="font-semibold">47 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for{" "}
              <span className="text-green-600">Mobile Veterinarians</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every feature designed specifically for the unique needs of mobile
              veterinary practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-50 rounded-bl-full"></div>

                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>

                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-slate-500 mb-1">Demo:</div>
                    <div className="text-slate-700 font-medium">
                      {feature.demo}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all bg-transparent"
                  >
                    Try Feature
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mobile Dashboard */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Mobile Dashboard Experience
            </h2>
            <p className="text-xl text-green-200">
              Optimized for tablets and smartphones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-white text-xl font-bold mb-4">
                  Today's Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">8</div>
                    <div className="text-green-200 text-sm">Appointments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">47</div>
                    <div className="text-blue-200 text-sm">Miles Driven</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">
                      $2,340
                    </div>
                    <div className="text-purple-200 text-sm">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">
                      6.5h
                    </div>
                    <div className="text-orange-200 text-sm">Active Time</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-white text-xl font-bold mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="bg-green-600 hover:bg-green-700 justify-start">
                    <MapPin className="w-4 h-4 mr-2" />
                    Navigate
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 justify-start">
                    <Clock className="w-4 h-4 mr-2" />
                    Check In
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 justify-start">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payment
                  </Button>
                  <Button className="bg-orange-600 hover:bg-orange-700 justify-start">
                    <Zap className="w-4 h-4 mr-2" />
                    Emergency
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop"
                alt="Mobile veterinary app interface"
                width={400}
                height={600}
                className="rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mobile Vet Success Stories
            </h2>
            <p className="text-xl text-slate-600">
              See how mobile veterinarians are thriving with VetVault
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-green-600">
                        {testimonial.specialty}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {testimonial.practice}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Mobile?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join the growing community of mobile veterinarians using VetVault to
            deliver exceptional care anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-slate-100 text-lg px-8 py-4"
            >
              <Truck className="w-5 h-5 mr-2" />
              Start Mobile Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              Schedule Mobile Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
