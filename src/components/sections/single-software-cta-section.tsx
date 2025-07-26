"use client";
import { Button } from "@/components/ui/button";

export default function SingleSoftwareCTASection() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          A single veterinary software to achieve more with{" "}
          <span className="text-cyan-300">less work</span>
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          VetVault is the all-in-one veterinary practice management software
          that allows you to run your entire practice with one single tool. We
          are your trusted partner to enhance patient engagement, streamline
          your processes, and grow your practice.
        </p>
        <Button
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 text-lg px-8 py-4 rounded-lg"
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
}
