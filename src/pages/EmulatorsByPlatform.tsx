import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Download, Info, Star, Calendar, Users } from 'lucide-react';

interface Emulator {
  name: string;
  description: string;
  version: string;
  rating: number;
  downloads: string;
  lastUpdated: string;
  supported: string[];
  features: string[];
  platforms: string[];
  downloadUrl: string;
  infoUrl: string;
}

const EmulatorsByPlatform: React.FC = () => {
  const { platform } = useParams<{ platform: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const platformData: Record<string, { title: string; description: string; emulators: Emulator[] }> = {
    windows: {
      title: "Windows Emulators",
      description: "The best emulators for Windows PC gaming",
      emulators: [
        {
          name: "RPCS3",
          description: "PlayStation 3 emulator with excellent compatibility and performance",
          version: "0.0.30-16005",
          rating: 4.8,
          downloads: "2.1M",
          lastUpdated: "2025-01-15",
          supported: ["PlayStation 3"],
          features: ["4K Resolution", "Save States", "Shader Support", "Netplay"],
          platforms: ["Windows", "Linux"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "Yuzu",
          description: "Nintendo Switch emulator with active development",
          version: "EA-4179",
          rating: 4.6,
          downloads: "1.8M",
          lastUpdated: "2025-01-14",
          supported: ["Nintendo Switch"],
          features: ["Vulkan Support", "Mod Support", "60 FPS Patches", "HD Textures"],
          platforms: ["Windows", "Linux"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "Dolphin",
          description: "GameCube and Wii emulator with perfect compatibility",
          version: "5.0-20000",
          rating: 4.9,
          downloads: "3.2M",
          lastUpdated: "2025-01-12",
          supported: ["GameCube", "Wii"],
          features: ["HD Graphics", "Widescreen", "Anti-Aliasing", "Netplay"],
          platforms: ["Windows", "macOS", "Linux", "Android"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "PCSX2",
          description: "PlayStation 2 emulator with wide game compatibility",
          version: "1.7.5",
          rating: 4.7,
          downloads: "2.8M",
          lastUpdated: "2025-01-10",
          supported: ["PlayStation 2"],
          features: ["Widescreen Patches", "Cheats", "Save States", "Custom Resolutions"],
          platforms: ["Windows", "Linux"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "Cemu",
          description: "Wii U emulator with impressive performance gains",
          version: "2.0-88",
          rating: 4.5,
          downloads: "1.5M",
          lastUpdated: "2025-01-08",
          supported: ["Wii U"],
          features: ["Vulkan API", "Async Shader Compilation", "Graphics Packs", "Motion Controls"],
          platforms: ["Windows", "Linux"],
          downloadUrl: "#",
          infoUrl: "#"
        }
      ]
    },
    linux: {
      title: "Linux Emulators",
      description: "Native Linux emulators and compatibility solutions",
      emulators: [
        {
          name: "RetroArch",
          description: "Multi-system emulator frontend with extensive core support",
          version: "1.15.0",
          rating: 4.8,
          downloads: "5.2M",
          lastUpdated: "2025-01-15",
          supported: ["Multiple Systems"],
          features: ["Unified Interface", "Shaders", "Netplay", "Achievements"],
          platforms: ["Linux", "Windows", "macOS", "Android", "iOS"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "MAME",
          description: "Arcade machine emulator with thousands of supported games",
          version: "0.260",
          rating: 4.6,
          downloads: "1.2M",
          lastUpdated: "2025-01-13",
          supported: ["Arcade"],
          features: ["Cycle Accurate", "Debug Tools", "Artwork Support", "High Score Saving"],
          platforms: ["Linux", "Windows", "macOS"],
          downloadUrl: "#",
          infoUrl: "#"
        }
      ]
    },
    macos: {
      title: "macOS Emulators",
      description: "Emulators optimized for Apple Silicon and Intel Macs",
      emulators: [
        {
          name: "OpenEmu",
          description: "Beautiful multi-system emulator designed for macOS",
          version: "2.3.3",
          rating: 4.9,
          downloads: "800K",
          lastUpdated: "2025-01-11",
          supported: ["NES", "SNES", "Genesis", "PlayStation", "N64"],
          features: ["Native macOS UI", "Library Management", "Save States", "Shader Support"],
          platforms: ["macOS"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "Dolphin",
          description: "GameCube and Wii emulator with Apple Silicon support",
          version: "5.0-20000",
          rating: 4.8,
          downloads: "600K",
          lastUpdated: "2025-01-12",
          supported: ["GameCube", "Wii"],
          features: ["Metal Rendering", "M1/M2 Optimization", "Widescreen", "Netplay"],
          platforms: ["macOS", "Windows", "Linux"],
          downloadUrl: "#",
          infoUrl: "#"
        }
      ]
    },
    android: {
      title: "Android Emulators",
      description: "Mobile emulation for gaming on the go",
      emulators: [
        {
          name: "AetherSX2",
          description: "PlayStation 2 emulator for Android devices",
          version: "Alpha-3668",
          rating: 4.7,
          downloads: "2.5M",
          lastUpdated: "2025-01-09",
          supported: ["PlayStation 2"],
          features: ["Vulkan Support", "Touch Controls", "Save States", "Cheats"],
          platforms: ["Android"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "Dolphin",
          description: "GameCube and Wii emulator for Android",
          version: "5.0-19870",
          rating: 4.5,
          downloads: "1.8M",
          lastUpdated: "2025-01-07",
          supported: ["GameCube", "Wii"],
          features: ["OpenGL ES", "Touch Controls", "Bluetooth Controllers", "Save States"],
          platforms: ["Android", "Windows", "macOS", "Linux"],
          downloadUrl: "#",
          infoUrl: "#"
        }
      ]
    },
    ios: {
      title: "iOS Emulators",
      description: "Emulators for iPhone and iPad",
      emulators: [
        {
          name: "Delta",
          description: "Multi-system emulator for iOS with beautiful interface",
          version: "1.5",
          rating: 4.8,
          downloads: "1.2M",
          lastUpdated: "2025-01-10",
          supported: ["NES", "SNES", "N64", "GBA", "DS"],
          features: ["Controller Support", "Save States", "Fast Forward", "Cheats"],
          platforms: ["iOS"],
          downloadUrl: "#",
          infoUrl: "#"
        },
        {
          name: "Provenance",
          description: "Multi-emulator for iOS with extensive system support",
          version: "2.1.0",
          rating: 4.6,
          downloads: "900K",
          lastUpdated: "2025-01-08",
          supported: ["Multiple Systems"],
          features: ["MFi Controllers", "AirPlay", "Save States", "ROM Library"],
          platforms: ["iOS"],
          downloadUrl: "#",
          infoUrl: "#"
        }
      ]
    }
  };

  const currentPlatform = platform || 'windows';
  const data = platformData[currentPlatform];

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-mono font-bold text-red-400 mb-4">Platform Not Found</h1>
          <p className="text-gray-300 mb-8">The requested platform doesn't exist.</p>
          <Link to="/emulators" className="bg-green-500/20 text-green-400 px-6 py-3 rounded-md hover:bg-green-500/30 transition-colors">
            Back to All Emulators
          </Link>
        </div>
      </div>
    );
  }

  const filteredEmulators = data.emulators.filter(emulator =>
    emulator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emulator.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emulator.supported.some(system => system.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link to="/emulators" className="hover:text-white">Emulators</Link>
            <span className="mx-2">/</span>
            <span className="text-green-400">{data.title}</span>
          </nav>
          
          <h1 className="text-4xl font-mono font-bold mb-4 text-green-400">
            {data.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {data.description}
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search emulators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid gap-6">
          {filteredEmulators.map((emulator, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="text-2xl font-mono font-bold text-green-400">{emulator.name}</h2>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-yellow-400 font-medium">{emulator.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{emulator.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-purple-400" />
                      <span className="text-gray-400">Version:</span>
                      <span className="text-white">{emulator.version}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-blue-400" />
                      <span className="text-gray-400">Downloads:</span>
                      <span className="text-white">{emulator.downloads}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-red-400" />
                      <span className="text-gray-400">Updated:</span>
                      <span className="text-white">{emulator.lastUpdated}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Supported Systems:</h4>
                    <div className="flex flex-wrap gap-2">
                      {emulator.supported.map((system, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {emulator.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:w-48">
                  <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors font-medium">
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-md transition-colors">
                    <Info size={18} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEmulators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No emulators found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmulatorsByPlatform;