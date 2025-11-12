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
      title: 'Certificado de Sostenibilidad – Kinku (PDF)',
      thumb: '/sostenibilidad/beautiful-skyscraper-with-architecture-building-around-city-2-scaled-e1738357875144-2048x1024.webp',
      src: 'https://drive.google.com/file/d/1ednCM7eomDL8prp20SSQAEkmbybnzSd5/preview',
      size: 'PDF'
    },
    {
      id: 2,
      title: 'Certificación / Documento de Cumplimiento Ambiental (PDF)',
      thumb: '/sostenibilidad/cityscape-wuxi-scaled-r0u2c4e5bti5avhr432g36l2tlztrl2nvhdoo02ao.webp',
      src: 'https://drive.google.com/file/d/1HqRfvIDRWKa_CMvk2TWeIyTX9jVVQ5_A/preview',
      size: 'PDF'
    }
  ]

  const [activeDoc, setActiveDoc] = useState<DocItem | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Certificados de interés</h2>
          <p className="mt-2 text-gray-600">Consulta nuestros certificados de sostenibilidad.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc) => (
            <article key={doc.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <div className="h-36 w-full flex items-center justify-center bg-gray-50">
                <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8 18v-6h2.5a1.5 1.5 0 1 1 0 3H9.5V18H8zm6 0h-1.5v-6H16a3 3 0 0 1 0 6h-2zm-1.5-4.5V16H16a1 1 0 1 0 0-2h-3.5zM13 9V3.5L18.5 9H13z"/>
                </svg>
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
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-auto max-h-[90vh] overflow-auto bounce-in">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-bold text-gray-900">{activeDoc.title}</h3>
                <button onClick={() => setActiveDoc(null)} className="w-9 h-9 grid place-items-center rounded-full hover:bg-gray-100">×</button>
              </div>
              <div className="p-0">
                {(activeDoc.src.endsWith('.pdf') || activeDoc.src.includes('drive.google.com')) ? (
                  <iframe
                    src={activeDoc.src}
                    className="w-full h-[75vh]"
                    title={activeDoc.title}
                    allow="autoplay; fullscreen"
                  />
                ) : (
                  <img src={activeDoc.src} alt={activeDoc.title} className="w-full h-auto object-contain" />
                )}
                <div className="sticky bottom-0 bg-white/90 backdrop-blur flex justify-end p-3 border-t">
                  <button
                    onClick={() => setActiveDoc(null)}
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
    </section>
  )
}

export default DocumentosInteresSection


