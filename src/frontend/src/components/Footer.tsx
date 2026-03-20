import { Truck } from "lucide-react";

const currentYear = new Date().getFullYear();

const productLinks = [
  { label: "For Carriers", href: "#signup" },
  { label: "For Drivers", href: "#drivers" },
  { label: "For Recruiters", href: "#features" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:hello@freightpro.ai" },
  { label: "Privacy Policy", href: "#privacy" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1640] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                FreightPro <span className="text-brand-electric">AI</span>
              </span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed">
              The AI-powered platform that connects CDL drivers with carriers
              across the U.S.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Product
            </p>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                    data-ocid={`footer.${item.label.toLowerCase().replace(/ /g, "_")}.link`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                    data-ocid={`footer.${item.label.toLowerCase().replace(/ /g, "_")}.link`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@freightpro.ai"
                  className="text-blue-300 hover:text-white text-sm transition-colors"
                >
                  hello@freightpro.ai
                </a>
              </li>
              <li>
                <span className="text-blue-300 text-sm">1-800-FREIGHT</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-400 text-sm">
            © {currentYear} FreightPro AI. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            className="text-blue-400 hover:text-blue-200 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
