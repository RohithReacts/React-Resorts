"use client";

import Image from "next/image";
import React from "react";

interface HeroImageProps {
  src: string;
  title?: string;
  subtitle?: string;
  height?: string;
  children?: React.ReactNode;
}

export default function HeroImage({
  src,
  title,
  subtitle,
  height = "h-screen",
  children,
}: HeroImageProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={src}
        alt={title || "Hero Image"}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Bottom-Left Content */}
      <div className="absolute inset-0 flex items-end justify-start px-4 md:px-10 pb-6 md:pb-10">
        <div className="max-w-[90%] md:max-w-[70%]">
          {/* Optional Child Content */}
          {children && (
            <div className="text-white mb-6 md:mb-40 text-sm md:text-base">
              {children}
            </div>
          )}

          {/* Title */}
          {title && (
            <h1 className="text-3xl ml-13 sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white drop-shadow-lg">
              {title}
            </h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <h2 className="text-xl sm:text-3xl ml-13 md:text-5xl lg:text-7xl font-serif text-white mt-2 drop-shadow-lg">
              {subtitle}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}
