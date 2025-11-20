import { useState, useEffect, useRef, useMemo } from 'react'

type TeamMember = {
  id: number
  name: string
  role: string
  img: string
  phrase: string
  bio: string
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Mario Ernesto Ortiz Escobar',
    role: 'Representante Legal',
    img: '/profiles/ADMINISTRATIVO-Arq.Ma Ernesto-06.png',
    phrase:
      '"Fundé Kinku para trabajar de la mano de mi familia con gran pasión para alcanzar la excelencia en todas las edificaciones"',
    bio:
      'Arquitecto con más de 35 años de experiencia en construcción y en proyectos de vivienda, salud, educación, comerciales e industriales en Cundinamarca y el Meta.',
  },
  {
    id: 2,
    name: 'Mario Andrés Ortiz Bernal',
    role: 'Gerente de Proyectos',
    img: '/profiles/ADMINISTRATIVO-Ing.Ma Andres-01.png',
    phrase: '"Feliz de trabajar en Kinku y poder aportar a construir un mejor país"',
    bio:
      'Ingeniero Industrial y Economista, con maestrías en Administración y Mercadeo; 12 años de experiencia en el sector financiero y gerencia de proyectos inmobiliarios.',
  },
  {
    id: 3,
    name: 'Carlos Mario Ortiz Bernal',
    role: 'Gerente de Construcción y Diseño',
    img: '/profiles/Arq,Carlos Mario Ortiz.png',
    phrase:
      '"Mi objetivo es el de crear espacios únicos e innovadores que desafíen a la arquitectura tradicional. Cada diseño es único y especial"',
    bio:
      'Arquitecto con Maestría en Gestión Estratégica de Proyectos de Arquitectura y amplia experiencia en construcción de proyectos de vivienda y comerciales.',
  },
  {
    id: 4,
    name: 'Sonia Elizabeth Bernal Torres',
    role: 'Subgerente',
    img: '/profiles/DMINISTRATIVO-Arq.Sonia-05.png',
    phrase:
      '"Fundé Kinku con el objetivo de transmitir los valores de una familia unida y trabajadora orgullosa de ser colombiana"',
    bio:
      'Arquitecta con más de 30 años de experiencia en construcción, administración y gestión comercial de proyectos inmobiliarios.',
  },
  {
    id: 5,
    name: 'María Alejandra Ortiz Bernal',
    role: 'Directora de Sostenibilidad e Innovación ',
    img: '/profiles/Maria Alejandra Ortiz.png',
    phrase:
      '"Feliz de ver el crecimiento de la empresa familiar la cual, busca marcar la diferencia en los hogares de la sociedad"',
    bio:
      'Ingeniera Civil y Ambiental con experiencia en el sector de la construcción.',
  },
]

export const TeamMinds = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const autoplayIntervalRef = useRef<number | null>(null)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  // Resetear índice cuando cambia visibleCount
  useEffect(() => {
    setCurrentIndex(0)
  }, [visibleCount])

  // Calcular slides según el número visible usando useMemo
  const slides = useMemo(() => {
    const slidesArray: TeamMember[][] = []
    for (let i = 0; i < team.length; i += visibleCount) {
      const slide = team.slice(i, i + visibleCount)
      if (slide.length > 0) {
        slidesArray.push(slide)
      }
    }
    return slidesArray
  }, [visibleCount])

  const maxIndex = Math.max(0, slides.length - 1)
  const safeIndex = currentIndex > maxIndex ? 0 : currentIndex

  useEffect(() => {
    if (slides.length === 0) return

    autoplayIntervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % slides.length
        return newIndex
      })
    }, 5000)

    return () => {
      if (autoplayIntervalRef.current) {
        window.clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [slides.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    // Reiniciar autoplay después de navegación manual
    if (autoplayIntervalRef.current) {
      window.clearInterval(autoplayIntervalRef.current)
    }
    autoplayIntervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    // Reiniciar autoplay después de navegación manual
    if (autoplayIntervalRef.current) {
      window.clearInterval(autoplayIntervalRef.current)
    }
    autoplayIntervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index)
      // Reiniciar autoplay después de navegación manual
      if (autoplayIntervalRef.current) {
        window.clearInterval(autoplayIntervalRef.current)
      }
      autoplayIntervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }, 5000)
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mentes que construyen</h2>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
            Conoce a las personas detrás de Kinku, un equipo con visión, experiencia y pasión por crear hogares memorables.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${safeIndex * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex justify-center items-stretch gap-6 md:gap-8 px-4">
                  {slide.map((member) => (
                    <article
                      key={member.id}
                      className="flex-1 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-lg"
                    >
                      {/* Header alineado: avatar + nombre/rol */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-5 md:gap-6">
                          <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0">
                            <img
                              src={member.img}
                              alt={member.name}
                              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-purple-100"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-purple-600">
                              {member.name}
                            </h3>
                            <p className="text-purple-500 font-semibold mt-1 text-sm md:text-base">{member.role}</p>
                          </div>
                        </div>

                        {/* Frase y bio */}
                        <p className="text-gray-700 italic mt-5 text-sm md:text-base">{member.phrase}</p>
                        <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">{member.bio}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-colors z-10"
                aria-label="Anterior"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-colors z-10"
                aria-label="Siguiente"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Indicadores */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === safeIndex ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default TeamMinds


