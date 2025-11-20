import { memo } from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default memo(function Footer(){
  return (
    <footer className="bg-slate-900 pt-10" style={{background:'#050713'}}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-400" />
            <span className="text-white font-semibold">FlowMatic</span>
          </div>
          <p className="text-slate-400 mt-3 max-w-sm">Premium software, websites en AI-automations die resultaat leveren.</p>
          <div className="flex items-center gap-4 mt-4 text-slate-300">
            <a href="#" className="hover:text-white"><Github size={18} /></a>
            <a href="#" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          {[
            {title:'Solutions', links:['AI Team','Project Management','Analytics']},
            {title:'Support', links:['Pricing','Documentation','API Status']},
            {title:'Company', links:['About','Blog','Jobs']},
            {title:'Legal', links:['Privacy','Terms']},
          ].map((g,i)=> (
            <div key={i}>
              <h4 className="text-white font-semibold mb-3">{g.title}</h4>
              <ul className="space-y-2 text-slate-400">
                {g.links.map(l=> <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-slate-500 text-sm">© {new Date().getFullYear()} FlowMatic. All rights reserved.</div>
    </footer>
  )
})
