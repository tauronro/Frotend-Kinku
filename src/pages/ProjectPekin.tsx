import { Link } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

export const ProjectPekin = () => {
  return (
    <div>
      <PageBanner
        title="Proyecto Pekín"
        subtitle="Disponibilidad actual con opciones flexibles de inversión"
      />

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Características del Proyecto</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Disponibilidad vigente</h3>
                    <p className="text-gray-600">Unidades actualmente disponibles para inversión</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación estratégica</h3>
                    <p className="text-gray-600">Conectividad y servicios cercanos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Acabados de calidad</h3>
                    <p className="text-gray-600">Diseño contemporáneo y materiales durables</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-xl">Imágenes del Proyecto Pekín</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Interesado en este proyecto?</h2>
            <p className="text-xl text-gray-600 mb-8">Contáctanos para más información y agendar una visita</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="btn btn-primary">Contactar</Link>
              <Link to="/portal-pagos" className="btn btn-outline">Portal de Pagos</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


