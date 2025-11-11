import { useState } from 'react'
import { PageBanner } from '../components/common/PageBanner'

type FaqItem = {
  q: string
  a: string
}

const MetodosFinanciamiento = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const driveSafe = (path: string) => encodeURI(path)

  const faqs: FaqItem[] = [
    {
      q: '¿Cuál es el valor de la cuota inicial de un apartamento?',
      a:
        'De acuerdo con el valor total de la propiedad se calcula el monto a pagar de cuota inicial. ' +
        'También se debe tener en cuenta el método de financiamiento: con crédito hipotecario, el promedio de cuota inicial es del 30% ' +
        'del valor total del inmueble. Con leasing habitacional, el valor de la cuota inicial es del 20% del valor total.'
    },
    {
      q: '¿Pasos para el financiamiento de un apartamento?',
      a:
        'Antes de comprar tu apartamento, define ubicación, facilidad de desplazamientos, presupuesto y el método de financiamiento. ' +
        'Prepara la documentación requerida por la entidad y compara alternativas para elegir la que mejor se ajuste a tu perfil.'
    },
    {
      q: '¿Cómo ahorrar para una cuota inicial?',
      a:
        'Analiza tu situación financiera (ingresos y gastos), establece prioridades y elimina gastos innecesarios. ' +
        'Crea el hábito del ahorro y evalúa alternativas con entidades financieras o fondos de inversión.'
    },
    {
      q: '¿Cómo financiar un apartamento en Colombia?',
      a:
        'Actualmente ninguna entidad financia el 100% de una vivienda. Existen alternativas como crédito hipotecario, ' +
        'leasing habitacional, uso de cesantías o a través de subsidios.'
    }
  ]

  return (
    <div>
      <PageBanner
        title="Métodos de financiamiento"
        subtitle="Alternativas para adquirir vivienda en Bogotá según tu perfil y necesidades."
      />

      <section className="section-padding bg-white">
        <div className="container">
          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Opciones para financiar tu vivienda
            </h2>
            <p className="text-gray-600">
              Hay diferentes métodos de financiamiento para adquirir una vivienda en Bogotá.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4 h-56 md:h-64 overflow-hidden rounded-xl bg-gray-100 p-2 flex items-center justify-center">
                <img
                  src={driveSafe('/metodos de financiamiento/Componente-4-–-1-600x702.webp')}
                  alt="Crédito hipotecario"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Crédito hipotecario</h3>
              <p className="text-gray-600">
                Préstamo solicitado a una entidad financiera para pagar la propiedad. Usualmente cubre el 70% del valor;
                el 30% restante corresponde a la cuota inicial.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 text-emerald-700 text-sm">
                En Kinku recomendamos las líneas verdes de Davivienda: créditos sostenibles con enfoque ambiental.
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4 h-56 md:h-64 overflow-hidden rounded-xl bg-gray-100 p-2 flex items-center justify-center">
                <img
                  src={driveSafe('/metodos de financiamiento/Componente-5-–-1-600x369.webp')}
                  alt="Leasing habitacional"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leasing habitacional</h3>
              <p className="text-gray-600">
                Pagas un canon mensual como arrendamiento con opción de compra. Financia aproximadamente el 80% del valor; el 20% es
                la cuota inicial que debes tener disponible.
              </p>
            </div>
          </div>

          {/* Sección destacada a pantalla completa (dentro de container) */}
          <section className="mb-16">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Texto */}
                <div className="p-8 md:p-12 flex items-center">
                  <div>
                    <h3 className="text-3xl md:text-5xl leading-tight font-extrabold text-white mb-6">
                      Adquiere un apartaestudio tipo VIS en nuestro proyecto de vivienda Kioto.
                    </h3>
                    <p className="text-gray-200 text-lg md:text-xl">
                      Sepáralo con el 1% del valor de la propiedad. Si no cuentas con el monto total de la cuota inicial de un apartamento,
                      tienes la facilidad de pagar a cuotas. En Kinku te ofrecemos hasta 18 meses de plazo para realizar el pago.
                    </p>
                  </div>
                </div>
                {/* Imagen */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent lg:bg-gradient-to-t"></div>
                  <img
                    src={driveSafe('/img/Calle.webp')}
                    alt="Vía urbana frente a proyectos de vivienda Kinku"
                    className="w-full h-[360px] sm:h-[420px] md:h-[520px] lg:h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ / Acordeón */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h3>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {faqs.map((item, idx) => {
                const open = openIdx === idx
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenIdx(open ? null : idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between"
                      aria-expanded={open}
                    >
                      <span className="font-medium text-gray-900">{item.q}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 text-gray-600">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MetodosFinanciamiento


