import { PageBanner } from '../components/common/PageBanner'

const ServiciosPostVenta = () => {
  return (
    <div>
      <PageBanner
        title="Servicios post venta"
        subtitle="Accede al portal de servicios post venta y conoce cómo usarlo paso a paso."
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Video guía */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Guía de uso del portal de servicios post venta
              </h2>
              <p className="text-gray-600 mb-4">
                En este video encontrarás una guía rápida para conocer cómo usar el portal de
                servicios post venta, registrar solicitudes y hacer seguimiento.
              </p>
              <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/g640yvnJCWU"
                  title="Guía portal servicios post venta"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* CTA Wahhu */}
            <div className="lg:pl-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Acceso al portal de servicios post venta
              </h2>
              <p className="text-gray-600 mb-6">
                Una vez hayas visto la guía (o cuando lo desees), puedes ingresar directamente al
                portal de servicios post venta para gestionar tus solicitudes, hacer seguimiento y
                comunicarte con nuestro equipo.
              </p>

              <a
                href="https://wahhu.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold bg-white text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors mb-4"
              >
                Iniciar sesión con Wahhu
              </a>

              <p className="text-sm text-gray-500">
                Serás redirigido a la plataforma segura de Wahhu (`https://wahhu.com/login`) para
                iniciar sesión con tus credenciales. Si tienes dudas o problemas de acceso, por
                favor contáctanos a través de nuestros canales de atención.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiciosPostVenta


