import About from "@/components/pages/about";
import ArchitectsList from "@/components/pages/architectslist";
import HeroImage from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import { ProjectCategoriesSection } from "@/components/pages/projects1";

export default function Home() {
  return (
    <main>
      <HeroImage src="/images/main.jpg" title="Building" subtitle="Beyond">
        <p className="text-white text-lg ml-10 mt-4">
          According to Vitruvius, the architect should strive to fulfill
        </p>
        <p className="text-white text-lg ml-10">
          each of these three attributes as well as possible.
        </p>
      </HeroImage>
      <About />
      <Projects/>
      <ArchitectsList/>
      <ProjectCategoriesSection/>
    </main>
  );
}
