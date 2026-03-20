import { Clock, DollarSign, FileX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  enabled,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  enabled: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, enabled]);

  return (
    <span>
      {prefix}
      {enabled ? count.toLocaleString() : 0}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: DollarSign,
    prefix: "$",
    target: 8000,
    suffix: "+",
    label: "Average recruiting cost per driver",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Clock,
    prefix: "",
    target: 21,
    suffix: " Days",
    label: "Average time to hire a CDL driver",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: FileX,
    prefix: "",
    target: 60,
    suffix: "%",
    label: "Applications from job boards are unqualified",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export function ProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Hiring CDL Drivers Is{" "}
            <span className="text-gradient">Slow and Expensive</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The traditional approach to driver recruitment is broken. Here's
            what carriers face every day.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(
            ({ icon: Icon, prefix, target, suffix, label, color, bg }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-8 border border-border shadow-card text-center"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <div className="font-display font-bold text-5xl text-foreground mb-2">
                  <CountUp
                    prefix={prefix}
                    target={target}
                    suffix={suffix}
                    enabled={inView}
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {label}
                </p>
              </div>
            ),
          )}
        </div>

        <div className="text-center mt-10">
          <p className="text-foreground font-medium text-lg max-w-2xl mx-auto">
            FreightPro replaces outdated recruiting with a driver marketplace
            built for carriers.
          </p>
        </div>
      </div>
    </section>
  );
}
