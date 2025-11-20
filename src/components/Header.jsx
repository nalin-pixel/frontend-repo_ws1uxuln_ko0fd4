import { memo, useEffect, useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'

const Header = memo(function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('NL')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-slate-900/60 backdrop-blur-lg' : 'bg-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
          <span className="text-white font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">FlowMatic</span>
        </a>

        {/* Nav - desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-slate-300 hover:text-white transition">Home</a>
          <a href="#about" className="text-slate-300 hover:text-white transition">Over Ons</a>
          <a href="#services" className="text-slate-300 hover:text-white transition">FlowMatic Systeem</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'NL' ? 'EN' : 'NL')}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition"
            aria-label="Language toggle"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-medium">{lang}</span>
          </button>
          <a href="#cta" className="group relative inline-flex h-10 items-center gap-2 rounded-xl px-5 font-semibold text-white">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4] opacity-90" />
            <span className="relative">Boek een Meeting</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-slate-900/80 backdrop-blur-lg">
          <a href="#home" className="block text-slate-300 hover:text-white">Home</a>
          <a href="#about" className="block text-slate-300 hover:text-white">Over Ons</a>
          <a href="#services" className="block text-slate-300 hover:text-white">FlowMatic Systeem</a>
          <a href="#contact" className="block text-slate-300 hover:text-white">Contact</a>
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'NL' ? 'EN' : 'NL')}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{lang}</span>
            </button>
            <a href="#cta" className="relative inline-flex h-10 items-center gap-2 rounded-xl px-5 font-semibold text-white">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4] opacity-90" />
              <span className="relative">Boek een Meeting</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
})

export default Header
