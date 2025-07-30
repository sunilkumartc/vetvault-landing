"use client";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Shield } from "lucide-react";

export default function DiscoverSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-200 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <span className="text-sm font-semibold text-indigo-600">Discover the Future</span>
          <Sparkles className="w-5 h-5 text-cyan-500" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-6">
          Experience the Only{" "}
          <span className="text-cyan-500">Digital Sanctuary</span>{" "}
          Built Exclusively for Veterinary Excellence
        </h2>
        
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Where every interaction is infused with compassion, every workflow is optimized for efficiency, 
          and every pet receives the care they deserve.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <div className="flex items-center gap-2 text-slate-600">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm">Pet-First Design</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm">Trusted & Secure</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm">AI-Powered</span>
          </div>
        </div>
        
        <Button
          size="lg"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Begin Your Journey
        </Button>
      </div>
    </section>
  );
}
