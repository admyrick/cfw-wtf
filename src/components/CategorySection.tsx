import React from 'react';
import { Gamepad2, Monitor, FileCode, BrainCircuit, ArrowRight } from 'lucide-react';
import CategoryCard from './CategoryCard';

const CategorySection: React.FC = () => {
  const categories = [
    {
      title: "Emulators",
      icon: <Gamepad2 size={36} className="text-green-400" />,
      description: "Find emulators for Windows, Linux, macOS, Android, and iOS. Detailed guides and download links.",
      color: "green",
      link: "/emulators"
    },
    {
      title: "Consoles",
      icon: <Monitor size={36} className="text-red-400" />,
      description: "Explore detailed information about classic and modern gaming consoles.",
      color: "red",
      link: "/consoles"
    },
    {
      title: "Custom Firmware",
      icon: <FileCode size={36} className="text-purple-400" />,
      description: "Enhance your retro handhelds with custom firmware like Lakka, RetroPie, and ArkOS.",
      color: "purple",
      link: "/firmware"
    },
    {
      title: "Gaming Tools",
      icon: <BrainCircuit size={36} className="text-blue-400" />,
      description: "Discover utilities for ROM management, save editing, controller mapping, and graphics enhancement.",
      color: "blue",
      link: "/tools"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-mono font-bold mb-16 text-purple-400">
          Explore Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              icon={category.icon}
              description={category.description}
              color={category.color}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;