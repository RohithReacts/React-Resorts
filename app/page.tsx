import About from "@/components/pages/about";
import ArchitectsList from "@/components/pages/architectslist";
import CaseStudies from "@/components/pages/casestudies";
import HeroImage from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import { ProjectCategoriesSection } from "@/components/pages/projects1";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <About />
      <Projects />
      <ArchitectsList />
      <ProjectCategoriesSection />
      <CaseStudies />
    </main>
  );
}
