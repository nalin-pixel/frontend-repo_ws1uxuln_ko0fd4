import { memo } from 'react'
import { motion } from 'framer-motion'

export default memo(function Process(){
  const steps = [
    {n:'01', t:'Discovery & Strategy', d:'We ontdekken je doelen en valideren de aanpak.'},
    {n:'02', t:'Design & Development', d:'Pixel-perfect design en solide engineering.'},
    {n:'03', t:'Execution & Automation', d:'Implementatie, integraties en automatisaties.'},
    {n:'04', t:'Growth & Scaling', d:'Continue optimalisatie en schaalbaarheid.'},
  ]
  return (
    <section className="py-20" style={{background:'#050713'}}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white">Jouw Visie, Gevalideerd & Gebouwd.</h2>
        <div className="h-1 w-72 bg-gradient-to-r from-[#3B82F6] via-[#5B21B6] to-pink-500 rounded-full mt-3" />
        <div className="relative mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3B82F6] via-[#5B21B6] to-pink-500" />
          <div className="space-y-12">
            {steps.map((s,i)=> (
              <div key={s.n} className={`flex ${i%2? 'justify-start':'justify-end'}`}>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}
                  className="w-full md:w-1/2 rounded-2xl p-6 border border-slate-700/40"
                  style={{backdropFilter:'blur(12px)', background:'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(30,41,59,0.6))'}}>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-slate-900 border-2 border-transparent" style={{backgroundImage:'linear-gradient(#0f172a,#0f172a), linear-gradient(135deg,#3B82F6,#A21CAF,#EC4899)', backgroundOrigin:'border-box', backgroundClip:'padding-box, border-box'}} />
                    <div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-pink-500 text-2xl font-extrabold">{s.n}</div>
                      <h3 className="text-white text-xl font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5B21B6] hover:via-[#3B82F6] hover:to-pink-500 transition-colors">{s.t}</h3>
                    </div>
                  </div>
                  <p className="text-slate-300 mt-3">{s.d}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})
