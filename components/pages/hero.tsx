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
    <section
      className={`relative w-full  ${height} overflow-hidden`}
    >
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
      <div className="absolute inset-0 flex items-end justify-start px-10 pb-10 text-left">
        <div>
          {children && <div className="text-white mb-40">{children}</div>}

          {title && (
            <h1 className="text-5xl md:text-8xl font-semibold ml-23 text-white drop-shadow-lg">
              {title}
            </h1>
          )}

          {subtitle && (
            <h1 className="text-5xl md:text-7xl font-serif mb-7 ml-23 text-white drop-shadow-lg">
              {subtitle}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}
