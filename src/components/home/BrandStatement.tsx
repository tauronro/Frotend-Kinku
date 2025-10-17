import { useEffect, useRef, useState } from 'react'

export const BrandStatement = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setVisible(true)
          obs.unobserve(e.target)
        }
      }
    }, { threshold: 0.25 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Brand gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 via-transparent to-accent-500/10"></div>
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '140px 140px'
          }}
        ></div>
      </div>

      <div
        ref={sectionRef}
        className={`container mx-auto px-4 relative z-10 py-24 md:py-36 lg:py-44 transition-all duration-700 ease-out transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl">
          <h2 className="text-white font-extralight leading-[1.05] tracking-tight text-5xl md:text-7xl lg:text-[96px]">
            Tu espacio, tu refugio, tu vida.
          </h2>
          <p className="mt-8 text-white/70 text-lg md:text-xl max-w-4xl">
            Más de 15 años de experiencia creando proyectos de alto nivel en los sectores más exclusivos de Colombia. Nuestra pasión por la arquitectura de calidad nos ha permitido desarrollar proyectos excepcionales que no solo cumplen con las más altas expectativas, sino que las superan.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrandStatement


