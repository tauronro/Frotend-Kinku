import { useState } from 'react'
import { PageBanner } from '../components/common/PageBanner'

export const Blog = () => {
  const [activePostId, setActivePostId] = useState<number | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const blogPosts = [
    {
      id: 1,
      title: "Tendencias en diseño de apartamentos modernos",
      excerpt: "Descubre las últimas tendencias en diseño de interiores para apartamentos modernos en Bogotá.",
      date: "15 de Marzo, 2024",
      category: "Diseño",
      image: "/img/1.webp",
      images: ["/img/1.webp", "/img/imagen-medio-kunku.webp", "/img/banner-kinku.webp"]
    },
    {
      id: 2,
      title: "Guía para comprar tu primer apartamento",
      excerpt: "Todo lo que necesitas saber antes de comprar tu primer apartamento en Bogotá.",
      date: "10 de Marzo, 2024",
      category: "Inversión",
      image: "/img/imagen-medio-kunku.webp",
      images: ["/img/imagen-medio-kunku.webp", "/img/1.webp", "/img/banner-kinku.webp"]
    },
    {
      id: 3,
      title: "Financiación inmobiliaria: opciones disponibles",
      excerpt: "Conoce las diferentes opciones de financiación para adquirir tu vivienda.",
      date: "5 de Marzo, 2024",
      category: "Financiación",
      image: "/img/banner-kinku.webp",
      images: ["/img/banner-kinku.webp", "/img/Metriku-e1694531856484.webp"]
    },
    {
      id: 4,
      title: "Proyecto Kioto: avances de construcción",
      excerpt: "Actualizaciones sobre el progreso de construcción del Proyecto Kioto.",
      date: "1 de Marzo, 2024",
      category: "Proyectos",
      image: "/img/Metriku-e1694531856484.webp",
      images: ["/img/Metriku-e1694531856484.webp", "/img/1.webp"]
    }
  ]

  return (
    <div>
      <PageBanner
        title="Blog Kinku"
        subtitle="Tendencias inmobiliarias, consejos de inversión y novedades de nuestros proyectos."
      />
      <section className="section-padding bg-white">
        <div className="container">
          
          <div className="grid md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="md:flex">
                  {/* Imagen */}
                  <div className="relative md:w-80 w-full h-56 md:h-auto">
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute -top-3 -left-3 h-10 w-10 bg-[rgb(0_168_144)] rounded-md shadow-md"></div>
                  </div>
                  {/* Contenido */}
                  <div className="p-6 md:flex-1">
                    <div className="text-sm font-medium text-[rgb(0_168_144)]">{post.category}</div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">{post.title}</h3>
                    <div className="mt-3 flex items-center gap-3 text-gray-500 text-sm">
                      <span>{post.date}</span>
                      <span className="inline-block h-[3px] w-10 bg-[rgb(0_168_144)] rounded-full"></span>
                    </div>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-6">
                      <button onClick={() => { setActivePostId(post.id); setActiveImageIndex(0); }} className="inline-flex items-center px-5 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors">Leer más</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Modal detalle */}
          {activePostId && (() => {
            const post = blogPosts.find(p => p.id === activePostId)
            if (!post) return null
            const images = post.images || [post.image]
            const total = images.length
            const goPrev = () => setActiveImageIndex((i) => (i - 1 + total) % total)
            const goNext = () => setActiveImageIndex((i) => (i + 1) % total)
            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* backdrop */}
                <div className="absolute inset-0 bg-black/60" onClick={() => setActivePostId(null)}></div>
                {/* dialog */}
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-6xl w-[96%] md:w-[1100px] overflow-hidden">
                  <div className="md:flex">
                    {/* Carrusel */}
                    <div className="md:w-3/5 relative bg-black/5">
                      <div className="relative h-72 md:h-[460px] overflow-hidden">
                        <img src={images[activeImageIndex]} alt={`${post.title} imagen ${activeImageIndex+1}`} className="absolute inset-0 w-full h-full object-cover" />
                        {/* Controles */}
                        {total > 1 && (
                          <>
                            <button onClick={goPrev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 grid place-items-center shadow">‹</button>
                            <button onClick={goNext} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 grid place-items-center shadow">›</button>
                          </>
                        )}
                      </div>
                      {/* Thumbnails */}
                      {total > 1 && (
                        <div className="flex gap-2 p-3 overflow-x-auto bg-white">
                          {images.map((src, idx) => (
                            <button key={src+idx} onClick={() => setActiveImageIndex(idx)} className={`h-14 w-20 rounded-md overflow-hidden ring-2 ${idx===activeImageIndex ? 'ring-[rgb(0_168_144)]' : 'ring-transparent'}`}>
                              <img src={src} alt={`thumb ${idx+1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Contenido */}
                    <div className="md:w-2/5 p-6">
                      <div className="text-sm font-medium text-[rgb(0_168_144)]">{post.category}</div>
                      <h3 className="mt-2 text-3xl font-bold text-gray-900 leading-tight">{post.title}</h3>
                      <div className="mt-2 flex items-center gap-3 text-gray-500 text-sm">
                        <span>{post.date}</span>
                        <span className="inline-block h-[3px] w-10 bg-[rgb(0_168_144)] rounded-full"></span>
                      </div>
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        {post.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, sem at fermentum
                        venenatis, libero nisl scelerisque odio, a commodo justo lorem a odio. Integer viverra nibh non
                        sapien posuere, quis tincidunt lorem vehicula.
                      </p>
                      <ul className="mt-4 space-y-2 text-gray-700 text-sm list-disc list-inside">
                        <li>Autor: Equipo Kinku</li>
                        <li>Tiempo de lectura: 4 min</li>
                        <li>Etiquetas: tendencias, diseño, inversión</li>
                      </ul>
                      <div className="mt-6 flex justify-end gap-3">
                        <button onClick={() => setActivePostId(null)} className="inline-flex items-center px-4 py-2 rounded-md font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50">Cerrar</button>
                        <button className="inline-flex items-center px-4 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90">Ir al artículo</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
          
          {/* Newsletter */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mantente actualizado</h2>
            <p className="text-gray-600 mb-6">Suscríbete a nuestro newsletter y recibe las últimas noticias</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 transition-colors">Suscribirse</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
