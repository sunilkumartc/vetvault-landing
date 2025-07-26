"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const footerSections = [
  {
    title: "OUR SOFTWARE",
    links: [
      { name: "PIMS Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
      { name: "Pet Parent App", href: "/pet-parent-app" },
      { name: "Get the App 📱", href: "/mobile-app" },
    ],
  },
  {
    title: "FOR ANIMAL HOSPITALS",
    links: [
      { name: "Small Practices", href: "/solutions/small-practices" },
      { name: "Multi Locations", href: "/solutions/multi-location" },
      { name: "Mobile Vets", href: "/solutions/mobile-vets" },
      { name: "Emergency Clinics", href: "/solutions/emergency" },
    ],
  },
  {
    title: "COMPARE",
    links: [
      { name: "VetVault vs. AVImark", href: "/compare/avimark" },
      { name: "VetVault vs. Impromed", href: "/compare/impromed" },
      { name: "VetVault vs. Cornerstone", href: "/compare/cornerstone" },
      { name: "VetVault vs. Hippo", href: "/compare/hippo" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Help Center", href: "/resources/help" },
      { name: "Academy", href: "/academy" },
      { name: "Blog", href: "/resources/blog" },
      { name: "Case Studies", href: "/resources/case-studies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <PawPrint className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold">VetVault</h3>
            </div>
            <p className="text-slate-400 mb-6">
              The <span className="text-cyan-400">all-in-one</span> software for
              animal hospitals
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 mb-6">
              Book a Demo
            </Button>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-6 text-lg text-slate-300">
                {section.title}
              </h4>
              <ul className="space-y-3 text-slate-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-center md:text-left">
              &copy; 2024 VetVault. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
