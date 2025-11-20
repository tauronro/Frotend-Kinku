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
import PaymentPortalKioto from './pages/PaymentPortalKioto'
import PaymentPortalMetriku from './pages/PaymentPortalMetriku'
import Checkout from './pages/Checkout'
import CheckoutSummary from './pages/CheckoutSummary'
import Sostenibilidad from './pages/Sostenibilidad'
import { ProjectPekin } from './pages/ProjectPekin'
import MetodosFinanciamiento from './pages/MetodosFinanciamiento'
import Politicas from './pages/Politicas'
import Faqs from './pages/Faqs'
import { Pqr } from './pages/Pqr'
import ServiciosPostVenta from './pages/ServiciosPostVenta'

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
          <Route path="/proyecto-pekin" element={<ProjectPekin />} />
          <Route path="/metodos-de-financiamiento" element={<MetodosFinanciamiento />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/portal-pagos" element={<PaymentPortal />} />
          <Route path="/pago-kioto" element={<PaymentPortalKioto />} />
          <Route path="/pago-metriku" element={<PaymentPortalMetriku />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-resumen" element={<CheckoutSummary />} />
          <Route path="/sostenibilidad" element={<Sostenibilidad />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/pqr" element={<Pqr />} />
          <Route path="/servicios-post-venta" element={<ServiciosPostVenta />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
