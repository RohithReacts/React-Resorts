"use client";

import Image from "next/image";
export default function HeroImage() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/main.jpg"
        alt="Hero Image"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-end justify-start px-4 md:px-10 pb-6 md:pb-10">
        <div className="max-w-[90%] md:max-w-[70%]">
          
          <div className="text-white mb-6 md:mb-40 text-sm md:text-base space-y-1">
            <p>According to Vitruvius, the architect should strive to fulfill</p>
            <p>each of these three attributes as well as possible.</p>
          </div>

          <h1 className="text-3xl ml-13 sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white drop-shadow-lg">
            Building
          </h1>

          <h2 className="text-xl sm:text-3xl ml-13 md:text-5xl lg:text-7xl font-serif text-white mt-2 drop-shadow-lg">
            Beyond
          </h2>
        </div>
      </div>
      <div className="absolute bottom-18 right-18 text-white space-y-2">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Architecture can mean
        </p>

        <p className="text-sm sm:text-base md:text-lg max-w-xs md:max-w-sm">
          A general term to describe buildings and other physical structures.
        </p>
      </div>
    </section>
  );
}
