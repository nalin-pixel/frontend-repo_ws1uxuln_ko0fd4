import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden" style={{background:'#050713'}}>
      {/* Radial spotlights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(circle,#3B82F6,transparent 60%)'}} />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(circle,#5B21B6,transparent 60%)'}} />
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(circle,#06B6D4,transparent 60%)'}} />
      </div>

      {/* Moving gradient orbs */}
      <motion.div
        className="absolute h-72 w-72 rounded-full mix-blend-screen" style={{background:'linear-gradient(135deg,#5B21B6,#3B82F6)'}}
        animate={{ y: [0,-20,0], x:[0,10,0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute h-56 w-56 rounded-full mix-blend-screen" style={{background:'linear-gradient(135deg,#06B6D4,#3B82F6)'}}
        animate={{ y: [0,15,0], x:[0,-10,0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <span className="block opacity-90">Jij Droomt.</span>
          <span className="block bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">Wij Creëren.</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
        >
          Premium software, websites en AI-automations die jouw groei versnellen. Subtiele animaties, glasmorphism en performance-first.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="group relative inline-flex h-16 items-center justify-center rounded-2xl px-12 font-black text-white">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4]" />
            <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">Plan een call <span className="transition-transform group-hover:translate-x-1">→</span></span>
          </a>
          <a href="#services" className="relative inline-flex h-16 items-center justify-center rounded-2xl px-12 font-bold text-white/90"
             style={{backdropFilter:'blur(12px)', background:'linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(30,41,59,0.6) 100%)', border:'1px solid rgba(100,116,139,0.2)'}}>
            Bekijk services
          </a>
        </div>

        {/* Feature badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {title:'Custom Software', color:'from-[#5B21B6] to-[#3B82F6]'},
            {title:'Luxe Websites', color:'from-[#3B82F6] to-[#06B6D4]'},
            {title:'Snelle Levering', color:'from-[#5B21B6] to-[#06B6D4]'},
          ].map((b, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-4 rounded-2xl shadow-2xl"
              style={{backdropFilter:'blur(12px)', background:'linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(30,41,59,0.6) 100%)', border:'1px solid rgba(100,116,139,0.2)'}}>
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${b.color} shadow-[0_0_30px_rgba(59,130,246,0.5)]`} />
              <p className="mt-3 text-lg font-bold text-white">{b.title}</p>
              <p className="text-sm text-slate-400">Impactvolle resultaten met een premium afwerking.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize:'40px 40px'}} />
    </section>
  )
}
