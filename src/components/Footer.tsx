import React from 'react';
import { Github, Twitter, Youtube, Twitch } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-mono text-xl font-bold mb-4">
              <span className="text-green-400">emulators</span>
              <span className="text-purple-400">.</span>
              <span className="text-blue-400">info</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your ultimate resource for everything related to emulation, custom firmware, and gaming tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitch size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Emulators</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Windows</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Linux</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">macOS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Android</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iOS</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Consoles</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nintendo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PlayStation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Xbox</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sega</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retro</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Downloads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 emulators.info. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;