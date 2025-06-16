import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Monitor, Calendar, Cpu, HardDrive, MemoryStick, Gamepad2, ArrowLeft, ExternalLink } from 'lucide-react';
import { useJsonData } from '../hooks/useJsonData';

interface ConsoleData {
  name: string;
  fullName: string;
  manufacturer: string;
  year: number;
  generation: string;
  description: string;
  detailedDescription: string;
  specs: {
    cpu: string;
    memory: string;
    storage: string;
    graphics: string;
    audio: string;
    controllers: string;
    connectivity: string[];
  };
  popularGames: Array<{
    name: string;
    year: number;
    genre: string;
  }>;
  image: string;
  emulators: Array<{
    name: string;
    platform: string;
    compatibility: string;
  }>;
  trivia: string[];
}

const ConsoleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const consoleDatabase = useJsonData<Record<string, ConsoleData>>('consoles.json');

  if (!consoleDatabase) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-mono font-bold text-yellow-400 mb-4">Loading...</h1>
          <p className="text-gray-300">Loading console data...</p>
        </div>
      </div>
    );
  }

  const console = consoleDatabase[slug || ''];

  if (!console) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-mono font-bold text-red-400 mb-4">Console Not Found</h1>
          <p className="text-gray-300 mb-8">The requested console doesn't exist in our database.</p>
          <Link to="/consoles" className="bg-red-500/20 text-red-400 px-6 py-3 rounded-md hover:bg-red-500/30 transition-colors">
            Back to All Consoles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link to="/consoles" className="hover:text-white">Consoles</Link>
            <span className="mx-2">/</span>
            <Link to={`/consoles/${console.manufacturer.toLowerCase()}`} className="hover:text-white">{console.manufacturer}</Link>
            <span className="mx-2">/</span>
            <span className="text-red-400">{console.name}</span>
          </nav>
          
          <Link to="/consoles" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Consoles</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Monitor className="text-red-400" size={32} />
                <div>
                  <h1 className="text-4xl font-mono font-bold text-red-400">{console.name}</h1>
                  <h2 className="text-xl text-gray-300">{console.fullName}</h2>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{console.manufacturer} - {console.year}</span>
                </div>
                <span>{console.generation}</span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {console.detailedDescription}
              </p>

              <div className="h-64 rounded-lg overflow-hidden mb-8">
                <img 
                  src={console.image} 
                  alt={console.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-8">
              <h3 className="text-2xl font-mono font-bold text-purple-400 mb-6">Technical Specifications</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Cpu className="text-purple-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Processor</h4>
                      <p className="text-gray-300 text-sm">{console.specs.cpu}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MemoryStick className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Memory</h4>
                      <p className="text-gray-300 text-sm">{console.specs.memory}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <HardDrive className="text-green-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Storage</h4>
                      <p className="text-gray-300 text-sm">{console.specs.storage}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {console.specs.graphics && (
                    <div>
                      <h4 className="text-white font-medium mb-2">Graphics</h4>
                      <p className="text-gray-300 text-sm">{console.specs.graphics}</p>
                    </div>
                  )}
                  
                  {console.specs.audio && (
                    <div>
                      <h4 className="text-white font-medium mb-2">Audio</h4>
                      <p className="text-gray-300 text-sm">{console.specs.audio}</p>
                    </div>
                  )}
                  
                  {console.specs.controllers && (
                    <div>
                      <h4 className="text-white font-medium mb-2">Controllers</h4>
                      <p className="text-gray-300 text-sm">{console.specs.controllers}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-mono font-bold text-yellow-400 mb-6">Fun Facts & Trivia</h3>
              
              <ul className="space-y-3">
                {console.trivia.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold text-lg">•</span>
                    <p className="text-gray-300">{fact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-mono font-bold text-green-400 mb-4">Popular Games</h3>
              
              <div className="space-y-3">
                {console.popularGames.map((game, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-md">
                    <Gamepad2 className="text-green-400" size={16} />
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{game.name}</h4>
                      <p className="text-gray-400 text-xs">{game.year} • {game.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-mono font-bold text-blue-400 mb-4">Available Emulators</h3>
              
              <div className="space-y-3">
                {console.emulators.map((emulator, index) => (
                  <div key={index} className="p-3 bg-gray-700/50 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{emulator.name}</h4>
                      <ExternalLink className="text-blue-400" size={14} />
                    </div>
                    <p className="text-gray-400 text-xs mb-1">{emulator.platform}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Compatibility:</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        emulator.compatibility === 'Perfect' ? 'bg-green-500/20 text-green-400' :
                        emulator.compatibility === 'Excellent' ? 'bg-blue-500/20 text-blue-400' :
                        emulator.compatibility === 'Good' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {emulator.compatibility}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to={`/emulators`}
                className="w-full mt-4 bg-green-500/20 text-green-400 py-3 rounded-md hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <span>Find More Emulators</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsoleDetail;