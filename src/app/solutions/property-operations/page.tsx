import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyOpsHero from "@/components/sections/projects/PropertyOpsHero";
import WhoItServes from "@/components/sections/projects/WhoItServes";
import HowItWorks from "@/components/sections/projects/HowItWorks";
import Capabilities from "@/components/sections/projects/Capabilities";
import RecurringModel from "@/components/sections/projects/RecurringModel";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Property Operations — ASSAN",
  description:
    "ASSAN-powered property operations by Salesman Solutions — structured systems for maintenance, installation, optimization, and turnover across residential and commercial properties.",
};

export default function PropertyOperationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PropertyOpsHero />
        <WhoItServes />
        <HowItWorks />
        <Capabilities />
        <RecurringModel />
        <CTABand
          headline="Ready to Install a System in Your Property?"
          primaryCTA={{ label: "Request Assessment", href: "/contact" }}
          secondaryCTA={{ label: "View Case Studies", href: "/case-studies" }}
        />
      </main>
      <Footer />
    </>
  );
}
