import { memo } from 'react'

export default memo(function About(){
  return (
    <section id="about" className="py-20" style={{background:'#050713'}}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl blur-3xl opacity-40 bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4]" />
          <div className="relative h-80 rounded-2xl border-2 border-transparent overflow-hidden" style={{backgroundImage:'linear-gradient(#0f172a,#0f172a), linear-gradient(135deg,#5B21B6,#3B82F6,#06B6D4)', backgroundOrigin:'border-box', backgroundClip:'padding-box, border-box'}}>
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Founder" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Meet the Founder</h2>
          <p className="text-slate-300 mt-2">De Visie Achter FlowMatic</p>
          <p className="text-slate-300 mt-4">Wij geloven dat technologie bedrijven moet transformeren, niet compliceren. We bouwen systemen die elegant, snel en schaalbaar zijn.</p>
          <div className="space-y-3 text-slate-400 mt-3">
            <p>Van discovery tot implementatie zorgen we voor een vloeiende ervaring.</p>
            <p>We combineren design finesse met technische excellentie.</p>
            <p>Automations nemen repetitieve taken over zodat teams kunnen focussen.</p>
            <p>We meten, leren en schalen door wat werkt.</p>
          </div>
          <div className="mt-6 p-4 rounded-xl" style={{background:'linear-gradient(135deg,#0f172a,#1e293b)', border:'1px solid rgba(100,116,139,0.2)'}}>
            <div className="border-l-4 border-blue-500 pl-3 italic text-slate-200">“Technology moet bedrijven transformeren, niet compliceren.”</div>
            <div className="text-slate-400 text-sm mt-2">Glenn Holvoet — Founder</div>
          </div>
          <div className="mt-6">
            <a href="#cta" className="inline-flex items-center h-12 px-6 rounded-xl font-semibold text-white" style={{background:'linear-gradient(90deg,#5B21B6,#3B82F6,#06B6D4)'}}>Neem contact op</a>
          </div>
        </div>
      </div>
    </section>
  )
})
