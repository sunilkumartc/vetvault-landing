"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
  Heart,
  ChevronDown,
  ChevronRight,
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
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo - Left Corner */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <PawPrint className="w-7 h-7 text-cyan-500 mr-2 group-hover:scale-110 transition-transform duration-200" />
              <Sparkles className="w-2.5 h-2.5 text-indigo-500 absolute -top-1 -right-1 group-hover:animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">VetVault</h1>
              <p className="text-xs text-slate-500 -mt-1">Digital Sanctuary</p>
            </div>
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
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

            {/* Start Magic Button - Right Margin */}
            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Start Magic
            </Button>
          </div>

          {/* Mobile Menu - Right Side */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0">
              <SheetHeader className="p-6 border-b bg-slate-50">
                <SheetTitle className="flex items-center">
                  <div className="relative">
                    <PawPrint className="w-6 h-6 text-cyan-500 mr-3" />
                    <Sparkles className="w-2 h-2 text-indigo-500 absolute -top-0.5 -right-0.5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      VetVault
                    </h3>
                    <p className="text-xs text-slate-500 -mt-0.5">
                      Digital Sanctuary
                    </p>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="py-4">
                <div className="space-y-1">
                  {/* Solutions with Submenu */}
                  <div>
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className="flex items-center justify-between w-full px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-medium">Solutions</span>
                      {solutionsOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {solutionsOpen && (
                      <div className="bg-slate-50 border-l-2 border-indigo-200 ml-6">
                        {solutionsItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center px-6 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mr-3">{item.icon}</span>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <Link
                    href="/features"
                    className="flex items-center px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>

                  {/* Pet Vault AI */}
                  <Link
                    href="/ai-assistant"
                    className="flex items-center px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Zap className="w-4 h-4 mr-2 text-indigo-500" />
                    <span className="relative">
                      Pet Vault AI
                      <Sparkles className="w-2 h-2 text-cyan-500 absolute -top-1 -right-2" />
                    </span>
                  </Link>

                  {/* Integrations */}
                  <Link
                    href="/integrations"
                    className="flex items-center px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Integrations
                  </Link>

                  {/* Pricing */}
                  <Link
                    href="/pricing"
                    className="flex items-center px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>

                  {/* Academy */}
                  <Link
                    href="/academy"
                    className="flex items-center px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Academy
                  </Link>

                  {/* Resources with Submenu */}
                  <div>
                    <button
                      onClick={() => setResourcesOpen(!resourcesOpen)}
                      className="flex items-center justify-between w-full px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-medium">Resources</span>
                      {resourcesOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {resourcesOpen && (
                      <div className="bg-slate-50 border-l-2 border-indigo-200 ml-6">
                        {resourcesItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center px-6 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mr-3">{item.icon}</span>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Start Magic Button */}
                <div className="px-6 pt-6 border-t mt-6">
                  <Button
                    size="sm"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
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
