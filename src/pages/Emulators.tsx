import React, { useState } from 'react';
import { Search } from 'lucide-react';
import EmulatorCard from '../components/EmulatorCard';

const Emulators: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const emulators = [
    {
      name: 'RPCS3',
      description: 'PlayStation 3 Emulator',
      version: '0.0.30',
      supported: 'PS3',
      platforms: ['windows'],
    },
    {
      name: 'Yuzu',
      description: 'Nintendo Switch Emulator',
      version: '1600',
      supported: 'Switch',
      platforms: ['windows'],
    },
    {
      name: 'Dolphin',
      description: 'GameCube & Wii Emulator',
      version: '5.0-20000',
      supported: 'GC, Wii',
      platforms: ['windows', 'mac'],
    },
    {
      name: 'AetherSX2',
      description: 'PlayStation 2 Emulator',
      version: 'Alpha-3668',
      supported: 'PS2',
      platforms: ['windows'],
    },
    {
      name: 'Delta',
      description: 'Multi-system emulator for iOS',
      version: '1.5',
      supported: 'NES, SNES, N64, GBA',
      platforms: ['ios'],
    },
    {
      name: 'OpenEmu',
      description: 'Multi-system emulator for macOS',
      version: '2.3.3',
      supported: 'NES, SNES, Genesis, PS1',
      platforms: ['mac'],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono font-bold text-center mb-4 text-green-400">
          All Emulators
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Discover the best emulators for all major platforms.
        </p>

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
          
          <select className="bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="all">All Consoles</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emulators.map((emulator, index) => (
            <EmulatorCard key={index} {...emulator} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Emulators;