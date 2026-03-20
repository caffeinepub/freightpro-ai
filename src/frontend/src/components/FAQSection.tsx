import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How many drivers are on the platform?",
    a: "FreightPro has over 15,000 verified CDL drivers across all 50 states, with new drivers joining every day.",
  },
  {
    q: "Is driver information verified?",
    a: "Yes, all drivers go through DOT verification including CDL checks, driving record review, and compliance screening before appearing on the platform.",
  },
  {
    q: "Can I filter drivers by endorsements?",
    a: "Absolutely. You can filter by HazMat, Tanker, Doubles/Triples, Passenger, and School Bus endorsements. You can also combine multiple filters for precise results.",
  },
  {
    q: "How quickly can I contact drivers?",
    a: "You can contact drivers instantly after creating your carrier account. No waiting periods, no middlemen — direct communication from day one.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem
              key={q}
              value={`item-${i + 1}`}
              className="bg-white border border-border rounded-2xl px-5 shadow-xs data-[state=open]:shadow-card"
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground py-4 hover:no-underline text-left">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
