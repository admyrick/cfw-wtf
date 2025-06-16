import React, { useState } from 'react';
import { ChevronDown, Monitor, Search, Gamepad2, Laptop, Smartphone, Apple } from 'lucide-react';
import NavDropdown from './NavDropdown';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const emulatorItems = [
    { icon: <Monitor size={16} />, label: 'All Emulators', href: '/emulators' },
    { icon: <Laptop size={16} />, label: 'Windows', href: '/emulators/windows' },
    { icon: <Laptop size={16} />, label: 'Linux', href: '/emulators/linux' },
    { icon: <Smartphone size={16} />, label: 'Android', href: '/emulators/android' },
    { icon: <Apple size={16} />, label: 'iOS', href: '/emulators/ios' },
    { icon: <Apple size={16} />, label: 'macOS', href: '/emulators/macos' },
  ];

  const consoleItems = [
    { label: 'All Consoles', href: '/consoles' },
    { label: 'Nintendo', href: '/consoles/nintendo' },
    { label: 'Sony PlayStation', href: '/consoles/sony' },
    { label: 'Microsoft Xbox', href: '/consoles/microsoft' },
    { label: 'Sega', href: '/consoles/sega' },
    { label: 'Atari', href: '/consoles/atari' },
    { label: 'Retro Handhelds', href: '/consoles/retro-handhelds' },
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 font-mono text-xl font-bold">
              <a href="/" className="flex items-center">
                <span className="text-green-400">emulators</span>
                <span className="text-purple-400">.</span>
                <span className="text-blue-400">info</span>
              </a>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('emulators')}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800 flex items-center space-x-1"
                  >
                    <span>Emulators</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'emulators' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === 'emulators' && (
                    <NavDropdown items={emulatorItems} />
                  )}
                </div>
                
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('consoles')}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800 flex items-center space-x-1"
                  >
                    <span>Consoles</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'consoles' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === 'consoles' && (
                    <NavDropdown items={consoleItems} />
                  )}
                </div>
                
                <a href="/firmware" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800">
                  Custom Firmware
                </a>
                
                <a href="/tools" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800">
                  Gaming Tools
                </a>
                
                <a href="/news" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800">
                  News/Tutorials
                </a>
                
                <a href="/downloads" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800">
                  Downloads
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                className="bg-gray-800 h-8 w-48 rounded-md pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
            </div>
            
            <div className="md:hidden ml-4">
              <button className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;