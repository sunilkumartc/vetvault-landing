import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$89",
    period: "per month",
    description: "Perfect for small practices getting started",
    features: [
      "Up to 2 veterinarians",
      "Basic health records",
      "Appointment scheduling",
      "Basic invoicing",
      "Email support",
      "Mobile app access",
    ],
    notIncluded: [
      "Advanced reporting",
      "Telemedicine",
      "AI assistant",
      "Custom integrations",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$149",
    period: "per month",
    description: "Most popular for growing practices",
    features: [
      "Up to 5 veterinarians",
      "Advanced health records",
      "Online appointment booking",
      "Complete invoicing & payments",
      "Inventory management",
      "Basic reporting",
      "Phone & email support",
      "Mobile app with branding",
    ],
    notIncluded: ["Advanced AI features", "Custom integrations"],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$249",
    period: "per month",
    description: "For large practices and multi-location clinics",
    features: [
      "Unlimited veterinarians",
      "Full feature access",
      "Tails AI assistant",
      "Advanced reporting & analytics",
      "Telemedicine platform",
      "Custom integrations",
      "Priority support",
      "Custom mobile app",
      "Data migration included",
      "Training & onboarding",
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your veterinary practice. All plans
              include a 14-day free trial.
            </p>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>Trusted by 1000+ veterinary practices</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "ring-2 ring-indigo-500 shadow-lg scale-105"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-500">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-8">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                      <span className="text-slate-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-slate-600 mt-4">{plan.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center opacity-50"
                        >
                          <X className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                          <span className="text-slate-500">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : "bg-slate-900 hover:bg-slate-800"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Is there a setup fee?
                </h3>
                <p className="text-slate-600">
                  No, there are no setup fees. We include data migration and
                  onboarding support with all plans.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Can I change plans anytime?
                </h3>
                <p className="text-slate-600">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect at your next billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  What's included in the free trial?
                </h3>
                <p className="text-slate-600">
                  Your 14-day free trial includes full access to all features in
                  your chosen plan. No credit card required.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Do you offer discounts for multiple locations?
                </h3>
                <p className="text-slate-600">
                  Yes, we offer volume discounts for practices with multiple
                  locations. Contact our sales team for custom pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
