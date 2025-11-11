import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  const transparentRoutes = new Set<string>(['/', '/nosotros', '/proyectos', '/proyecto-osaka', '/proyecto-kioto', '/portal-pagos', '/blog', '/contacto'])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path: string) => {
    return location.pathname === path
  }

  // Forzar fondo sólido cuando el menú móvil está abierto para evitar que el contenido de fondo tape el menú
  const isTransparent = transparentRoutes.has(location.pathname) && !isScrolled && !isMobileMenuOpen
  const linkBase = isTransparent ? 'text-white hover:text-accent-300' : 'text-gray-700 hover:text-primary-500'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      isTransparent ? 'bg-transparent border-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    }`}>
      {/* Top Bar - Información de Contacto */}
      {/* <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Nuestra Ubicación</span>
                  <p className="text-gray-600 text-xs">Calle 93 #16-46, Bogotá</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Soporte Online</span>
                  <p className="text-gray-600 text-xs">info@kinku.co</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Contacto Gratuito</span>
                  <p className="text-gray-600 text-xs">+57 (1) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-1 md:px-4 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo/nuevo-logo-kinku.webp" 
              alt="Logo Kinku" 
              className={`w-16 h-16 ml-2 object-contain transform scale-150 origin-center ${isTransparent ? 'drop-shadow' : ''}`}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link transition-colors flex items-center ${
                isActive('/') ? 'text-primary-500' : linkBase
              }`}
            >
              Inicio <span className="ml-1">+</span>
            </Link>
            
            <div className="relative group">
              <Link 
                to="/proyectos" 
                className={`nav-link transition-colors flex items-center ${
                  isActive('/proyectos') ? 'text-primary-500' : linkBase
                }`}
              >
                Proyectos <span className="ml-1">+</span>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/proyecto-kioto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Proyecto Kioto</Link>
                  <Link to="/proyecto-osaka" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Proyecto Osaka</Link>
                  <a href="https://proyectopekin.co" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Proyecto Pekín</a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                to="/nosotros" 
                className={`nav-link transition-colors flex items-center ${
                  isActive('/nosotros') ? 'text-primary-500' : linkBase
                }`}
              >
                Nosotros <span className="ml-1">+</span>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/nosotros" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Quiénes Somos</Link>
                  <Link to="/sostenibilidad" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sostenibilidad</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                to="/blog" 
                className={`nav-link transition-colors flex items-center ${
                  isActive('/blog') ? 'text-primary-500' : linkBase
                }`}
              >
                Herramientas <span className="ml-1">+</span>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Blog</Link>
                  <Link to="/metodos-de-financiamiento" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Métodos de financiamiento</Link>
                  <Link to="/portal-pagos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Portal de Pagos</Link>
                  <Link to="/contacto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contacto</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Utility Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className={`p-2 transition-colors ${isTransparent ? 'text-white hover:text-accent-300' : 'text-gray-600 hover:text-primary-500'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button className={`p-2 transition-colors relative ${isTransparent ? 'text-white hover:text-accent-300' : 'text-gray-600 hover:text-primary-500'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button> */}
            <Link
              to="/portal-pagos"
              className={`px-5 py-2 rounded-lg font-semibold transition-all border-2 ${
                isTransparent
                  ? 'border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
              }`}
            >
              Portal de Pagos
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ml-2 p-3 rounded-lg transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className={`nav-link transition-colors ${
                  isActive('/') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className={`nav-link transition-colors ${
                  isActive('/proyectos') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link 
                to="/nosotros" 
                className={`nav-link transition-colors ${
                  isActive('/nosotros') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                to="/blog" 
                className={`nav-link transition-colors ${
                  isActive('/blog') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/metodos-de-financiamiento" 
                className={`nav-link transition-colors ${
                  isActive('/metodos-de-financiamiento') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Métodos de financiamiento
              </Link>
              <Link 
                to="/contacto" 
                className={`nav-link transition-colors ${
                  isActive('/contacto') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                to="/portal-pagos" 
                className="w-full text-center px-5 py-3 rounded-lg font-semibold border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portal de Pagos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
