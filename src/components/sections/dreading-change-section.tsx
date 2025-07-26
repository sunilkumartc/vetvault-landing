"use client";
import { Card } from "@/components/ui/card";
import { Settings, Users, Shield, CheckCircle } from "lucide-react";

const changeFeatures = [
  {
    icon: <Settings className="w-8 h-8 text-cyan-600" />,
    title: "Smooth data migration",
    features: [
      "in-house migration team",
      "access to a testing environment for data validation",
      "data conversion from any veterinary software",
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    title: "Training & onboarding",
    features: [
      "dedicated workflow consultant",
      "personalized onboarding and training plan",
      "assistance on go live date",
    ],
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-600" />,
    title: "Support",
    features: ["dedicated support team", "comprehensive knowledge base"],
  },
];

export default function DreadingChangeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            <span className="text-cyan-500">Dreading change?</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">
            {"We've made it"}{" "}
            <span className="text-slate-900">our mission to make change</span>{" "}
            easy peasy!
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {changeFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-50 border-0 p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-600 mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
