import PersonalizationIntelligenceContent from "@/components/features/PersonalizationIntelligence"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PersonalizationIntelligencePage(){
  return(
    <div className="bg-gradient-to-br from-black to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"></div>
      </div>
      < Header />
      < PersonalizationIntelligenceContent />      
      < Footer />
    </div>
  )
}