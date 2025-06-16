import React, { useState } from 'react';
import { Search, Download, Info } from 'lucide-react';

interface DownloadItem {
  name: string;
  displayName: string;
  version: string;
  os: string;
  type: string;
  updated: string;
  size: string;
  tags: string[];
}

const Downloads: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const downloads: DownloadItem[] = [
    {
      name: "RPCS3 (Windows)",
      displayName: "RPCS3",
      version: "0.0.30-16005",
      os: "Windows",
      type: "Emulator",
      updated: "2025-05-28",
      size: "75MB",
      tags: ["PS3", "Emulator"]
    },
    {
      name: "Yuzu Early Access (Linux)",
      displayName: "Yuzu Early Access",
      version: "EA-4179",
      os: "Linux",
      type: "Emulator",
      updated: "2025-05-27",
      size: "120MB",
      tags: ["Switch", "Emulator"]
    },
    {
      name: "Lakka (Raspberry Pi 4/400)",
      displayName: "Lakka",
      version: "4.3",
      os: "Linux",
      type: "Firmware",
      updated: "2025-05-20",
      size: "650MB",
      tags: ["Raspberry Pi", "Firmware"]
    },
    {
      name: "ReShade",
      displayName: "ReShade",
      version: "6.0.1",
      os: "Windows",
      type: "Tool",
      updated: "2025-05-15",
      size: "5MB",
      tags: ["Graphics", "Tool"]
    },
    {
      name: "Delta Emulator (iOS)",
      displayName: "Delta Emulator",
      version: "1.5",
      os: "iOS",
      type: "Emulator",
      updated: "2025-05-10",
      size: "30MB",
      tags: ["iOS", "Emulator"]
    }
  ];

  const filteredDownloads = downloads.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.os.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono font-bold text-center mb-4 text-green-400">
          Downloads Library
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Find the latest stable builds and archived versions of emulators, firmware, and tools.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search downloads (e.g., RPCS3, PS3, Windows)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <select className="bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All OS</option>
          </select>

          <select className="bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Types</option>
          </select>
        </div>

        <div className="bg-gray-800/50 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Name</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Version</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">OS</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Type</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Updated</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Size</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Tags</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDownloads.map((item, index) => (
                <tr key={index} className="border-b border-gray-700/50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span className="text-green-400">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white">{item.version}</td>
                  <td className="py-4 px-6 text-white">{item.os}</td>
                  <td className="py-4 px-6 text-white">{item.type}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">{item.updated}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-red-400">{item.size}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="flex items-center justify-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-md hover:bg-green-500/30 transition-colors text-sm">
                        <Download size={14} />
                        <span>Download</span>
                      </button>
                      <button className="flex items-center justify-center gap-1 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-md hover:bg-purple-500/30 transition-colors text-sm">
                        <Info size={14} />
                        <span>Info</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 text-gray-400 text-sm border-t border-gray-700">
            Tip: Use JSON-LD schema markup for downloads to improve search engine indexing.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;