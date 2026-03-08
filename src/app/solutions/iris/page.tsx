import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PlatformPage from "@/components/sections/solutions/PlatformPage";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "IRIS — Digital Intelligence",
  description:
    "IRIS — Intelligent Resource Infrastructure Systems. Custom system development, dashboards, data intelligence, and digital infrastructure by Salesman Solutions.",
};

const irisData = {
  platform: "IRIS" as const,
  subtitle: "Intelligent Resource Infrastructure Systems",
  role: "Digital Intelligence & Optimization",
  tag: "OPTIMIZATIONS",
  description:
    "IRIS powers the analytical and digital layer of Salesman Solutions. From custom dashboards to full system architecture, IRIS turns raw operational data into strategic infrastructure that organizations can rely on.",
  capabilities: [
    {
      title: "Custom System Development",
      description: "Full-scope web and application builds tailored to operational needs — not templates, not generic SaaS.",
    },
    {
      title: "Digital Dashboards & Analytics",
      description: "Real-time operational visibility through custom dashboard architecture that surfaces the data that matters.",
    },
    {
      title: "Data Infrastructure",
      description: "Backend system architecture, API development, and data pipeline design for organizations scaling their digital footprint.",
    },
    {
      title: "Process Automation",
      description: "Workflow automation that eliminates repetitive manual processes and reduces coordination overhead.",
    },
    {
      title: "Performance Intelligence",
      description: "Analytics and reporting frameworks that translate operational activity into actionable business intelligence.",
    },
  ],
};

export default function IRISPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlatformPage {...irisData} />
        <CTABand
          headline="Need Digital Infrastructure Built Right?"
          primaryCTA={{ label: "Discuss IRIS", href: "/contact" }}
          secondaryCTA={{ label: "View IRIS Case Studies", href: "/case-studies" }}
        />
      </main>
      <Footer />
    </>
  );
}
