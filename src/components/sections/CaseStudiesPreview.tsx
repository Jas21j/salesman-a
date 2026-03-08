"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { caseStudies } from "@/data/case-studies";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function CaseStudiesPreview() {
  return (
    <section className="py-section bg-offwhite">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="OPERATIONAL RECORDS"
          headline="Proof of System"
          subhead="Every engagement is documented as a coded operation — powered by IRIS or ASSAN."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.slug}
              variants={staggerItem}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block p-8 rounded-2xl bg-white border border-navy/[0.06] shadow-elevation hover:shadow-elevation-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-body font-semibold uppercase tracking-wider bg-sand/10 text-sand-dark">
                    {study.platform} {study.workType}
                  </span>
                  <svg
                    className="w-5 h-5 text-navy/20 group-hover:text-sand transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <h3 className="font-body text-xl font-bold text-navy group-hover:text-sand-dark transition-colors duration-300 mb-1">
                  {study.operationName}
                </h3>
                <p className="font-body text-xs text-slate mt-1 mb-4">
                  {study.timeline} &middot; {study.location}
                </p>

                <p className="font-body text-sm text-slate leading-relaxed line-clamp-2 mb-6">
                  {study.overview}
                </p>

                <div className="flex gap-6 pt-4 border-t border-navy/5">
                  {study.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <p className="font-body text-lg font-bold text-navy">
                        {metric.value}
                      </p>
                      <p className="font-body text-[10px] text-slate uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
