import { useEffect, useRef } from 'react'
type Props = {
  title: string
  subtitle?: string
  image?: string
  size?: 'sm' | 'md' | 'lg'
}

export const PageBanner = ({ title, subtitle, image = '/img/banner-kinku.webp', size = 'md' }: Props) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const show = (el?: HTMLElement | null, delay = 0) => {
      if (!el) return
      const run = () => {
        el.classList.remove('opacity-0', 'translate-y-4')
        el.classList.add('opacity-100', 'translate-y-0')
      }
      if (delay) {
        const t = setTimeout(run, delay)
        return () => clearTimeout(t)
      } else {
        run()
      }
    }
    const clean = show(titleRef.current)
    const clean2 = show(subtitleRef.current, 120)
    return () => {
      if (typeof clean === 'function') clean()
      if (typeof clean2 === 'function') clean2()
    }
  }, [])
  const sizeMinHeight = size === 'sm'
    ? 'min-h-[35vh] md:min-h-[45vh]'
    : size === 'lg'
    ? 'min-h-[70vh] md:min-h-[80vh]'
    : 'min-h-[50vh] md:min-h-[60vh]'

  const sizePaddingY = size === 'sm'
    ? 'py-10 md:py-16'
    : size === 'lg'
    ? 'py-24 md:py-32'
    : 'py-16 md:py-24'

  return (
    <section className={`relative overflow-hidden bg-gray-900 ${sizeMinHeight} flex items-center pt-20`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/60 to-gray-900"></div>

      <div className={`container mx-auto px-4 relative z-10 ${sizePaddingY} text-center`}>
        <h1 ref={titleRef} className="text-white font-extralight leading-tight tracking-tight text-4xl md:text-6xl opacity-0 translate-y-4 transition-all duration-700 ease-out">
          {title}
        </h1>
        {subtitle && (
          <p ref={subtitleRef} className="mt-4 text-white/80 max-w-3xl mx-auto text-sm md:text-base opacity-0 translate-y-4 transition-all duration-700 ease-out">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageBanner


