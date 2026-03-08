"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="eyebrow text-sand-dark mb-6"
            >
              ABOUT SALESMAN SOLUTIONS
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="font-display text-display-xl font-bold text-navy"
            >
              Built From Experience.
              <br />
              <span className="text-sand">Designed for the Future.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 font-body text-lg text-slate max-w-xl leading-relaxed"
            >
              Salesman Solutions is a venture platform company that designs and
              deploys operational infrastructure. We identify inefficiencies,
              build standardized systems through IRIS and ASSAN, and transform
              how industries function.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto lg:mr-0 lg:-mr-8 lg:-mb-12">
              <Image
                src="/images/founder.png"
                alt="Jaheim — Founder, Salesman Solutions"
                fill
                className="object-cover object-top rounded-2xl"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-sm" />
            </div>
            <div className="absolute -bottom-4 left-4 lg:left-0 bg-white px-5 py-3 rounded-xl shadow-premium">
              <p className="font-body text-sm font-semibold text-navy">Jaheim</p>
              <p className="font-body text-xs text-slate">
                Founder, Salesman Solutions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
