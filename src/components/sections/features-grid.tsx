"use client";
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
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Digital Pet Portraits",
    description: "Create comprehensive digital health records that tell each pet's unique story with AI-powered insights.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Scheduling Magic",
    description: "Intelligent appointment booking that adapts to your practice flow and pet parent preferences.",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Seamless Payment Flow",
    description: "Transform billing from a chore into a smooth experience with automated invoicing and payment processing.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Inventory Intelligence",
    description: "Smart inventory management that predicts needs and ensures you never run out of essential supplies.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Pet Parent Portal",
    description: "Empower pet parents with a beautiful mobile app for appointments, health updates, and care reminders.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Compassionate Communication",
    description: "Build stronger relationships through personalized communication tools that show you care.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Pet Vault AI Assistant",
    description: "Your AI-powered veterinary companion that handles documentation, insights, and decision support.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Care Quality Guardian",
    description: "Ensure every pet receives the highest standard of care with quality monitoring and best practice alerts.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span className="text-sm font-semibold text-indigo-600">Digital Sanctuary Features</span>
            <Sparkles className="w-5 h-5 text-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Transform Your Practice Into a{" "}
            <span className="text-cyan-500">Digital Sanctuary</span>{" "}
            Where Every Pet Thrives
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience veterinary care reimagined with AI-powered tools, compassionate design, 
            and seamless workflows that put pets and their families first.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop&crop=center"
              alt="VetVault comprehensive dashboard showing all features: patient management, AI assistant, analytics, and digital tools"
              width={1200}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 group border border-transparent hover:border-indigo-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:from-indigo-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Magic Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-indigo-600">15+</div>
            <div className="text-slate-600">Hours saved per week</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-600">50,000+</div>
            <div className="text-slate-600">Pets cared for daily</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-indigo-600">99.9%</div>
            <div className="text-slate-600">Uptime guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
