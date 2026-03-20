import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Play, Star, Zap } from "lucide-react";

const driverCards = [
  {
    name: "Marcus Johnson",
    location: "Dallas, TX",
    experience: "9 Years",
    route: "OTR / Long Haul",
    endorsements: ["HazMat", "Tanker"],
    initials: "MJ",
    color: "bg-blue-600",
  },
  {
    name: "Sarah Williams",
    location: "Phoenix, AZ",
    experience: "6 Years",
    route: "Regional",
    endorsements: ["Doubles", "CDL-A"],
    initials: "SW",
    color: "bg-violet-600",
  },
  {
    name: "Diego Ramirez",
    location: "Chicago, IL",
    experience: "12 Years",
    route: "Flatbed",
    endorsements: ["Tanker", "HazMat"],
    initials: "DR",
    color: "bg-emerald-600",
  },
];

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 lg:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <Badge className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-brand-blue border-blue-200 rounded-full text-sm font-medium">
              <Zap className="w-3.5 h-3.5" />
              AI-Powered Trucking Recruitment
            </Badge>

            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl lg:text-6xl leading-[1.08] tracking-tight text-foreground">
                Hire Qualified{" "}
                <span className="text-gradient">CDL Drivers</span> Faster with
                AI Matching
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Search verified CDL drivers by experience, route preference,
                endorsements, and location. FreightPro helps carriers hire
                drivers without expensive recruiting agencies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-brand-navy hover:bg-brand-blue text-white font-semibold rounded-xl px-6 shadow-blue-md transition-all hover:shadow-blue-lg hover:-translate-y-0.5"
                data-ocid="hero.primary_button"
                onClick={() =>
                  document
                    .getElementById("signup")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Find Drivers Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-6 gap-2 border-border hover:bg-muted font-semibold"
                data-ocid="hero.secondary_button"
              >
                <div className="w-7 h-7 rounded-full bg-brand-navy flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              {[
                "15,000+ Drivers on Platform",
                "1,200+ Carriers Hiring",
                "DOT Verified Profiles",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div
              className="absolute -top-6 -left-4 z-20 glass-card rounded-2xl px-3.5 py-2.5 shadow-card animate-float-slow"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">
                  New Match Found
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                3 drivers match your criteria
              </p>
            </div>

            <div
              className="absolute -bottom-4 -right-2 z-20 glass-card rounded-2xl px-3.5 py-2.5 shadow-card animate-float-slow2"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span className="text-xs font-bold text-foreground">
                  98% Match Score
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Marcus J. — Perfect fit
              </p>
            </div>

            <div
              className="absolute top-1/2 -right-6 z-20 glass-card rounded-2xl px-3.5 py-2.5 shadow-card animate-float"
              style={{ transform: "translateY(-50%) rotate(1.5deg)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-xs font-semibold text-foreground">
                  Driver Available
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Ready to start Monday
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-blue-lg border border-border overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-muted-foreground border border-border">
                  app.freightpro.ai/drivers
                </div>
              </div>
              <div className="p-4 bg-[#F8FAFC]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-foreground">
                    Driver Search Results
                  </h3>
                  <Badge className="bg-blue-50 text-brand-blue border-blue-200 text-xs">
                    47 Available
                  </Badge>
                </div>
                <div className="space-y-2.5">
                  {driverCards.map((driver) => (
                    <div
                      key={driver.name}
                      className="bg-white rounded-xl p-3 border border-border shadow-xs flex items-center gap-3"
                    >
                      <div
                        className={`w-9 h-9 rounded-full ${driver.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                      >
                        {driver.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-foreground truncate">
                            {driver.name}
                          </p>
                          <div className="flex gap-1">
                            {driver.endorsements.map((e) => (
                              <span
                                key={e}
                                className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-brand-blue rounded-full font-medium"
                              >
                                {e}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5" />
                            {driver.location}
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {driver.experience}
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {driver.route}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-[10px] px-2.5 py-1 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-blue transition-colors flex-shrink-0"
                      >
                        Contact
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
