"use client";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Shield } from "lucide-react";

export default function SingleSoftwareCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-300 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-cyan-300" />
          <span className="text-cyan-300 font-semibold">Digital Sanctuary Platform</span>
          <Sparkles className="w-6 h-6 text-cyan-300" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          One Platform, Infinite{" "}
          <span className="text-cyan-300">Possibilities</span>{" "}
          for Pet Care Excellence
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          VetVault is your complete digital sanctuary where compassion meets technology. 
          From the smallest clinic to the largest hospital, we provide the tools, 
          insights, and support you need to create extraordinary experiences for every pet and family.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <div className="flex items-center gap-2 text-indigo-100">
            <Heart className="w-5 h-5 text-red-300" />
            <span>Compassionate Care</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-100">
            <Shield className="w-5 h-5 text-green-300" />
            <span>Trusted by 1000+ Practices</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-100">
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span>AI-Powered Insights</span>
          </div>
        </div>
        
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-slate-900 text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Create Your Sanctuary
        </Button>
      </div>
    </section>
  );
}
