"use client";
import { Button } from "@/components/ui/button";

export default function DiscoverSection() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-8">
          Discover the only <span className="text-cyan-500">all-in-one</span>{" "}
          veterinary software for animal hospitals
        </h2>
        <Button
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 rounded-lg"
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
}
