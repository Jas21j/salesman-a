"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo } from "@/data/navigation";
import { fadeUp, viewportOnce } from "@/lib/animations";

const inquiryTypes = [
  "General",
  "Property Operations",
  "Hospitality",
  "Digital Infrastructure",
  "Partnership",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    description: "",
    timeline: "",
    referral: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.inquiryType) newErrors.inquiryType = "Select an inquiry type";
    if (!formData.description.trim())
      newErrors.description = "Project description is required";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <section className="pt-32 pb-section bg-white">
        <div className="max-w-[1440px] mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center py-20"
          >
            <div className="w-16 h-16 rounded-full bg-sand/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-display-md font-bold text-navy mb-4">
              Inquiry Received
            </h2>
            <p className="font-body text-lg text-slate">
              We&apos;ve received your inquiry. Jaheim will be in touch within 24
              hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-section bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16">
          <div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
            >
              <motion.p variants={fadeUp} className="eyebrow text-sand-dark mb-4">
                GET IN TOUCH
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-display-lg font-bold text-navy mb-4"
              >
                Start a Project Discussion
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="font-body text-lg text-slate max-w-xl leading-relaxed mb-12"
              >
                Whether you&apos;re managing a property portfolio, renovating a
                hospitality space, or building a digital system — tell us what
                you&apos;re working on.
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Field
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-navy mb-2">
                  Inquiry Type <span className="text-sand">*</span>
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sand/30 focus:border-sand ${
                    errors.inquiryType ? "border-red-400" : "border-navy/15"
                  }`}
                >
                  <option value="">Select inquiry type...</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <p className="mt-1 font-body text-xs text-red-500">
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-navy mb-2">
                  Project Description <span className="text-sand">*</span>
                </label>
                <textarea
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sand/30 focus:border-sand resize-none ${
                    errors.description ? "border-red-400" : "border-navy/15"
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.description && (
                  <p className="mt-1 font-body text-xs text-red-500">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., Q2 2026"
                />
                <Field
                  label="How did you hear about us?"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="px-10 py-4 bg-sand text-navy font-body font-semibold text-sm tracking-wide rounded-full hover:bg-sand-dark transition-all duration-300 hover:shadow-premium"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="lg:pt-32">
            <div className="sticky top-28 space-y-8">
              <div className="p-8 rounded-lg bg-offwhite border border-navy/8">
                <h3 className="font-display text-lg font-bold text-navy mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-3 font-body text-sm text-slate hover:text-sand-dark transition-colors"
                  >
                    <svg className="w-4 h-4 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {companyInfo.phoneFormatted}
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 font-body text-sm text-slate hover:text-sand-dark transition-colors"
                  >
                    <svg className="w-4 h-4 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-lg bg-navy-deep text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/founder.png"
                    alt="Jaheim — Founder"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover object-top"
                  />
                  <div>
                    <p className="font-body text-sm font-semibold text-white">
                      Jaheim
                    </p>
                    <p className="font-body text-xs text-white/50">Founder</p>
                  </div>
                </div>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent
                  operational needs, call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-body text-sm font-medium text-navy mb-2">
        {label} {required && <span className="text-sand">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sand/30 focus:border-sand ${
          error ? "border-red-400" : "border-navy/15"
        }`}
      />
      {error && (
        <p className="mt-1 font-body text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
