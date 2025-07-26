"use client";
import { Button } from "@/components/ui/button";
import { Zap, Brain, MessageSquare, FileText, Clock } from "lucide-react";
import Image from "next/image";

const aiFeatures = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "SOAP Notes Generation",
    description:
      "Automatically generate comprehensive SOAP notes from your consultations",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Patient Summaries",
    description:
      "Get instant patient history summaries and treatment recommendations",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Treatment Planning",
    description:
      "AI-powered treatment suggestions based on symptoms and history",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time Saving",
    description:
      "Reduce documentation time by up to 70% with intelligent automation",
  },
];

export default function AIAssistantSection() {
  return (
    <section id="ai-assistant" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Get Home on Time With{" "}
                <span className="text-cyan-500">Tails</span>{" "}
                <span className="text-indigo-600">AI</span>
              </h2>
              <div className="w-16 h-1 bg-cyan-500"></div>
              <p className="text-xl text-slate-600 leading-relaxed">
                Your AI-powered veterinary assistant automates SOAP notes,
                patient summaries, treatment planning, patient intake, and more!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
              <Zap className="w-4 h-4 mr-2" />
              Try Tails AI
            </Button>
          </div>

          <div className="relative">
            <div className="bg-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=64&h=64&fit=crop"
                    alt="Tails AI Fox"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="bg-indigo-500 rounded-2xl px-6 py-3">
                  <span className="text-lg font-medium">Chat with Tails</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="text-sm">
                    Generate SOAP notes for Max, 3-year-old Golden Retriever
                    with limping...
                  </p>
                </div>
                <div className="bg-cyan-500 bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm">
                    ✨ SOAP notes generated! Would you like me to add treatment
                    recommendations?
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-cyan-400 bg-opacity-30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
