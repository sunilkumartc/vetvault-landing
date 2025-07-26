"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  PawPrint,
  Menu,
  Zap,
  FileText,
  Database,
  Smartphone,
  Users,
  Shield,
  BookOpen,
  HelpCircle,
  Download,
} from "lucide-react";

const solutionsItems = [
  {
    title: "Small Practices",
    description: "Perfect for clinics with 1-5 veterinarians",
    icon: <Users className="w-4 h-4" />,
    href: "/solutions/small-practices",
  },
  {
    title: "Multi-Location",
    description: "Manage multiple clinic locations seamlessly",
    icon: <Database className="w-4 h-4" />,
    href: "/solutions/multi-location",
  },
  {
    title: "Mobile Vets",
    description: "On-the-go veterinary services",
    icon: <Smartphone className="w-4 h-4" />,
    href: "/solutions/mobile-vets",
  },
  {
    title: "Emergency Clinics",
    description: "24/7 emergency veterinary care",
    icon: <Shield className="w-4 h-4" />,
    href: "/solutions/emergency",
  },
];

const resourcesItems = [
  {
    title: "Help Center",
    description: "Get support and find answers",
    icon: <HelpCircle className="w-4 h-4" />,
    href: "/resources/help",
  },
  {
    title: "Downloads",
    description: "Apps and resources",
    icon: <Download className="w-4 h-4" />,
    href: "/resources/downloads",
  },
  {
    title: "Blog",
    description: "Latest veterinary insights",
    icon: <BookOpen className="w-4 h-4" />,
    href: "/resources/blog",
  },
  {
    title: "Case Studies",
    description: "Success stories from clinics",
    icon: <FileText className="w-4 h-4" />,
    href: "/resources/case-studies",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-6">
            <PawPrint className="w-8 h-8 text-cyan-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-900">VetVault</h1>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-600 hover:text-slate-900">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    {solutionsItems.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/features"
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-md transition-colors"
                >
                  Features
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/ai-assistant"
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-md transition-colors flex items-center"
                >
                  <Zap className="w-4 h-4 mr-1 text-indigo-500" /> AI Assistant
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/integrations"
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-md transition-colors"
                >
                  Integrations
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/pricing"
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-md transition-colors"
                >
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/academy"
                  className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-md transition-colors"
                >
                  Academy
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-600 hover:text-slate-900">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    {resourcesItems.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-cyan-500 hover:text-cyan-600"
            >
              Login
            </Button>
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-slate-700"
            >
              Help Center
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/solutions"
                  className="text-slate-600 hover:text-slate-900 py-2"
                >
                  Solutions
                </Link>
                <Link
                  href="/features"
                  className="text-slate-600 hover:text-slate-900 py-2"
                >
                  Features
                </Link>
                <Link
                  href="/ai-assistant"
                  className="text-slate-600 hover:text-slate-900 py-2 flex items-center"
                >
                  <Zap className="w-4 h-4 mr-2 text-indigo-500" /> AI Assistant
                </Link>
                <Link
                  href="/integrations"
                  className="text-slate-600 hover:text-slate-900 py-2"
                >
                  Integrations
                </Link>
                <Link
                  href="/pricing"
                  className="text-slate-600 hover:text-slate-900 py-2"
                >
                  Pricing
                </Link>
                <Link
                  href="/academy"
                  className="text-slate-600 hover:text-slate-900 py-2"
                >
                  Academy
                </Link>
                <Link
                  href="/resources"
                  className="text-slate-600 hover:text-slate-900 py-2"
                >
                  Resources
                </Link>

                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button
                    variant="ghost"
                    className="justify-start text-cyan-500"
                  >
                    Login
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-slate-600"
                  >
                    Help Center
                  </Button>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
