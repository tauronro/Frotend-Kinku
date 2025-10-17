import { Link } from 'react-router-dom'

export const ApartmentsIntro = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Sección Superior - Últimos Apartamentos */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Contenido Izquierdo */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Logo y Tagline */}
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent-500 animate-slide-up">Kioto</h3>
                <p className="text-gray-600 text-sm animate-slide-up">Una experiencia de vida</p>
              </div>
            </div>
            
            {/* Título Principal */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight animate-slide-up">
              ¡Últimos Apartamentos disponibles!
            </h2>
            
            {/* Descripción */}
            <p className="text-xl text-gray-600 leading-relaxed animate-slide-up">
              Si estás en la búsqueda de un apartaestudio nuevo, moderno y muy central, Kioto es el lugar ¡ideal para ti!
            </p>
            
            {/* CTA */}
            <Link to="/proyecto-kioto" className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-bounce-in">
              VER APARTAMENTOS
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          {/* Imagen Derecha */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 group">
              <img
                src="/img/1.webp"
                alt="Proyecto Kioto - Apartamentos modernos"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              
              {/* Overlay de información en hover */}
              <div className="absolute inset-0 bg-accent-500/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-2xl font-bold mb-2">Proyecto Kioto</h4>
                  <p className="text-lg">Apartamentos modernos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApartmentsIntro


