import About from "@/components/pages/about";
import ArchitectsList from "@/components/pages/architectslist";
import CaseStudies from "@/components/pages/casestudies";
import HeroImage from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import { ProjectCategoriesSection } from "@/components/pages/projects1";

export default function Home() {
  return (
    <main>
      <HeroImage src="/images/main.jpg" title="Building" subtitle="Beyond">
        <div className="absolute top-35 left-10 space-y-1">
          <p className="text-white text-lg">
            According to Vitruvius, the architect should strive to fulfill
          </p>
          <p className="text-white text-lg">
            each of these three attributes as well as possible.
          </p>
        </div>

        <div className="absolute bottom-30 right-22 space-y-1">
          <p className="text-white text-2xl">Architecture can mean</p>
          <p className="text-white text-md">
            A general term to describe buildings and other physical structures.
          </p>
        </div>
      </HeroImage>

      <About />
      <Projects />
      <ArchitectsList />
      <ProjectCategoriesSection />
      <CaseStudies />
    </main>
  );
}
