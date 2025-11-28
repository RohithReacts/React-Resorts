"use client";

import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, JSX } from "react";
import Link from "next/link";

// ---------------------------
// Types
// ---------------------------
interface ThemeOption {
  label: string;
  id: string;
  icon: JSX.Element;
}

const THEMES_OPTIONS: ThemeOption[] = [
  {
    label: "Light",
    id: "light",
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: "Dark",
    id: "dark",
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: "System",
    id: "system",
    icon: <MonitorIcon className="h-4 w-4" />,
  },
];

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id: string|null) =>{
        if (id) setTheme(id)
      } }
    >
      {THEMES_OPTIONS.map((item) => (
        <button
          key={item.id}
          className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          type="button"
          aria-label={`Switch to ${item.label} theme`}
          data-id={item.id}
        >
          {item.icon}
        </button>
      ))}
    </AnimatedBackground>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t max-w-7xl mx-auto border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between ml-25">
        <Link href="/" target="_blank" rel="noreferrer">
          <TextLoop className="text-xs text-zinc-500">
            <span>Building Beyound</span>
            <span>Built with Next.js and Motion-Primitives.</span>
            <span>© 2025 Rohithreacts.</span>
          </TextLoop>
        </Link>

        <div className="text-xs text-zinc-400 mr-8">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
