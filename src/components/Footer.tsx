import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo/nuevo-logo-kinku.webp"
                alt="Kinku"
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Tu aliado inmobiliario en Bogotá. Proyectos modernos, calidad garantizada 
              y acompañamiento personalizado.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GEkinku" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Kinku" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/kinkuconstructora" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Kinku" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM17.5 6a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/grupo-empresarial-kinku" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Kinku" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Proyectos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Proyectos</h4>
            <ul className="space-y-2">
              <li><Link to="/proyecto-kioto" className="text-gray-400 hover:text-white transition-colors">Proyecto Kioto</Link></li>
              <li><Link to="/proyecto-osaka" className="text-gray-400 hover:text-white transition-colors">Proyecto Osaka</Link></li>
            </ul>
          </div>
          
          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
              <li><Link to="/portal-pagos" className="text-gray-400 hover:text-white transition-colors">Portal de Pagos</Link></li>
            </ul>
          </div>

          {/* Legales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legales</h4>
            <ul className="space-y-2">
              <li><Link to="/politicas" className="text-gray-400 hover:text-white transition-colors">Políticas</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/pqr" className="text-gray-400 hover:text-white transition-colors">PQR</Link></li>
            </ul>
          </div>
        </div>
        
        
        {/* Botones centrales */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/servicios-post-venta"
            className="inline-flex items-center px-5 py-3 rounded-lg font-semibold border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Servicios post venta
          </Link>
          <a
            href="https://kinku.buk.co/trabaja-con-nosotros"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-lg font-semibold border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Trabaja con nosotros
          </a>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Kinku. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
