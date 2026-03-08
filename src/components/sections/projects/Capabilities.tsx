"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const services = [
  "Furniture delivery & assembly",
  "Appliance placement & connection",
  "Drywall, fixtures, hardware repair",
  "TV mounting & AV placement",
  "Seasonal maintenance",
  "Move-in / turnover preparation",
  "Property inspection & documentation",
  "Junk removal & common area resets",
  "Vendor coordination & oversight",
];

export default function Capabilities() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <SectionHeader
          eyebrow="WHAT WE DO"
          headline="Full-Scope Property Operations"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service}
              variants={staggerItem}
              className="flex items-start gap-3 p-4 rounded-xl hover:bg-offwhite/80 transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-sand mt-1.5 shrink-0" />
              <p className="font-body text-sm text-navy">{service}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
