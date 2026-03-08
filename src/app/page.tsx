import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CostOfComplexity from "@/components/sections/CostOfComplexity";
import PlatformArchitecture from "@/components/sections/PlatformArchitecture";
import IndustryMorphingStrip from "@/components/sections/IndustryMorphingStrip";
import Doctrine from "@/components/sections/Doctrine";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CompanyProof from "@/components/sections/CompanyProof";
import WhySS from "@/components/sections/WhySS";
import CTABand from "@/components/ui/CTABand";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CostOfComplexity />
        <PlatformArchitecture />
        <IndustryMorphingStrip />
        <Doctrine />
        <CaseStudiesPreview />
        <CompanyProof />
        <WhySS />
        <CTABand
          headline="Ready to Build a System That Runs?"
          primaryCTA={{ label: "Start a Discussion", href: "/contact" }}
          secondaryCTA={{ label: "Explore Case Studies", href: "/case-studies" }}
        />
      </main>
      <Footer />
    </>
  );
}
