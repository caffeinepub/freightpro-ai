import { ChevronDown, MapPin } from "lucide-react";

const filters = [
  {
    label: "Location",
    options: ["Dallas, TX", "Phoenix, AZ", "Chicago, IL", "Any"],
  },
  {
    label: "Experience",
    options: ["0-2 years", "3-5 years", "6-10 years", "10+ years"],
  },
  {
    label: "Route Type",
    checkboxes: ["OTR / Long Haul", "Regional", "Local", "Flatbed"],
  },
  {
    label: "Endorsements",
    checkboxes: ["HazMat", "Tanker", "Doubles", "Passenger"],
  },
];

const drivers = [
  {
    name: "Marcus Johnson",
    exp: "9 Yrs",
    route: "OTR",
    available: true,
    initials: "MJ",
    color: "bg-blue-600",
  },
  {
    name: "Priya Sharma",
    exp: "5 Yrs",
    route: "Regional",
    available: true,
    initials: "PS",
    color: "bg-violet-600",
  },
  {
    name: "Tom Bradley",
    exp: "12 Yrs",
    route: "Flatbed",
    available: false,
    initials: "TB",
    color: "bg-emerald-600",
  },
  {
    name: "Angela Chen",
    exp: "7 Yrs",
    route: "Local",
    available: true,
    initials: "AC",
    color: "bg-rose-500",
  },
];

export function ProductSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Search Drivers Like a{" "}
            <span className="text-gradient">Marketplace</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A powerful, intuitive search interface built for logistics
            professionals.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-border shadow-blue-lg overflow-hidden">
          <div className="bg-muted px-5 py-3 border-b border-border flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 max-w-sm bg-white rounded-md px-3 py-1.5 text-xs text-muted-foreground border border-border">
              app.freightpro.ai/search
            </div>
          </div>

          <div className="flex bg-[#F8FAFC] min-h-[480px]">
            <div className="w-52 flex-shrink-0 bg-white border-r border-border p-4 space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Filters
              </p>
              {filters.map((f) => (
                <div key={f.label}>
                  <p className="text-xs font-semibold text-foreground mb-2">
                    {f.label}
                  </p>
                  {f.options ? (
                    <div className="relative">
                      <select className="w-full text-xs border border-border rounded-lg px-2.5 py-2 appearance-none bg-white text-foreground">
                        {f.options.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      {f.checkboxes?.map((c) => (
                        <label
                          key={c}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="w-3.5 h-3.5 rounded accent-brand-blue"
                            defaultChecked={
                              c === "HazMat" || c === "OTR / Long Haul"
                            }
                          />
                          <span className="text-xs text-foreground">{c}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-foreground">
                  47 drivers found
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="text-xs px-3 py-1.5 bg-blue-50 text-brand-blue border border-blue-200 rounded-lg font-medium"
                  >
                    Best Match
                  </button>
                  <button
                    type="button"
                    className="text-xs px-3 py-1.5 bg-white text-muted-foreground border border-border rounded-lg"
                  >
                    Experience
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {drivers.map((d) => (
                  <div
                    key={d.name}
                    className="bg-white rounded-xl p-4 border border-border shadow-xs hover:shadow-card-hover hover:-translate-y-0.5 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-full ${d.color} flex items-center justify-center text-white text-sm font-bold`}
                        >
                          {d.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">
                            {d.name}
                          </p>
                          <span
                            className={`text-[11px] px-1.5 py-0.5 rounded-full font-medium ${d.available ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}
                          >
                            {d.available ? "● Available" : "○ Not Available"}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-2 py-1 rounded-lg">
                        {d.exp}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {d.route} Route
                      </span>
                    </div>
                    <button
                      type="button"
                      className="w-full text-xs py-2 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-blue transition-colors group-hover:bg-brand-blue"
                    >
                      Contact Driver
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
