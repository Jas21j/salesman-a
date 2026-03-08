"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { viewportOnce, staggerContainer, staggerItem } from "@/lib/animations";

const platforms = [
  {
    name: "IRIS",
    subtitle: "Intelligent Resource Infrastructure Systems",
    tag: "OPTIMIZATIONS",
    description:
      "Digital intelligence, system development, dashboards, and data infrastructure. IRIS is the analytical layer that powers visibility and control.",
    href: "/solutions/iris",
    capabilities: [
      "Custom system development",
      "Digital dashboards & analytics",
      "Data infrastructure architecture",
      "Process automation",
      "Performance intelligence",
    ],
  },
  {
    name: "ASSAN",
    subtitle: "Applied Systems for Service and Network Operations",
    tag: "OPERATIONS",
    description:
      "Operational deployment, field execution, property systems, and logistics coordination. ASSAN transforms ad-hoc operations into repeatable frameworks.",
    href: "/solutions/assan",
    capabilities: [
      "Property operations systems",
      "Hospitality supply & logistics",
      "Field team deployment",
      "Vendor coordination networks",
      "Operational documentation",
    ],
  },
];

export default function SolutionsIndex() {
  return (
    <section className="pt-32 pb-section bg-offwhite">
      <div className="max-w-[1440px] mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <p className="eyebrow text-sand-dark mb-6">ACTIVE SYSTEMS</p>
          <h1 className="font-display text-display-xl font-bold text-navy max-w-3xl">
            Solutions Built on Two Platforms
          </h1>
          <p className="mt-6 font-body text-lg text-slate max-w-2xl leading-relaxed">
            Every solution Salesman Solutions delivers is powered by one of two
            platforms — IRIS for digital infrastructure, ASSAN for operational
            execution.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-8"
        >
          {platforms.map((p) => (
            <motion.div key={p.name} variants={staggerItem}>
              <Link
                href={p.href}
                className="group block p-8 md:p-10 rounded-2xl bg-white border border-navy/[0.06] shadow-elevation hover:shadow-elevation-hover hover:-translate-y-0.5 transition-all duration-300 h-full"
              >
                <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sand">
                  {p.tag}
                </span>
                <h2 className="font-body text-3xl font-bold text-navy mt-3 mb-1 group-hover:text-sand-dark transition-colors duration-300">
                  {p.name}
                </h2>
                <p className="font-body text-xs text-slate tracking-wide mb-5">
                  {p.subtitle}
                </p>
                <p className="font-body text-sm text-slate leading-relaxed mb-8">
                  {p.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {p.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 font-body text-sm text-navy/70"
                    >
                      <span className="w-1 h-1 rounded-full bg-sand mt-2 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-navy group-hover:text-sand-dark transition-colors duration-300">
                  Explore {p.name}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="mt-12"
        >
          <Link
            href="/solutions/property-operations"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white border border-navy/[0.08] shadow-elevation hover:shadow-elevation-hover transition-all duration-300 group"
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sand">
              ASSAN
            </span>
            <span className="font-body text-sm font-medium text-navy group-hover:text-sand-dark transition-colors">
              Property Operations — Active Deployment
            </span>
            <svg
              className="w-4 h-4 text-navy/30 group-hover:text-sand group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
