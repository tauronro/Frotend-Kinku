import { useState } from 'react'
import { PageBanner } from '../components/common/PageBanner'

type PqrType = 'Petición' | 'Queja' | 'Reclamo' | 'Sugerencia'

export const Pqr = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    type: 'Petición' as PqrType,
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setStatus('loading')
      // TODO: Reemplazar con llamada real a tu backend de PQR
      console.log('PQR enviada:', formData)
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <PageBanner
        title="Peticiones, Quejas y Reclamos (PQR)"
        subtitle="Radica aquí tus peticiones, quejas, reclamos o sugerencias. Nuestro equipo dará respuesta dentro de los tiempos establecidos."
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Radicación de PQR
            </h1>
            <p className="text-gray-600">
              A través de este formulario podrás presentar peticiones, quejas, reclamos o
              sugerencias relacionadas con nuestros proyectos y servicios. Una vez radicada tu
              solicitud, será atendida de acuerdo con los tiempos de respuesta definidos por la
              compañía.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Proyecto (opcional)
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    placeholder="Ej: Osaka, Kioto, Pekín"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tipo de solicitud (PQR)
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="Petición">Petición</option>
                    <option value="Queja">Queja</option>
                    <option value="Reclamo">Reclamo</option>
                    <option value="Sugerencia">Sugerencia</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Detalle de tu solicitud
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
                <p className="mt-2 text-xs text-gray-500">
                  Por favor incluye la mayor cantidad de detalles posible (fechas, nombres,
                  número de apartamento, proyecto, etc.).
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 text-xs text-gray-500 space-y-1">
                <p>
                  Al enviar esta PQR autorizas el tratamiento de tus datos personales conforme a
                  nuestra política de tratamiento de datos.
                </p>
                <p>
                  Te contactaremos al correo suministrado para informar el resultado de tu
                  solicitud dentro de los tiempos de respuesta establecidos.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando PQR...' : 'Enviar PQR'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-600 text-center">
                  Tu PQR ha sido radicada correctamente. Nos pondremos en contacto contigo en el
                  menor tiempo posible.
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm text-red-600 text-center">
                  Ocurrió un error al enviar tu PQR. Por favor intenta nuevamente en unos
                  minutos.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}


