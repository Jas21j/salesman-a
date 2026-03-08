"use client";

import { motion } from "framer-motion";
import { viewportOnce, staggerContainer, staggerItem } from "@/lib/animations";

type Capability = {
  title: string;
  description: string;
};

type PlatformPageProps = {
  platform: "IRIS" | "ASSAN";
  subtitle: string;
  role: string;
  tag: string;
  description: string;
  capabilities: Capability[];
};

export default function PlatformPage({
  platform,
  subtitle,
  role,
  tag,
  description,
  capabilities,
}: PlatformPageProps) {
  return (
    <section className="pt-32 pb-section bg-offwhite">
      <div className="max-w-[1440px] mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <p className="eyebrow text-sand-dark mb-6">
            {tag}
          </p>
          <h1 className="font-display text-display-xl font-bold text-navy mb-2">
            {platform}
          </h1>
          <p className="font-body text-sm text-slate tracking-wide mb-6">
            {subtitle}
          </p>
          <p className="font-body text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4">
            {role}
          </p>
          <p className="font-body text-lg text-slate max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={staggerItem}
              className="p-6 md:p-8 rounded-2xl bg-white border border-navy/[0.06] shadow-elevation hover:shadow-elevation-hover transition-all duration-300"
            >
              <h3 className="font-body text-lg font-bold text-navy mb-3">
                {cap.title}
              </h3>
              <p className="font-body text-sm text-slate leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
