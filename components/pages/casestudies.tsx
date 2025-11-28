"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Fulham Town Hall extension",
    description:
      "Improvement on the floor plan and layout of a loft apartment in Paris to maximise the use of space and additional.",
    image: "/images/case.avif",
  },
  {
    title: "The White Apartment",
    description:
      "Redefining Urban Elegance: Bridging Heritage and Modern Living in an Iconic Residential Landmark.",
    image: "/images/case1.png",
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      {/* Section Title */}
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-8 text-black dark:text-white">
        <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
        Recent case studies
      </h2>

      <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-800">
        {CASE_STUDIES.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center"
          >
            {/* Left Side Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                {item.description}
              </p>

              <Button
                variant="outline"
                className="rounded-full px-6 py-5 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                View more →
              </Button>
            </div>

            {/* Right Side Image — FIXED IMAGE SIZE */}
            <div className="w-full rounded-xl overflow-hidden shadow-sm">
              <div className="relative w-full aspect-video rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
