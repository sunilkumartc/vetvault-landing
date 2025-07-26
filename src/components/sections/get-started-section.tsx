"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function GetStartedSection() {
  const [email, setEmail] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStartTrial = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/public/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clinicName: clinicName,
          email: email,
          password: Math.random().toString(36).slice(-8),
          ownerName: email.split("@")[0],
          plan: "trial",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        window.location.href = result.login_url;
      } else {
        const error = await response.json();
        alert(error.error || "Failed to create clinic. Please try again.");
      }
    } catch (error) {
      console.error("Error creating clinic:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-started" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Ready to transform your clinic?
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Get started with a free 14-day trial. No credit card required.
        </p>

        <Card className="max-w-md mx-auto shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleStartTrial} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Clinic Name"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 text-lg bg-indigo-600 hover:bg-indigo-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Start Free Trial"}
              </Button>
            </form>
            <p className="text-sm text-slate-500 mt-6">
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
