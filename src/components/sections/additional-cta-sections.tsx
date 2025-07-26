"use client";
import { Button } from "@/components/ui/button";

// Additional CTA sections that can be used throughout the site
export function BookDemoCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to see VetVault in action?
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Book a personalized demo and discover how VetVault can transform your
          practice.
        </p>
        <Button
          size="lg"
          className="bg-white text-indigo-600 hover:bg-slate-100 text-lg px-8 py-4"
        >
          Book Your Demo Today
        </Button>
      </div>
    </section>
  );
}

export function FreeTrialCTA() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Free 14-Day Trial
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          No credit card required. Full access to all features. Cancel anytime.
        </p>
        <Button
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 text-lg px-8 py-4"
        >
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}
