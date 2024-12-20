import { useVisibleContext } from "../hooks/visibleContext";
import { lazy } from "react";

const AboutSection = lazy(() => import("../Components/AboutSection"));
const ProjectSection = lazy(() => import("../Components/ProjectSection"));
const Footer = lazy(() => import("../Components/Footer"));
const Header = lazy(() => import("../Components/Header"));
const AnimatedBody = lazy(() => import("../Components/AnimatedBody"));
const Cards = lazy(() => import("../Components/Cards"));
const ExperienceSection = lazy(() => import("../Components/ExperienceSection"));

function MainSection() {
  const visibleContext = useVisibleContext();

  return visibleContext?.visible ? (
    <div className="relative min-h-fit w-full">
      <AnimatedBody />
      <Header />
      <main className="h-fit w-full">
        <section id="carousel-cards" className="h-screen">
          <Cards />
        </section>
        <section id="about-section" className="h-fit">
          <AboutSection />
        </section>
        <section id="experience-section" className="h-fit">
          <ExperienceSection />
        </section>
        <section id="project-section" className="h-fit">
          <ProjectSection />
        </section>
      </main>
      <Footer />
    </div>
  ) : (
    ""
  );
}

export default MainSection;
