import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Monitor, Calendar, Cpu, Gamepad2 } from 'lucide-react';

interface Console {
  name: string;
  fullName: string;
  year: number;
  generation: string;
  description: string;
  cpu: string;
  memory: string;
  storage: string;
  popularGames: string[];
  image: string;
  slug: string;
}

const ConsolesByManufacturer: React.FC = () => {
  const { manufacturer } = useParams<{ manufacturer: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const manufacturerData: Record<string, { title: string; description: string; consoles: Console[] }> = {
    nintendo: {
      title: "Nintendo Consoles",
      description: "Explore Nintendo's legendary gaming consoles from the NES to the Switch",
      consoles: [
        {
          name: "NES",
          fullName: "Nintendo Entertainment System",
          year: 1985,
          generation: "3rd Generation",
          description: "The console that revitalized the video game industry after the 1983 crash.",
          cpu: "Ricoh 2A03 (MOS 6502 core) @ 1.79 MHz",
          memory: "2 KB RAM",
          storage: "Cartridge",
          popularGames: ["Super Mario Bros.", "The Legend of Zelda", "Metroid", "Mega Man"],
          image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
          slug: "nintendo-entertainment-system"
        },
        {
          name: "SNES",
          fullName: "Super Nintendo Entertainment System",
          year: 1991,
          generation: "4th Generation",
          description: "16-bit console known for its advanced graphics and sound capabilities.",
          cpu: "Ricoh 5A22 (65C816 core) @ 3.58 MHz",
          memory: "128 KB RAM",
          storage: "Cartridge",
          popularGames: ["Super Mario World", "The Legend of Zelda: A Link to the Past", "Super Metroid", "Chrono Trigger"],
          image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
          slug: "super-nintendo-entertainment-system"
        },
        {
          name: "N64",
          fullName: "Nintendo 64",
          year: 1996,
          generation: "5th Generation",
          description: "Nintendo's first 3D console with innovative analog stick controller.",
          cpu: "NEC VR4300 @ 93.75 MHz",
          memory: "4 MB RAM (expandable to 8 MB)",
          storage: "Cartridge",
          popularGames: ["Super Mario 64", "The Legend of Zelda: Ocarina of Time", "GoldenEye 007", "Super Smash Bros."],
          image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
          slug: "nintendo-64"
        },
        {
          name: "GameCube",
          fullName: "Nintendo GameCube",
          year: 2001,
          generation: "6th Generation",
          description: "Compact cube-shaped console with impressive graphics for its time.",
          cpu: "IBM PowerPC Gekko @ 485 MHz",
          memory: "24 MB RAM",
          storage: "Mini DVD",
          popularGames: ["Super Mario Sunshine", "The Legend of Zelda: Wind Waker", "Metroid Prime", "Super Smash Bros. Melee"],
          image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
          slug: "nintendo-gamecube"
        },
        {
          name: "Wii",
          fullName: "Nintendo Wii",
          year: 2006,
          generation: "7th Generation",
          description: "Revolutionary console with motion controls that changed gaming forever.",
          cpu: "IBM PowerPC Broadway @ 729 MHz",
          memory: "88 MB RAM",
          storage: "DVD, SD Card",
          popularGames: ["Wii Sports", "Super Mario Galaxy", "The Legend of Zelda: Twilight Princess", "Mario Kart Wii"],
          image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
          slug: "nintendo-wii"
        },
        {
          name: "Switch",
          fullName: "Nintendo Switch",
          year: 2017,
          generation: "8th Generation",
          description: "Hybrid console that works as both home console and portable handheld.",
          cpu: "NVIDIA Tegra X1 @ 1.02 GHz",
          memory: "4 GB RAM",
          storage: "32 GB Flash, microSD",
          popularGames: ["The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey", "Animal Crossing: New Horizons", "Super Smash Bros. Ultimate"],
          image: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
          slug: "nintendo-switch"
        }
      ]
    },
    sony: {
      title: "Sony PlayStation Consoles",
      description: "Sony's PlayStation family from the original PSX to the PS5",
      consoles: [
        {
          name: "PlayStation",
          fullName: "Sony PlayStation",
          year: 1994,
          generation: "5th Generation",
          description: "Sony's first gaming console that popularized CD-ROM gaming.",
          cpu: "R3000 @ 33 MHz",
          memory: "2 MB RAM",
          storage: "CD-ROM",
          popularGames: ["Final Fantasy VII", "Metal Gear Solid", "Crash Bandicoot", "Tekken 3"],
          image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
          slug: "sony-playstation"
        },
        {
          name: "PlayStation 2",
          fullName: "Sony PlayStation 2",
          year: 2000,
          generation: "6th Generation",
          description: "Best-selling video game console of all time with DVD playback.",
          cpu: "Emotion Engine @ 294 MHz",
          memory: "32 MB RAM",
          storage: "DVD, CD",
          popularGames: ["Grand Theft Auto: San Andreas", "God of War", "Shadow of the Colossus", "Final Fantasy X"],
          image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
          slug: "sony-playstation-2"
        },
        {
          name: "PlayStation 3",
          fullName: "Sony PlayStation 3",
          year: 2006,
          generation: "7th Generation",
          description: "Powerful console with Blu-ray support and the innovative Cell processor.",
          cpu: "Cell Broadband Engine @ 3.2 GHz",
          memory: "256 MB XDR RAM + 256 MB GDDR3",
          storage: "Blu-ray, HDD",
          popularGames: ["The Last of Us", "Uncharted 2", "God of War III", "LittleBigPlanet"],
          image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
          slug: "sony-playstation-3"
        }
      ]
    },
    microsoft: {
      title: "Microsoft Xbox Consoles",
      description: "Microsoft's Xbox family and their impact on gaming",
      consoles: [
        {
          name: "Xbox",
          fullName: "Microsoft Xbox",
          year: 2001,
          generation: "6th Generation",
          description: "Microsoft's entry into console gaming with built-in hard drive.",
          cpu: "Intel Pentium III @ 733 MHz",
          memory: "64 MB RAM",
          storage: "DVD, 8 GB HDD",
          popularGames: ["Halo: Combat Evolved", "Fable", "Knights of the Old Republic", "Project Gotham Racing"],
          image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
          slug: "microsoft-xbox"
        },
        {
          name: "Xbox 360",
          fullName: "Microsoft Xbox 360",
          year: 2005,
          generation: "7th Generation",
          description: "Popular console that pioneered online gaming with Xbox Live.",
          cpu: "Xenon @ 3.2 GHz",
          memory: "512 MB RAM",
          storage: "DVD, HDD",
          popularGames: ["Gears of War", "Halo 3", "Mass Effect", "Forza Motorsport"],
          image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
          slug: "microsoft-xbox-360"
        }
      ]
    },
    sega: {
      title: "Sega Consoles",
      description: "Sega's innovative consoles and their unique gaming experiences",
      consoles: [
        {
          name: "Genesis",
          fullName: "Sega Genesis / Mega Drive",
          year: 1988,
          generation: "4th Generation",
          description: "Sega's 16-bit console that competed directly with Nintendo.",
          cpu: "Motorola 68000 @ 7.6 MHz",
          memory: "64 KB RAM",
          storage: "Cartridge",
          popularGames: ["Sonic the Hedgehog", "Streets of Rage", "Golden Axe", "Phantasy Star"],
          image: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
          slug: "sega-genesis"
        },
        {
          name: "Dreamcast",
          fullName: "Sega Dreamcast",
          year: 1998,
          generation: "6th Generation",
          description: "Sega's final console with built-in modem for online gaming.",
          cpu: "Hitachi SH-4 @ 200 MHz",
          memory: "16 MB RAM",
          storage: "GD-ROM",
          popularGames: ["Shenmue", "Crazy Taxi", "Jet Set Radio", "Phantasy Star Online"],
          image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
          slug: "sega-dreamcast"
        }
      ]
    }
  };

  const currentManufacturer = manufacturer || 'nintendo';
  const data = manufacturerData[currentManufacturer];

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-mono font-bold text-red-400 mb-4">Manufacturer Not Found</h1>
          <p className="text-gray-300 mb-8">The requested manufacturer doesn't exist.</p>
          <Link to="/consoles" className="bg-red-500/20 text-red-400 px-6 py-3 rounded-md hover:bg-red-500/30 transition-colors">
            Back to All Consoles
          </Link>
        </div>
      </div>
    );
  }

  const filteredConsoles = data.consoles.filter(console =>
    console.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    console.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    console.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link to="/consoles" className="hover:text-white">Consoles</Link>
            <span className="mx-2">/</span>
            <span className="text-red-400">{data.title}</span>
          </nav>
          
          <h1 className="text-4xl font-mono font-bold mb-4 text-red-400">
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
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Search consoles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredConsoles.map((console, index) => (
            <Link 
              to={`/consoles/detail/${console.slug}`}
              key={index} 
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:bg-gray-800/70 transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={console.image} 
                  alt={console.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-red-400">{console.name}</h2>
                  <Monitor className="text-red-400" size={24} />
                </div>
                
                <h3 className="text-lg text-white mb-2">{console.fullName}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{console.year}</span>
                  </div>
                  <span>{console.generation}</span>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-2">{console.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-purple-400" />
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white truncate">{console.cpu}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad2 size={14} className="text-green-400" />
                    <span className="text-gray-400">Popular:</span>
                    <span className="text-white truncate">{console.popularGames.slice(0, 2).join(", ")}</span>
                  </div>
                </div>

                <div className="mt-4 text-red-400 flex items-center justify-center py-2 bg-red-500/20 rounded-md group-hover:bg-red-500/30 transition-colors">
                  Learn More
                </div>
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

export default ConsolesByManufacturer;