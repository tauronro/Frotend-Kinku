export const AboutExpertise = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title and lead */}
          <div>
            <span className="uppercase tracking-widest text-sm text-accent-500 font-semibold">Sobre nosotros</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Construimos lo que <br className="hidden md:block"/> necesitas
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              Creamos proyectos de alto nivel con equipos expertos, procesos eficientes y un enfoque en la satisfacción del cliente.
            </p>
          </div>

          {/* Right: Experience block */}
          <div className="grid sm:grid-cols-[auto,1fr] gap-6 items-center">
            <div className="text-accent-500 font-extrabold text-6xl leading-none">25</div>
            <div>
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-widest text-sm text-gray-700">Años de</span>
                <span className="text-2xl font-bold text-primary-600">Experiencia</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Servicios de construcción con resultados y satisfacción
              </h3>
              <p className="mt-3 text-gray-600">
                Diseñamos y construimos con altos estándares. Nuestro equipo acompaña cada etapa del proyecto.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  'Procesos y estilos de diseño con estándares de calidad.',
                  'Materiales confiables y planificación eficiente.',
                  'Equipo experto y enfoque en el detalle.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Media + copy */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 border-4 border-dotted border-accent-500 rounded-xl opacity-60"></div>
            <img
              src="/img/1.webp"
              alt="Equipo de construcción"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Brindamos soluciones completas
            </h3>
            <p className="text-gray-600 mb-6">
              Combinamos diseño, planificación y ejecución para entregar proyectos que cumplan y superen las expectativas de nuestros clientes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Gestión integral del proyecto',
                'Calidad y seguridad en obra',
                'Comunicación transparente',
                'Entrega oportuna',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-gray-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutExpertise


