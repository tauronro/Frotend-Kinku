import { useState, type ReactNode } from 'react'
import { PageBanner } from '../components/common/PageBanner'
import { useNavigate } from 'react-router-dom'

type AccordionItem = {
  id: string
  title: string
  content: ReactNode
}

export const Politicas = () => {
  const [activeTab, setActiveTab] = useState<'politicas' | 'reglamentos'>('politicas')
  const [openItemId, setOpenItemId] = useState<string | null>('privacidad')
  const navigate = useNavigate()
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const PRIVACY_DOC = {
    title: 'Política de privacidad, tratamiento y protección de datos personales',
    preview: 'https://drive.google.com/file/d/1Af99etKbnxO99o7AH2vEouJAG38twTI5/preview',
    view: 'https://drive.google.com/file/d/1Af99etKbnxO99o7AH2vEouJAG38twTI5/view?usp=sharing',
    download: 'https://drive.google.com/uc?export=download&id=1Af99etKbnxO99o7AH2vEouJAG38twTI5'
  }

  const politicas: AccordionItem[] = [
    {
      id: 'privacidad',
      title: 'Política de privacidad, tratamiento y protección de datos personales',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            Kinku protege la información personal conforme a la normatividad
            colombiana (Ley 1581 de 2012 y decretos reglamentarios). El
            tratamiento de datos se realiza para finalidades asociadas a la
            gestión comercial, atención al cliente y cumplimiento de obligaciones
            contractuales.
          </p>
          <ul className="list-disc pl-6">
            <li>Derechos del titular: conocer, actualizar y rectificar los datos.</li>
            <li>Canales de atención para consultas y reclamos.</li>
            <li>Medidas técnicas y organizacionales de seguridad.</li>
          </ul>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="inline-flex items-center px-4 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors"
            >
              Ver documento
            </button>
            <a
              href={PRIVACY_DOC.download}
              className="inline-flex items-center px-4 py-2 rounded-md font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'sostenibilidad',
      title: 'Política de Sostenibilidad',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            Nos comprometemos a diseñar y construir proyectos con criterios de
            eficiencia energética, gestión responsable del agua y reducción de
            residuos, integrando buenas prácticas con nuestros proveedores y
            aliados.
          </p>
          <ul className="list-disc pl-6">
            <li>Eficiencia energética y confort bioclimático.</li>
            <li>Uso responsable de materiales y economía circular.</li>
            <li>Capacitación y cultura interna de sostenibilidad.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'biodiversidad',
      title: 'Política de Biodiversidad',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            Promovemos la protección de la biodiversidad mediante el respeto por
            los ecosistemas urbanos, priorizando el paisajismo nativo y la
            integración de zonas verdes que aporten valor ecológico.
          </p>
        </div>
      ),
    },
    {
      id: 'ssta',
      title: 'Política SST (Seguridad y Salud en el Trabajo)',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            Implementamos un Sistema de Gestión de Seguridad y Salud en el
            Trabajo enfocado en la prevención de incidentes, el control de
            riesgos y la mejora continua del ambiente laboral.
          </p>
          <ul className="list-disc pl-6">
            <li>Identificación de peligros y evaluación de riesgos.</li>
            <li>Capacitación continua y cultura de autocuidado.</li>
            <li>Cumplimiento de requisitos legales aplicables.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'publicitaria',
      title: 'Política Publicitaria',
      content: (
        <div className="text-gray-700 space-y-3">
          <p>
            He sido informado y acepto que las imágenes utilizadas en la presentación de los proyectos
            inmobiliarios, tales como piezas publicitarias, planos, renders, áreas, acabados, apartamento
            modelo entre otros, son representaciones digitales y artísticas del diseño, por lo tanto, se
            pueden presentar variaciones en detalles, materiales, acabados, colores, formas, diseños de
            elementos, dimensiones, texturas, ubicaciones, especificaciones, materiales. Los valores de los
            inmuebles pueden variar, así como las áreas privadas y construidas podrán sufrir ajustes como
            consecuencia de la coordinación técnica y estructural, de los procesos constructivos, de las
            modificaciones en la licencia de construcción ordenadas por la Curaduría o Alcaldía competente.
            El mobiliario y demás elementos que aparecen en las imágenes son de carácter decorativo no
            incluidos dentro de la oferta comercial.
          </p>
        </div>
      ),
    },
  ]

  const reglamentos: AccordionItem[] = [
    {
      id: 'reglamento-interno',
      title: 'Reglamentos y protocolos (Próximamente)',
      content: (
        <div className="text-gray-700">
          Publicaremos aquí nuestros reglamentos y protocolos aplicables a los
          proyectos y a la operación de la compañía.
        </div>
      ),
    },
  ]

  const items = activeTab === 'politicas' ? politicas : reglamentos

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id))
  }

  return (
    <div>
      <PageBanner
        title="Políticas"
        subtitle="Consulta nuestras políticas, reglamentos y protocolos."
        size="sm"
      />
      <main className="bg-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          {/* Botón atrás */}
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Políticas y documentos
          </h2>

          <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10">
            {/* Lateral */}
            <aside className="md:pt-2">
              <div className="sticky top-24 space-y-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('politicas')}
                  className={`w-full text-left rounded-full px-5 py-3 font-semibold border transition-colors ${
                    activeTab === 'politicas'
                      ? 'bg-[rgb(0_168_144)] text-white border-[rgb(0_168_144)]'
                      : 'bg-white text-gray-900 border-gray-300 hover:border-[rgb(0_168_144)]'
                  }`}
                >
                  Políticas
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reglamentos')}
                  className={`w-full text-left rounded-full px-5 py-3 font-semibold border transition-colors ${
                    activeTab === 'reglamentos'
                      ? 'bg-[rgb(0_168_144)] text-white border-[rgb(0_168_144)]'
                      : 'bg-white text-gray-900 border-gray-300 hover:border-[rgb(0_168_144)]'
                  }`}
                >
                  Reglamentos y protocolos
                </button>
              </div>
            </aside>

            {/* Contenido */}
            <section>
              {/* Imagen principal */}
              <div className="mb-6">
                <img
                  src="/img/4459-Importancia-de-crear-políticas-y-procedimientos-en-la-empresa.jpg"
                  alt="Políticas y procedimientos"
                  className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-2xl shadow"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Acordeón */}
              <div className="space-y-3">
                {items.map((item) => {
                  const isOpen = openItemId === item.id
                  return (
                    <div
                      key={item.id}
                      className="border rounded-xl bg-white shadow-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-4 text-left px-4 md:px-6 py-4"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`content-${item.id}`}
                      >
                        <span className="font-semibold text-gray-900">
                          {item.title}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-600 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div
                          id={`content-${item.id}`}
                          className="px-4 md:px-6 pb-5"
                        >
                          {item.content}
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

      {/* Modal de privacidad */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onKeyDown={(e) => { if (e.key === 'Escape') setShowPrivacyModal(false) }}>
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowPrivacyModal(false)}></div>
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-auto max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-900">{PRIVACY_DOC.title}</h3>
              <button onClick={() => setShowPrivacyModal(false)} className="w-9 h-9 grid place-items-center rounded-full hover:bg-gray-100" aria-label="Cerrar">×</button>
            </div>
            <div className="p-0">
              <iframe
                src={PRIVACY_DOC.preview}
                className="w-full h-[75vh]"
                title={PRIVACY_DOC.title}
                allow="autoplay; fullscreen"
              />
              <div className="sticky bottom-0 bg-white/90 backdrop-blur flex justify-between items-center gap-3 p-3 border-t">
                <a
                  href={PRIVACY_DOC.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors"
                >
                  Descargar PDF
                </a>
                <a
                  href={PRIVACY_DOC.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md font-semibold text-gray-700 hover:text-gray-900"
                >
                  Abrir en pestaña
                </a>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Politicas

