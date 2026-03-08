"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subhead?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subhead,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewportOnce}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <motion.p
        variants={fadeUp}
        className={`eyebrow mb-4 ${dark ? "text-sand" : "text-sand-dark"}`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className={`font-display text-display-lg font-bold ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {headline}
      </motion.h2>
      {subhead && (
        <motion.p
          variants={fadeUp}
          className={`mt-4 font-body text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/60" : "text-slate"}`}
        >
          {subhead}
        </motion.p>
      )}
    </motion.div>
  );
}
