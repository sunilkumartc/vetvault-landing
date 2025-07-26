"use client";
import Image from "next/image";

export default function NurtureRelationshipsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Nurture <span className="text-indigo-600">relationships</span> and{" "}
              <span className="text-cyan-500">increase</span> compliance
            </h2>
            <div className="w-16 h-1 bg-cyan-500"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              You no longer need multiple, disconnected tools. Our veterinary
              management software makes the entire patient journey easier and
              faster — for you and your patients. Retain your clients by giving
              them a modern experience before, during, and after the visit.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop"
              alt="Veterinarian with dog"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face"
                  alt="Dr. Miriam Simpson"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-sm">Miriam Simpson</div>
                  <div className="text-xs text-slate-500">DVM</div>
                </div>
              </div>
              <div className="flex space-x-2 mt-2 text-xs text-slate-400">
                <span>10:00 AM</span>
                <span>11:00 AM</span>
                <span>12:00 PM</span>
                <span>03:00 PM</span>
                <span>05:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
