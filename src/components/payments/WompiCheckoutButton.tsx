import { useState } from 'react'

type Buyer = {
  fullName: string
  documentId: string
  email: string
  address: string
  apartmentNumber: string
  notes?: string
}

type Props = {
  orderId: string
  project: string
  amount: number
  customerType?: string
  buyer: Buyer
  className?: string
  children?: React.ReactNode
}

export function WompiCheckoutButton({ orderId, project, amount, customerType, buyer, className, children }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    if (loading) return
    setLoading(true)
    try {
      const apiBase = import.meta.env.VITE_API_BASE as string
      const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY as string
      const redirectUrl = import.meta.env.VITE_REDIRECT_URL as string
      const currency = (import.meta.env.VITE_WOMPI_CURRENCY as string) || 'COP'
      if (!apiBase || !publicKey) {
        throw new Error('Variables de entorno faltantes (VITE_API_BASE / VITE_WOMPI_PUBLIC_KEY)')
      }

      const reference = orderId
      const amountInCents = Math.round(Number(amount) * 100)
      if (!Number.isFinite(amountInCents) || amountInCents <= 0) {
        throw new Error('Monto inválido')
      }

      // 1) Crear orden en backend
      const createOrderRes = await fetch(`${apiBase}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reference,
          project,
          amountInCents,
          currency,
          customerEmail: buyer.email,
          customerType,
          buyerData: {
            fullName: buyer.fullName,
            documentId: buyer.documentId,
            email: buyer.email,
            address: buyer.address,
            apartmentNumber: buyer.apartmentNumber,
            notes: buyer.notes || ''
          }
        })
      })
      if (!createOrderRes.ok) throw new Error('No se pudo crear la orden')

      // 2) Solicitar firma de integridad
      const signatureRes = await fetch(`${apiBase}/api/wompi/signature`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, amountInCents, currency })
      })
      if (!signatureRes.ok) throw new Error('No se pudo obtener la firma de integridad')
      const { signature } = await signatureRes.json()
      if (!signature) throw new Error('Firma no recibida')

      // 3) Cargar script del Widget si no existe
      await new Promise<void>((resolve, reject) => {
        if ((window as any).WidgetCheckout) return resolve()
        const s = document.createElement('script')
        s.src = 'https://checkout.wompi.co/widget.js'
        s.async = true
        s.onload = () => resolve()
        s.onerror = () => reject(new Error('No se pudo cargar el widget de Wompi'))
        document.head.appendChild(s)
      })

      // 4) Abrir Widget
      const WidgetCheckout = (window as any).WidgetCheckout
      const checkout = new WidgetCheckout({
        currency,
        amountInCents,
        reference,
        publicKey,
        signature: { integrity: signature },
        redirectUrl,
        customerData: {
          email: buyer.email,
          fullName: buyer.fullName,
          legalId: buyer.documentId,
          legalIdType: 'CC'
        }
      })

      checkout.open(function (_result: any) {
        // El estado final se confirmará por webhook en el backend.
      })
    } catch (err) {
      console.error(err)
      alert('Hubo un problema iniciando el pago. Intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={className}
    >
      {loading ? 'Procesando…' : (children ?? 'Proceder con Wompi')}
    </button>
  )
}

