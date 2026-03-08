"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  variant?: "glass" | "light" | "dark";
  index?: number;
}

export default function StatCard({
  numericValue,
  suffix,
  label,
  variant = "glass",
  index = 0,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  const variantClasses = {
    glass: "glass-card text-white",
    light: "glass-card-light text-navy",
    dark: "bg-navy-deep/80 border border-white/10 text-white",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-xl p-6 ${variantClasses[variant]}`}
    >
      <p className="font-display text-4xl md:text-5xl font-bold tabular-nums">
        {count}
        {suffix}
      </p>
      <p
        className={`font-body text-sm mt-2 ${
          variant === "light" ? "text-slate" : "text-white/60"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
}
