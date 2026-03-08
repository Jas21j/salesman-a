"use client";

import { motion } from "framer-motion";

export default function PropertyOpsHero() {
  return (
    <section className="pt-32 pb-20 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3">
          <span className="font-display text-[20vw] font-bold text-white leading-none">
            01
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto section-padding">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eyebrow text-sand mb-6"
        >
          ASSAN — PROPERTY SYSTEMS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="font-display text-display-xl font-bold text-white max-w-3xl"
        >
          Structured Property Operations.{" "}
          <span className="text-sand">Built to Run.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 font-body text-xl text-white/60 max-w-2xl leading-relaxed"
        >
          From routine maintenance to full property optimization — we install
          the systems, you keep the results.
        </motion.p>
      </div>
    </section>
  );
}
