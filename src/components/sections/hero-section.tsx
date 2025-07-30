"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart, Clock } from "lucide-react";

export default function HeroSection() {
  const scrollToGetStarted = () => {
    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Unique Brand Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-cyan-100 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-700">Powered by Pet Vault AI</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Where <span className="text-indigo-600">Veterinary Magic</span>{" "}
                Meets Modern Technology
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                The only veterinary platform that combines AI-powered pet care with human compassion. 
                Transform your practice into a digital sanctuary where every pet gets VIP treatment.
              </p>
            </div>

            {/* Unique Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Save 15+ Hours/Week</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>AI-Powered Insights</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={scrollToGetStarted}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Magic
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 rounded-lg border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
              >
                <Heart className="w-5 h-5 mr-2" />
                See the Magic
              </Button>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="ml-2 font-medium">4.9/5 from 75+ reviews</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-indigo-600">1000+</span>{" "}
                practices trust VetVault
              </div>
              <div className="text-sm">
                <span className="font-semibold text-cyan-600">50,000+</span>{" "}
                pets cared for daily
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=600&fit=crop&crop=center"
                alt="Veterinarian providing compassionate care to a happy dog in a modern veterinary clinic"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            
            {/* Floating Elements for Magic Effect */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
