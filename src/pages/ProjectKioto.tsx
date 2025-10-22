import { Link } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

export const ProjectKioto = () => {
  return (
    <div>
      <PageBanner
        title="Proyecto Kioto"
        subtitle="Kioto combina apartamentos y apartaestudios con diseño contemporáneo, acabados de primera calidad y ubicación estratégica. Pensado para quienes buscan comodidad, estilo y excelente conectividad, con espacios eficientes y amenidades que elevan la experiencia de vivir."
        size="lg"
      />



      {/* Showcase / Galería principal sin scroll (mosaico) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Galería del Proyecto</h2>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-7 h-72 md:h-96 rounded-2xl overflow-hidden">
                <img src="/img/1.webp" alt="Render principal Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-12 lg:col-span-5 h-72 md:h-96 rounded-2xl overflow-hidden">
                <img src="/img/imagen-medio-kunku.webp" alt="Fachada Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-6 md:col-span-3 h-56 rounded-2xl overflow-hidden">
                <img src="/img/banner-kinku.webp" alt="Lobby Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-6 md:col-span-3 h-56 rounded-2xl overflow-hidden">
                <img src="/img/Metriku-e1694531856484.webp" alt="Gimnasio Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-6 md:col-span-3 h-56 rounded-2xl overflow-hidden">
                <img src="/img/imagen-medio-kunku.webp" alt="Coworking Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-6 md:col-span-3 h-56 rounded-2xl overflow-hidden">
                <img src="/img/1.webp" alt="Terraza Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-12 md:col-span-6 h-64 rounded-2xl overflow-hidden">
                <img src="/img/banner-kinku.webp" alt="Zona social Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-12 md:col-span-6 h-64 rounded-2xl overflow-hidden">
                <img src="/img/imagen-medio-kunku.webp" alt="Detalles de acabados Kioto" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
            {/* Amenidades */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Amenidades</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Gimnasio equipado',
                  'Sala de coworking',
                  'Zona de lavandería',
                  'Terraza social',
                  'Parqueaderos',
                  'Seguridad 24/7'
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-800">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ubicación</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={(function(){
                    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined
                    const address = encodeURIComponent('Calle 59 #17-43, Bogotá')
                    if (!apiKey) return '/img/banner-kinku.webp'
                    return `https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=16&size=1200x800&scale=2&maptype=roadmap&markers=color:red|${address}&key=${apiKey}`
                  })()}
                  alt="Ubicación Proyecto Kioto"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-4">Calle 59 #17-43, Bogotá</p>
              <div className="flex gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Calle 59 #17-43, Bogotá')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors"
                >
                  Ver en Google Maps
                </a>
                <Link to="/contacto" className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors">Contactar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

