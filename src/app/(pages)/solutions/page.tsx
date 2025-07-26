import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Building2,
  Truck,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Small Practices",
    description: "Perfect for clinics with 1-5 veterinarians",
    features: [
      "Easy setup and onboarding",
      "Essential practice management tools",
      "Affordable pricing",
      "Basic reporting and analytics",
      "Mobile app for pet owners",
    ],
    href: "/solutions/small-practices",
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Multi-Location Practices",
    description: "Manage multiple clinic locations seamlessly",
    features: [
      "Centralized management dashboard",
      "Cross-location reporting",
      "Staff and resource sharing",
      "Unified client database",
      "Location-specific customization",
    ],
    href: "/solutions/multi-location",
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Mobile Veterinarians",
    description: "On-the-go veterinary services",
    features: [
      "Offline capability",
      "GPS integration",
      "Mobile payment processing",
      "Route optimization",
      "Real-time sync when online",
    ],
    href: "/solutions/mobile-vets",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Emergency Clinics",
    description: "24/7 emergency veterinary care",
    features: [
      "Triage management",
      "Critical case tracking",
      "Emergency protocols",
      "Staff scheduling for shifts",
      "Rapid patient intake",
    ],
    href: "/solutions/emergency",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Solutions for Every Type of Veterinary Practice
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Whether you're a small clinic, multi-location practice, mobile
              vet, or emergency hospital, VetVault has the right solution for
              your needs.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-slate-600 mb-6">
                          {solution.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-slate-700"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          className="group bg-transparent"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
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
              Not sure which solution is right for you?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Book a demo with our team and we'll help you find the perfect fit
              for your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Book a Demo
              </Button>
              <Button size="lg" variant="outline">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
