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
  Sparkles,
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
        <div className="flex items-center py-3">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center mr-8 group">
            <div className="relative">
              <PawPrint className="w-7 h-7 text-cyan-500 mr-2 group-hover:scale-110 transition-transform duration-200" />
              <Sparkles className="w-2.5 h-2.5 text-indigo-500 absolute -top-1 -right-1 group-hover:animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">VetVault</h1>
              <p className="text-xs text-slate-500 -mt-1">Digital Sanctuary</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex flex-1">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-600 hover:text-slate-900 text-sm px-3 py-2">
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
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md transition-colors text-sm"
                >
                  Features
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/ai-assistant"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md transition-colors flex items-center text-sm whitespace-nowrap"
                >
                  <Zap className="w-4 h-4 mr-1 text-indigo-500" />
                  <span className="relative">
                    Pet Vault AI
                    <Sparkles className="w-2 h-2 text-cyan-500 absolute -top-1 -right-2" />
                  </span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/integrations"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md transition-colors text-sm"
                >
                  Integrations
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/pricing"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md transition-colors text-sm"
                >
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/academy"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md transition-colors text-sm"
                >
                  Academy
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-600 hover:text-slate-900 text-sm px-3 py-2">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
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
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-cyan-500 hover:text-cyan-600 text-sm"
            >
              Login
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-slate-700 text-sm"
            >
              Help Center
            </Button>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Start Magic
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
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
                  <Zap className="w-4 h-4 mr-2 text-indigo-500" />
                  <span className="relative">
                    Pet Vault AI
                    <Sparkles className="w-2 h-2 text-cyan-500 absolute -top-1 -right-2" />
                  </span>
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
                    size="sm"
                    className="justify-start text-cyan-500"
                  >
                    Login
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-slate-600"
                  >
                    Help Center
                  </Button>
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Start Magic
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
