import { useEffect } from "react";
import { HeroLanding } from "../components/home/HeroLanding";
import { Financing } from "../components/home/Financing";
import { ProjectsGrid } from "../components/home/ProjectsGrid";
import { Metriku } from "../components/home/Metriku";
import { Testimonials } from "../components/home/Testimonials";
import { CommercialAllies } from "../components/home/CommercialAllies";
import AboutVisionSlider from "../components/about/AboutVisionSlider";

export const Home = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const anim = el.dataset.anim;
          el.classList.add("opacity-100");
          if (anim === "left" || anim === "right") el.classList.add("translate-x-0");
          if (anim === "up") el.classList.add("translate-y-0");
          if (anim === "scale") el.classList.add("scale-100");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <HeroLanding />
      <div className="reveal opacity-0 -translate-x-6 lg:-translate-x-8 transition-all duration-700 ease-out" data-anim="left">
        <AboutVisionSlider />
      </div>

      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out" data-anim="up">
        <ProjectsGrid />
      </div>

      <div className="reveal opacity-0 scale-95 transition-all duration-700 ease-out" data-anim="scale">
        <Metriku />
      </div>

      <div className="reveal opacity-0 translate-x-6 lg:translate-x-8 transition-all duration-700 ease-out" data-anim="right">
        <Financing />
      </div>

      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100" data-anim="up">
        <Testimonials />
      </div>

      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100" data-anim="up">
        <CommercialAllies />
      </div>

      {/* <FinalCta /> */}
    </>
  );
};
