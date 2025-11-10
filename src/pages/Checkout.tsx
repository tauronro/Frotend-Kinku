import { useLocation, useNavigate } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'
import { useMemo, useState } from 'react'

export const Checkout = () => {
  const location = useLocation() as { state?: { project?: string; amount?: number; customerType?: string } }
  const navigate = useNavigate()
  const project = location.state?.project || 'Proyecto'
  const amount = location.state?.amount || 0
  const customerType = location.state?.customerType

  // Resumen basado únicamente en el monto ingresado por el usuario
  const subtotal = amount

  // Form fields (controlled)
  const [fullName, setFullName] = useState('')
  const [documentId, setDocumentId] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [apartmentNumber, setApartmentNumber] = useState('')
  const [notes, setNotes] = useState('')
  const [touched, setTouched] = useState({
    fullName: false,
    documentId: false,
    email: false,
    address: false,
    apartmentNumber: false,
  })
  const [showErrors, setShowErrors] = useState(false)

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, [])

  const errors = useMemo(() => {
    return {
      fullName: fullName.trim().length > 2 ? null : 'Ingresa tu nombre y apellido.',
      documentId: documentId.trim().length > 3 ? null : 'Ingresa tu número de identificación.',
      email: emailRegex.test(email.trim()) ? null : 'Ingresa un correo válido.',
      address: address.trim().length > 3 ? null : 'Ingresa tu dirección.',
      apartmentNumber: apartmentNumber.trim().length > 0 ? null : 'Ingresa el número de apartamento.',
      amount: amount > 0 ? null : 'El monto debe ser mayor a 0.',
    }
  }, [fullName, documentId, email, address, apartmentNumber, amount, emailRegex])

  const isValid = useMemo(() => Object.values(errors).every((v) => v === null), [errors])

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
                  <div className={`px-4 py-3 bg-gray-50`}>
                    <input
                      type="text"
                      placeholder="Nombre y apellido (obligatorio)"
                      className="w-full bg-transparent outline-none text-sm"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                    />
                    {(touched.fullName || showErrors) && errors.fullName && (
                      <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-gray-50">
                    <input
                      type="text"
                      placeholder="CC. Identidad (obligatorio)"
                      className="w-full bg-transparent outline-none text-sm"
                      value={documentId}
                      onChange={(e) => setDocumentId(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, documentId: true }))}
                      aria-required="true"
                      aria-invalid={!!errors.documentId}
                    />
                    {(touched.documentId || showErrors) && errors.documentId && (
                      <p className="mt-1 text-xs text-red-600">{errors.documentId}</p>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-gray-50">
                    <input
                      type="email"
                      placeholder="Correo (obligatorio)"
                      className="w-full bg-transparent outline-none text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {(touched.email || showErrors) && errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-gray-50">
                    <input
                      type="text"
                      placeholder="Dirección (obligatorio)"
                      className="w-full bg-transparent outline-none text-sm"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, address: true }))}
                      aria-required="true"
                      aria-invalid={!!errors.address}
                    />
                    {(touched.address || showErrors) && errors.address && (
                      <p className="mt-1 text-xs text-red-600">{errors.address}</p>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-gray-50">
                    <input
                      type="text"
                      placeholder="Número de apartamento (obligatorio)"
                      className="w-full bg-transparent outline-none text-sm"
                      value={apartmentNumber}
                      onChange={(e) => setApartmentNumber(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, apartmentNumber: true }))}
                      aria-required="true"
                      aria-invalid={!!errors.apartmentNumber}
                    />
                    {(touched.apartmentNumber || showErrors) && errors.apartmentNumber && (
                      <p className="mt-1 text-xs text-red-600">{errors.apartmentNumber}</p>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-gray-50">
                    <input
                      type="text"
                      placeholder="Observaciones (opcional)"
                      className="w-full bg-transparent outline-none text-sm"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
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
                <p className="text-gray-600 mb-4">Completa los datos y revisa el resumen antes de pagar de forma segura con Wompi.</p>
                {!isValid && showErrors && (
                  <div className="mb-3 rounded-md border border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2">
                    Revisa los campos resaltados. {errors.amount && 'También debes ingresar un monto válido en el paso anterior.'}
                  </div>
                )}
                <button
                  disabled={!isValid}
                  onClick={() => {
                    if (!isValid) {
                      setShowErrors(true)
                      return
                    }
                    const now = new Date()
                    const orderId = `KINKU-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${now.getTime()}`
                    navigate('/checkout-resumen', {
                      state: {
                        orderId,
                        date: now.toISOString(),
                        project,
                        amount,
                        subtotal,
                        total: subtotal,
                        customerType,
                        buyer: {
                          fullName,
                          documentId,
                          email,
                          address,
                          apartmentNumber,
                          notes,
                        },
                        paymentMethod: 'Wompi',
                      }
                    })
                  }}
                  className="inline-flex items-center px-5 py-2 rounded-md font-semibold bg-[rgb(0_168_144)] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Realizar el pago
                </button>
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


