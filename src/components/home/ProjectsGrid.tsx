import { Link } from 'react-router-dom'
import { useState } from 'react'

type ProjectCard = {
  id: number
  name: string
  image: string
  address: string
  description: string
  href: string
  status: 'DISPONIBLE' | 'ENTREGADO'
  external?: boolean
}

export const ProjectsGrid = () => {
  const [hoveredMapId, setHoveredMapId] = useState<number | null>(null)

  const projects: ProjectCard[] = [
    {
      id: 1,
      name: 'Proyecto Osaka',
      image: '/img/imagen-medio-kunku.webp',
      address: 'Calle 59 #17-43, Bogotá',
      description: 'Apartaestudios funcionales y modernos en ubicación estratégica.',
      href: '/proyecto-osaka',
      status: 'ENTREGADO'
    },
    {
      id: 2,
      name: 'Proyecto Kioto',
      image: '/img/1.webp',
      address: 'Calle 59 #17-43, Bogotá',
      description: 'Apartamentos y apartaestudios con acabados de primera calidad.',
      href: '/proyecto-kioto',
      status: 'DISPONIBLE'
    },
    {
      id: 3,
      name: 'Proyecto Pekín',
      image: '/img/banner-kinku.webp',
      address: 'Calle 59 #17-43, Bogotá',
      description: 'Disponibilidad actual con opciones flexibles de inversión.',
      href: 'https://proyectopekin.co',
      status: 'DISPONIBLE',
      external: true
    }
  ]

  const getGoogleStaticMapUrl = (address: string): string | undefined => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined
    if (!apiKey) return undefined
    const center = encodeURIComponent(address)
    // High-res static map with marker on the address
    const params = `center=${center}&zoom=16&size=1200x800&scale=2&maptype=roadmap&markers=color:red|${center}&key=${apiKey}`
    return `https://maps.googleapis.com/maps/api/staticmap?${params}`
  }

  return (
    <section className="min-h-[80vh] bg-gray-900 relative overflow-hidden">
      {/* Fondo con patrón arquitectónico */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-[80vh] flex flex-col justify-center">
        <div className="pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-0">
              PROYECTOS KINKU
            </h2>
            <p className="text-white/70 max-w-2xl">
              Osaka y Kioto han sido entregados. Actualmente contamos con disponibilidad en el proyecto Pekín.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {projects.map((project) => {
            const showMap = hoveredMapId === project.id
            const mapUrl = getGoogleStaticMapUrl(project.address)
            const imgSrc = showMap && mapUrl ? mapUrl : project.image
            return (
              <div key={project.id} className="group block h-full">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl transform group-hover:scale-105 transition-all duration-500 flex flex-col h-[440px] md:h-[480px]">
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'DISPONIBLE' ? 'bg-primary-500 text-white' : 'bg-gray-700 text-white'
                      }`} aria-label={`Estado: ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                      {project.name === 'Proyecto Kioto' && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#BF0442' }}>
                          ÚLTIMAS UNIDADES
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      {project.external ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors"
                          aria-label={`Ver ${project.name}`}
                        >
                          Ver proyecto
                        </a>
                      ) : (
                        <Link
                          to={project.href}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors"
                          aria-label={`Ver ${project.name}`}
                        >
                          Ver proyecto
                        </Link>
                      )}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors"
                        onMouseEnter={() => setHoveredMapId(project.id)}
                        onMouseLeave={() => setHoveredMapId(null)}
                        onFocus={() => setHoveredMapId(project.id)}
                        onBlur={() => setHoveredMapId(null)}
                        aria-label={`Ver ubicación de ${project.name}`}
                        title="Ver ubicación"
                      >
                        Ver ubicación
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid


