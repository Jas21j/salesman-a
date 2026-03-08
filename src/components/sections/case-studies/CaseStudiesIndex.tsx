"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { caseStudies } from "@/data/case-studies";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { CaseStudy } from "@/types";

type Filter = "all" | "ASSAN" | "IRIS";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "ASSAN Operations", value: "ASSAN" },
  { label: "IRIS Optimizations", value: "IRIS" },
];

function getPlatformLabel(study: CaseStudy) {
  return `${study.platform} ${study.workType}`;
}

export default function CaseStudiesIndex() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((s) => s.platform === filter);

  return (
    <section className="pt-32 pb-section bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="OPERATIONAL RECORDS"
          headline="The Work, Documented"
          subhead="Every engagement is documented as a coded operation. These are not testimonials — they are operational records powered by IRIS and ASSAN."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? "bg-navy text-white"
                  : "bg-navy/5 text-navy/60 hover:text-navy hover:bg-navy/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-8"
        >
          {filtered.map((study) => (
            <motion.div key={study.slug} variants={staggerItem}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block p-8 md:p-10 rounded-2xl border border-navy/[0.06] bg-white shadow-elevation hover:shadow-elevation-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-body font-semibold uppercase tracking-wider bg-sand/10 text-sand-dark">
                    {getPlatformLabel(study)}
                  </span>
                  <svg
                    className="w-5 h-5 text-navy/20 group-hover:text-sand transition-all duration-300 group-hover:translate-x-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <h3 className="font-body text-2xl font-bold text-navy group-hover:text-sand-dark transition-colors duration-300 mb-1">
                  {study.operationName}
                </h3>
                <p className="font-body text-sm text-slate mb-4">
                  {study.timeline} &middot; {study.location}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full text-[10px] font-body font-medium uppercase tracking-wider bg-navy/5 text-navy/50"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <p className="font-body text-sm text-slate leading-relaxed mb-6">
                  {study.overview}
                </p>

                <div className="flex gap-8 pt-4 border-t border-navy/5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-body text-xl font-bold text-navy">
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
