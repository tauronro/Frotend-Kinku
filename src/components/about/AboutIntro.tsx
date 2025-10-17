export const AboutIntro = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Nuestra esencia</h1>
            <p className="text-lg text-gray-600 mb-6">
              En Kinku, creemos que encontrar tu hogar ideal debe ser una experiencia 
              sencilla y emocionante. Somos una constructora comprometida con la 
              excelencia y la innovación en cada proyecto que desarrollamos.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nos especializamos en proyectos inmobiliarios modernos que se adaptan 
              a tu estilo de vida, con un enfoque en la calidad, la funcionalidad 
              y el diseño contemporáneo.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-gray-600">Proyectos activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Atención al cliente</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-xl">Imagen de la empresa</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro



