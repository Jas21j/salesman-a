"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

const companyMetrics = [
  { value: "150+", label: "Operations" },
  { value: "4+", label: "Years" },
  { value: "4", label: "Documented Operations" },
  { value: "2", label: "Active Markets" },
];

export default function CompanyProof() {
  return (
    <section className="py-14 md:py-18 bg-white/60 border-y border-navy/[0.06]">
      <div className="max-w-[1440px] mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8"
        >
          <div className="flex-shrink-0">
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-slate mb-1">
              SALESMAN SOLUTIONS
            </p>
            <p className="font-body text-sm text-navy/50">
              Operational credibility, proven in the field.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 md:gap-x-14">
            {companyMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center md:text-left"
              >
                <p className="font-body text-2xl md:text-3xl font-bold text-navy leading-none">
                  {m.value}
                </p>
                <p className="font-body text-xs text-slate mt-1 tracking-wide">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
