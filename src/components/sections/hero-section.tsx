"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                The <span className="text-indigo-600">all-in-one software</span>{" "}
                for better veterinary care.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Cutting-edge veterinary software for simpler operations,
                improved pet care, and getting home on time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200"
                onClick={scrollToGetStarted}
              >
                Book a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 rounded-lg border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
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
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://i.postimg.cc/44mL3NR3/Chat-GPT-Image-Jul-24-2025-02-54-10-PM.png"
                alt="VetVault Dashboard"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
