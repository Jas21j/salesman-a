"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

const globalStats = [
  {
    value: "70%",
    label: "of transformation initiatives fail to reach their stated goals",
    source: "McKinsey",
  },
  {
    value: "<1.5%",
    label: "annual productivity growth across developed economies over the last decade",
    source: "OECD",
  },
  {
    value: "60%",
    label: "of operational time is spent on coordination, not execution",
    source: "Asana Work Index",
  },
  {
    value: "$1.6T",
    label: "lost annually to global supply chain inefficiency",
    source: "World Economic Forum",
  },
];

export default function CostOfComplexity() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="eyebrow mb-4">WHY SYSTEMS MATTER</p>
          <h2 className="font-body text-display-lg font-bold text-navy">
            The Cost of Complexity
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14 max-w-5xl">
          {globalStats.map((stat, i) => (
            <motion.div
              key={stat.source}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-body text-display-lg font-bold text-navy leading-none mb-3">
                {stat.value}
              </p>
              <p className="font-body text-base text-navy/70 leading-relaxed mb-2">
                {stat.label}
              </p>
              <p className="font-body text-xs text-slate tracking-wide">
                {stat.source}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-navy/5 max-w-3xl"
        >
          <p className="font-body text-lg text-navy/60 leading-relaxed font-light">
            Salesman Solutions exists to close these gaps — through structured
            platforms that turn complexity into repeatable, efficient systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
