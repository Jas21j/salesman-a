import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PlatformPage from "@/components/sections/solutions/PlatformPage";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "ASSAN — Operational Systems",
  description:
    "ASSAN — Applied Systems for Service and Network Operations. Property systems, hospitality logistics, field deployment, and operational execution by Salesman Solutions.",
};

const assanData = {
  platform: "ASSAN" as const,
  subtitle: "Applied Systems for Service and Network Operations",
  role: "Operational Deployment & Execution",
  tag: "OPERATIONS",
  description:
    "ASSAN is the execution engine of Salesman Solutions. Structured operational workflows for properties, hospitality, logistics, and field deployment — transforming ad-hoc work into repeatable, scalable systems.",
  capabilities: [
    {
      title: "Property Operations Systems",
      description: "End-to-end property maintenance, installation, and optimization frameworks for residential and commercial environments.",
    },
    {
      title: "Hospitality Supply & Logistics",
      description: "Premium product sourcing, delivery coordination, and turnover operations for hotels and hospitality properties.",
    },
    {
      title: "Field Team Deployment",
      description: "Structured deployment systems for field operations — scheduling, routing, quality assurance, and documentation.",
    },
    {
      title: "Vendor Coordination Networks",
      description: "Supply chain management and vendor relationship systems that ensure consistent quality and reliable execution.",
    },
    {
      title: "Operational Documentation",
      description: "Every engagement documented as a coded operation — creating institutional knowledge that compounds over time.",
    },
  ],
};

export default function ASSANPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlatformPage {...assanData} />
        <CTABand
          headline="Need Operational Systems Deployed?"
          primaryCTA={{ label: "Discuss ASSAN", href: "/contact" }}
          secondaryCTA={{ label: "View ASSAN Case Studies", href: "/case-studies" }}
        />
      </main>
      <Footer />
    </>
  );
}
