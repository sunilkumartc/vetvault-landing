"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Zap,
  FileText,
  MessageSquare,
  Calendar,
  Brain,
  Sparkles,
  Heart,
  Clock,
} from "lucide-react";

const aiFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Intelligent SOAP Notes",
    description: "Pet Vault AI writes comprehensive SOAP notes in seconds, capturing every detail with medical precision.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Smart Patient Summaries",
    description: "Generate detailed patient summaries that tell the complete health story with AI-powered insights.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Treatment Planning",
    description: "AI-assisted treatment plans that consider patient history, breed-specific factors, and best practices.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Automated Intake",
    description: "Streamline patient intake with intelligent forms that adapt to each pet's unique needs.",
  },
];

export default function AIAssistantSection() {
  return (
    <section id="ai-assistant" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">Meet Pet Vault AI</span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Your AI-Powered{" "}
                <span className="text-purple-600">Veterinary Companion</span>{" "}
                That Never Sleeps
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <p className="text-xl text-slate-600 leading-relaxed">
                Pet Vault AI is more than just an assistant—it's your intelligent partner in pet care. 
                From documentation to diagnostics, Pet Vault AI works tirelessly to help you provide 
                exceptional care while getting you home on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <Zap className="w-4 h-4 mr-2" />
                Meet Pet Vault AI
              </Button>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3">
                <Heart className="w-4 h-4 mr-2" />
                See the Magic
              </Button>
            </div>

            {/* AI Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">90%</div>
                <div className="text-sm text-slate-600">Time saved on docs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-slate-600">AI availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">99%</div>
                <div className="text-sm text-slate-600">Accuracy rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                alt="Modern veterinary dashboard with AI analytics, patient data, and digital health records interface"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            
            {/* Floating AI Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full opacity-70 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
