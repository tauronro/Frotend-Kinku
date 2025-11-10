export const ConstruccionSostenibleSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 border-4 border-dotted border-accent-500 rounded-xl opacity-60" />
            <img
              src="/sostenibilidad/beautiful-skyscraper-with-architecture-building-around-city-2-scaled-e1738357875144-2048x1024.webp"
              alt="Construcción sostenible en la ciudad"
              className="relative z-10 w-full h-[420px] object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
          <div>
            <span className="uppercase tracking-widest text-sm text-accent-500 font-semibold">Construcción sostenible en Bogotá</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Kinku y su compromiso con el medio ambiente
            </h2>
            <p className="mt-4 text-gray-700">
              La construcción sostenible minimiza el uso de recursos y la huella ecológica durante el diseño, la obra y la operación de los edificios.
              En Bogotá, una ciudad en crecimiento, este enfoque es clave para impulsar un desarrollo urbano responsable. En Kinku adoptamos
              materiales y técnicas innovadoras para construir proyectos eficientes, duraderos y respetuosos con el entorno.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/proyectos"
                className="px-5 py-3 rounded-lg bg-[rgb(0_168_144)] text-white font-semibold hover:opacity-90 transition-colors"
              >
                Conoce nuestros proyectos
              </a>
              <a
                href="/contacto"
                className="px-5 py-3 rounded-lg border border-[rgb(0_168_144)] text-[rgb(0_168_144)] font-semibold hover:bg-[rgb(0_168_144)] hover:text-white transition-colors"
              >
                Conversemos
              </a>
            </div>
          </div>
        </div>

        {/* Principios y acciones */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Principios */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Claves de la construcción sostenible</h3>
            <ul className="space-y-4">
              {[
                'Eficiencia energética: integración de energías renovables y aislamiento térmico.',
                'Gestión del agua: ahorro y aprovechamiento de aguas lluvias.',
                'Reducción de residuos: uso de materiales reciclados y reciclables.',
                'Diseño bioclimático: edificaciones que aprovechan luz y ventilación natural.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293A1 1 0 003.293 10.707l4 4a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Acciones Kinku */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo reducimos el impacto en Kinku?</h3>
            <ul className="space-y-4">
              {[
                'Selección de materiales sostenibles y de alto desempeño.',
                'Estrategias de eficiencia energética en diseño y operación.',
                'Sistemas para optimizar el consumo y reúso de agua.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293A1 1 0 003.293 10.707l4 4a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Beneficios */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Beneficios para las personas y el entorno</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Ambiente</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span>•</span>Menor huella de carbono y residuos.</li>
                <li className="flex items-start gap-2"><span>•</span>Uso responsable de recursos naturales.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Economía</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span>•</span>Ahorro en energía y agua.</li>
                <li className="flex items-start gap-2"><span>•</span>Menor costo de operación y mantenimiento.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Bienestar</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span>•</span>Ambientes más saludables: mejor calidad del aire.</li>
                <li className="flex items-start gap-2"><span>•</span>Confort térmico y acústico superior.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tendencias + Galería simple */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tendencias en Bogotá</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span>•</span>Proyectos con certificaciones como <strong>CASA Colombia</strong> y <strong>LEED</strong>.</li>
              <li className="flex items-start gap-2"><span>•</span>Mayor adopción de <strong>energías renovables</strong> y eficiencia energética.</li>
              <li className="flex items-start gap-2"><span>•</span>Construcción <strong>modular y prefabricada</strong> para reducir tiempos y residuos.</li>
              <li className="flex items-start gap-2"><span>•</span>Implementación de <strong>techos y muros verdes</strong> que mejoran el microclima urbano.</li>
            </ul>
          </div>
          <div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {[
                '/sostenibilidad/interior-airport-with-windows-scaled-r0u31i19us8vaa0dk30frommhcirnkc65hlc5mdeao.webp',
              ].map((img) => (
                <img
                  key={img}
                  src={img}
                  alt="Ejemplos de sostenibilidad urbana"
                  className="w-80 h-56 object-cover rounded-xl shadow-md snap-center"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConstruccionSostenibleSection


