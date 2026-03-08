import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsIndex from "@/components/sections/solutions/SolutionsIndex";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Salesman Solutions' two platforms — IRIS for digital intelligence and optimization, and ASSAN for operational deployment and execution.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsIndex />
        <CTABand
          headline="Ready to Deploy a System?"
          primaryCTA={{ label: "Start a Discussion", href: "/contact" }}
          secondaryCTA={{ label: "View Case Studies", href: "/case-studies" }}
        />
      </main>
      <Footer />
    </>
  );
}
