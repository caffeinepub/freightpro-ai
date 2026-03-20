import { Brain, Truck, User } from "lucide-react";

const drivers = [
  {
    name: "James T.",
    cdlType: "CDL-A",
    endorsements: "HazMat, Tanker",
    routes: "OTR / Long Haul",
    initials: "JT",
    color: "bg-blue-600",
  },
  {
    name: "Maria L.",
    cdlType: "CDL-A",
    endorsements: "Doubles/Triples",
    routes: "Regional",
    initials: "ML",
    color: "bg-violet-600",
  },
];

const carriers = [
  {
    name: "Swift Freight Co.",
    fleet: "50+ Trucks",
    routeType: "OTR National",
    needs: "5 CDL-A Drivers",
  },
  {
    name: "MidWest Transport",
    fleet: "20 Trucks",
    routeType: "Regional",
    needs: "3 CDL-B Drivers",
  },
];

export function AIMatchingSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            AI Matching Between{" "}
            <span className="text-gradient">Drivers and Carriers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our intelligent engine analyzes driver profiles and carrier
            requirements to surface the best matches instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Driver cards */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center lg:text-left">
              Available Drivers
            </p>
            {drivers.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl p-4 border border-border shadow-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full ${d.color} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {d.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {d.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {d.cdlType} Licensed
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Endorsements
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {d.endorsements}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Routes
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {d.routes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Engine */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-blue flex flex-col items-center justify-center shadow-blue-lg animate-pulse-glow">
                <Brain className="w-12 h-12 text-white mb-1" />
                <span className="text-white text-xs font-bold">
                  FreightPro AI
                </span>
              </div>
              {/* Connection lines visual */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent to-brand-blue opacity-50 hidden lg:block" />
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-16 h-0.5 bg-gradient-to-l from-transparent to-brand-blue opacity-50 hidden lg:block" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-foreground">
                Intelligent Matching
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Analyzing 15,000+ profiles
              </p>
            </div>
            <div className="flex gap-2 mt-3">
              {["Experience", "Location", "Routes"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 bg-blue-50 text-brand-blue border border-blue-200 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Carrier cards */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center lg:text-left">
              Hiring Carriers
            </p>
            {carriers.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl p-4 border border-border shadow-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {c.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{c.fleet}</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Route Type
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {c.routeType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Hiring
                    </span>
                    <span className="text-xs font-medium text-brand-blue">
                      {c.needs}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
