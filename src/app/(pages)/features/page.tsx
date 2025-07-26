import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Calendar,
  CreditCard,
  Database,
  Smartphone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const detailedFeatures = [
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Electronic Health Records",
    description:
      "Comprehensive digital health records with SOAP templates, treatment history, and collaborative notes.",
    features: [
      "SOAP note templates",
      "Treatment history tracking",
      "Collaborative notes",
      "Digital signatures",
      "Automated reminders",
    ],
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Appointment Management",
    description:
      "Advanced scheduling system with online booking, automated reminders, and calendar integration.",
    features: [
      "Online booking portal",
      "Automated SMS/email reminders",
      "Calendar synchronization",
      "Waitlist management",
      "Recurring appointments",
    ],
  },
  {
    icon: <CreditCard className="w-12 h-12" />,
    title: "Billing & Payments",
    description:
      "Streamlined invoicing with integrated payment processing and financial reporting.",
    features: [
      "Automated invoicing",
      "Credit card processing",
      "Payment plans",
      "Insurance claims",
      "Financial reporting",
    ],
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Inventory Management",
    description:
      "Real-time stock tracking with automated reordering and supplier management.",
    features: [
      "Real-time stock levels",
      "Automated reordering",
      "Supplier management",
      "Expiration tracking",
      "Cost analysis",
    ],
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Pet Parent App",
    description:
      "Custom-branded mobile app for pet owners with appointment booking and health records access.",
    features: [
      "Custom branding",
      "Appointment booking",
      "Health record access",
      "Medication reminders",
      "Direct messaging",
    ],
  },
  {
    icon: <MessageCircle className="w-12 h-12" />,
    title: "Communication Tools",
    description:
      "Integrated chat, telemedicine, and client communication platform.",
    features: [
      "In-app messaging",
      "Video consultations",
      "File sharing",
      "Automated notifications",
      "Communication history",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Powerful Features for Modern Veterinary Practices
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Discover all the tools you need to streamline your practice,
              improve patient care, and grow your business.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-slate-100"
            >
              Start Free Trial
            </Button>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {detailedFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 mb-6">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.features.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-center text-slate-700"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to experience all these features?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start your free 14-day trial and see how VetVault can transform
              your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
