"use client";

import { useState, useEffect, useRef } from "react";
import {
  FileText,
  Calendar,
  CreditCard,
  Package,
  Smartphone,
  MessageCircle,
  Sparkles,
  Heart,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Digital Pet Portraits",
    description:
      "Create comprehensive digital health records that tell each pet's unique story with AI-powered insights.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Scheduling Magic",
    description:
      "Intelligent appointment booking that adapts to your practice flow and pet parent preferences.",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Seamless Payment Flow",
    description:
      "Transform billing from a chore into a smooth experience with automated invoicing and payment processing.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Inventory Intelligence",
    description:
      "Smart inventory management that predicts needs and ensures you never run out of essential supplies.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Pet Parent Portal",
    description:
      "Empower pet parents with a beautiful mobile app for appointments, health updates, and care reminders.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Compassionate Communication",
    description:
      "Build stronger relationships through personalized communication tools that show you care.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Pet Vault AI Assistant",
    description:
      "Your AI-powered veterinary companion that handles documentation, insights, and decision support.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Care Quality Guardian",
    description:
      "Ensure every pet receives the highest standard of care with quality monitoring and best practice alerts.",
  },
];

const stats = [
  {
    icon: <Clock className="w-6 h-6" />,
    number: "15+",
    label: "Hours saved per week",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: <Users className="w-6 h-6" />,
    number: "50,000+",
    label: "Pets cared for daily",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    number: "99.9%",
    label: "Uptime guarantee",
    color: "from-green-500 to-emerald-600",
  },
];

export default function FeaturesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(features.length).fill(false)
  );
  const [visibleStats, setVisibleStats] = useState<boolean[]>(
    new Array(stats.length).fill(false)
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setTimeout(() => setIsVisible(true), 100);
            }

            if (entry.target === dashboardRef.current) {
              setTimeout(() => {
                if (dashboardRef.current) {
                  dashboardRef.current.classList.add("animate-in");
                }
              }, 300);
            }

            if (entry.target === statsRef.current) {
              stats.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleStats((prev) => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                  });
                }, 800 + index * 200);
              });
            }

            featureRefs.current.forEach((ref, index) => {
              if (entry.target === ref) {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                  });
                }, 500 + index * 150);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (dashboardRef.current) observer.observe(dashboardRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-2xl opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-indigo-500 animate-spin" />
            <span className="text-sm font-semibold text-indigo-600 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text">
              Digital Sanctuary Features
            </span>
            <Sparkles className="w-5 h-5 text-cyan-500 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Transform Your Practice Into a{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Digital Sanctuary
            </span>{" "}
            Where Every Pet Thrives
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience veterinary care reimagined with AI-powered tools,
            compassionate design, and seamless workflows that put pets and their
            families first.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div
          ref={dashboardRef}
          className="mb-16 dashboard-preview opacity-0 translate-y-8 transition-all duration-1000"
        >
          <div className="relative group">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop&crop=center"
              alt="VetVault comprehensive dashboard showing all features: patient management, AI assistant, analytics, and digital tools"
              width={1200}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-slate-700">
                  Live Dashboard
                </span>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg px-3 py-2 shadow-lg animate-pulse">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">AI Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className={`feature-card text-center space-y-4 p-6 rounded-xl border border-transparent group relative overflow-hidden transition-all duration-700 ${
                visibleCards[index]
                  ? `opacity-100 translate-y-0 ${
                      index % 2 === 0 ? "translate-x-0" : "translate-x-0"
                    } rotate-0`
                  : `opacity-0 ${
                      index % 2 === 0
                        ? "translate-x-[-50px]"
                        : "translate-x-[50px]"
                    } translate-y-8 rotate-3`
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>

              {/* Floating Sparkles */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
              </div>

              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <Heart className="w-3 h-3 text-pink-400 animate-pulse" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:from-indigo-200 group-hover:to-cyan-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-200 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card relative p-6 rounded-2xl bg-gradient-to-br ${
                stat.color
              } text-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 group overflow-hidden ${
                visibleStats[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Floating Icon */}
              <div className="relative z-10 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {stat.icon}
                </div>
              </div>

              {/* Animated Number */}
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Progress Bar Animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
                <div
                  className={`h-full bg-white transition-all duration-1000 ${
                    visibleStats[index] ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200 + 500}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dashboard-preview.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .feature-card:hover {
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.05) 0%,
            rgba(6, 182, 212, 0.05) 100%
          );
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateY(-8px) scale(1.02);
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.05) rotateY(5deg);
        }
      `}</style>
    </section>
  );
}
