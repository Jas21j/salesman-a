"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { viewportOnce } from "@/lib/animations";

const processSteps = [
  {
    number: "01",
    title: "Assessment",
    description: "We inspect the property and identify gaps, risks, and opportunities.",
  },
  {
    number: "02",
    title: "System Design",
    description: "We build a structured maintenance and operations plan tailored to your property.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Our team deploys — installations, repairs, optimization, documentation.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Recurring maintenance model keeps the property running without you chasing contractors.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-section bg-offwhite">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="THE PROCESS"
          headline="From Intake to Optimized Property"
          align="center"
        />

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-navy/8">
            <div className="absolute inset-0 bg-gradient-to-r from-sand via-sand/50 to-sand/20" />
          </div>

          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="w-10 h-10 rounded-full bg-sand text-navy flex items-center justify-center mx-auto mb-6 font-display text-sm font-bold relative z-10">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-bold text-navy mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-slate leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
