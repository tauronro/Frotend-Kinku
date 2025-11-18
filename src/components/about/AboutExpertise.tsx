export const AboutExpertise = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title and lead */}
          <div>
            <span className="uppercase tracking-widest text-sm text-accent-500 font-semibold">¿Quién es Kinku?</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              ¡Somos Kinku!
            </h2>
            <p className="mt-4 text-gray-700 max-w-xl">
              Una constructora familiar colombiana especializada en el diseño y la edificación de proyectos de vivienda en Bogotá.
            </p>
            <p className="mt-3 text-gray-700 max-w-xl">
              Trabajamos por ofrecer el mejor servicio a todo nivel; contamos con múltiples canales digitales de atención para resolver cualquier inquietud y acompañarte a vivir en el lugar que soñaste.
            </p>
            <p className="mt-3 text-gray-700 max-w-xl">
              ¡Nos gusta ser diferentes! Diseñamos apartamentos innovadores que rompen con la hegemonía de la arquitectura tradicional y construimos hogares con altos estándares de calidad, pensando en la comunidad y el medio ambiente.
            </p>
          </div>

          {/* Right: Experience block */}
          <div className="grid sm:grid-cols-[auto,1fr] gap-6 items-start">
            <div className="text-accent-500 font-extrabold text-6xl leading-none pt-1">10</div>
            <div>
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-widest text-sm text-gray-700">Años de</span>
                <span className="text-2xl font-bold text-primary-600">Experiencia</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Construcción con diseño, servicio y respaldo</h3>
              <p className="mt-3 text-gray-600">Acompañamos cada etapa del proyecto para que tomes decisiones informadas y seguras.</p>

              <ul className="mt-6 space-y-4">
                {[
                  'Canales digitales de atención para un acompañamiento ágil.',
                  'Diseños de apartamentos innovadores y funcionales.',
                  'Calidad constructiva y selección responsable de materiales.',
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
              alt="Kinku - equipo construyendo hogares"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué nos mueve?</h3>
            <p className="text-gray-600 mb-6">Combinar diseño, planificación y ejecución para entregar proyectos que superen expectativas y construyan hogares que inspiren y perduren.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Gestión integral del proyecto',
                'Transparencia y comunicación constante',
                'Entrega oportuna',
                'Compromiso con la comunidad y el medio ambiente',
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


