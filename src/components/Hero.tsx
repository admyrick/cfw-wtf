import React, { useEffect, useState } from 'react';
import { Gamepad2, Monitor, FileCode, BrainCircuit } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(98,247,110,0.15),transparent_70%)]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className={`text-5xl md:text-7xl font-mono font-bold mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-green-400">emulators</span>
          <span className="text-purple-400">.</span>
          <span className="text-blue-400">info</span>
        </h1>
        
        <h2 className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Your Ultimate Source for Emulators, Custom Firmware, and Gaming Tools.
        </h2>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="/emulators" 
            className="bg-green-500/20 border border-green-500/30 hover:bg-green-500/30 transition-all p-6 rounded-lg flex flex-col items-center justify-center group"
          >
            <Gamepad2 size={32} className="text-green-400 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium text-green-400">Emulators</span>
          </a>
          
          <a 
            href="/consoles" 
            className="bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all p-6 rounded-lg flex flex-col items-center justify-center group"
          >
            <Monitor size={32} className="text-red-400 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium text-red-400">Consoles</span>
          </a>
          
          <a 
            href="/firmware" 
            className="bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-all p-6 rounded-lg flex flex-col items-center justify-center group"
          >
            <FileCode size={32} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium text-purple-400">Custom Firmware</span>
          </a>
          
          <a 
            href="/tools" 
            className="bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all p-6 rounded-lg flex flex-col items-center justify-center group"
          >
            <BrainCircuit size={32} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium text-blue-400">Gaming Tools</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;