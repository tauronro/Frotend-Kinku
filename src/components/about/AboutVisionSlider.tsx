import { useEffect, useRef, useState } from 'react'

type Slide = {
  id: number
  title: string
  description: string
  bullets: { label: string; text: string }[]
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Nuestra misión',
    description:
      'Impulsar nuestra presencia en Colombia con un portafolio integral e innovador, bajo altos estándares de calidad y con responsabilidad social y ambiental, para crear valor real a quienes confían en Kinku.',
    bullets: [
      { label: 'Diseño', text: '' },
      { label: 'Confort y Estilo', text: 'Perfecta armonía, como una obra de arte habitable.' },
      { label: 'Experiencia', text: 'Acompañamiento experto y asesoría integral, de inicio a fin.' },
    ],
    image: '/img/1.webp',
  },
  {
    id: 2,
    title: 'Nuestra visión',
    description:
      'Para 2027, ser la empresa líder en el mercado nacional, reconocida por proyectos innovadores, servicio excepcional, un gran clima laboral y un portafolio integral comprometido con el medio ambiente.',
    bullets: [
      { label: 'Eficiencia', text: 'Optimización en cada paso para cumplir con excelencia y a tiempo.' },
      { label: 'Sostenibilidad', text: 'Construimos con conciencia, cuidando cada recurso y detalle.' },
      { label: 'Respaldo', text: 'Transparencia, compromiso y apoyo en todo el proceso.' },
    ],
    image: '/img/imagen-medio-kunku.webp',
  },
  {
    id: 3,
    title: 'Nuestros valores',
    description:
      'Actuamos con integridad y excelencia para construir confianza duradera.',
    bullets: [
      { label: 'Trabajo en equipo', text: 'Colaboramos para lograr resultados superiores.' },
      { label: 'Credibilidad', text: 'Cumplimos lo que prometemos.' },
      { label: 'Respeto', text: 'Valoramos a las personas y sus ideas.' },
      { label: 'Excelencia', text: 'Buscamos el mejor estándar en cada detalle.' },
      // { label: 'Responsabilidad social y ambiental', text: 'Decisiones que cuidan a la comunidad y al entorno.' },
      // { label: 'Compromiso', text: 'Constancia y enfoque hasta el objetivo.' },
      // { label: 'Confianza', text: 'Relaciones transparentes y de largo plazo.' },
    ],
    image: '/img/1.webp',
  },
]

export const AboutVisionSlider = () => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    timerRef.current = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [])

  const active = slides[index]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Fondo decorativo inspirado en Metriku pero con alineación distinta */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Marco */}
        <div className="absolute top-10 left-8 right-8 bottom-10 border-2 border-accent-500 rounded-3xl opacity-20"></div>
        {/* Líneas verticales a tercios */}
        <div className="absolute left-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-accent-500 to-transparent opacity-40"></div>
        <div className="absolute left-2/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-accent-500 to-transparent opacity-20"></div>
        {/* Diagonales invertidas */}
        <div className="absolute top-1/3 right-0 w-1/3 h-0.5 bg-gradient-to-l from-accent-500 to-transparent transform -rotate-30 origin-right opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-1/3 h-0.5 bg-gradient-to-r from-accent-500 to-transparent transform rotate-30 origin-left opacity-30"></div>
        {/* Acentos */}
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent-500 transform rotate-45"></div>
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-accent-400 rounded-full"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {active.title}
          </h2>
          <p className="mt-4 text-gray-600 text-lg">{active.description}</p>
        </div>

        {/* Slider layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Media */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 h-24 w-24 border-4 border-dotted border-accent-500 rounded-xl opacity-60"></div>
            <img
              src={active.image}
              alt={active.title}
              className="relative z-10 w-full h-[460px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Bullets modern list */}
          <div className="order-1 lg:order-2">
            <ul className="divide-y divide-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              {active.bullets.map((b) => (
                <li key={b.label} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary-100 text-primary-600 grid place-items-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{b.label}</h3>
                      {b.text && <p className="text-gray-600 mt-1">{b.text}</p>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="mt-6 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Ir al slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-8 rounded-full transition-all ${
                    i === index ? 'bg-primary-600 w-12' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutVisionSlider



