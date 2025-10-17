import { useState } from 'react'
import { PageBanner } from '../components/common/PageBanner'

export const PaymentPortal = () => {
  const [formData, setFormData] = useState({
    documentNumber: '',
    email: '',
    project: '',
    paymentType: 'mensual'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el pago
    console.log('Pago procesado:', formData)
  }

  return (
    <div>
      <PageBanner
        title="Portal de Pagos"
        subtitle="Gestiona tus pagos de forma segura y sencilla."
      />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portal de Pagos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gestiona tus pagos de manera segura y fácil. Accede a tu cuenta para realizar 
              pagos, consultar estados y descargar comprobantes.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceder al Portal</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Documento
                  </label>
                  <input
                    type="text"
                    id="documentNumber"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu número de cédula"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Proyecto
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Selecciona tu proyecto</option>
                    <option value="kioto">Proyecto Kioto</option>
                    <option value="osaka">Proyecto Osaka</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="paymentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Pago
                  </label>
                  <select
                    id="paymentType"
                    name="paymentType"
                    value={formData.paymentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="mensual">Pago Mensual</option>
                    <option value="cuota-inicial">Cuota Inicial</option>
                    <option value="saldo">Saldo a Favor</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  Acceder al Portal
                </button>
              </form>
            </div>
            
            {/* Información adicional */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Métodos de Pago</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Transferencia bancaria</li>
                  <li>• Pago con tarjeta</li>
                  <li>• Pago en efectivo</li>
                  <li>• Débito automático</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Horarios de Atención</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contacto de soporte */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">¿Necesitas ayuda con tu pago?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+5711234567" className="btn btn-outline">
                  Llamar: +57 (1) 123-4567
                </a>
                <a href="mailto:pagos@kinku.co" className="btn btn-outline">
                  Email: pagos@kinku.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
