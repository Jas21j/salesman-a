import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Salesman Solutions.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-section bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          <p className="eyebrow text-sand-dark mb-4">LEGAL</p>
          <h1 className="font-display text-display-lg font-bold text-navy mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-10">
            <Section title="Information We Collect">
              <p>
                We collect information you provide directly, including name,
                email address, phone number, company name, and project details
                submitted through our contact form. We may also collect usage
                data through standard web analytics.
              </p>
            </Section>

            <Section title="How We Use Information">
              <p>
                Information collected is used to respond to inquiries and project
                requests, deliver and improve our services, communicate about
                engagements and operational updates, and improve website
                functionality and user experience.
              </p>
            </Section>

            <Section title="Information Sharing">
              <p>
                We do not sell, trade, or rent personal information to third
                parties. Information may be shared with trusted service providers
                who assist in operating our website and services, subject to
                confidentiality agreements.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain personal information for as long as necessary to
                fulfill the purposes outlined in this policy, comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </p>
            </Section>

            <Section title="Cookies & Tracking">
              <p>
                Our website may use cookies and similar technologies to enhance
                user experience and collect aggregate analytics data. You may
                disable cookies through your browser settings.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, contact us at the email
                below. We will respond to your request within 30 days.
              </p>
            </Section>

            <Section title="Children&apos;s Privacy">
              <p>
                Our website and services are not directed to children under the
                age of 13. We do not knowingly collect personal information from
                children under 13.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                For privacy inquiries, contact us at{" "}
                <a href="mailto:JaheimSalesman@gmail.com" className="text-sand-dark hover:text-navy transition-colors underline">
                  JaheimSalesman@gmail.com
                </a>.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-navy mb-3">{title}</h2>
      <div className="font-body text-base text-slate leading-relaxed">{children}</div>
    </div>
  );
}
