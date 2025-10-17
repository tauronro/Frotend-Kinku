import { Link } from 'react-router-dom'

export const FinalCta = () => {
  return (
    <section className="section-padding hero-gradient">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">¡Somos la mejor opción para comprar tu apartamento!</h2>
          <p className="text-xl mb-8 text-white/90">
            <strong>Apartamentos nuevos</strong>, con acabados modernos, en la mejor ubicación de <strong>Bogotá</strong> y con diferentes <strong>métodos de financiación</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/proyectos" className="btn bg-white text-primary-500 hover:bg-gray-100">
              ENCUENTRA TU APARTAMENTO AQUÍ
            </Link>
            <Link to="/contacto" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500">
              Quiero saber más
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCta


