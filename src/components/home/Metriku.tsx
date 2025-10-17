import { Link } from 'react-router-dom'

export const Metriku = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Líneas decorativas amarillas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Marco decorativo */}
        <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-accent-500 rounded-3xl opacity-30"></div>
        
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-accent-500 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-1/3 h-0.5 bg-gradient-to-r from-accent-500 to-transparent transform rotate-45 origin-left"></div>
        <div className="absolute top-3/4 right-0 w-1/3 h-0.5 bg-gradient-to-l from-accent-500 to-transparent transform -rotate-45 origin-right"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent-500 transform rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent-500 transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent transform rotate-30 origin-left"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-0.5 bg-gradient-to-l from-transparent via-accent-500 to-transparent transform -rotate-30 origin-right"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda - Imagen */}
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/img/Metriku-e1694531856484.webp"
                alt="Servicios inmobiliarios Métriku"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Columna Derecha - Contenido */}
          <div className="animate-slide-in-right space-y-8">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo/METRIKU-LOGO-1@2x-e1694532692267.webp" 
                alt="Logo Métriku" 
                className="w-32 h-32 object-contain"
              />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Arrienda, vende o compra tu inmueble con Métriku
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              La nueva inmobiliaria del Grupo Empresarial Kinku SAS. Ofrecemos un servicio completo y eficiente para la gestión de tu inmueble.
            </p>

            <div className="space-y-4">
              {[
                'Asesoramiento personalizado',
                'Estudio de mercado gratuito',
                'Avalúo comercial a bajo costo',
                'Promoción en metrocuadrado.com',
                'Avisos de venta en propiedad'
              ].map((item) => (
                <div className="flex items-start space-x-3" key={item}>
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Te ayudamos a gestionar tu inmueble. Comunícate con nosotros para más información.
              </p>
              <Link to="/contacto" className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                CONTACTAR
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metriku


