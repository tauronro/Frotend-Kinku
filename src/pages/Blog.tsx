import { PageBanner } from '../components/common/PageBanner'

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tendencias en diseño de apartamentos modernos",
      excerpt: "Descubre las últimas tendencias en diseño de interiores para apartamentos modernos en Bogotá.",
      date: "15 de Marzo, 2024",
      category: "Diseño"
    },
    {
      id: 2,
      title: "Guía para comprar tu primer apartamento",
      excerpt: "Todo lo que necesitas saber antes de comprar tu primer apartamento en Bogotá.",
      date: "10 de Marzo, 2024",
      category: "Inversión"
    },
    {
      id: 3,
      title: "Financiación inmobiliaria: opciones disponibles",
      excerpt: "Conoce las diferentes opciones de financiación para adquirir tu vivienda.",
      date: "5 de Marzo, 2024",
      category: "Financiación"
    },
    {
      id: 4,
      title: "Proyecto Kioto: avances de construcción",
      excerpt: "Actualizaciones sobre el progreso de construcción del Proyecto Kioto.",
      date: "1 de Marzo, 2024",
      category: "Proyectos"
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Kinku</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente informado sobre las últimas tendencias inmobiliarias, consejos de inversión 
              y actualizaciones de nuestros proyectos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary-600 font-semibold">Imagen del artículo</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600 font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </div>
                <button className="btn btn-outline w-full">Leer más</button>
              </article>
            ))}
          </div>
          
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
              <button className="btn btn-primary">Suscribirse</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
