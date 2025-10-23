export const InformacionInteresSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Información de interés</h2>
          <p className="mt-2 text-gray-600">Nuestros informes integrados de gestión</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Columna izquierda: texto y botón */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Comunicamos nuestras acciones de sostenibilidad</h3>
            <p className="text-gray-700 leading-relaxed">
              Implementamos diversas estrategias para comunicar a nuestros grupos de interés sobre nuestra gestión
              sostenible. Publicamos informes de sostenibilidad alineados con estándares internacionales, disponibles
              para su consulta.
            </p>
            {/* <button className="mt-6 inline-flex items-center px-5 py-3 rounded-lg font-semibold border border-[rgb(0_168_144)] text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)] hover:text-white transition-colors">
              Consultar informes
            </button> */}
          </div>

          {/* Columna derecha: imagen */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp" alt="Informes de sostenibilidad" className="w-full h-auto object-cover" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InformacionInteresSection


