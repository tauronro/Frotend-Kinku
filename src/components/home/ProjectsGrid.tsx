import { Link } from 'react-router-dom'

type ProjectCard = {
  id: number
  name: string
  image: string
  href: string
  status: 'DISPONIBLE' | 'ENTREGADO'
}

export const ProjectsGrid = () => {
  const projects: ProjectCard[] = [
    {
      id: 1,
      name: 'Proyecto Osaka',
      image: '/img/imagen-medio-kunku.webp',
      href: '/proyecto-osaka',
      status: 'ENTREGADO'
    },
    {
      id: 2,
      name: 'Proyecto Kioto',
      image: '/img/1.webp',
      href: '/proyecto-kioto',
      status: 'ENTREGADO'
    },
    {
      id: 3,
      name: 'Proyecto Pekín',
      image: '/img/banner-kinku.webp',
      href: '/proyecto-pekin',
      status: 'DISPONIBLE'
    }
  ]

  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Fondo con patrón arquitectónico */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex flex-col justify-center">
        <div className="pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-0">
              PROYECTOS KINKU
            </h2>
            <p className="text-white/70 max-w-2xl">
              Osaka y Kioto han sido entregados. Actualmente contamos con disponibilidad en el proyecto Pekín.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {projects.map((project) => (
            <Link key={project.id} to={project.href} className="group block">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'DISPONIBLE' ? 'bg-primary-500 text-white' : 'bg-gray-700 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-primary-500 font-semibold text-sm group-hover:text-accent-500 transition-colors">
                      Ver proyecto
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid


