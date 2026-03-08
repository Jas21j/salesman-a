import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudiesIndex from "@/components/sections/case-studies/CaseStudiesIndex";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Documented operational records from Salesman Solutions. Every project is coded, documented, and measured — these are not testimonials, they are operational proof.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudiesIndex />
        <CTABand
          headline="Ready to become the next coded operation?"
          primaryCTA={{ label: "Start a Project Discussion", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
