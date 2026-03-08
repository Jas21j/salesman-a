"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CaseStudy } from "@/types";
import { fadeUp, viewportOnce } from "@/lib/animations";

const sections = [
  "Overview",
  "The Problem",
  "Approach",
  "Execution",
  "Outcomes",
  "Lessons",
];

interface Props {
  study: CaseStudy;
}

export default function CaseStudyContent({ study }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef}>
      <section className="pt-32 pb-16 bg-navy-deep">
        <div className="max-w-[1440px] mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-wider bg-sand/20 text-sand">
                {study.platform} {study.workType}
              </span>
              {study.category.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full text-[10px] font-body font-medium uppercase tracking-wider bg-white/10 text-white/50"
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="font-display text-display-xl font-bold text-white mb-4"
          >
            {study.operationName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 font-body text-sm text-white/50"
          >
            <span>{study.timeline}</span>
            <span>&middot;</span>
            <span>{study.location}</span>
            <span>&middot;</span>
            <span>{study.clientIndustry}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex gap-8 mt-10"
          >
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-3xl font-bold text-sand">
                  {metric.value}
                </p>
                <p className="font-body text-xs text-white/40 uppercase tracking-wider mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="max-w-[1440px] mx-auto section-padding">
          <div className="grid lg:grid-cols-[200px_1fr] gap-12">
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-navy/10">
                    <motion.div
                      style={{ height: progressHeight }}
                      className="w-full bg-sand origin-top"
                    />
                  </div>
                  <nav className="space-y-4">
                    {sections.map((label) => (
                      <div key={label} className="flex items-center gap-4 pl-0">
                        <div className="w-6 h-6 rounded-full border border-navy/10 bg-white flex items-center justify-center relative z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-navy/20" />
                        </div>
                        <span className="font-body text-xs text-slate uppercase tracking-wider">
                          {label}
                        </span>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <ContentSection title="Overview">
                <p className="font-body text-base text-slate leading-relaxed">
                  {study.overview}
                </p>
              </ContentSection>

              <ContentSection title="The Problem">
                <p className="font-body text-base text-slate leading-relaxed">
                  {study.problem}
                </p>
              </ContentSection>

              <ContentSection title="Approach & System Applied">
                <p className="font-body text-base text-slate leading-relaxed">
                  {study.approach}
                </p>
              </ContentSection>

              <ContentSection title="Execution Scope">
                <ul className="space-y-3">
                  {study.executionScope.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-sand mt-2 shrink-0" />
                      <p className="font-body text-base text-slate">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Outcomes & Results">
                <ul className="space-y-3">
                  {study.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-body text-base text-slate">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Operational Lessons">
                <p className="font-body text-base text-slate leading-relaxed italic border-l-2 border-sand pl-6">
                  {study.lessons}
                </p>
              </ContentSection>

              {study.liveUrl && (
                <div className="pt-4">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-sand-dark hover:text-navy transition-colors"
                  >
                    View Live Site
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewportOnce}
    >
      <motion.h2
        variants={fadeUp}
        className="font-display text-display-sm font-bold text-navy mb-6"
      >
        {title}
      </motion.h2>
      <motion.div variants={fadeUp}>{children}</motion.div>
    </motion.div>
  );
}
