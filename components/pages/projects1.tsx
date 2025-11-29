"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCategoriesProps {
  imageSrc?: string;
}

export function ProjectCategoriesSection({
  imageSrc = "/images/projects.webp", // change to your image path
}: ProjectCategoriesProps) {
  return (
    <section
      id="projectcategories"
      className="relative w-full  text-foreground"
    >
      <div
        className="pointer-events-none absolute  inset-x-0 top-0 h-6 md:h-8 bg-background
        mask-[radial-gradient(120%_120%_at_50%_120%,transparent_40%,black_60%)]"
      />

      <div
        className="pointer-events-none absolute  inset-x-0 bottom-0 h-6 md:h-8 bg-background
        mask-[radial-gradient(120%_120%_at_50%_-20%,transparent_40%,black_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-0 md:px-4 lg:px-6">
        <div className="relative h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden rounded-none md:rounded-3xl">
          <Image
            src={imageSrc}
            alt="Modern house project"
            fill
            priority
            className="object-cover"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-r from-background/0 via-background/20 to-background/10 dark:from-background/95 dark:via-background/75 dark:to-background/20" />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16">
            {/* Left title */}
            <div className="max-w-xs sm:max-w-sm mt-20">
              <p className="text-2xl font-semibold uppercase tracking-[0.25em] text-black dark:text-white">
                Project
              </p>
              <p className="mt-2 text-3xl text-black dark:text-white sm:text-4xl md:text-5xl font-semibold italic">
                Categories
              </p>
            </div>

            {/* Middle list + Right button */}
            <div className="mt-8 flex flex-col gap-2 md:mt-0 md:flex-row md:items-end md:justify-between">
              {/* Categories list */}
              <ul className="space-y-2 ml-25 text-sm font-semibold text-black dark:text-white sm:text-base md:text-xl">
                {[
                  "Interior design",
                  "Commercial architect",
                  "Landscape architect",
                  "Civic project",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative w-full sm:h-32">
                <div
                  className="
      flex justify-start md:justify-end
      sm:absolute sm:bottom-6 sm:right-12
      sm:mb-0 md:mb-0 
    "
                >
                  <Button
                    asChild
                    variant="outline"
                    className="group rounded-full border-white/70 bg-background/70 px-7 py-5 text-sm sm:text-base font-medium shadow-sm backdrop-blur
                 hover:bg-background/90 hover:border-white dark:border-white/40"
                  >
                    <a href="#contact">
                      <span className="mr-2">Contact us</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
