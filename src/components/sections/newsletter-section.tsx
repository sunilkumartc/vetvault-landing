"use client";
import { useState } from "react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }, 1000);
  };

  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-8">
          Stay in touch! Join our newsletter
        </h3>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8"
            disabled={isSubscribing}
          >
            {isSubscribing ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
