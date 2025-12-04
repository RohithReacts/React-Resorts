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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Left-bottom block */}
      <div className="absolute inset-0 flex items-end justify-start px-4 sm:px-6 md:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
        <div className="max-w-[95%] sm:max-w-[80%] md:max-w-[65%] space-y-3 sm:space-y-4">

          {/* Small description – MOVED UP */}
          <div className="text-white text-xs sm:text-sm md:text-base space-y-1 sm:space-y-2 mb-6 sm:mb-8 md:mb-25 md:ml-15">
            <p>According to Vitruvius, the architect should strive to fulfill</p>
            <p>each of these three attributes as well as possible.</p>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white drop-shadow-xl">
            Building
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-serif text-white drop-shadow-xl">
            Beyond
          </h2>
        </div>
      </div>

   {/* Right-side text block */}
<div
  className="
    absolute bottom-10 sm:bottom-14 md:bottom-20 
    right-5 sm:right-6 md:right-10 lg:right-16 xl:right-20
    text-white 
    w-[85%] sm:w-[75%] md:w-auto
    space-y-2
    text-right
  "
>
  <p className="text-lg sm:text-2xl md:text-3xl font-semibold">
    Architecture can mean
  </p>

  <p className="text-xs sm:text-sm md:text-lg max-w-xs md:max-w-sm leading-relaxed ml-auto">
    A general term to describe buildings and other physical structures.
  </p>
</div>


    </section>
  );
}
