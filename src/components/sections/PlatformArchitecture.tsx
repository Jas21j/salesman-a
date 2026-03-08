"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { viewportOnce } from "@/lib/animations";

const platforms = [
  {
    name: "IRIS",
    subtitle: "Intelligent Resource Infrastructure Systems",
    role: "Digital Intelligence & Optimization",
    description:
      "IRIS powers the analytical layer — system development, dashboards, data intelligence, and digital infrastructure that turns raw operational data into strategic advantage.",
    tag: "OPTIMIZATIONS",
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
    role: "Operational Deployment & Execution",
    description:
      "ASSAN is the execution engine — structured operational workflows for properties, hospitality, logistics, and field deployment that transform ad-hoc work into repeatable systems.",
    tag: "OPERATIONS",
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

export default function PlatformArchitecture() {
  return (
    <section className="py-section bg-offwhite">
      <div className="max-w-[1440px] mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">PLATFORM ARCHITECTURE</p>
          <h2 className="font-body text-display-lg font-bold text-navy">
            Two Platforms. One Operating Philosophy.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-navy/[0.06] shadow-elevation hover:shadow-elevation-hover transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sand">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-body text-2xl font-bold text-navy mb-1">
                  {p.name}
                </h3>
                <p className="font-body text-xs text-slate tracking-wide mb-4">
                  {p.subtitle}
                </p>

                <p className="font-body text-sm font-medium text-navy/80 mb-3">
                  {p.role}
                </p>
                <p className="font-body text-sm text-slate leading-relaxed mb-6">
                  {p.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
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

                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-navy group-hover:text-sand-dark transition-colors duration-300"
                >
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
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
