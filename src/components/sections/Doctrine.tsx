"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { viewportOnce } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Identify Inefficiency",
    description: "Audit the existing environment. Document gaps, bottlenecks, and waste. Understand the operational terrain before proposing solutions.",
  },
  {
    number: "02",
    title: "Build Standardized Operating Model",
    description: "Design workflows, protocols, and documentation standards that transform ad-hoc execution into repeatable processes.",
  },
  {
    number: "03",
    title: "Add Technology Layer",
    description: "Integrate tools, automation, and digital infrastructure that amplify operational efficiency without adding unnecessary complexity.",
  },
  {
    number: "04",
    title: "Optimize Margins & Performance",
    description: "Refine the system with data-driven adjustments. Reduce costs, improve response times, and increase output quality.",
  },
  {
    number: "05",
    title: "Document the Transformation",
    description: "Record every improvement, process change, and outcome. Create the institutional knowledge that enables long-term sustainability.",
  },
  {
    number: "06",
    title: "Package Repeatable Framework",
    description: "Convert the entire engagement into a reusable system that can be deployed across similar environments at scale.",
  },
];

export default function Doctrine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section className="py-section bg-offwhite" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="OUR APPROACH"
          headline="From Inefficiency to Repeatable Framework"
          align="center"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-navy/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-sand origin-top"
            />
          </div>

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center`}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="group">
                    <span className="font-display text-6xl font-bold text-navy/8 group-hover:text-sand/30 transition-colors duration-500 block mb-2">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl font-bold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-slate leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-white border-2 border-sand flex items-center justify-center shadow-card">
                  <span className="font-display text-sm font-bold text-navy">
                    {step.number}
                  </span>
                </div>

                <div className="md:hidden flex-1">
                  <h3 className="font-display text-lg font-bold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-slate leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
