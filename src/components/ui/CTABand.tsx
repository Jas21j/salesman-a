"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface CTABandProps {
  headline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  dark?: boolean;
}

export default function CTABand({
  headline,
  primaryCTA,
  secondaryCTA,
  dark = true,
}: CTABandProps) {
  return (
    <section
      className={`py-section ${dark ? "bg-navy-deep" : "bg-offwhite"}`}
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={viewportOnce}
        className="max-w-[1440px] mx-auto section-padding text-center"
      >
        <motion.h2
          variants={fadeUp}
          className={`font-display text-display-md font-bold max-w-3xl mx-auto mb-10 ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {headline}
        </motion.h2>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="px-8 py-4 bg-sand text-navy font-body font-semibold text-sm tracking-wide rounded-full hover:bg-sand-dark transition-all duration-300 hover:shadow-premium"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={`px-8 py-4 border font-body font-semibold text-sm tracking-wide rounded-full transition-all duration-300 ${
                dark
                  ? "border-white/20 text-white hover:bg-white/5"
                  : "border-navy/20 text-navy hover:bg-navy/5"
              }`}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
