import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './views/Home.jsx'
import SubjectHome from './views/SubjectHome.jsx'
import ClassView from './views/ClassView.jsx'

export default function App() {
  const [nav, setNav] = useState({ view: 'home' })

  function navigate(next) {
    setNav(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold"
      >
        Saltar al contenido
      </a>
      <Header nav={nav} onNavigate={navigate} />
      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-16">
        {nav.view === 'home'    && <Home         onNavigate={navigate} />}
        {nav.view === 'subject' && <SubjectHome  subjectId={nav.subjectId} onNavigate={navigate} />}
        {nav.view === 'class'   && <ClassView    subjectId={nav.subjectId} classId={nav.classId} />}
      </main>
    </div>
  )
}
