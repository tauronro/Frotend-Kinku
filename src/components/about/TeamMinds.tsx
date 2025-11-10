type TeamMember = {
  id: number
  name: string
  role: string
  img: string
  phrase: string
  bio: string
}

export const TeamMinds = () => {
  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Mario Ernesto Ortiz Escobar',
      role: 'Gerente General',
      img: '/profiles/ADMINISTRATIVO-Arq.Ma Ernesto-06.png',
      phrase:
        '“Fundé Kinku para trabajar de la mano de mi familia con gran pasión para alcanzar la excelencia en todas las edificaciones”',
      bio:
        'Arquitecto con más de 35 años de experiencia en construcción y en proyectos de vivienda, salud, educación, comerciales e industriales en Cundinamarca y el Meta.',
    },
    {
      id: 2,
      name: 'Mario Andrés Ortiz Bernal',
      role: 'Gerente Administrativo y Financiero',
      img: '/profiles/ADMINISTRATIVO-Ing.Ma Andres-01.png',
      phrase: '“Feliz de trabajar en Kinku y poder aportar a construir un mejor país”',
      bio:
        'Ingeniero Industrial y Economista, con maestrías en Administración y Mercadeo; 12 años de experiencia en el sector financiero y gerencia de proyectos inmobiliarios.',
    },
    {
      id: 3,
      name: 'Carlos Mario Ortiz Bernal',
      role: 'Gerente de Construcción y Diseño',
      img: '/profiles/Arq,Carlos Mario Ortiz.png',
      phrase:
        '“Mi objetivo es el de crear espacios únicos e innovadores que desafíen a la arquitectura tradicional. Cada diseño es único y especial”',
      bio:
        'Arquitecto con Maestría en Gestión Estratégica de Proyectos de Arquitectura y amplia experiencia en construcción de proyectos de vivienda y comerciales.',
    },
    {
      id: 4,
      name: 'Sonia Elizabeth Bernal Torres',
      role: 'Representante Legal',
      img: '/profiles/ADMINISTRATIVO-Arq.Sonia-05.png',
      phrase:
        '“Fundé Kinku con el objetivo de transmitir los valores de una familia unida y trabajadora orgullosa de ser colombiana”',
      bio:
        'Arquitecta con más de 30 años de experiencia en construcción, administración y gestión comercial de proyectos inmobiliarios.',
    },
    {
      id: 5,
      name: 'María Alejandra Ortiz Bernal',
      role: 'Residente Administrativa',
      img: '/profiles/Maria Alejandra Ortiz.png',
      phrase:
        '“Feliz de ver el crecimiento de la empresa familiar la cual, busca marcar la diferencia en los hogares de la sociedad”',
      bio:
        'Ingeniera Civil y Ambiental con experiencia en el sector de la construcción.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mentes que construyen</h2>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">Conoce a las personas detrás de Kinku, un equipo con visión, experiencia y pasión por crear hogares memorables.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full"
            >
              {/* Header alineado: avatar + nombre/rol */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-5 md:gap-6">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-purple-100"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-purple-600">
                      {member.name}
                    </h3>
                    <p className="text-purple-500 font-semibold mt-1">{member.role}</p>
                  </div>
                </div>

                {/* Frase y bio */}
                <p className="text-gray-700 italic mt-5">{member.phrase}</p>
                <p className="text-gray-600 mt-4 leading-relaxed">{member.bio}</p>
              </div>

              {/* Imagen decorativa inferior (opcional para dar aire visual) */}
              {/* <div className="w-full h-48 overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-90" />
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMinds


