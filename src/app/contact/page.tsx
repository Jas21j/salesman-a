import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project discussion with Salesman Solutions. Property operations, hospitality projects, digital systems — tell us what you're working on.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
