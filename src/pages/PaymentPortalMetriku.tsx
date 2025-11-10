import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

export const PaymentPortalMetriku = () => {
  const [amount, setAmount] = useState<string>('')
  const [customerType, setCustomerType] = useState<string>('') // 'Arrendatario' | 'Propietario'
  const navigate = useNavigate()
  return (
    <div>
      <PageBanner title="Paga tu Proyecto de Vivienda" subtitle="Métriku" size="sm" />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto">
              <img src="/img/nuevo-imagen.webp" alt="Pago Métriku" className="w-full h-auto object-contain"/>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">¡Bienvenido al sistema de pagos de Kinku!</h2>
              <p className="text-[rgb(0_168_144)] text-2xl font-bold mt-1">Paga tu Proyecto de Vivienda</p>
              <div className="mt-6 rounded-xl border border-[rgb(0_168_144)]/40 overflow-hidden">
                <div className="px-4 py-3 bg-gray-50 font-semibold">Proyecto seleccionado</div>
                <div className="p-4">
                  <select className="w-full border rounded-md px-4 py-3 bg-gray-100 text-gray-700 cursor-not-allowed" disabled aria-disabled="true">
                    <option selected>Métriku</option>
                  </select>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selecciona tu perfil
                    </label>
                    <select
                      className="w-full border rounded-md px-4 py-3"
                      value={customerType}
                      onChange={(e) => setCustomerType(e.target.value)}
                    >
                      <option value="">Elige una opción</option>
                      <option value="Arrendatario">Arrendatario</option>
                      <option value="Propietario">Propietario</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Introduce el monto a pagar ( $ )
                    </label>
                    <input
                      type="number"
                      min={1}
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0"
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(0_168_144)]"
                    />
                  </div>
                  <button
                    className="mt-4 inline-flex items-center px-5 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!customerType || !(parseFloat(amount) > 0)}
                    onClick={() => navigate('/checkout', { state: { project: 'Métriku', amount: parseFloat(amount), customerType } })}
                  >
                    Iniciar pago
                  </button>
                </div>
              </div>

              <ul className="mt-8 space-y-4 text-gray-700">
                <li>En este portal podrás realizar tus pagos correspondientes al contrato que tienes con Kinku por la compra de tu vivienda.</li>
                <li>Pagarás con Wompi, la plataforma de pagos de Bancolombia. Podrás utilizar el método que prefieras.</li>
                <li>El comprobante llegará automáticamente a tu correo electrónico. Si no llega, contáctanos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentPortalMetriku


