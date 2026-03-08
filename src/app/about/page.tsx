import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import FounderTimeline from "@/components/sections/about/FounderTimeline";
import MissionStatement from "@/components/sections/about/MissionStatement";
import AboutDoctrine from "@/components/sections/about/AboutDoctrine";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Salesman Solutions — a platform venture architecture company building structured operational systems. Founded by Jaheim, driven by a mission to engineer how environments function.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <FounderTimeline />
        <MissionStatement />
        <AboutDoctrine />
        <CTABand
          headline="Ready to Build a System Together?"
          primaryCTA={{ label: "Start a Discussion", href: "/contact" }}
          secondaryCTA={{ label: "Explore Solutions", href: "/solutions" }}
        />
      </main>
      <Footer />
    </>
  );
}
