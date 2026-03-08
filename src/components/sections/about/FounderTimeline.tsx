"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { founderTimeline } from "@/data/timeline";
import { viewportOnce } from "@/lib/animations";

export default function FounderTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section className="py-section bg-offwhite" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="eyebrow text-sand-dark mb-4">THE JOURNEY</p>
          <h2 className="font-display text-display-lg font-bold text-navy">
            Founder Story
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-navy/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-sand origin-top"
            />
          </div>

          <div className="space-y-12">
            {founderTimeline.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative flex items-start gap-8 pl-16 md:pl-20"
              >
                <div className="absolute left-[14px] md:left-[22px] top-1 w-6 h-6 rounded-full bg-white border-2 border-sand flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-sand" />
                </div>

                <div className="flex-1">
                  {event.period && (
                    <p className="font-body text-xs text-sand-dark uppercase tracking-wider mb-1">
                      {event.period}
                    </p>
                  )}
                  <h3 className="font-display text-xl font-bold text-navy mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-slate leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
