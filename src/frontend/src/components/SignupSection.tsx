import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitCarrierSignup } from "@/hooks/useQueries";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";

const FLEET_SIZES = [
  { value: "1", label: "1-5 trucks" },
  { value: "6", label: "6-20 trucks" },
  { value: "21", label: "21-50 trucks" },
  { value: "51", label: "51-100 trucks" },
  { value: "101", label: "100+ trucks" },
];

export function SignupSection() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    mcOrUsdotNumber: "",
    fleetSize: "",
    hiringNeeds: "",
  });

  const mutation = useSubmitCarrierSignup();

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.companyName && form.workEmail && form.phoneNumber) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      companyName: form.companyName,
      workEmail: form.workEmail,
      phoneNumber: form.phoneNumber,
      mcOrUsdotNumber: form.mcOrUsdotNumber,
      fleetSize: BigInt(form.fleetSize || "1"),
      hiringNeeds: form.hiringNeeds,
    });
  };

  return (
    <section id="signup" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-xl mx-auto px-4 relative">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-3">
            Create Your <span className="text-gradient">Carrier Account</span>
          </h2>
          <p className="text-muted-foreground">
            Join 1,200+ carriers already hiring on FreightPro
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-border shadow-blue-lg p-8">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step === s
                      ? "bg-brand-navy text-white"
                      : s < step
                        ? "bg-emerald-500 text-white"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s < step ? <CheckCircle2 className="w-4 h-4" /> : s}
                </div>
                {s < 2 && (
                  <div
                    className={`w-12 h-0.5 ${step > 1 ? "bg-brand-blue" : "bg-border"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mb-6">
            Step {step} of 2 — {step === 1 ? "Company Info" : "Fleet Details"}
          </p>

          {mutation.isSuccess ? (
            <div className="text-center py-8" data-ocid="signup.success_state">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Welcome to FreightPro!
              </h3>
              <p className="text-muted-foreground">
                Your carrier account is being set up. We'll reach out within 24
                hours.
              </p>
            </div>
          ) : step === 1 ? (
            <form onSubmit={handleStep1} className="space-y-4">
              <div>
                <Label
                  htmlFor="companyName"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  placeholder="e.g. Swift Freight Co."
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  required
                  className="rounded-xl"
                  data-ocid="signup.company_name.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="workEmail"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Work Email
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  placeholder="you@company.com"
                  value={form.workEmail}
                  onChange={(e) => update("workEmail", e.target.value)}
                  required
                  className="rounded-xl"
                  data-ocid="signup.email.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={form.phoneNumber}
                  onChange={(e) => update("phoneNumber", e.target.value)}
                  required
                  className="rounded-xl"
                  data-ocid="signup.phone.input"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-brand-navy hover:bg-brand-blue text-white rounded-xl font-semibold gap-2 mt-2"
                data-ocid="signup.step1.button"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="mcOrUsdotNumber"
                  className="text-sm font-medium mb-1.5 block"
                >
                  MC or USDOT Number
                </Label>
                <Input
                  id="mcOrUsdotNumber"
                  placeholder="MC-123456 or DOT-789012"
                  value={form.mcOrUsdotNumber}
                  onChange={(e) => update("mcOrUsdotNumber", e.target.value)}
                  required
                  className="rounded-xl"
                  data-ocid="signup.mc_usdot.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="fleetSize"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Fleet Size
                </Label>
                <Select
                  value={form.fleetSize}
                  onValueChange={(v) => update("fleetSize", v)}
                >
                  <SelectTrigger
                    className="rounded-xl"
                    data-ocid="signup.fleet_size.select"
                  >
                    <SelectValue placeholder="Select fleet size" />
                  </SelectTrigger>
                  <SelectContent>
                    {FLEET_SIZES.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="hiringNeeds"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Hiring Needs
                </Label>
                <Textarea
                  id="hiringNeeds"
                  placeholder="Describe your driver requirements — CDL type, endorsements, routes..."
                  value={form.hiringNeeds}
                  onChange={(e) => update("hiringNeeds", e.target.value)}
                  className="rounded-xl resize-none"
                  rows={3}
                  data-ocid="signup.hiring_needs.textarea"
                />
              </div>

              {mutation.isError && (
                <div
                  className="text-sm text-destructive bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                  data-ocid="signup.error_state"
                >
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="flex gap-3 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-brand-navy hover:bg-brand-blue text-white rounded-xl font-semibold"
                  disabled={mutation.isPending}
                  data-ocid="signup.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2
                        className="w-4 h-4 mr-2 animate-spin"
                        data-ocid="signup.loading_state"
                      />
                      Submitting...
                    </>
                  ) : (
                    "Access Driver Marketplace"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
