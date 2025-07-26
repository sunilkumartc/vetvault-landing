"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Manager/Technician",
    clinic: "Paws & Claws Veterinary Hospital",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    quote:
      "First and foremost, the software is so easy to use and very functional. One of the great things about it is being able to access it ANYWHERE. The pet-parent portal is also genius, and our clients are definitely fans! The chat function and diary updates are great for managing difficult cases.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "CVO",
    clinic: "Veterinary United",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
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
    quote:
      "We've been using VetVault for about 18 months now, and it's been a successful, smooth transition. There are several really neat features that our staff have been enjoying, mainly because they align with the modern workflow.",
    rating: 5,
  },
  {
    name: "Dr. James Wilson",
    role: "Practice Owner",
    clinic: "Eagleswood Veterinary Hospital",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    quote:
      "VetVault bills itself as 'modern veterinary software you wish you'd had sooner,' which is straightforward as it sounds. It also happens to be true... It's like upgrading from a PDA to an iPhone, it just works.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-indigo-600 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your peers in other 🇺🇸 general practices are in awe!
          </h2>
          <p className="text-xl text-indigo-100">
            See what veterinary professionals are saying about VetVault
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm border-0 p-6 hover:bg-opacity-20 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-white mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-indigo-200 text-sm">
                      {testimonial.role} at {testimonial.clinic}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial
                  ? "bg-white"
                  : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
