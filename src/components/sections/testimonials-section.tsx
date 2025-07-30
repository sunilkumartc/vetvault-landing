"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Practice Owner",
    clinic: "Paws & Claws Veterinary Hospital",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    petImage: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=100&h=100&fit=crop&crop=center",
    quote:
      "First and foremost, the software is so easy to use and very functional. One of the great things about it is being able to access it ANYWHERE. The pet-parent portal is also genius, and our clients are definitely fans! The chat function and diary updates are great for managing difficult cases.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "Chief Veterinary Officer",
    clinic: "Veterinary United",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    petImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop&crop=center",
    quote:
      "Now we can get a real-time snapshot of what's going on with our business, quickly identify trends, gauge efficiency, and make data-driven decisions. Tasks that previously consumed two weeks now require just five minutes.",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Office Manager & RVT",
    clinic: "FenVet",
    image:
      "https://images.unsplash.com/photo-1594824388853-d0c2d4e5b1b5?w=150&h=150&fit=crop&crop=face",
    petImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=100&h=100&fit=crop&crop=center",
    quote:
      "We've been using VetVault for about 18 months now, and it's been a successful, smooth transition. There are several really neat features that our staff have been enjoying, mainly because they align with the modern workflow.",
    rating: 5,
  },
  {
    name: "Dr. James Wilson",
    role: "Practice Owner",
    clinic: "Companion Animal Hospital",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop&crop=center",
    quote:
      "The Pet Vault AI assistant has revolutionized how we handle documentation. What used to take 30 minutes now takes 5 minutes, and the quality is even better. Our team can focus more on patient care.",
    rating: 5,
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Emergency Veterinarian",
    clinic: "24/7 Emergency Animal Hospital",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    petImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=100&h=100&fit=crop&crop=center",
    quote:
      "In emergency situations, every second counts. VetVault's rapid patient intake and AI-powered insights help us make faster, more accurate decisions. It's like having an extra set of expert eyes.",
    rating: 5,
  },
  {
    name: "Dr. David Martinez",
    role: "Mobile Veterinarian",
    clinic: "House Call Vet Services",
    image:
      "https://images.unsplash.com/photo-1594824388853-d0c2d4e5b1b5?w=150&h=150&fit=crop&crop=face",
    petImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=100&h=100&fit=crop&crop=center",
    quote:
      "As a mobile vet, I need everything to work seamlessly on the go. VetVault's mobile app and offline capabilities ensure I never lose patient data, even in areas with poor connectivity.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Loved by{" "}
            <span className="text-indigo-600">veterinarians</span>{" "}
            and their{" "}
            <span className="text-cyan-500">patients</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how VetVault is transforming veterinary practices and improving
            pet care across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src={testimonial.petImage}
                        alt="Patient pet"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <p className="text-sm text-indigo-600 font-medium">{testimonial.clinic}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-indigo-600"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
