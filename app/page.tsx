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

       <div
  className="
    absolute 
    bottom-10 left-55 
    sm:bottom-10 sm:left-6 sm:right-auto
    md:bottom-20 md:right-10 md:left-auto
    lg:bottom-24 lg:right-16
    xl:bottom-28 xl:right-20
    space-y-1
    text-white
  "
>
  <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
    Architecture can mean
  </p>

  <p className="text-sm sm:text-base md:text-lg max-w-xs md:max-w-sm">
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
