"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const backgroundWords = [
  "SYSTEMS",
  "OPERATIONS",
  "INFRASTRUCTURE",
  "INDUSTRIES",
  "DEPLOYMENT",
  "INTELLIGENCE",
];

const supportingLines = [
  "IRIS — Digital Infrastructure & Intelligence",
  "ASSAN — Operational Systems & Deployment",
  "Embedded Intelligence. Real-World Execution.",
  "Two Platforms. One Operating Philosophy.",
];

export default function Hero() {
  const [bgWordIndex, setBgWordIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const bgTimer = setInterval(
      () => setBgWordIndex((i) => (i + 1) % backgroundWords.length),
      5500
    );
    return () => clearInterval(bgTimer);
  }, []);

  useEffect(() => {
    const lineTimer = setInterval(
      () => setLineIndex((i) => (i + 1) % supportingLines.length),
      3500
    );
    return () => clearInterval(lineTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <Image
        src="/images/landingpage.png"
        alt="Modern architectural structure at golden hour"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-deep/40 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent" />

      <AnimatePresence mode="wait">
        <motion.div
          key={bgWordIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] select-none pointer-events-none"
        >
          <span className="font-display text-[18vw] font-bold text-white leading-none tracking-tighter">
            {backgroundWords[bgWordIndex]}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm font-medium uppercase tracking-[0.2em] text-sand mb-6"
          >
            Salesman Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-xl font-bold text-white uppercase leading-[0.95]"
          >
            Systems That
            <br />
            Improve
            <br />
            <span className="text-sand">Industries</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 h-7 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="font-body text-base md:text-lg text-white/55 font-light tracking-wide"
              >
                {supportingLines[lineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-6 font-body text-base md:text-lg text-white/65 font-light leading-relaxed max-w-xl"
          >
            Salesman Solutions builds operational systems that simplify
            complexity and transform how industries function.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/solutions"
              className="px-8 py-4 bg-sand text-navy font-body font-semibold text-sm tracking-wide rounded-full hover:bg-sand-dark transition-all duration-300 hover:shadow-premium flex items-center gap-2"
            >
              Explore the Platform
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-white/30 text-white font-body font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              View Case Studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
