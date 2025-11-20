import { memo, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id:1, name:'LeadFlow', company:'Lead Generation', services:['AI','Automation'], desc:'Volledig geautomatiseerde lead pipelines met realtime scoring.', stats:[{k:'Leads',v:'+320%'},{k:'Time Saved',v:'12h/wk'},{k:'Reply Rate',v:'+48%'}] },
  { id:2, name:'iMatch', company:'Recruitment', services:['Platform','Web'], desc:'Schaalbaar matching platform met snelle search en UI.', stats:[{k:'Time-to-Hire',v:'-35%'},{k:'Candidates',v:'+140%'},{k:'Uptime',v:'99.9%'}] },
  { id:3, name:'FlowMatic', company:'Agency System', services:['System','AI'], desc:'End-to-end agency operating system met dashboards.', stats:[{k:'Ops Efficiency',v:'+62%'},{k:'Reporting',v:'Realtime'},{k:'Automation',v:'40+'}] },
]

export default memo(function CaseStudies(){
  const [serviceFilter, setServiceFilter] = useState('All')
  const [industryFilter, setIndustryFilter] = useState('All')

  const filtered = useMemo(()=> {
    return projects.filter(p => (serviceFilter==='All' || p.services.includes(serviceFilter)) && (industryFilter==='All' || p.company===industryFilter))
  }, [serviceFilter, industryFilter])

  const pill = (label, active, onClick, gradient) => (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${active ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            style={active ? {background: gradient} : {background:'rgba(15,23,42,0.6)', border:'1px solid rgba(100,116,139,0.2)', backdropFilter:'blur(12px)'}}>
      {label}
    </button>
  )

  return (
    <section className="py-20" style={{background:'#050713'}}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white">Featured Projects</h2>
        <div className="h-1 w-48 bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-pink-500 rounded-full mt-3" />

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {pill('All', serviceFilter==='All', ()=>setServiceFilter('All'), 'linear-gradient(90deg,#3B82F6,#5B21B6)')}
          {pill('AI', serviceFilter==='AI', ()=>setServiceFilter('AI'), 'linear-gradient(90deg,#3B82F6,#5B21B6)')}
          {pill('Automation', serviceFilter==='Automation', ()=>setServiceFilter('Automation'), 'linear-gradient(90deg,#3B82F6,#5B21B6)')}
          {pill('Platform', serviceFilter==='Platform', ()=>setServiceFilter('Platform'), 'linear-gradient(90deg,#3B82F6,#5B21B6)')}
          {pill('Web', serviceFilter==='Web', ()=>setServiceFilter('Web'), 'linear-gradient(90deg,#3B82F6,#5B21B6)')}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {pill('All', industryFilter==='All', ()=>setIndustryFilter('All'), 'linear-gradient(90deg,#A21CAF,#EC4899)')}
          {pill('Lead Generation', industryFilter==='Lead Generation', ()=>setIndustryFilter('Lead Generation'), 'linear-gradient(90deg,#A21CAF,#EC4899)')}
          {pill('Recruitment', industryFilter==='Recruitment', ()=>setIndustryFilter('Recruitment'), 'linear-gradient(90deg,#A21CAF,#EC4899)')}
          {pill('Agency System', industryFilter==='Agency System', ()=>setIndustryFilter('Agency System'), 'linear-gradient(90deg,#A21CAF,#EC4899)')}
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(p => (
              <motion.div key={p.id} layout initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0}}
                className="rounded-2xl p-6 border border-slate-700/40"
                style={{backdropFilter:'blur(12px)', background:'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(30,41,59,0.6))'}}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#5B21B6] via-[#3B82F6] to-[#06B6D4]" />
                  <div>
                    <p className="text-white font-semibold">{p.name}</p>
                    <p className="text-slate-400 text-sm">{p.company}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.services.map(s => (
                    <span key={s} className="text-xs text-blue-300 border border-blue-500/20 rounded-full px-2 py-1">{s}</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm mt-4 min-h-[56px]">{p.desc}</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {p.stats.map(st => (
                    <div key={st.k} className="text-center">
                      <div className="text-xl font-extrabold bg-gradient-to-r from-[#5B21B6] to-[#06B6D4] bg-clip-text text-transparent">{st.v}</div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400">{st.k}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <button className="text-sm text-white/90 underline/30 hover:text-white">Check it out →</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
})
