import React, { useState } from 'react';
import { Search, BrainCircuit, Download } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  version: string;
  category: string;
  platforms: string[];
}

const GamingTools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools: Tool[] = [
    {
      name: "RetroArch",
      description: "Frontend for emulators, game engines and media players. Supports shaders, netplay, rewinding, and more.",
      version: "1.15.0",
      category: "Frontend",
      platforms: ["windows", "linux", "mac", "android", "ios"]
    },
    {
      name: "LaunchBox",
      description: "Game launcher and frontend with automatic metadata downloading, beautiful themes, and BigBox mode.",
      version: "14.7",
      category: "Frontend",
      platforms: ["windows"]
    },
    {
      name: "RetroAchievements",
      description: "Adds achievements system to classic games. Track your progress and compete with others.",
      version: "2.0",
      category: "Enhancement",
      platforms: ["windows", "linux", "android"]
    },
    {
      name: "SaveState Manager",
      description: "Advanced save state management tool with cloud backup and synchronization features.",
      version: "3.2",
      category: "Utility",
      platforms: ["windows", "mac"]
    },
    {
      name: "ROM Manager",
      description: "Organize your ROM collection with automatic scanning, metadata scraping, and duplicate detection.",
      version: "2.5",
      category: "Utility",
      platforms: ["windows", "linux"]
    },
    {
      name: "xBRZ Upscaler",
      description: "High-quality image upscaling tool specifically designed for pixel art and retro games.",
      version: "1.8",
      category: "Graphics",
      platforms: ["windows", "linux"]
    }
  ];

  const categories = Array.from(new Set(tools.map(tool => tool.category)));

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono font-bold text-center mb-4 text-blue-400">
          Gaming Tools
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Discover utilities for ROM management, save editing, controller mapping, and graphics enhancement.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <select 
            className="bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-blue-400">{tool.name}</h2>
                <BrainCircuit className="text-blue-400" size={24} />
              </div>
              <div className="text-sm text-gray-400 mb-2">
                Version: {tool.version} | {tool.category}
              </div>
              <p className="text-gray-300 mb-4 line-clamp-2">{tool.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  {tool.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="inline-block w-6 h-6 bg-gray-700 rounded-full"
                      title={platform}
                    />
                  ))}
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-500/20 text-blue-400 py-2 rounded-md hover:bg-blue-500/30 transition-colors">
                <Download size={18} />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingTools;