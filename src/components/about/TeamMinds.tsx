type TeamMember = {
  id: number
  name: string
  role: string
  img: string
  bio: string
}

export const TeamMinds = () => {
  const team: TeamMember[] = [
    { id: 1, name: 'Juan Pérez', role: 'Co-fundador', img: '/img/1.webp', bio: 'Arquitecto con 10+ años en diseño residencial y gestión de proyectos.' },
    { id: 2, name: 'María Gómez', role: 'Co-fundadora', img: '/img/imagen-medio-kunku.webp', bio: 'Ingeniera civil enfocada en calidad, seguridad y eficiencia constructiva.' },
    { id: 3, name: 'Carlos Ruiz', role: 'Socio', img: '/img/banner-kinku.webp', bio: 'Estratega financiero con enfoque en inversión inmobiliaria sostenible.' }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mentes que construyen</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Conoce a las personas detrás de Kinku, un equipo con visión, experiencia y pasión por crear hogares memorables.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <article
              key={member.id}
              tabIndex={0}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none"
            >
              {/* Imagen base */}
              <img src={member.img} alt={member.name} className="w-full h-80 object-cover" />

              {/* Overlay azul con animación */}
              <div className="absolute inset-0 bg-blue-900/80 opacity-0 translate-y-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0" />

              {/* Etiqueta en forma de cinta sobre el overlay */}
              <div className="absolute left-4 bottom-4 opacity-0 translate-y-3 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                <div
                  className="relative bg-white/95 text-gray-900 shadow-lg pl-5 pr-7 py-4 rounded-r-xl"
                  style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0% 100%)' }}
                >
                  <span className="absolute left-0 top-2 bottom-2 w-1.5" style={{ backgroundColor: '#FF7A00' }}></span>
                  <h3 className="text-base md:text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{member.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMinds


