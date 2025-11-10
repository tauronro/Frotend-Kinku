import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageBanner } from '../components/common/PageBanner'

export const PaymentPortal = () => {
  const navigate = useNavigate()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const products = [
    {
      id: 'kioto',
      title: 'Proyecto Kioto',
      description: 'Da clic aquí y paga el proyecto Kioto',
    },
    {
      id: 'metriku',
      title: 'Métriku',
      description: 'Portal seguro para propietarios y arrendatarios',
    },
    {
      id: 'pekin',
      title: 'Pekín',
      description: 'Pagos relacionados con nuestro proyecto Pekín',
    },
  ] as const

  const faqs = [
    {
      q: '¿Con qué plataforma se realiza el pago de mi vivienda?',
      a: 'Trabajamos con una pasarela certificada PCI-DSS para garantizar la seguridad de tus datos y transacciones.'
    },
    {
      q: '¿Es seguro ingresar mis datos en este sitio web?',
      a: 'Sí. Tus datos viajan cifrados bajo HTTPS. No almacenamos información sensible de tarjetas en nuestros servidores.'
    },
    {
      q: '¿Puedo cambiar la forma de pago?',
      a: 'Puedes pagar con tarjeta débito/crédito, transferencia PSE o efectivo en puntos autorizados según disponibilidad.'
    },
    {
      q: '¿Debo pagar algún costo adicional por el uso de la plataforma?',
      a: 'Algunos métodos pueden incluir comisión de la pasarela. El costo se muestra antes de confirmar el pago.'
    },
    {
      q: '¿Dónde me llegará el comprobante?',
      a: 'El comprobante llegará a tu correo registrado. Si no lo recibes en 10 minutos, revisa tu SPAM o contáctanos.'
    }
  ]

  return (
    <div>
      <PageBanner
        title="Portal de Pagos"
        subtitle="Gestiona tus pagos de forma segura y sencilla."
        size="sm"
      />
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Fondo con patrón sutil */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,168,144,0.15) 0, rgba(0,168,144,0.15) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(0,168,144,0.12) 0, rgba(0,168,144,0.12) 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>
        <div className="container relative z-10">
          {/* Título principal */}
          <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[rgb(0_168_144)] mb-10">
            ¡Elige tu Producto a pagar!
            <span className="block mx-auto mt-3 h-1 w-24 bg-[rgb(0_168_144)] rounded-full"></span>
          </h2>

          {/* Tarjetas de selección */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProduct(p.id)
                  if (p.id === 'kioto') navigate('/pago-kioto')
                  if (p.id === 'metriku') window.location.href = 'http://localhost:5173/pago-metriku'
                  if (p.id === 'pekin') window.open('https://proyectopekin.co', '_blank', 'noopener,noreferrer')
                }}
                aria-pressed={selectedProduct===p.id}
                className={`group relative text-center rounded-xl border transition-all duration-300 p-8 bg-white hover:bg-[rgba(0,168,144,0.08)] hover:-translate-y-1 hover:shadow-2xl ${selectedProduct===p.id ? 'border-[rgb(0_168_144)] shadow-xl ring-1 ring-[rgb(0_168_144)]' : 'border-[rgb(0_168_144)]/40'}`}
              >
                {/* Línea superior acento */}
                <span className={`absolute top-0 left-0 right-0 h-1 bg-[rgb(0_168_144)] transition-opacity ${selectedProduct===p.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}></span>
                {selectedProduct===p.id && (
                  <span className="absolute top-3 right-3 text-[rgb(0_168_144)]">✔</span>
                )}
                <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-[rgb(0_168_144)] text-white grid place-items-center text-xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                  {p.id === 'metriku' ? 'métriku' : p.id === 'kioto' ? 'kioto' : 'pekín'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-gray-600 max-w-xs mx-auto">{p.description}</p>
              </button>
            ))}
          </div>

          {/* FAQ */}
          <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-24 h-24 bg-[rgb(0_168_144)]/85 text-white rounded-2xl grid place-items-center text-4xl font-extrabold shadow-lg">?</div>
              <h4 className="mt-4 text-2xl font-bold text-gray-900">Preguntas<br/>frecuentes</h4>
            </div>
            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div key={f.q} className="border-b border-[rgb(0_168_144)]/40 pb-3">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-gray-900 py-3"
                  >
                    <span className="font-medium">{f.q}</span>
                    <span className={`ml-3 text-[rgb(0_168_144)] text-xl transition-transform ${openFaq===idx ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq===idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 pl-6 pr-2 pb-2">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
