import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-section bg-white">
        <div className="max-w-[1440px] mx-auto section-padding text-center py-20">
          <p className="font-display text-[8rem] font-bold text-navy/5 leading-none">
            404
          </p>
          <h1 className="font-display text-display-md font-bold text-navy -mt-8 mb-4">
            Page Not Found
          </h1>
          <p className="font-body text-lg text-slate mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sand text-navy font-body font-semibold text-sm tracking-wide rounded-full hover:bg-sand-dark transition-all duration-300 hover:shadow-premium"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
