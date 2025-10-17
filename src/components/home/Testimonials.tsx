export const Testimonials = () => {
  const items = [
    {
      initial: 'W',
      name: 'Wilson Mendez Ospina',
      role: 'Ingeniero Industrial',
      title: '¡Excelente empresa!',
      text: 'Siempre la constructora está atenta a las solicitudes o a las novedades que han surgido después de la entrega. Es una empresa responsable, en la cual vale la pena confiar.'
    },
    {
      initial: 'M',
      name: 'Maritza Cortés Velandia',
      role: 'Abogada',
      title: 'En Kinku son muy cumplidos y comprometidos',
      text: 'La experiencia con la firma Kinku brinda seguridad y confianza para recomendar a familiares y amigos.'
    },
    {
      initial: 'R',
      name: 'Ramiro Valencia',
      role: 'Ingeniero de sistemas',
      title: 'Kinku ha sido una de las mejores decisiones',
      text: 'Lo hice como inversión y me ha ido muy bien con ellos. En menos de un mes de haberlo recibido ya estaba arrendado y produciendo. Es increíble el diseño, sus acabados, zonas sociales...'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Familias que construyeron su hogar con Kinku</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¡Cada detalle cuenta al momento de construir vivienda! Por eso para nosotros es muy importante cada idea, aporte y comentario de las familias que han decidido elegirnos como promotores de su sueño de adquirir su nuevo apartamento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t) => (
            <div className="card p-6" key={t.name}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">{t.initial}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">{t.title}</h5>
              <p className="text-gray-600 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


