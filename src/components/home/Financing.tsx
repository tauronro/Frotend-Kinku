import { Link } from 'react-router-dom'

export const Financing = () => {
  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen Izquierda */}
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 group">
              <img
                src="/img/imagen-medio-kunku.webp"
                alt="Opciones de financiación Kinku"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-300"></div>
              
              {/* Overlay de información en hover */}
              <div className="absolute inset-0 bg-primary-500/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-2xl font-bold mb-2">Financiación Kinku</h4>
                  <p className="text-lg">Opciones de crédito</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contenido Derecho */}
          <div className="space-y-8 animate-slide-in-right">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
              Tu nuevo hogar te espera en Pekín.
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed animate-slide-up">
            Espacios modernos, acabados premium y una ubicación con proyección. Reserva tu apartamento desde <strong className="text-primary-400 animate-pulse">$2.000.000 </strong> y paga la cuota inicial a tu ritmo.
            </p>
            
            <Link to="/portal-pagos" className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-bounce-in">
              VER CRÉDITOS
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Financing


