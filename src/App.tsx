import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { ProjectKioto } from './pages/ProjectKioto'
import { ProjectOsaka } from './pages/ProjectOsaka'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { PaymentPortal } from './pages/PaymentPortal'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyecto-kioto" element={<ProjectKioto />} />
          <Route path="/proyecto-osaka" element={<ProjectOsaka />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/portal-pagos" element={<PaymentPortal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
