import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Drivers", href: "#drivers" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center">
              <Truck className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              FreightPro <span className="text-brand-blue">AI</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-ocid={`nav.${item.label.toLowerCase().replace(/ /g, "_")}.link`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-sm"
              data-ocid="nav.login.button"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-brand-navy hover:bg-brand-blue text-white text-sm font-medium rounded-xl transition-colors"
              data-ocid="nav.cta.primary_button"
              onClick={() =>
                document
                  .getElementById("signup")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
