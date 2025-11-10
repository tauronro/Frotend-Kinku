import { PageBanner } from '../components/common/PageBanner'
// import { AboutIntro } from '../components/about/AboutIntro'
import { AboutExpertise } from '../components/about/AboutExpertise'
import TeamMinds from '../components/about/TeamMinds'
// import { AboutValues } from '../components/about/AboutValues'


export const About = () => {
  return (
    <div>
      <PageBanner 
        title="Sobre Kinku"
        subtitle="Construimos hogares con calidad, diseño y respaldo. Conoce nuestra historia y lo que nos mueve."
        size="sm"
      />
      
      
      
      
      <AboutExpertise />
      <TeamMinds />
      {/* <AboutValues /> */}
      {/* <AboutIntro /> */}
    </div>
  )
}
