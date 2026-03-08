import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyContent from "@/components/sections/case-studies/CaseStudyContent";
import CTABand from "@/components/ui/CTABand";
import { caseStudies } from "@/data/case-studies";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return {
    title: study.operationName,
    description: `${study.operationName} — ${study.category.join(", ")}. ${study.timeline}, ${study.location}. ${study.overview.slice(0, 155)}...`,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyContent study={study} />
        <CTABand
          headline="Ready to Start Your Own Coded Operation?"
          primaryCTA={{ label: "Start a Discussion", href: "/contact" }}
          secondaryCTA={{ label: "View All Operations", href: "/case-studies" }}
        />
      </main>
      <Footer />
    </>
  );
}
