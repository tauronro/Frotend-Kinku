import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export const HeroLanding = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const show = (el?: HTMLElement | null) => {
      if (!el) return
      el.classList.remove('opacity-0', 'translate-y-4')
      el.classList.add('opacity-100', 'translate-y-0')
    }
    const t1 = setTimeout(() => show(titleRef.current), 60)
    const t2 = setTimeout(() => show(descRef.current), 180)
    const t3 = setTimeout(() => show(ctaRef.current), 300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <section className="relative overflow-hidden bg-gray-900 min-h-[85vh] md:min-h-[92vh] lg:min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('/img/banner-kinku.webp')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/40 to-gray-900"></div>

      <div className="container mx-auto px-4 relative z-10 py-32 md:py-44 lg:py-56 text-center">
        <h1 ref={titleRef} className="text-white font-extralight leading-tight tracking-tight text-4xl md:text-6xl lg:text-7xl opacity-0 translate-y-4 transition-all duration-700 ease-out">
          Hogares que inspiran,
          <br className="hidden md:block"/>
          <span className="block">proyectos que perduran.</span>
        </h1>
        <p ref={descRef} className="mt-6 text-white/70 max-w-3xl mx-auto text-xs md:text-sm opacity-0 translate-y-4 transition-all duration-700 ease-out">
          En Bogotá, Kinku crea espacios con diseño moderno, ubicación privilegiada y respaldo confiable,
          pensados para brindarte una inversión segura y con estilo.
        </p>
        <div ref={ctaRef} className="mt-10 opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <Link to="/proyectos" className="btn border border-white/30 text-white hover:bg-white hover:text-gray-900">
            VER PROYECTOS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroLanding


