"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const tiers = [
  {
    title: "One-Time",
    description: "Single project or assessment engagement.",
    features: ["Property assessment", "One-time service execution", "Documentation report"],
  },
  {
    title: "Recurring",
    highlight: true,
    description: "Scheduled maintenance intervals, priority response.",
    features: [
      "Scheduled inspection cadence",
      "Priority response tiers",
      "Documented service records",
      "Quarterly optimization review",
    ],
  },
  {
    title: "Embedded",
    description: "Full operational support, deployed on-site as needed.",
    features: [
      "Dedicated operations support",
      "On-site deployment",
      "Real-time issue resolution",
      "Full operational documentation",
      "Vendor management included",
    ],
  },
];

export default function RecurringModel() {
  return (
    <section className="py-section bg-navy-deep">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="ONGOING OPERATIONS"
          headline="Stop Managing. Start Operating."
          subhead="Most property owners react to problems. Our recurring maintenance model installs a structured cadence — scheduled inspections, priority response tiers, and documented service records that protect your investment."
          align="center"
          dark
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.title}
              variants={staggerItem}
              className={`p-8 rounded-lg transition-all duration-300 ${
                tier.highlight
                  ? "bg-sand/10 border-2 border-sand/30 hover:border-sand/50"
                  : "bg-white/5 border border-white/10 hover:bg-white/8"
              }`}
            >
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {tier.title}
              </h3>
              <p className="font-body text-sm text-white/50 mb-6">
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-sand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sand text-navy font-body font-semibold text-sm tracking-wide rounded-full hover:bg-sand-dark transition-all duration-300 hover:shadow-premium"
          >
            Find the Right Plan
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
