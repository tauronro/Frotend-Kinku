import { Link } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

export const ProjectKioto = () => {
  return (
    <div>
      <PageBanner
        title="Proyecto Kioto"
        subtitle="Apartamentos y apartaestudios modernos en el corazón de Bogotá"
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
                    <h3 className="font-semibold text-gray-900">Apartamentos desde 62m²</h3>
                    <p className="text-gray-600">Espacios amplios y funcionales para tu familia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Apartaestudios desde 26m²</h3>
                    <p className="text-gray-600">Perfectos para estudiantes y jóvenes profesionales</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación Estratégica</h3>
                    <p className="text-gray-600">Cerca a universidades, centros comerciales y transporte público</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Acabados de Primera</h3>
                    <p className="text-gray-600">Materiales de alta calidad y diseño contemporáneo</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-xl">Planos del Proyecto Kioto</span>
              </div>
            </div>
          </div>

          {/* Planos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Planos Disponibles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600 font-semibold">Apartamento 62m²</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Apartamento 2 Habitaciones</h3>
                <p className="text-gray-600 text-sm mb-4">2 habitaciones, 1 baño, sala-comedor, cocina</p>
                <button className="btn btn-outline w-full">Ver Plano</button>
              </div>
              <div className="card p-6">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600 font-semibold">Apartaestudio 26m²</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Apartaestudio 1 Habitación</h3>
                <p className="text-gray-600 text-sm mb-4">1 habitación, 1 baño, área social integrada</p>
                <button className="btn btn-outline w-full">Ver Plano</button>
              </div>
              <div className="card p-6">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600 font-semibold">Apartamento 45m²</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Apartamento 1 Habitación</h3>
                <p className="text-gray-600 text-sm mb-4">1 habitación, 1 baño, sala-comedor, cocina</p>
                <button className="btn btn-outline w-full">Ver Plano</button>
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
