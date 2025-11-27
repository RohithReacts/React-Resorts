import { Laptop, Smartphone, Palette, Cog } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "UX & UI",
      description:
        "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Web & Mobile App",
      description:
        "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design & Creative",
      description:
        "Crafting visually stunning designs that connect with your audience.",
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Development",
      description:
        "Bringing your vision to life with the latest technology and design trends.",
    },
  ];

  return (
    <section id="about" className="w-full py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-xl  font-regular text-gray-800 dark:text-gray-100">
          The art and science of designing buildings and nonbuilding structures.
          The style of design and method of construction of buildings and other
          physical structures.
        </h2>
        <div className="relative inline-block mt-6">
          <span className="absolute -top-3 left-1/3 -translate-x-1/5 bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow text-sm font-medium text-gray-600 dark:text-gray-400">
            About Us
          </span>
          <div className="h-px w-40 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
