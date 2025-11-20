import { useEffect, useState } from 'react'

function App() {
  const [ideas, setIdeas] = useState([])
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const loadIdeas = async () => {
    try {
      setError('')
      const res = await fetch(`${baseUrl}/api/ideas`)
      if (!res.ok) throw new Error(`Failed to load ideas: ${res.status}`)
      const data = await res.json()
      setIdeas(data)
    } catch (e) {
      setError(e.message)
    }
  }

  const addIdea = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`${baseUrl}/api/ideas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, details: details || null })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || 'Kon idee niet opslaan')
      }
      setTitle('')
      setDetails('')
      await loadIdeas()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadIdeas()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <img src="/flame-icon.svg" alt="Flames" className="w-16 h-16 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]" />
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Ideeënbord</h1>
            <p className="text-blue-200 mt-2">Deel snel een idee en zie het verschijnen</p>
          </div>

          <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 shadow-xl">
            <form onSubmit={addIdea} className="space-y-3">
              <div>
                <label className="block text-sm text-blue-200 mb-1">Titel</label>
                <input
                  className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Kort idee..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Details (optioneel)</label>
                <textarea
                  className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[90px]"
                  placeholder="Beschrijf het idee"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Bezig...' : 'Voeg idee toe'}
                </button>
                <a href="/test" className="text-blue-300 hover:text-white text-sm underline/30">Verbinding testen</a>
              </div>
            </form>

            {error && (
              <div className="mt-4 text-sm text-red-300 bg-red-900/30 border border-red-700/40 rounded-lg p-3">
                {error}
              </div>
            )}

            <div className="mt-6">
              <h2 className="text-white font-semibold mb-3">Jouw ideeën</h2>
              {ideas.length === 0 ? (
                <p className="text-blue-200/70 text-sm">Nog geen ideeën. Voeg er eentje toe!</p>
              ) : (
                <ul className="space-y-3">
                  {ideas.map((i) => (
                    <li key={i.id} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                      <p className="text-white font-medium">{i.title}</p>
                      {i.details && <p className="text-blue-200/80 text-sm mt-1 whitespace-pre-wrap">{i.details}</p>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-blue-300/60">Gebouwd met Flames Blue</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
