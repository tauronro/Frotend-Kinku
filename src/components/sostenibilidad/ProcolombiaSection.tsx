export const ProcolombiaSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="inline-block h-px w-12 bg-gray-300"></span>
            <span className="text-sm font-semibold tracking-widest text-gray-700">KINKU SOSTENIBLE</span>
            <span className="inline-block h-px w-12 bg-gray-300"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Nuestro compromiso con la sostenibilidad</h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            Adoptamos la sostenibilidad como un compromiso integral que guía cada uno de los objetivos estratégicos de la organización.
            Promovemos prácticas responsables en el diseño, la construcción y la operación de nuestros proyectos, buscando generar un
            impacto positivo en el medioambiente, el bienestar de las comunidades y el desarrollo económico del entorno. Nuestro
            propósito es construir espacios que perduren en el tiempo y contribuyan a un futuro más equilibrado y sostenible.
          </p>
        </div>

        <div className="max-w-sm md:max-w-md mx-auto">
          <a href="https://procolombia.co/sostenibilidad" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            <img src="/img/El-futuro-de-la-construccion-ecologica-y-eficiente.webp" alt="Modelo de Sostenibilidad" className="w-full h-auto object-contain" />
          </a>
          <p className="mt-3 text-center text-gray-500 text-sm">
            Haz clic en la imagen para conocer más de ProColombia Sostenible
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcolombiaSection


