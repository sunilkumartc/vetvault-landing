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
    <section className="pt-20 pb-8 lg:pt-24 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              {/* Unique Brand Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-cyan-100 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full">
                  <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-indigo-600" />
                  <span className="text-xs lg:text-sm font-semibold text-indigo-700">
                    Powered by Pet Vault AI
                  </span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                Where <span className="text-indigo-600">Veterinary Magic</span>{" "}
                Meets Modern Technology
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                The only veterinary platform that combines AI-powered pet care
                with human compassion. Transform your practice into a digital
                sanctuary where every pet gets VIP treatment.
              </p>
            </div>

            {/* Unique Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-6">
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

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={scrollToGetStarted}
              >
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Start Your Magic
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4 rounded-lg border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
              >
                <Heart className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                See the Magic
              </Button>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 lg:gap-6 text-slate-600">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">
                  4.9/5 from 75+ reviews
                </span>
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

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <Image
                src="https://i.ibb.co/TMTSG0cY/Chat-GPT-Image-Aug-11-2025-10-54-52-AM.png"
                alt="Veterinarian providing compassionate care to a happy dog in a modern veterinary clinic"
                width={1200} // ⬆ Increased width
                height={1000} // ⬆ Increased height
                className="w-[1200px] h-auto max-w-full rounded-2xl shadow-2xl" // ⬆ Force larger width, responsive limit
                priority
              />
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl transform rotate-3 scale-110 opacity-20"></div>

            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 w-10 h-10 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 w-8 h-8 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
