import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { PageBanner } from '../components/common/PageBanner'

type ProjectItem = {
  id: string
  title: string
  image: string
  excerpt: string
  link: string
}

export const Projects = () => {
  const sectionsRef = useRef<HTMLElement[]>([])

  const projects: ProjectItem[] = [
    {
      id: 'osaka',
      title: 'Proyecto Osaka',
      image: '/img/imagen-medio-kunku.webp',
      excerpt: 'Apartaestudios funcionales y modernos para estudiantes y jóvenes profesionales.',
      link: '/proyecto-osaka'
    },
    {
      id: 'kioto',
      title: 'Proyecto Kioto',
      image: '/img/1.webp',
      excerpt: 'Apartamentos y apartaestudios con acabados de primera calidad.',
      link: '/proyecto-kioto'
    },
    {
      id: 'pekin',
      title: 'Proyecto Pekín',
      image: '/img/banner-kinku.webp',
      excerpt: 'Disponibilidad actual en Pekín con opciones flexibles de inversión.',
      link: '/proyecto-pekin'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.35 }
    )
    sectionsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <PageBanner
        title="Nuestros Proyectos"
        subtitle="Conoce nuestros desarrollos inmobiliarios. Osaka y Kioto entregados; disponibilidad en Pekín."
      />

      {/* Secciones a pantalla completa con animación y superposición (sticky stacking) */}
      <div className="mt-6 md:mt-10">
        {projects.map((p, i) => (
          <section
            key={p.id}
            ref={(el) => { if (el) sectionsRef.current[i] = el }}
            style={{ zIndex: i + 1 }}
            className="relative bg-white flex items-center opacity-0 translate-y-8 transition-all duration-700 ease-out lg:sticky lg:top-0 lg:h-screen py-8"
          >
            {/* Fondo con patrón de líneas */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%239ca3af' stroke-opacity='0.35' stroke-width='1'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}
              ></div>
            </div>

            <div className="container px-4 relative">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 lg:col-span-10">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-[55vh] md:h-[60vh] lg:h-[80vh] object-cover rounded-xl"
                  />
                </div>
                <div className="col-span-12 lg:col-span-2 h-auto lg:h-[80vh] flex">
                  <div className="bg-white rounded-xl shadow-xl p-6 relative z-10 h-full w-full flex flex-col justify-between overflow-hidden">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{p.title}</h3>
                    <p className="text-gray-600 mb-6">{p.excerpt}</p>
                    <div className="flex flex-col gap-3">
                      <Link to={p.link} className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors">Ver proyecto</Link>
                      <Link to="/contacto" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors">Más Información</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
