import { PageBanner } from '../components/common/PageBanner'
import ProcolombiaSection from '../components/sostenibilidad/ProcolombiaSection'
import InformacionInteresSection from '../components/sostenibilidad/InformacionInteresSection'
import DocumentosInteresSection from '../components/sostenibilidad/DocumentosInteresSection'

export const Sostenibilidad = () => {
  return (
    <div>
      <PageBanner
        title="Sostenibilidad"
        subtitle="Comprometidos con el desarrollo responsable y la eficiencia en cada proyecto."
        size="sm"
      />

      

      <ProcolombiaSection />

      <InformacionInteresSection />
      <DocumentosInteresSection />
    </div>
  )
}

export default Sostenibilidad


