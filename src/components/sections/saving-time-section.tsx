"use client";
import Image from "next/image";

export default function SavingTimeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
              alt="Veterinarian with cat"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600">
              Saving time <span className="text-slate-900">can also be</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our AI-powered assistant helps you complete tasks faster, from
              generating SOAP notes to managing appointments. Focus on what
              matters most - caring for your patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
