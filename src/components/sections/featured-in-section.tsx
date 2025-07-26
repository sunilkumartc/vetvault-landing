"use client";
import Image from "next/image";

const trustedLogos = [
  {
    name: "TechCrunch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/TechCrunch_logo.svg",
    width: 120,
    height: 30,
  },
  {
    name: "DVM 360",
    logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=DVM360",
    width: 120,
    height: 60,
  },
  {
    name: "VetTech",
    logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=VetTech",
    width: 120,
    height: 60,
  },
  {
    name: "AVMA",
    logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=AVMA",
    width: 120,
    height: 60,
  },
  {
    name: "SAVE",
    logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=SAVE",
    width: 120,
    height: 60,
  },
];

export default function FeaturedInSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-slate-500 font-medium mb-4">FEATURED IN</p>
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
      </div>
    </section>
  );
}
