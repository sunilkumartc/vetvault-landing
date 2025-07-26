"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MeowCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-200 rounded-3xl p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-6">
                {"It's meow or never!"}
              </h2>
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 rounded-lg"
              >
                Book a Demo
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop"
                alt="Cute cat with winter hat"
                width={256}
                height={256}
                className="w-64 h-64 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
