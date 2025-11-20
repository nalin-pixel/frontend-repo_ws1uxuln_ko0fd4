import { memo } from 'react'

export default memo(function FinalCTA(){
  return (
    <section id="cta" className="py-20" style={{background:'#050713'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl p-12 md:p-16" style={{backdropFilter:'blur(12px)', background:'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(30,41,59,0.6))', border:'1px solid rgba(100,116,139,0.2)'}}>
          <div className="absolute inset-0 rounded-3xl opacity-20" style={{background:'conic-gradient(from 0deg at 50% 50%, #5B21B6, #3B82F6, #06B6D4, #5B21B6)'}} />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-black text-white">Klaar om de toekomst te bouwen?</h2>
            <div className="h-1 w-64 bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4] rounded-full mt-3" />
            <p className="text-slate-300 mt-4 max-w-2xl">Vertel ons je visie, dan valideren en bouwen we het — met snelheid, kwaliteit en een premium afwerking.</p>
            <div className="mt-8">
              <a href="#" className="relative inline-flex h-16 items-center justify-center rounded-2xl px-12 font-semibold text-white">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4]" />
                <span className="relative flex items-center gap-3">Boek een Meeting <span className="transition-transform group-hover:translate-x-1">→</span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
