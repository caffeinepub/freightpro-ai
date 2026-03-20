import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#0A1640]">
      {/* Animated orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[100px] animate-orb"
        style={{ background: "oklch(0.54 0.22 258 / 0.25)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-orb2"
        style={{ background: "oklch(0.42 0.16 280 / 0.2)" }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-48 h-48 rounded-full blur-[80px] animate-orb"
        style={{
          background: "oklch(0.65 0.2 240 / 0.15)",
          animationDelay: "3s",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Start Hiring CDL Drivers{" "}
          <span className="text-gradient-light">Today</span>
        </h2>
        <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of carriers who found their drivers on FreightPro. No
          recruiting fees, no agencies, just results.
        </p>
        <Button
          size="lg"
          className="bg-white text-brand-navy hover:bg-blue-50 font-bold rounded-xl px-10 py-6 text-base shadow-blue-md transition-all hover:-translate-y-0.5 hover:shadow-blue-lg gap-2"
          data-ocid="final_cta.primary_button"
          onClick={() =>
            document
              .getElementById("signup")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Create Carrier Account
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
