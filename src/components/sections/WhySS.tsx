"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const comparisons = [
  {
    generic: "Ad-hoc task execution",
    systems: "Structured operational workflows deployed through IRIS and ASSAN",
  },
  {
    generic: "Reactive problem-solving",
    systems: "Proactive system design embedded into the operation",
  },
  {
    generic: "No documentation trail",
    systems: "Every engagement documented as a coded operation",
  },
  {
    generic: "One-off vendor engagement",
    systems: "Long-term infrastructure partnership built for scale",
  },
  {
    generic: "Technology as an afterthought",
    systems: "Digital intelligence integrated from day one through IRIS",
  },
];

export default function WhySS() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="THE DIFFERENCE"
          headline="Why Salesman Solutions"
          subhead="We don't compete as a vendor. We embed as an infrastructure partner — designing systems that produce compounding returns."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-navy/[0.06] shadow-premium-subtle"
        >
          <div className="grid grid-cols-2 gap-0 mb-2">
            <div className="px-6 py-3">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-slate-light">
                Traditional Vendor
              </p>
            </div>
            <div className="px-6 py-3">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sand-dark">
                Salesman Solutions
              </p>
            </div>
          </div>

          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="grid grid-cols-2 gap-0 border-t border-navy/8"
            >
              <div className="px-6 py-5">
                <p className="font-body text-sm text-slate/60 line-through decoration-slate/20">
                  {item.generic}
                </p>
              </div>
              <div className="px-6 py-5 bg-sand/5 border-l border-navy/8">
                <p className="font-body text-sm text-navy font-medium">
                  {item.systems}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
