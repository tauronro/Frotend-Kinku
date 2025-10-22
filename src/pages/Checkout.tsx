import { useLocation, useNavigate } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

export const Checkout = () => {
  const location = useLocation() as { state?: { project?: string; amount?: number } }
  const navigate = useNavigate()
  const project = location.state?.project || 'Proyecto'
  const amount = location.state?.amount || 0

  // Montos de ejemplo para construir el subtotal (puedes reemplazarlos por tu lógica real)
  const metrikusArrend = 200000
  const metrikusProp = 300000
  const subtotal = metrikusArrend + metrikusProp + amount

  return (
    <div>
      <PageBanner title="¡Bienvenido al sistema de pagos de Kinku!" subtitle="Finaliza tu proceso" size="sm" />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Imagen izquierda */}
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
              <img src="/img/nuevo-imagen.webp" alt="Checkout Kinku" className="w-full h-auto object-contain" />
            </div>

            {/* Contenido derecha */}
            <div>
              {/* Contenedor principal bordeado */}
              <div className="rounded-2xl border border-[rgb(0_168_144)]/50">
                {/* Formulario superior (estilo lista) */}
                <div className="divide-y">
                  {['Nombre y apellido', 'CC. Identidad', 'Correo', 'Dirección', 'Número de apartamento (si aplica)', 'Observaciones'].map((label) => (
                    <div key={label} className="px-4 py-3 bg-gray-50">
                      <input
                        type="text"
                        placeholder={label}
                        className="w-full bg-transparent outline-none text-sm"
                      />
                    </div>
                  ))}
                </div>

                {/* Sección Tu pago */}
                <div className="px-4 py-3 border-t text-sm text-gray-600">Tu pago</div>
                <div className="p-4">
                  <div className="grid grid-cols-2 text-sm font-semibold">
                    <div>Producto</div>
                    <div className="text-right">Subtotal</div>
                  </div>
                  <div className="mt-2 space-y-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div>Métriku - Arrendatarios × 1</div>
                      <div className="text-right">${metrikusArrend.toLocaleString()}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div>Métriku - Propietarios × 3</div>
                      <div className="text-right">${metrikusProp.toLocaleString()}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div>Paga tu Proyecto de Vivienda – {project} × 1</div>
                      <div className="text-right">${amount.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 text-sm">
                    <div className="font-semibold">Subtotal</div>
                    <div className="text-right">${subtotal.toLocaleString()}</div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 text-base font-bold">
                    <div>Total</div>
                    <div className="text-right">${subtotal.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {/* Wompi */}
              <div className="mt-6 rounded-2xl border border-[rgb(0_168_144)]/50 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/logo/wompi-logo.webp" alt="Wompi" className="h-6 w-auto" />
                  <span className="text-sm text-gray-600">Paga a través de Wompi.</span>
                </div>
                <p className="text-gray-600 mb-4">Selecciona el método y completa tu compra de manera segura.</p>
                <button className="inline-flex items-center px-5 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90">Realizar el pedido</button>
              </div>

              {/* Botones secundarios */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/pago-kioto', { state: { project, amount } })}
                  className="px-5 py-2 rounded-md font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  Actualizar el monto de pago
                </button>
                <button className="px-5 py-2 rounded-md font-semibold bg-[rgb(0_168_144)]/10 text-[rgb(0_168_144)] hover:bg-[rgb(0_168_144)]/20">Realizar Pago de Proyecto Pekín (Bancolombia)</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout


