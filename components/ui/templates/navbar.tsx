"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About Us" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
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
    <nav className=" fixed top-0 left-0 w-full z-1000 backdrop-blur-2xl">
      <div className="max-w-6xl m-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-medium text-gray-400  dark:text-gray-100"
        >
          React Resorts
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      ${navigationMenuTriggerStyle()}
                      rounded-t-2xl 
                      px-4 py-2 
                      transition
                      ${
                        activeSection === item.href
                          ? "bg-gray-200 dark:bg-accent font-semibold"
                          : "bg-gray-200 dark:bg-accent font-semibold"
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

        {/* RIGHT BUTTON */}
        <div className="hidden md:flex">
          <Link
            href="/get-started"
            className="px-4 py-2 rounded-b-3xl text-white bg-accent dark"
          >
            Get Started
          </Link>
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
            className="md:hidden px-4 pb-4 border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col items-center mt-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block px-4 py-2 rounded-lg
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

              <li>
                <Link
                  href="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg bg-gray-300 dark:bg-accent text-black dark:text-white"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
