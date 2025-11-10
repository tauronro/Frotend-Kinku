import { useState, type ReactNode } from 'react'
import { PageBanner } from '../components/common/PageBanner'
import { useNavigate, Link } from 'react-router-dom'

type FaqItem = { id: string; title: string; content: ReactNode }

export const Faqs = () => {
  const navigate = useNavigate()
  const [openId, setOpenId] = useState<string | null>('faq-necesito')

  const faqs: FaqItem[] = [
    {
      id: 'faq-necesito',
      title: '¿Qué necesito para comprar un apartamento nuevo en Bogotá?',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            La compra de vivienda es toda una experiencia: no solo adquieres un inmueble, también haces
            realidad el sueño de vivienda propia. En Kinku entendemos la importancia de esta decisión y
            nuestros asesores están listos para brindarte la información clave.
          </p>
          <ul className="list-disc pl-6">
            <li>Define el tipo de vivienda, número de habitaciones y espacios que deseas.</li>
            <li>
              Establece tu presupuesto considerando ahorros, préstamos, cesantías y eventuales subsidios.
            </li>
            <li>
              Evalúa muy bien el sector para lograr valorización y calidad de vida (cercanía a servicios).
            </li>
          </ul>
          <p>
            Recuerda que, por regla general, la cuota inicial corresponde al 30% del valor del inmueble.
            Aprovecha las oportunidades de bajos intereses, compra sobre planos y proyectos nuevos para
            contar con más tiempo de ahorro.
          </p>
          <p>
            ¿Tienes más dudas?{' '}
            <Link to="/contacto" className="text-[rgb(0_168_144)] underline">
              Contáctanos
            </Link>{' '}
            y te asesoramos.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-cuotas',
      title: '¿Cómo pagar un apartamento nuevo a cuotas?',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            Si piensas comprar tu nuevo apartamento a cuotas, estos consejos te ayudarán a organizarte:
          </p>
          <ul className="list-disc pl-6">
            <li>Planifica el total de tus finanzas para conocer cuánto necesitas conseguir.</li>
            <li>
              Establece un monto mensual de ahorro realista e idealmente creciente en el tiempo.
            </li>
            <li>Ahorra todos los ingresos extra posibles: cada aporte acerca tu meta.</li>
          </ul>
          <p>
            ¿Quieres conocer más sobre facilidades de pago y cuota inicial?{' '}
            <Link to="/contacto" className="text-[rgb(0_168_144)] underline">
              Contáctanos
            </Link>{' '}
            y te brindamos información personalizada.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-ahorro',
      title: '¿Cuánto debo tener ahorrado para comprar un apartamento en Colombia?',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            Recomendamos ahorrar entre el 20% y 30% del valor del inmueble para la cuota inicial.
            Una guía útil es la regla 50/30/20:
          </p>
          <ul className="list-disc pl-6">
            <li>50% de tus ingresos para gastos fijos.</li>
            <li>30% para gastos variables.</li>
            <li>20% para ahorro.</li>
          </ul>
          <p>
            Identifica el valor de la vivienda, calcula la cuota inicial y define cómo reunirla: subsidios,
            cesantías, primas y ahorros. Incluye costos adicionales como escrituración, Certificado de
            Tradición y Libertad, gastos notariales e impuesto de Beneficencia.
          </p>
          <p>
            En Kinku contamos con facilidades de pago; por ejemplo, en proyectos nuevos puedes pagar la
            cuota en un horizonte amplio.{' '}
            <Link to="/contacto" className="text-[rgb(0_168_144)] underline">
              Escríbenos
            </Link>{' '}
            y te damos más información para comprar tu apartamento nuevo en Bogotá.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div>
      <PageBanner
        title="Preguntas Frecuentes (FAQs)"
        subtitle="Encuentra respuestas rápidas. Si no ves tu pregunta, contáctanos."
        size="sm"
      />
      <main className="bg-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          {/* Botón atrás, igual a Políticas */}
          <div className="mb-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Volver a la página anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Atrás
            </button>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Guía para compradores</h2>

          <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10">
            {/* Lateral (misma estructura que Políticas) */}
            <aside className="md:pt-2">
              <div className="sticky top-24 space-y-3">
                <button
                  type="button"
                  className="w-full text-left rounded-full px-5 py-3 font-semibold border transition-colors bg-[rgb(0_168_144)] text-white border-[rgb(0_168_144)]"
                >
                  FAQs
                </button>
              </div>
            </aside>

            {/* Contenido con acordeón */}
            <section>
              <div className="space-y-3">
                {faqs.map((f) => {
                  const isOpen = openId === f.id
                  return (
                    <div key={f.id} className="border rounded-xl bg-white shadow-sm overflow-hidden">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-4 text-left px-4 md:px-6 py-4"
                        onClick={() => setOpenId((prev) => (prev === f.id ? null : f.id))}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${f.id}`}
                      >
                        <span className="font-semibold text-gray-900">{f.title}</span>
                        <svg
                          className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div id={`faq-${f.id}`} className="px-4 md:px-6 pb-5">
                          {f.content}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Faqs


