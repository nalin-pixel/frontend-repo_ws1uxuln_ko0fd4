import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import About from './components/About'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen" style={{background:'#050713'}}>
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <FinalCTA />
      </main>
    </div>
  )
}

export default App
