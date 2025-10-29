import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageBanner } from '../common/PageBanner'
import type { ProjectData } from '../../data/projects'

type Props = {
  project: ProjectData
}

type TabId = 'proyecto' | 'tipos' | 'zonas' | 'contacto'

export const ProjectDetail = ({ project }: Props) => {
  const [activeTab, setActiveTab] = useState<TabId>('proyecto')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id as TabId
            if (sectionId) setActiveTab(sectionId)
          }
        })
      },
      { threshold: 0.5 }
    )

    Object.values(sectionsRef.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (tabId: TabId) => {
    const section = sectionsRef.current[tabId]
    if (section) {
      const offset = 100 // Offset para el header sticky
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveTab(tabId)
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', { ...contactForm, project: project.title })
    // Aquí iría la lógica para enviar el formulario
    alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.')
    setContactForm({ name: '', email: '', phone: '', message: '' })
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const tabs: { id: TabId; label: string }[] = [
    { id: 'proyecto', label: 'Proyecto' },
    { id: 'tipos', label: 'Tipos de apartamentos' },
    { id: 'zonas', label: 'Zonas comunes' },
    { id: 'contacto', label: '¿Quieres que te contactemos?' },
  ]

  return (
    <div>
      <PageBanner title={project.title} subtitle={project.subtitle} image={project.bannerImage} size="lg" />

      {/* Menú de tabs sticky */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-6 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sección: Proyecto */}
      <section
        id="proyecto"
        ref={(el) => (sectionsRef.current.proyecto = el)}
        className="section-padding bg-white"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre el Proyecto</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{project.project.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ubicación</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-700 font-medium">{project.project.location.address}</p>
                      {project.project.location.neighborhood && (
                        <p className="text-gray-600 text-sm">{project.project.location.neighborhood}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {project.project.developer && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Constructora</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium">{project.project.developer.name}</p>
                    {project.project.developer.experience && (
                      <p className="text-gray-600 text-sm">{project.project.developer.experience}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mapa */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ubicación en el mapa</h3>
              <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={(function () {
                    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined
                    const address = encodeURIComponent(project.project.location.address)
                    if (!apiKey) return '/img/banner-kinku.webp'
                    return `https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=16&size=1200x800&scale=2&maptype=roadmap&markers=color:red|${address}&key=${apiKey}`
                  })()}
                  alt={`Ubicación ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.project.location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors"
                >
                  Ver en Google Maps
                </a>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Tipos de apartamentos */}
      <section
        id="tipos"
        ref={(el) => (sectionsRef.current.tipos = el)}
        className="section-padding bg-gray-50"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Tipos de Apartamentos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.apartmentTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={type.images[0] || '/img/1.webp'}
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    {type.bedrooms > 0 && (
                      <span className="text-gray-600">
                        {type.bedrooms} {type.bedrooms === 1 ? 'alcoba' : 'alcobas'}
                      </span>
                    )}
                    <span className="text-primary-600 font-semibold">
                      {type.area.min} - {type.area.max} {type.area.unit}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {type.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {type.images.slice(1, 4).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${type.name} ${idx + 2}`}
                          className="w-full h-20 object-cover rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Zonas comunes */}
      <section
        id="zonas"
        ref={(el) => (sectionsRef.current.zonas = el)}
        className="section-padding bg-white"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Zonas Comunes
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
              {project.commonAreas.description}
            </p>

            {project.commonAreas.image && (
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.commonAreas.image}
                  alt={project.commonAreas.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.commonAreas.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Galería */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Galería del Proyecto
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-7 h-72 md:h-96 rounded-2xl overflow-hidden">
                <img
                  src={project.gallery[0] || '/img/1.webp'}
                  alt={`${project.title} principal`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-12 lg:col-span-5 h-72 md:h-96 rounded-2xl overflow-hidden">
                <img
                  src={project.gallery[1] || '/img/imagen-medio-kunku.webp'}
                  alt={`${project.title} secundaria`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {project.gallery.slice(2, 6).map((img, idx) => (
                <div key={idx} className="col-span-6 md:col-span-3 h-56 rounded-2xl overflow-hidden">
                  <img src={img} alt={`${project.title} ${idx + 3}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
              {project.gallery.slice(6, 8).map((img, idx) => (
                <div key={idx + 6} className="col-span-12 md:col-span-6 h-64 rounded-2xl overflow-hidden">
                  <img src={img} alt={`${project.title} ${idx + 7}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sección: Contacto */}
      <section
        id="contacto"
        ref={(el) => (sectionsRef.current.contacto = el)}
        className="section-padding bg-white"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              ¿Quieres que te contactemos?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo pronto.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-gray-600">+57 (1) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@kinku.co</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ubicación</h4>
                      <p className="text-gray-600">{project.project.location.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[rgb(0_168_144)] text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail

