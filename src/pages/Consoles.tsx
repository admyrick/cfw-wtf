import React, { useState } from 'react';
import { Monitor, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Console {
  name: string;
  manufacturer: string;
  year: number;
  description: string;
  cpu: string;
  popular: string[];
  slug: string; // Add proper slug field
}

const Consoles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('all');

  const consoles: Console[] = [
    {
      name: "Nintendo Entertainment System",
      manufacturer: "Nintendo",
      year: 1985,
      description: "An 8-bit home video game console that revitalized the video game industry after the 1983 crash.",
      cpu: "Ricoh 2A03 (MOS 6502 core)",
      popular: ["Super Mario Bros.", "The Legend of Zelda"],
      slug: "nintendo-entertainment-system"
    },
    {
      name: "Super Nintendo Entertainment System",
      manufacturer: "Nintendo",
      year: 1991,
      description: "A 16-bit home video game console known for its advanced graphics and sound capabilities for its time.",
      cpu: "Ricoh 5A22 (65C816 core)",
      popular: ["Super Mario World", "The Legend of Zelda: A Link to the Past"],
      slug: "super-nintendo-entertainment-system"
    },
    {
      name: "PlayStation (PS1)",
      manufacturer: "Sony",
      year: 1994,
      description: "Sony's first home video game console, it was a massive success and popularized CD-ROM based gaming.",
      cpu: "R3000 @ 33.868 MHz",
      popular: ["Final Fantasy VII", "Metal Gear Solid"],
      slug: "sony-playstation"
    },
    {
      name: "PlayStation 2",
      manufacturer: "Sony",
      year: 2000,
      description: "Best-selling video game console of all time with DVD playback capability.",
      cpu: "Emotion Engine @ 294 MHz",
      popular: ["Grand Theft Auto: San Andreas", "God of War"],
      slug: "sony-playstation-2"
    },
    {
      name: "PlayStation 3",
      manufacturer: "Sony",
      year: 2006,
      description: "Powerful console with Blu-ray support and the innovative Cell processor.",
      cpu: "Cell Broadband Engine @ 3.2 GHz",
      popular: ["The Last of Us", "Uncharted 2"],
      slug: "sony-playstation-3"
    },
    {
      name: "Xbox",
      manufacturer: "Microsoft",
      year: 2001,
      description: "Microsoft's first foray into the gaming console market, known for its powerful hardware and online service, Xbox Live.",
      cpu: "Custom 733 MHz Intel Pentium III \"Coppermine-based\" processor",
      popular: ["Halo: Combat Evolved", "Fable"],
      slug: "microsoft-xbox"
    },
    {
      name: "Xbox 360",
      manufacturer: "Microsoft",
      year: 2005,
      description: "Popular console that pioneered online gaming with Xbox Live.",
      cpu: "Xenon @ 3.2 GHz",
      popular: ["Gears of War", "Halo 3"],
      slug: "microsoft-xbox-360"
    },
    {
      name: "Nintendo 64",
      manufacturer: "Nintendo",
      year: 1996,
      description: "Nintendo's first 3D console with innovative analog stick controller.",
      cpu: "NEC VR4300 @ 93.75 MHz",
      popular: ["Super Mario 64", "The Legend of Zelda: Ocarina of Time"],
      slug: "nintendo-64"
    },
    {
      name: "Nintendo GameCube",
      manufacturer: "Nintendo",
      year: 2001,
      description: "Compact cube-shaped console with impressive graphics for its time.",
      cpu: "IBM PowerPC Gekko @ 485 MHz",
      popular: ["Super Mario Sunshine", "The Legend of Zelda: Wind Waker"],
      slug: "nintendo-gamecube"
    },
    {
      name: "Nintendo Switch",
      manufacturer: "Nintendo",
      year: 2017,
      description: "A hybrid video game console that can be used as both a home console and a portable handheld device.",
      cpu: "Nvidia Tegra X1-based SoC",
      popular: ["The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey"],
      slug: "nintendo-switch"
    },
    {
      name: "Sega Genesis",
      manufacturer: "Sega",
      year: 1988,
      description: "Sega's 16-bit console that competed directly with Nintendo's SNES.",
      cpu: "Motorola 68000 @ 7.6 MHz",
      popular: ["Sonic the Hedgehog", "Streets of Rage"],
      slug: "sega-genesis"
    },
    {
      name: "Sega Dreamcast",
      manufacturer: "Sega",
      year: 1998,
      description: "Sega's final console with built-in modem for online gaming.",
      cpu: "Hitachi SH-4 @ 200 MHz",
      popular: ["Shenmue", "Crazy Taxi"],
      slug: "sega-dreamcast"
    }
  ];

  const filteredConsoles = consoles.filter(console => {
    const matchesSearch = console.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         console.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesManufacturer = selectedManufacturer === 'all' || console.manufacturer === selectedManufacturer;
    return matchesSearch && matchesManufacturer;
  });

  const manufacturers = Array.from(new Set(consoles.map(console => console.manufacturer)));

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono font-bold text-center mb-4 text-green-400">
          All Gaming Consoles
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Explore the history and details of iconic gaming consoles.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Search consoles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <select 
            className="bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            value={selectedManufacturer}
            onChange={(e) => setSelectedManufacturer(e.target.value)}
          >
            <option value="all">All Manufacturers</option>
            {manufacturers.map(manufacturer => (
              <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredConsoles.map((console, index) => (
            <Link 
              to={`/consoles/detail/${console.slug}`}
              key={index} 
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-red-400">{console.name}</h2>
                <Monitor className="text-red-400 group-hover:scale-110 transition-transform" size={24} />
              </div>
              <div className="text-sm text-gray-400 mb-2">
                {console.manufacturer} - {console.year}
              </div>
              <p className="text-gray-300 mb-4 line-clamp-2">{console.description}</p>
              <div className="text-sm">
                <div className="text-green-400 mb-2 truncate">CPU: {console.cpu}</div>
                <div className="text-purple-400 truncate">
                  Popular: {console.popular.join(", ")}
                </div>
              </div>
              <div className="mt-4 text-red-400 flex items-center justify-center py-2 bg-red-500/20 rounded-md group-hover:bg-red-500/30 transition-colors">
                Learn More
              </div>
            </Link>
          ))}
        </div>

        {filteredConsoles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No consoles found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Consoles;