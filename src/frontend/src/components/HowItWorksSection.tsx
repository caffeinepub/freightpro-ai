import { Button } from "@/components/ui/button";
import { Phone, Search, UserPlus } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Create Account",
    description:
      "Create your carrier account in minutes. No setup fees, no long contracts.",
  },
  {
    num: "02",
    icon: Search,
    title: "Search Drivers",
    description:
      "Search verified CDL drivers using powerful filters — location, experience, endorsements.",
  },
  {
    num: "03",
    icon: Phone,
    title: "Hire & Contact",
    description:
      "Contact drivers directly and hire without paying any recruiting agency fees.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Hire Drivers in{" "}
            <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From account creation to your first hire — the entire process takes
            hours, not weeks.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-1/2 -translate-x-1/2 w-[calc(66.67%-4rem)] h-0.5 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-electric" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ num, icon: Icon, title, description }) => (
              <div key={num} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-blue flex flex-col items-center justify-center shadow-blue-md">
                    <span className="text-xs font-bold text-blue-200 mb-0.5">
                      {num}
                    </span>
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-brand-navy hover:bg-brand-blue text-white font-semibold rounded-xl px-8 shadow-blue-md transition-all hover:-translate-y-0.5 hover:shadow-blue-lg"
            data-ocid="how_it_works.primary_button"
            onClick={() =>
              document
                .getElementById("signup")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Hiring Drivers
          </Button>
        </div>
      </div>
    </section>
  );
}
