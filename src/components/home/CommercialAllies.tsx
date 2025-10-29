import { useState, useEffect, useRef, useMemo } from 'react'

type Ally = {
  id: string
  name: string
  logo: string
}

const allies: Ally[] = [
  {
    id: 'cccs',
    name: 'CCCS - Consejo Colombiano de Construcción Sostenible',
    logo: '/logo/LOGOHORIZONTAL_CCCS-3-1536x613.webp',
  },
  {
    id: 'ayda',
    name: 'Ayda',
    logo: '/logo/LOGO-AYDA-VARIACIONES-MORADO-Y-ROJO-768x768.webp',
  },
  {
    id: 'ally1',
    name: 'Aliado Comercial',
    logo: '/logo/1-600x335.webp',
  },
  {
    id: 'ally2',
    name: 'Aliado Comercial',
    logo: '/logo/Imagen1.png',
  },
  {
    id: 'ally3',
    name: 'Aliado Comercial',
    logo: '/logo/Imagen2.png',
  },
  {
    id: 'werg',
    name: 'Werg',
    logo: '/logo/werg-600x335.webp',
  },
]

export const CommercialAllies = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)
  const autoplayIntervalRef = useRef<number | null>(null)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4)
      } else if (window.innerWidth >= 768) {
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
    const slidesArray: Ally[][] = []
    for (let i = 0; i < allies.length; i += visibleCount) {
      const slide = allies.slice(i, i + visibleCount)
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
    }, 4000)

    return () => {
      if (autoplayIntervalRef.current) {
        window.clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [slides.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index)
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0_168_144)] mb-6">
            Aliados Comerciales
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hemos elegido aliados estratégicos para que cada uno de nuestros{' '}
            <strong className="font-semibold text-gray-900">Proyectos de Vivienda</strong> destaquen por su
            calidad y excelencia para el bienestar de cada familia que los habitará.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${safeIndex * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex justify-center items-center gap-4 md:gap-6 px-4">
                  {slide.map((ally) => (
                    <div
                      key={ally.id}
                      className={`flex-1 max-w-[280px] bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center min-h-[120px]`}
                    >
                      <img
                        src={ally.logo}
                        alt={ally.name}
                        className="max-w-full max-h-20 md:max-h-24 object-contain transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
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
                  index === safeIndex ? 'w-8 bg-[rgb(0_168_144)]' : 'w-2 bg-gray-300 hover:bg-gray-400'
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

export default CommercialAllies
