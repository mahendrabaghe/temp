import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import DeityPage from './pages/DeityPage'
import NotFoundPage from './pages/NotFoundPage'
import { useLanguage } from './context/LanguageContext'
import { ui } from './i18n'

export default function App() {
  const { pick } = useLanguage()

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="skip-link"
          onClick={(event) => {
            event.preventDefault()
            const main = document.getElementById('main-content')
            main?.focus()
            main?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {pick(ui.skip)}
        </a>

        <Navbar />

        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/deity/:slug" element={<DeityPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </HashRouter>
  )
}
