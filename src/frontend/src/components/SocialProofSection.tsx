import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We hired multiple CDL drivers within two weeks using FreightPro. The AI matching is incredibly accurate.",
    name: "Sarah M.",
    title: "Operations Manager",
    company: "Texas Logistics",
    initials: "SM",
    color: "bg-brand-navy",
  },
  {
    quote:
      "The AI matching saved us thousands in recruiting costs. We found 4 qualified drivers in under a week.",
    name: "James R.",
    title: "Fleet Manager",
    company: "MidWest Transport",
    initials: "JR",
    color: "bg-violet-600",
  },
  {
    quote:
      "Best platform for finding qualified CDL drivers fast. The verified profiles save us so much time.",
    name: "Carlos D.",
    title: "Owner",
    company: "Pacific Freight LLC",
    initials: "CD",
    color: "bg-emerald-600",
  },
];

const companies = [
  "Swift Freight",
  "MidWest Transport",
  "Pacific Freight LLC",
  "Texas Logistics",
  "National Carriers",
];

export function SocialProofSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Trusted by Carriers{" "}
            <span className="text-gradient">Across the U.S.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Over 1,200 carriers rely on FreightPro to fill their CDL driver
            seats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map(
            ({ quote, name, title, company, initials, color }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all"
              >
                <Quote className="w-8 h-8 text-brand-blue opacity-30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 text-sm">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {title}, {company}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Company logos */}
        <div className="border-t border-border pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Carriers already hiring on FreightPro
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((c) => (
              <div
                key={c}
                className="px-6 py-3 bg-muted rounded-xl border border-border text-sm font-medium text-muted-foreground"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
