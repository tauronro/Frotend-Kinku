import { useEffect } from 'react'
import { PageBanner } from '../components/common/PageBanner'
import ProcolombiaSection from '../components/sostenibilidad/ProcolombiaSection'
import InformacionInteresSection from '../components/sostenibilidad/InformacionInteresSection'
import DocumentosInteresSection from '../components/sostenibilidad/DocumentosInteresSection'

export const Sostenibilidad = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(`.reveal-sos`))
    if (elements.length === 0) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
        }
      })
    }, { threshold: 0.15 })
    elements.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <div>
      <PageBanner
        title="Sostenibilidad"
        subtitle="Comprometidos con el desarrollo responsable y la eficiencia en cada proyecto."
        size="sm"
      />

      

      <div className="reveal-sos opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <ProcolombiaSection />
      </div>

      <div className="reveal-sos opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <InformacionInteresSection />
      </div>
      <div className="reveal-sos opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <DocumentosInteresSection />
      </div>
    </div>
  )
}

export default Sostenibilidad


