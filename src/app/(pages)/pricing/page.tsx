"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  X,
  Star,
  Sparkles,
  Crown,
  Zap,
  Shield,
  Heart,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Award,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$10",
    period: "per month",
    description: "Perfect for small practices getting started",
    icon: <Zap className="w-8 h-8" />,
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
    savings: null,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Professional",
    price: "$20",
    period: "per month",
    description: "Most popular for growing practices",
    icon: <Crown className="w-8 h-8" />,
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
    savings: "Save $100/year",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Enterprise",
    price: "$30",
    period: "per month",
    description: "For large practices and multi-location clinics",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "Unlimited veterinarians",
      "Full feature access",
      "Pet Vault AI assistant",
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
    savings: "Custom pricing",
    color: "from-emerald-500 to-teal-600",
  },
];

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "40% More Efficient",
    description: "Streamline workflows",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "5,000+ Practices",
    description: "Trust VetVault daily",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "15+ Hours Saved",
    description: "Every week per practice",
  },
];

const faqs = [
  {
    question: "Is there a setup fee?",
    answer:
      "No, there are no setup fees. We include data migration and onboarding support with all plans.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "Your 14-day free trial includes full access to all features in your chosen plan. No credit card required.",
  },
  {
    question: "Do you offer discounts for multiple locations?",
    answer:
      "Yes, we offer volume discounts for practices with multiple locations. Contact our sales team for custom pricing.",
  },
];

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      <main className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/15 to-purple-200/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold rounded-full shadow-lg animate-bounce">
                <Sparkles className="w-4 h-4 mr-2" />
                Transparent Pricing
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your veterinary practice. All plans
                include a 14-day free trial with no credit card required.
              </p>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-indigo-600">
                      {benefit.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-slate-900">
                        {benefit.title}
                      </div>
                      <div className="text-sm text-slate-600">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                <span className="font-semibold">
                  Trusted by 5,000+ veterinary practices worldwide
                </span>
                <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-visible transition-all duration-700 transform hover:-translate-y-6 border-0 ${
                    plan.popular
                      ? "ring-2 ring-purple-500 shadow-2xl scale-105 z-10"
                      : "hover:shadow-2xl"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
                  }}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 px-6 py-3 text-sm font-bold shadow-xl rounded-full animate-bounce">
                        <Crown className="w-4 h-4 mr-2" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Savings badge */}
                  {plan.savings && (
                    <div className="absolute -top-2 -right-2 z-20">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-2 text-xs font-bold shadow-lg rounded-full animate-pulse">
                        {plan.savings}
                      </Badge>
                    </div>
                  )}

                  {/* Glowing border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                  ></div>

                  <div className="relative bg-white rounded-2xl">
                    <CardHeader className="text-center pb-8 pt-12">
                      {/* Plan icon */}
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        {plan.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {plan.name}
                      </h3>

                      <div className="mb-4">
                        <span className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-slate-600 ml-2 text-lg">
                          {plan.period}
                        </span>
                      </div>

                      <p className="text-slate-600 text-lg leading-relaxed">
                        {plan.description}
                      </p>
                    </CardHeader>

                    <CardContent className="px-8 pb-8">
                      {/* Features list */}
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                            style={{
                              transitionDelay: `${featureIndex * 50}ms`,
                            }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-slate-700 font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}

                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center opacity-50"
                          >
                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center mr-4 flex-shrink-0">
                              <X className="w-4 h-4 text-slate-400" />
                            </div>
                            <span className="text-slate-500">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button
                        className={`w-full text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                            : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`
                        }`}
                      >
                        {plan.cta === "Contact Sales" ? (
                          <>
                            <Phone className="w-5 h-5 mr-2" />
                            {plan.cta}
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5 mr-2" />
                            {plan.cta}
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>

                      {/* Contact options for enterprise */}
                      {plan.name === "Enterprise" && (
                        <div className="mt-6 flex justify-center space-x-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full bg-transparent"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full bg-transparent"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Money-back guarantee */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Shield className="w-8 h-8 text-green-500" />
                <div className="text-left">
                  <div className="font-bold text-slate-900">
                    30-Day Money-Back Guarantee
                  </div>
                  <div className="text-sm text-slate-600">
                    Not satisfied? Get a full refund, no questions asked.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 lg:py-32 bg-white/50 backdrop-blur-sm relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                <Heart className="w-4 h-4 mr-2" />
                Got Questions?
              </Badge>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed">
                Everything you need to know about VetVault pricing and features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {faq.answer}
                    </p>

                    {/* Animated bottom border */}
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform origin-left transition-all duration-700 group-hover:scale-x-100 scale-x-0"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact support card */}
            <Card className="mt-12 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <MessageCircle className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Still have questions?
                </h3>

                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Our friendly support team is here to help you choose the
                  perfect plan for your practice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with Sales
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-indigo-200 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:32px_32px] animate-pulse"></div>

          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-8 px-8 py-4 text-lg font-bold backdrop-blur-sm rounded-full shadow-2xl animate-bounce">
              <Award className="w-6 h-6 mr-3" />
              Join 5,000+ Happy Practices
            </Badge>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Transform{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent animate-pulse">
                Your Practice?
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-indigo-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Start your free 14-day trial today and experience the future of
              veterinary practice management.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-white/25 transform hover:scale-110 transition-all duration-500 group"
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white/50 text-white hover:bg-white/20 text-xl px-12 py-6 rounded-2xl backdrop-blur-md bg-white/10 transform hover:scale-110 transition-all duration-500"
              >
                <Phone className="w-6 h-6 mr-3" />
                Talk to Sales
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-indigo-200">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                <span className="text-lg">14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                <span className="text-lg">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                <span className="text-lg">Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
