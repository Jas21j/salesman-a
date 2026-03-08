import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Salesman Solutions.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-section bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          <p className="eyebrow text-sand-dark mb-4">LEGAL</p>
          <h1 className="font-display text-display-lg font-bold text-navy mb-12">
            Terms of Service
          </h1>

          <div className="prose-ss space-y-10">
            <Section title="Acceptance of Terms">
              <p>
                By accessing and using the Salesman Solutions website and
                services, you accept and agree to be bound by these Terms of
                Service. If you do not agree, please do not use our services.
              </p>
            </Section>

            <Section title="Services Description">
              <p>
                Salesman Solutions provides structured operational systems for
                property operations, hospitality support, and digital
                infrastructure. Services are delivered through project-based
                engagements, recurring operational support models, and embedded
                deployment partnerships.
              </p>
            </Section>

            <Section title="User Responsibilities">
              <p>
                You agree to provide accurate information when submitting
                inquiries, comply with all applicable laws and regulations, not
                misuse our services or interfere with their operation, and
                maintain the confidentiality of any project-related communications.
              </p>
            </Section>

            <Section title="Payment Terms">
              <p>
                Payment terms are established on a per-project basis and
                documented in individual service agreements. All invoices are due
                upon the terms specified in the applicable engagement agreement.
              </p>
            </Section>

            <Section title="Intellectual Property">
              <p>
                All content, branding, methodologies, and operational frameworks
                developed by Salesman Solutions remain the intellectual property
                of Salesman Solutions unless explicitly transferred through a
                written agreement.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                Salesman Solutions shall not be liable for any indirect,
                incidental, special, or consequential damages arising from the
                use of our services. Our total liability shall not exceed the
                amount paid for the specific services giving rise to the claim.
              </p>
            </Section>

            <Section title="Indemnification">
              <p>
                You agree to indemnify and hold harmless Salesman Solutions, its
                founder, employees, and partners from any claims, damages, or
                expenses arising from your use of our services or violation of
                these terms.
              </p>
            </Section>

            <Section title="Dispute Resolution">
              <p>
                Any disputes arising from these terms shall be governed by and
                construed in accordance with the laws of the State of Florida.
                Disputes shall be resolved through good-faith negotiation, and
                if necessary, binding arbitration in Tallahassee, FL.
              </p>
            </Section>

            <Section title="Changes to Terms">
              <p>
                Salesman Solutions reserves the right to modify these terms at
                any time. Continued use of our services after changes constitutes
                acceptance of the modified terms.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                For questions regarding these terms, contact us at{" "}
                <a href="mailto:JaheimSalesman@gmail.com" className="text-sand-dark hover:text-navy transition-colors underline">
                  JaheimSalesman@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:954-830-6310" className="text-sand-dark hover:text-navy transition-colors underline">
                  954-830-6310
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
