const drivers = [
  {
    name: "Marcus Johnson",
    exp: "9 Years Experience",
    route: "OTR / Long Haul",
    endorsements: ["HazMat", "Tanker"],
    initials: "MJ",
    color: "bg-blue-500",
  },
  {
    name: "Priya Sharma",
    exp: "5 Years Experience",
    route: "Regional",
    endorsements: ["CDL-A", "Doubles"],
    initials: "PS",
    color: "bg-violet-500",
  },
  {
    name: "Tom Bradley",
    exp: "12 Years Experience",
    route: "Flatbed",
    endorsements: ["HazMat", "Tanker"],
    initials: "TB",
    color: "bg-emerald-500",
  },
  {
    name: "Angela Chen",
    exp: "7 Years Experience",
    route: "Local / City",
    endorsements: ["CDL-B", "Passenger"],
    initials: "AC",
    color: "bg-rose-500",
  },
  {
    name: "James Rivera",
    exp: "15 Years Experience",
    route: "OTR / Long Haul",
    endorsements: ["HazMat", "CDL-A"],
    initials: "JR",
    color: "bg-amber-500",
  },
  {
    name: "Lisa Thompson",
    exp: "4 Years Experience",
    route: "Regional",
    endorsements: ["Tanker", "Doubles"],
    initials: "LT",
    color: "bg-cyan-500",
  },
];

export function DriverMarketplaceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F1F5C] via-[#1E3A8A] to-[#1e3a8a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4">
            Thousands of Drivers{" "}
            <span className="text-gradient-light">Ready to Work</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Browse real, verified CDL driver profiles from across all 50 states.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {drivers.map((d) => (
            <div
              key={d.name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${d.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {d.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{d.name}</p>
                  <p className="text-blue-300 text-xs">{d.exp}</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs text-blue-300 mb-1">Route Preference</p>
                <p className="text-sm font-medium text-white">{d.route}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {d.endorsements.map((e) => (
                  <span
                    key={e}
                    className="text-[11px] px-2 py-0.5 bg-white/20 text-white border border-white/30 rounded-full font-medium"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="w-full text-xs py-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-lg font-medium transition-colors"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
