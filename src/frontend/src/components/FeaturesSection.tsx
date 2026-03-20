import {
  Brain,
  MessageSquare,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Driver Matching",
    description:
      "FreightPro recommends drivers based on your fleet requirements, route types, and compliance needs.",
    accent: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-sm",
  },
  {
    icon: SlidersHorizontal,
    title: "Advanced Search Filters",
    description:
      "Filter drivers by endorsements, experience level, route preference, and geographic availability.",
    accent: "from-violet-500 to-purple-600",
    glow: "shadow-[0_4px_20px_-4px_rgba(139,92,246,0.3)]",
  },
  {
    icon: ShieldCheck,
    title: "Verified Driver Profiles",
    description:
      "Driver credentials include CDL verification, DOT compliance checks, and background screening.",
    accent: "from-emerald-500 to-teal-600",
    glow: "shadow-[0_4px_20px_-4px_rgba(16,185,129,0.3)]",
  },
  {
    icon: MessageSquare,
    title: "Direct Driver Contact",
    description:
      "Contact drivers instantly without recruiter fees. Pay only for what you need.",
    accent: "from-amber-500 to-orange-500",
    glow: "shadow-[0_4px_20px_-4px_rgba(245,158,11,0.3)]",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Hire Faster</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Purpose-built tools for carriers who need to hire CDL drivers
            without the traditional recruiting overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, description, accent, glow }) => (
            <div
              key={title}
              className={`glass-card rounded-2xl p-7 ${glow} hover:scale-[1.01] transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 shadow-sm`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
