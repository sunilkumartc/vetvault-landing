"use client";
import {
  FileText,
  Calendar,
  CreditCard,
  Database,
  Smartphone,
  MessageCircle,
  BarChart3,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Health Records",
    description:
      "You can have it all — collaborative records, SOAP templates, integrations, automation, and more.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Online Appointments",
    description:
      "Reduce phone calls with your own personalized booking system!",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Invoicing",
    description:
      "Be ready for check-out with automatic invoicing, and quick & integrated payments. Downpayments, split payments, refunds.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Stock Management",
    description:
      "Kick inventory stress to a curb and keep your stock up to date, in real-time.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Pet Parent App",
    description:
      "Offer the vet-in-your-pocket experience to your clients with a custom-branded mobile app.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Chat & Telemedicine",
    description:
      "Stay in touch with your patients with chat, telehealth & telemedicine features.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Reports",
    description:
      "Advanced reporting on finances, stock, appointments, clients & patients.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Data Migration",
    description:
      "Your data comes with you! We offer smooth data migration, no matter your previous software.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            The all-in-one{" "}
            <span className="text-cyan-500">pet business software</span> that
            you can trust and grow with
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to run your veterinary practice efficiently and
            provide exceptional care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
