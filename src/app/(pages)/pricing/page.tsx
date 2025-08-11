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
  ArrowRight,
  Shield,
  Clock,
  Users,
  Zap,
  Crown,
  Gift,
  Phone,
  Mail,
  MessageCircle,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";

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
    icon: <Users className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-600",
    savings: null,
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
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    savings: "Save $300/year",
  },
  {
    name: "Enterprise",
    price: "$249",
    period: "per month",
    description: "For large practices and multi-location clinics",
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
    icon: <Crown className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600",
    savings: "Custom pricing",
  },
];

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "99.9% Uptime",
    description: "Reliable service you can count on",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Help when you need it most",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "14-Day Free Trial",
    description: "No credit card required",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Industry Leading",
    description: "Trusted by 5,000+ practices",
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
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, ACH transfers, and can set up custom billing arrangements for enterprise clients.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your data is backed up daily and stored securely.",
  },
];

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section - Enhanced */}
        <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Floating Badge */}
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 mb-6 px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce">
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                Simple, Transparent Pricing
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Perfect Plan
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transparent pricing designed for veterinary practices of all
                sizes. Start with a 14-day free trial, no credit card required.
              </p>

              {/* Enhanced Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center text-slate-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-2 animate-pulse" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center text-slate-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Heart className="w-5 h-5 text-red-400 fill-current mr-2 animate-pulse" />
                  <span className="font-semibold">5,000+ Happy Practices</span>
                </div>
                <div className="flex items-center text-slate-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Shield className="w-5 h-5 text-green-400 mr-2 animate-pulse" />
                  <span className="font-semibold">HIPAA Compliant</span>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    {benefit.title}
                  </div>
                  <div className="text-xs text-slate-600">
                    {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards - Ultimate Design */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Plans That{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Scale With You
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From small practices to enterprise clinics, we have the perfect
                solution
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative group overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                    plan.popular
                      ? "ring-2 ring-indigo-500 shadow-2xl scale-105 bg-gradient-to-br from-white to-indigo-50"
                      : "hover:shadow-xl bg-white"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 px-6 py-2 shadow-lg animate-bounce">
                        <Crown className="w-4 h-4 mr-2" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Savings Badge */}
                  {plan.savings && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-3 py-1 text-xs animate-pulse">
                        {plan.savings}
                      </Badge>
                    </div>
                  )}

                  {/* Gradient Background Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardHeader className="text-center pb-8 relative z-10">
                    {/* Plan Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      {plan.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>

                    <div className="mb-4">
                      <span className="text-5xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                        {plan.price}
                      </span>
                      <span className="text-slate-600 ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center group/item"
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}

                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center opacity-50"
                        >
                          <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <X className="w-4 h-4 text-slate-400" />
                          </div>
                          <span className="text-slate-500">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full text-lg py-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                        plan.popular
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>

                    {/* Contact Options for Enterprise */}
                    {plan.name === "Enterprise" && (
                      <div className="mt-6 flex justify-center space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 bg-transparent"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Sales
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 bg-transparent"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Live Chat
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-green-700 font-semibold">
                  30-day money-back guarantee on all plans
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-16 lg:py-24 bg-white relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50 border-0 shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Support */}
            <div className="text-center mt-12">
              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Our team is here to help you choose the right plan for your
                    practice
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                    <Button
                      variant="outline"
                      className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px] animate-pulse"></div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce delay-500"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-sm font-semibold backdrop-blur-sm animate-bounce">
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Ready to Get Started?
              </Badge>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Your{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                Free Trial Today
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-indigo-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join thousands of veterinary practices already using VetVault to
              streamline their operations and improve patient care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-transparent font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Sales
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-indigo-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
