import { Link } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

export const Projects = () => {
  return (
    <div>
      <PageBanner
        title="Nuestros Proyectos"
        subtitle="Conoce nuestros desarrollos inmobiliarios. Osaka y Kioto entregados; disponibilidad en Pekín."
      />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explora</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre proyectos pensados para tu vida, con calidad, diseño y respaldo Kinku.
            </p>
          </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Proyecto Kioto */}
          <div className="card p-8 animate-slide-in-left">
            <div className="mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 font-semibold text-lg">Proyecto Kioto</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proyecto Kioto</h3>
              <p className="text-gray-600 mb-4">
                Apartamentos y apartaestudios modernos en el corazón de Bogotá. 
                Diseño contemporáneo con acabados de primera calidad.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Apartamentos desde 62m²
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Apartaestudios desde 26m²
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Planos disponibles
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/proyecto-kioto" className="btn btn-primary flex-1 text-center">Ver Planos</Link>
              <Link to="/contacto" className="btn btn-outline flex-1 text-center">Más Información</Link>
            </div>
          </div>
          
          {/* Proyecto Osaka */}
          <div className="card p-8 animate-slide-in-right">
            <div className="mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600 font-semibold text-lg">Proyecto Osaka</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proyecto Osaka</h3>
              <p className="text-gray-600 mb-4">
                Apartaestudios funcionales y modernos, perfectos para estudiantes 
                y jóvenes profesionales en Bogotá.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Apartaestudios funcionales
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Ubicación estratégica
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Financiación disponible
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/proyecto-osaka" className="btn btn-primary flex-1 text-center">Ver Proyecto</Link>
              <Link to="/contacto" className="btn btn-outline flex-1 text-center">Más Información</Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
