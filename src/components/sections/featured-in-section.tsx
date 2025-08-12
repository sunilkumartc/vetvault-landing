"use client";
import Image from "next/image";

const trustedLogos = [
  {
    name: "Dr Ravi Pet Clinic",
    logo: "https://i.ibb.co/4Zjwkqhv/Whats-App-Image-2025-07-21-at-10-05-00-AM-1.jpg",
    width: 120,
    height: 60,
  },
  // {
  //   name: "Prestige Pet Hospital",
  //   logo: "https://i.ibb.co/4Zjwkqhv/Whats-App-Image-2025-07-21-at-10-05-00-AM-1.jpg",
  //   width: 120,
  //   height: 60,
  // },
  // {
  //   name: "Cartman Animal Hospital",
  //   logo: "https://i.ibb.co/4Zjwkqhv/Whats-App-Image-2025-07-21-at-10-05-00-AM-1.jpg",
  //   width: 120,
  //   height: 60,
  // },
  // {
  //   name: "AVMA",
  //   logo: "https://i.ibb.co/4Zjwkqhv/Whats-App-Image-2025-07-21-at-10-05-00-AM-1.jpg",
  //   width: 120,
  //   height: 60,
  // },
  // {
  //   name: "SAVE",
  //   logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=SAVE",
  //   width: 120,
  //   height: 60,
  // },
  // {
  //   name: "VetTech",
  //   logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=VetTech",
  //   width: 120,
  //   height: 60,
  // },
];

export default function FeaturedInSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-slate-500 font-medium mb-4">
            TRUSTED BY LEADING VETERINARY CLINICS
          </p>
          <p className="text-slate-600">
            TRUSTED BY 1000+ practices, 4000+ veterinarians, 10+ universities &
            shelters
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {trustedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">1000+</div>
              <div className="text-sm">Veterinary Practices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">4000+</div>
              <div className="text-sm">Veterinarians</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">50,000+</div>
              <div className="text-sm">Pets Cared For Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
