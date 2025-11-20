import { memo, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Bot, Globe2, TrendingUp, Sparkles, Workflow } from 'lucide-react'

const services = [
  { key:'software', name:'Software Engineering', icon: Cpu, color:'from-[#5B21B6] to-[#3B82F6]', desc:'Maatwerk apps die precies doen wat je nodig hebt.' },
  { key:'ai', name:'AI Automations', icon: Bot, color:'from-[#5B21B6] to-pink-500', desc:'Slimme automatisaties die uren per week besparen.' },
  { key:'web', name:'Websites', icon: Globe2, color:'from-[#3B82F6] to-[#06B6D4]', desc:'Snelle, luxe sites met een premium look.' },
  { key:'growth', name:'Business Scaling', icon: TrendingUp, color:'from-emerald-400 to-green-600', desc:'Systemen die omzet en efficiëntie verhogen.' },
  { key:'brand', name:'Brand Scaling', icon: Sparkles, color:'from-pink-400 to-fuchsia-600', desc:'Social content die aandacht pakt en converteert.' },
  { key:'agents', name:'AI Agents', icon: Workflow, color:'from-indigo-400 to-purple-600', desc:'Agents die taken autonoom uitvoeren.' },
]

const DemoBack = memo(({ type }) => {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  if (type === 'software') {
    return (
      <div className="space-y-3">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="URL of email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white" />
        <div className="flex gap-2">
          <button onClick={()=>setInput('https://example.com')} className="px-3 py-1.5 text-xs rounded bg-slate-800 text-slate-200">Website</button>
          <button onClick={()=>setInput('info@example.com')} className="px-3 py-1.5 text-xs rounded bg-slate-800 text-slate-200">Email</button>
        </div>
        <button className="relative inline-flex items-center justify-center h-10 px-4 rounded-lg text-white font-semibold">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4]" />
          <span className="relative">Genereer QR</span>
        </button>
        <div className="mt-2 h-28 rounded-lg border border-slate-700 bg-slate-900/60 flex items-center justify-center text-slate-400 text-sm">QR Preview</div>
      </div>
    )
  }
  if (type === 'ai') {
    return (
      <div className="space-y-3">
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Schrijf een mail over..." className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white min-h-[90px]" />
        <div className="flex gap-2 flex-wrap">
          {['Meeting','Follow-up','Bedankt'].map(p=> (
            <button key={p} onClick={()=>setInput(p)} className="px-3 py-1.5 text-xs rounded bg-slate-800 text-slate-200">{p}</button>
          ))}
        </div>
        <button disabled={loading} onClick={async()=>{setLoading(true); await new Promise(r=>setTimeout(r,800)); setLoading(false);}} className="relative inline-flex items-center justify-center h-10 px-4 rounded-lg text-white font-semibold">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#5B21B6] to-pink-500" />
          <span className="relative">{loading ? 'Bezig...' : 'Genereer AI Email'}</span>
        </button>
        <div className="mt-2 h-28 rounded-lg border border-slate-700 bg-slate-900/60 p-2 text-slate-300 text-sm overflow-auto">{loading ? '...' : (input ? `Voorstel voor: ${input}` : 'Output verschijnt hier')}</div>
      </div>
    )
  }
  if (type === 'web') {
    return (
      <div className="space-y-3">
        <button onClick={async()=>{setLoading(true); for(let i=0;i<=98;i++){await new Promise(r=>setTimeout(r,8)); setCount(i)} setLoading(false)}} className="relative inline-flex items-center justify-center h-10 px-4 rounded-lg text-white font-semibold">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]" />
          <span className="relative">Start Speed Test</span>
        </button>
        <div className="mt-2 h-28 rounded-lg border border-slate-700 bg-slate-900/60 flex items-center justify-center">
          <span className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">{count}</span>
        </div>
      </div>
    )
  }
  if (type === 'growth') {
    return (
      <div className="space-y-3">
        <button onClick={async()=>{setLoading(true); for(let i=0;i<=250;i++){await new Promise(r=>setTimeout(r,6)); setCount(i)} setLoading(false)}} className="relative inline-flex items-center justify-center h-10 px-4 rounded-lg text-white font-semibold">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-green-600" />
          <span className="relative">Bereken Groei</span>
        </button>
        <div className="mt-2 h-28 rounded-lg border border-slate-700 bg-slate-900/60 flex items-center justify-center">
          <span className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">{count}%</span>
        </div>
      </div>
    )
  }
  if (type === 'brand') {
    return (
      <div className="space-y-3">
        <button onClick={async()=>{setLoading(true); for(let i=0;i<=50;i++){await new Promise(r=>setTimeout(r,20)); setCount(i)} setLoading(false)}} className="relative inline-flex items-center justify-center h-10 px-4 rounded-lg text-white font-semibold">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400 to-fuchsia-600" />
          <span className="relative">Simuleer Impact</span>
        </button>
        <div className="mt-2 h-28 rounded-lg border border-slate-700 bg-slate-900/60 flex items-center justify-center">
          <span className="text-3xl font-black bg-gradient-to-r from-pink-400 to-fuchsia-600 bg-clip-text text-transparent">{count}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-3">
      <button onClick={async()=>{setLoading(true); const msgs=['Agent initialiseren...','Taken analyseren...','Tools koppelen...','Agent actief.']; for(const m of msgs){setInput(m); await new Promise(r=>setTimeout(r,900));} setLoading(false)}} className="relative inline-flex items-center justify-center h-10 px-4 rounded-lg text-white font-semibold">
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-600" />
        <span className="relative">Start Agent</span>
      </button>
      <div className="mt-2 h-28 rounded-lg border border-slate-700 bg-slate-900/60 p-2 text-slate-300 text-sm overflow-auto">{input || 'Status verschijnt hier'}</div>
    </div>
  )
})

const ServiceCard = memo(function ServiceCard({ s }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = s.icon
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative h-[300px] [transform-style:preserve-3d] cursor-pointer"
      onClick={() => setFlipped(v=>!v)}
    >
      {/* Front */}
      <div className={`absolute inset-0 rounded-2xl p-5 border border-slate-700/50`}
           style={{backdropFilter:'blur(12px)', background:'linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(30,41,59,0.6) 100%)'}}>
        <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${s.color} mb-4`} />
        <h3 className="text-white text-lg font-semibold">{s.name}</h3>
        <p className="text-slate-400 text-sm mt-1">{s.desc}</p>
        <span className="text-xs text-blue-400 absolute bottom-5">Klik om te proberen →</span>
      </div>
      {/* Back */}
      <div className={`absolute inset-0 rounded-2xl p-5 border border-slate-700/50 [transform:rotateY(180deg)]`} style={{backfaceVisibility:'hidden', backdropFilter:'blur(12px)', background:'linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(30,41,59,0.6) 100%)'}}>
        <h4 className="text-white font-semibold mb-3">🎯 Probeer het zelf!</h4>
        <div className="pr-1 overflow-auto h-[220px]">
          <DemoBack type={s.key} />
        </div>
        <p className="mt-2 text-xs text-blue-300">Klik om terug te gaan</p>
      </div>
      <div className={`absolute inset-0 transition-transform duration-500 ${flipped ? '[transform:rotateY(180deg)]' : ''}`} style={{transformStyle:'preserve-3d'}} />
    </motion.div>
  )
})

export default memo(function Services() {
  return (
    <section id="services" className="relative py-20" style={{background:'#050713'}}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white">Onze Diensten</h2>
        <div className="h-1 w-36 bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4] rounded-full mt-3" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => <ServiceCard key={s.key} s={s} />)}
        </div>
      </div>
    </section>
  )
})
