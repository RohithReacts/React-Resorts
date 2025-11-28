import Image from "next/image";
import { PROJECTS } from "@/components/data/constants";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from "@/components/motion-primitives/morphing-dialog";
import { XIcon } from "lucide-react";

interface ProjectImageProps {
  src: string;
}

function ProjectImage({ src }: ProjectImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.1,
      }}
    >
      <MorphingDialogTrigger>
        <Image
          src={src}
          alt="Project Thumbnail"
          width={800}
          height={400}
          className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
        />
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <Image
            src={src}
            alt="Project Preview"
            width={800}
            height={400}
            className="w-full rounded-xl object-cover"
          />
        </MorphingDialogContent>

        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.1, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

interface Project {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-12 py-10">
      {/* Top Row Title + Paragraph */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-10">
        <h3 className="text-xl md:text-2xl font-medium">
          Recent Projects
        </h3>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl font-medium text-sm md:text-base lg:text-right">
          After completing your year 12 education and earning the necessary
          scores, you may apply for a bachelor&apos;s degree in architecture.
          To qualify, students can complete one of three entrance exams.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectImage src={project.image} />
            </div>

            <div className="px-1">
              <h1 className="group relative inline-block font-medium text-zinc-900 dark:text-zinc-50">
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-px w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
              </h1>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
