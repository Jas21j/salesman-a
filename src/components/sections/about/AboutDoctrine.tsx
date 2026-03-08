"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const steps = [
  { number: "01", title: "Identify Inefficiency" },
  { number: "02", title: "Build Standardized Operating Model" },
  { number: "03", title: "Add Technology Layer" },
  { number: "04", title: "Optimize Margins & Performance" },
  { number: "05", title: "Document the Transformation" },
  { number: "06", title: "Package Repeatable Framework" },
];

export default function AboutDoctrine() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="THE DOCTRINE"
          headline="Six Steps. One System."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="group p-6 rounded-2xl border border-navy/[0.06] bg-white shadow-elevation hover:shadow-elevation-hover hover:border-sand/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-display text-4xl font-bold text-sand/30 group-hover:text-sand/60 transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-bold text-navy mt-2">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
