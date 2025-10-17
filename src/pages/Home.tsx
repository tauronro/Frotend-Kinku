import { HeroLanding } from "../components/home/HeroLanding";
import { Financing } from "../components/home/Financing";
import { ProjectsGrid } from "../components/home/ProjectsGrid";
import { Metriku } from "../components/home/Metriku";
import { Testimonials } from "../components/home/Testimonials";
import AboutVisionSlider from "../components/about/AboutVisionSlider";

export const Home = () => {

  return (
    <>
      <HeroLanding />
      <AboutVisionSlider />
      

      <ProjectsGrid />

      <Metriku />

      <Financing />

      <Testimonials />

      {/* <FinalCta /> */}
    </>
  );
};
