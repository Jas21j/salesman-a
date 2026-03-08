"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const audiences = [
  {
    title: "Landlords & Investors",
    description: "Recurring maintenance, turnover prep, tenant-ready optimization across portfolios.",
    icon: "🏢",
  },
  {
    title: "Property Managers",
    description: "Embedded operational support, rapid response, documented service records.",
    icon: "📋",
  },
  {
    title: "Homeowners",
    description: "Installation, repairs, seasonal maintenance, and full home optimization.",
    icon: "🏠",
  },
  {
    title: "Commercial Properties",
    description: "Facility maintenance, vendor coordination, operational triage.",
    icon: "🏗",
  },
];

export default function WhoItServes() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="WHO WE WORK WITH"
          headline="Built for Property Owners Who Want Systems, Not Excuses"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {audiences.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="p-6 rounded-2xl border border-navy/[0.06] bg-white shadow-elevation hover:shadow-elevation-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-navy mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-slate leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
