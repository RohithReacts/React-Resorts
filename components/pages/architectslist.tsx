"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Architect {
  id: number;
  name: string;
  img?: string;
  description: string;
  location?: string;
  profileLink?: string;
}

const ARCHITECTS: Architect[] = [
  {
    id: 1,
    name: "Max Abramovitz",
        img: "/images/logo2.jpg",
    description: "Hathor, relief on capitals at Philae island, southern Egypt.",
    profileLink: "#",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    img: "/images/logo1.jpg",
    location: "Brighton, Brighton and Hove, United Kingdom",
    description: "",
    profileLink: "#",
  },
  {
    id: 3,
    name: "Pietro Belluschi",
        img: "/images/logo3.jpg",
    description: "Cushion capital and early English Gothic foliated capital.",
    profileLink: "#",
  },
];

export default function ArchitectsList() {
  return (
    <section id="blog" className="w-full py-16 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* LEFT TITLE */}
        <div className="md:col-span-1 flex items-start">
          <p className="text-lg font-semibold flex items-center gap-2 dark:text-white">
            <span className="w-3 h-3 bg-black dark:bg-white rounded-full"></span>
            Our Architects
          </p>
        </div>

        {/* RIGHT LIST SECTION */}
        <div className="md:col-span-3 space-y-10">
          {ARCHITECTS.map((architect, index) => (
            <div
              key={architect.id}
              className="border-t border-gray-300 dark:border-neutral-700 pt-6 pb-4 grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {/* Image If exists */}
              {architect.img ? (
                <div className="md:col-span-3">
                  <Image
                    src={architect.img}
                    alt={architect.name}
                    width={160}
                    height={160}
                    className="rounded-md object-cover"
                  />
                </div>
              ) : (
                <div className="md:col-span-3"></div>
              )}

              {/* Info Section */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold dark:text-white">
                  {architect.name}
                </h3>

                {architect.location && (
                  <p className="text-gray-700 dark:text-gray-400 mt-2 flex gap-2">
                    <span className="text-lg leading-5">•</span>
                    {architect.location}
                  </p>
                )}

                {architect.description && (
                  <p className="text-gray-700 dark:text-gray-400 mt-2 flex gap-2">
                    <span className="text-lg leading-5">•</span>
                    {architect.description}
                  </p>
                )}
              </div>

              {/* View Profile */}
              <div className="md:col-span-3 flex items-center justify-end">
                <Button
                  variant="link"
                  className="text-black dark:text-white hover:text-black dark:hover:text-white px-0"
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
