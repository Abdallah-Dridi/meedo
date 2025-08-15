import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MultiLanguagePageContent from "@/components/features/multi-language";

export default function MultiLanguageFeaturePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-black to-slate-900 font-sans text-slate-200 antialiased">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>

      <Header />
      <main className="relative z-10">
        <MultiLanguagePageContent />
      </main>
      <Footer />
    </div>
  );
}