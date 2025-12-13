"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  // ⬅️ Added Project Categories inside navItems
  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About Us" },
    { href: "#architects", label: "Architects" },
    { href: "#projectcategories", label: "Project Categories" },
    { href: "#recentcasestudies", label: "Recent Case Studies" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      let current = "";

      for (let item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = item.href;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-1000 backdrop-blur-2xl">
      <div className="max-w-6xl m-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-medium text-gray-400 dark:text-gray-100"
        >
          React Resorts
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-x-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      ${navigationMenuTriggerStyle()}
                      rounded-t-2xl px-4 py-2 transition
                      ${
                        activeSection === item.href
                          ? "bg-blue-200 dark:bg-accent font-semibold"
                          : "bg-gray-200 dark:bg-accent"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-4 pb-4"
          >
            <ul className="flex flex-col items-center mt-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex justify-center items-center px-4 py-2 rounded-br-lg w-48 text-center
                      ${
                        activeSection === item.href
                          ? "bg-blue-100 dark:bg-accent font-semibold"
                          : "bg-gray-200 dark:bg-accent text-gray-800 dark:text-gray-200"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
