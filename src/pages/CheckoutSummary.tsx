import { useLocation, useNavigate } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

type Buyer = {
  fullName: string
  documentId: string
  email: string
  address: string
  apartmentNumber: string
  notes?: string
}

export const CheckoutSummary = () => {
  const navigate = useNavigate()
  const location = useLocation() as {
    state?: {
      orderId: string
      date: string
      project: string
      amount: number
      subtotal: number
      total: number
      customerType?: string
      buyer: Buyer
      paymentMethod: string
    }
  }

  const data = location.state

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-xl border p-6 text-center">
          <p className="text-gray-700 mb-4">No hay información de pedido para mostrar.</p>
          <button onClick={() => navigate('/portal-pagos')} className="px-5 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90">
            Ir al portal de pagos
          </button>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(data.date).toLocaleString()

  return (
    <div>
      <PageBanner title="Resumen de tu pago" subtitle="Verifica la información antes de proceder" size="sm" />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Información de pedido */}
            <div className="rounded-2xl border border-[rgb(0_168_144)]/50 p-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Detalles del pedido</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between"><span>Número de pedido:</span><span className="font-semibold">{data.orderId}</span></div>
                <div className="flex justify-between"><span>Fecha:</span><span className="font-semibold">{formattedDate}</span></div>
                {data.customerType && (
                  <div className="flex justify-between"><span>Perfil:</span><span className="font-semibold">{data.customerType}</span></div>
                )}
                <div className="flex justify-between"><span>Proyecto:</span><span className="font-semibold">{data.project}</span></div>
                <div className="flex justify-between"><span>Método de pago:</span><span className="font-semibold">{data.paymentMethod}</span></div>
              </div>

              <div className="mt-6 border-t pt-4">
                <div className="grid grid-cols-2 text-sm font-semibold">
                  <div>Producto</div>
                  <div className="text-right">Subtotal</div>
                </div>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div>Paga tu Proyecto de Vivienda – {data.project} × 1</div>
                    <div className="text-right">${data.amount.toLocaleString()}</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 text-sm">
                  <div className="font-semibold">Subtotal</div>
                  <div className="text-right">${data.subtotal.toLocaleString()}</div>
                </div>
                <div className="mt-2 grid grid-cols-2 text-base font-bold">
                  <div>Total</div>
                  <div className="text-right">${data.total.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Datos del comprador */}
            <div className="rounded-2xl border border-[rgb(0_168_144)]/50 p-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Datos del comprador</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div><span className="font-semibold">Nombre y apellido:</span> {data.buyer.fullName}</div>
                <div><span className="font-semibold">CC. Identidad:</span> {data.buyer.documentId}</div>
                <div><span className="font-semibold">Correo:</span> {data.buyer.email}</div>
                <div><span className="font-semibold">Dirección:</span> {data.buyer.address}</div>
                <div><span className="font-semibold">Número de apartamento:</span> {data.buyer.apartmentNumber}</div>
                {data.buyer.notes && <div><span className="font-semibold">Observaciones:</span> {data.buyer.notes}</div>}
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={() => navigate(-1)} className="px-5 py-2 rounded-md font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800">
                  Volver
                </button>
                <button className="px-5 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90">
                  Proceder con Wompi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CheckoutSummary


