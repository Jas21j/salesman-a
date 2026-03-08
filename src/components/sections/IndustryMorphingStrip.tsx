"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

const domains = [
  {
    platform: "ASSAN",
    domain: "Property Systems",
    description:
      "Structured operational frameworks for multi-unit properties — from maintenance protocols to vendor coordination and supply chain management.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    platform: "ASSAN",
    domain: "Hospitality Systems",
    description:
      "Turnover operations, luxury supply logistics, and guest-readiness workflows that transform hospitality operations into repeatable systems.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    platform: "IRIS",
    domain: "Digital Infrastructure",
    description:
      "Custom dashboards, operational analytics, and digital system architecture that gives operators real-time visibility and control.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    platform: "ASSAN",
    domain: "Logistics & Labor",
    description:
      "Field team deployment systems, labor coordination networks, and supply chain optimization for on-the-ground operational execution.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

export default function IndustryMorphingStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((i) => (i + 1) % domains.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const active = domains[activeIndex];

  return (
    <section className="py-section bg-navy-deep relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="eyebrow text-sand mb-4">DEPLOYMENT DOMAINS</p>
          <h2 className="font-body text-display-md font-bold text-white">
            Where Our Platforms Operate
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {domains.map((d, i) => (
            <button
              key={d.domain}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                i === activeIndex
                  ? "bg-sand text-navy"
                  : "bg-white/8 text-white/60 hover:text-white/90 border border-white/10"
              }`}
            >
              <span className="font-semibold">{d.platform}</span>
              <span className="text-[11px] ml-1.5 opacity-70">— {d.domain}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sand mb-2">
                {active.platform}
              </p>
              <h3 className="font-body text-display-sm font-bold text-white mb-4">
                {active.domain}
              </h3>
              <p className="font-body text-base text-white/60 leading-relaxed max-w-lg">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-premium"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.image}
                alt={active.domain}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.92] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-1 mt-8">
          {domains.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-10 bg-sand" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
