import { useState } from 'react'

type DocItem = {
  id: number
  title: string
  subtitle?: string
  thumb: string
  src: string
  size: string
}

export const DocumentosInteresSection = () => {
  const docs: DocItem[] = [
    {
      id: 1,
      title: 'Boletín No. 24 - Novedades para exportadores a la UE',
      thumb: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      src: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      size: '3.38 MB'
    },
    {
      id: 2,
      title: 'Guía práctica: Sacha Inchi',
      thumb: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      src: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      size: '4.65 MB'
    },
    {
      id: 3,
      title: 'Guía práctica: Aceite de palma',
      thumb: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      src: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      size: '6.33 MB'
    },
    {
      id: 4,
      title: 'Guía práctica: Azúcar de caña',
      thumb: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      src: '/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp',
      size: '5.07 MB'
    }
  ]

  const [activeDoc, setActiveDoc] = useState<DocItem | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Certificados de interés</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc) => (
            <article key={doc.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <div className="h-36 w-full overflow-hidden bg-gray-100">
                <img src={doc.thumb} alt={doc.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-[40px]">{doc.title}</h3>
                <div className="mt-3 flex items-center justify-between text-gray-500 text-xs">
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8"/></svg>
                    PDF {doc.size}
                  </span>
                  <button onClick={() => setActiveDoc(doc)} className="px-3 py-1 rounded-md font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors">Ver</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onKeyDown={(e) => { if (e.key === 'Escape') setActiveDoc(null) }}>
            <div className="absolute inset-0 bg-black/60" onClick={() => setActiveDoc(null)}></div>
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-auto max-h-[90vh] overflow-auto">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-bold text-gray-900">{activeDoc.title}</h3>
                <button onClick={() => setActiveDoc(null)} className="w-9 h-9 grid place-items-center rounded-full hover:bg-gray-100">×</button>
              </div>
              <div className="p-4">
                {/* Intento usar iframe si fuera PDF; si es imagen, se muestra responsiva */}
                {activeDoc.src.endsWith('.pdf') ? (
                  <iframe src={activeDoc.src} className="w-full h-[80vh]" title={activeDoc.title}></iframe>
                ) : (
                  <img src={activeDoc.src} alt={activeDoc.title} className="w-full h-auto object-contain" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DocumentosInteresSection


