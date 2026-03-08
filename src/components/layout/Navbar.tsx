"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, companyInfo } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto mt-5 mx-4 w-full max-w-[1200px] rounded-full transition-all duration-500 ${
              scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-premium border border-white/50"
              : "bg-navy/25 backdrop-blur-xl border border-white/10"
          }`}
        >
          <nav className="flex items-center justify-between px-5 md:px-8 h-14">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Salesman Solutions"
                width={28}
                height={34}
                className="w-7 h-auto"
                priority
              />
              <span
                className={`font-body text-[15px] font-semibold tracking-tight transition-colors duration-300 hidden sm:block ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                Salesman Solutions
              </span>
            </Link>

            <ul className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-body text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-sand relative group ${
                      scrolled ? "text-navy/80" : "text-white/85"
                    }`}
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-sand transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className={`font-body text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-navy/60" : "text-white/70"
                }`}
              >
                {companyInfo.phoneFormatted}
              </a>
              <Link
                href="/contact"
                className="px-5 py-2 bg-sand text-navy font-body text-[13px] font-semibold rounded-full tracking-wide hover:bg-sand-dark transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-45 translate-y-[4.5px] bg-navy"
                    : scrolled
                    ? "bg-navy"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-0"
                    : scrolled
                    ? "bg-navy"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[4.5px] bg-navy"
                    : scrolled
                    ? "bg-navy"
                    : "bg-white"
                }`}
              />
            </button>
          </nav>
        </motion.header>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-offwhite lg:hidden"
          >
            <div className="flex flex-col h-full pt-28 px-8">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 font-body text-2xl font-semibold text-navy border-b border-navy/8 hover:text-sand transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-12 space-y-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="block font-body text-base text-navy/60"
                >
                  {companyInfo.phoneFormatted}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="block font-body text-base text-navy/60"
                >
                  {companyInfo.email}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block mt-4 px-8 py-3 bg-sand text-navy font-body font-semibold text-sm tracking-wide rounded-full"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
