"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function MissionStatement() {
  return (
    <section className="py-section bg-navy-deep relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sand/40 to-transparent" />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={viewportOnce}
        className="max-w-[1440px] mx-auto section-padding text-center"
      >
        <motion.p
          variants={fadeUp}
          className="eyebrow text-sand mb-8"
        >
          OUR MISSION
        </motion.p>
        <motion.blockquote
          variants={fadeUp}
          className="font-display text-display-md font-bold text-white max-w-4xl mx-auto leading-snug"
        >
          &ldquo;To establish humanitarian systems that drive innovation and
          progress across the world — saving time and resources, and helping
          people live more fruitful, efficient, and enjoyable lives.&rdquo;
        </motion.blockquote>
        <motion.div
          variants={fadeUp}
          className="mt-8 w-16 h-0.5 bg-sand mx-auto"
        />
        <motion.p
          variants={fadeUp}
          className="mt-4 font-body text-sm text-white/40"
        >
          Jaheim, Founder
        </motion.p>
      </motion.div>
    </section>
  );
}
