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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const autoplayIntervalRef = useRef<number | null>(null)
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})
  const [apartmentImageIndexById, setApartmentImageIndexById] = useState<Record<string, number>>({})
  const [openTypeModalId, setOpenTypeModalId] = useState<string | null>(null)
  const [openTypeModalIndex, setOpenTypeModalIndex] = useState<number>(0)

  // Util: resolver imágenes externas (Drive) a un proxy CDN público para evitar CORS
  const resolveExternalImage = (src: string | undefined): string => {
    if (!src) return '/img/1.webp'
    try {
      const u = new URL(src, window.location.origin)
      const isDrive = u.hostname.includes('drive.google.com')
      if (isDrive) {
        const id =
          u.searchParams.get('id') ||
          (u.pathname.includes('/d/') ? u.pathname.split('/d/')[1]?.split('/')[0] : '')
        if (id) {
          // images.weserv.nl actúa como proxy de imágenes y evita CORS
          return `https://images.weserv.nl/?url=ssl:drive.google.com/uc?id=${id}&export=download&w=2000&h=2000&fit=inside`
        }
      }
    } catch {
      // Ignorar parsing errors y devolver src original
    }
    return src
  }

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

  // Galería - Autoplay del carrusel
  useEffect(() => {
    if (!project.gallery || project.gallery.length === 0) return
    if (isModalOpen) return // Detener autoplay cuando el modal está abierto

    autoplayIntervalRef.current = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
    }, 4000) // Cambia cada 4 segundos

    return () => {
      if (autoplayIntervalRef.current) {
        window.clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [project.gallery?.length, isModalOpen])

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
    // Detener autoplay
    if (autoplayIntervalRef.current) {
      window.clearInterval(autoplayIntervalRef.current)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const closeTypeModal = () => {
    setOpenTypeModalId(null)
  }

  const nextImage = () => {
    if (!project.gallery) return
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    if (!project.gallery) return
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  const nextModalImage = () => {
    if (!project.gallery) return
    setSelectedImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevModalImage = () => {
    if (!project.gallery) return
    setSelectedImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  const openTypeModal = (typeId: string, startIndex: number) => {
    setOpenTypeModalId(typeId)
    setOpenTypeModalIndex(startIndex)
  }
  const nextTypeModalImage = () => {
    if (!openTypeModalId) return
    const t = project.apartmentTypes.find((x) => x.id === openTypeModalId)
    if (!t || t.images.length === 0) return
    setOpenTypeModalIndex((prev) => (prev + 1) % t.images.length)
  }
  const prevTypeModalImage = () => {
    if (!openTypeModalId) return
    const t = project.apartmentTypes.find((x) => x.id === openTypeModalId)
    if (!t || t.images.length === 0) return
    setOpenTypeModalIndex((prev) => (prev - 1 + t.images.length) % t.images.length)
  }

  // Manejar teclas del teclado en el modal
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        if (!project.gallery) return
        setSelectedImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
      } else if (e.key === 'ArrowRight') {
        if (!project.gallery) return
        setSelectedImageIndex((prev) => (prev + 1) % project.gallery.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, project.gallery?.length])

  // Teclas para modal de tipos
  useEffect(() => {
    if (!openTypeModalId) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeTypeModal()
      } else if (e.key === 'ArrowLeft') {
        prevTypeModalImage()
      } else if (e.key === 'ArrowRight') {
        nextTypeModalImage()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [openTypeModalId])

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
        ref={(el) => { sectionsRef.current.proyecto = el }}
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
        ref={(el) => { sectionsRef.current.tipos = el }}
        className="section-padding bg-gray-50"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Tipos de Apartamentos
          </h2>
          {project.apartmentTypes.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No hay unidades disponibles</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                Todas las unidades de este proyecto han sido entregadas exitosamente. Si estás interesado en información sobre futuros proyectos o proyectos similares, no dudes en contactarnos.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors"
              >
                Contactar
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {project.apartmentTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
              >
                {/* <div className="relative h-64 overflow-hidden">
                  <img
                    src={type.images[0] || '/img/1.webp'}
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[rgb(0_168_144)] text-white">
                      Disponible
                    </span>
                  </div>
                </div> */}
                <div className="p-6 pb-20">
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
                  {/* Mini carrusel por unidad */}
                  <div
                    className="relative mb-4 rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                    onClick={() =>
                      openTypeModal(
                        type.id,
                        (apartmentImageIndexById[type.id] ?? 0) % (type.images.length || 1)
                      )
                    }
                    aria-label={`Ver ${type.name} en grande`}
                  >
                    <img
                      src={resolveExternalImage(type.images[(apartmentImageIndexById[type.id] ?? 0) % (type.images.length || 1)])}
                      alt={`${type.name} imagen`}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = '/img/1.webp'
                      }}
                      className="w-full h-60 object-cover"
                    />
                    {type.images.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between px-2">
                        <button
                          aria-label="Anterior"
                          onClick={(e) => {
                            e.stopPropagation()
                            setApartmentImageIndexById((prev) => ({
                              ...prev,
                              [type.id]:
                                ((prev[type.id] ?? 0) - 1 + type.images.length) % type.images.length,
                            }))
                          }}
                          className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-900 grid place-items-center shadow"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                          </svg>
                        </button>
                        <button
                          aria-label="Siguiente"
                          onClick={(e) => {
                            e.stopPropagation()
                            setApartmentImageIndexById((prev) => ({
                              ...prev,
                              [type.id]: ((prev[type.id] ?? 0) + 1) % type.images.length,
                            }))
                          }}
                          className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-900 grid place-items-center shadow"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                    {type.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {type.images.map((_, idx) => (
                          <span
                            key={idx}
                            className={`h-1.5 rounded-full transition-all ${
                              (apartmentImageIndexById[type.id] ?? 0) === idx ? 'w-5 bg-primary-600' : 'w-2 bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  {type.price && (
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ${type.price.toLocaleString('es-CO')}
                      </span>
                    </div>
                  )}
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
                      {type.images.slice(0, 3).map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setApartmentImageIndexById((prev) => ({ ...prev, [type.id]: idx }))
                          }
                          className={`rounded overflow-hidden border ${
                            (apartmentImageIndexById[type.id] ?? 0) === idx ? 'border-primary-600' : 'border-transparent'
                          }`}
                        >
                          <img
                            src={resolveExternalImage(img)}
                            alt={`${type.name} ${idx + 1}`}
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              target.src = '/img/1.webp'
                            }}
                            className="w-full h-20 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  {/* CTA inferior: WhatsApp (barra completa) */}
                  <a
                    href={`https://wa.me/573245179218?text=${encodeURIComponent(
                      `Hola Kinku, estoy interesado en ${project.title} – ${type.name}. ¿Me brindan más información?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-0 right-0 bottom-0 block px-4 py-3 text-center font-semibold bg-[#25D366] text-white hover:brightness-95 transition-colors"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de imágenes para tipos de apartamentos */}
      {openTypeModalId && (() => {
        const t = project.apartmentTypes.find((x) => x.id === openTypeModalId)
        if (!t) return null
        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeTypeModal}
          >
            <button
              onClick={closeTypeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevTypeModalImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextTypeModalImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Imagen siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            <div
              className="max-w-7xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={resolveExternalImage(t.images[openTypeModalIndex])}
                alt={`${t.name} ${openTypeModalIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.src = '/img/1.webp'
                }}
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
              {openTypeModalIndex + 1} / {t.images.length}
            </div>
          </div>
        )
      })()}

      {/* Sección: Zonas comunes */}
      <section
        id="zonas"
        ref={(el) => { sectionsRef.current.zonas = el }}
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

      {/* Sección: Galería con Carrusel */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Galería del Proyecto
            </h2>
            
            {/* Carrusel principal */}
            <div className="relative max-w-6xl mx-auto mb-6">
              <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={resolveExternalImage(project.gallery[currentImageIndex])}
                  alt={`${project.title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover cursor-pointer transition-opacity duration-500"
                  onClick={() => handleImageClick(currentImageIndex)}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.src = '/img/1.webp'
                  }}
                />
                
                {/* Overlay con botones */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-between p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleImageClick(currentImageIndex)
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-lg bg-white/90 hover:bg-white text-gray-900 font-medium shadow-lg"
                  >
                    Ver más grande
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg"
                    aria-label="Imagen siguiente"
                  >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-4">
                {project.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-primary-600 scale-105 shadow-lg'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={resolveExternalImage(img)}
                      alt={`${project.title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = '/img/1.webp'
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modal/Lightbox */}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevModalImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Imagen anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextModalImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Imagen siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <div
                className="max-w-7xl max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={resolveExternalImage(project.gallery[selectedImageIndex])}
                  alt={`${project.title} ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.src = '/img/1.webp'
                  }}
                />
              </div>

              {/* Contador de imágenes */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {selectedImageIndex + 1} / {project.gallery.length}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Sección: Contacto */}
      <section
        id="contacto"
        ref={(el) => { sectionsRef.current.contacto = el }}
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
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">301 3242681</p>
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
                      <p className="text-gray-600">info@kinku.com.co</p>
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

