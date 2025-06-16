import React from 'react';
import { FileCode } from 'lucide-react';

interface Firmware {
  name: string;
  description: string;
  version: string;
  devices: string[];
}

const CustomFirmware: React.FC = () => {
  const firmwares: Firmware[] = [
    {
      name: "Lakka",
      description: "A lightweight Linux distribution that transforms a small computer into a full blown game console.",
      version: "4.3",
      devices: ["Raspberry Pi", "PC", "Odroid"]
    },
    {
      name: "RetroPie",
      description: "Allows you to turn your Raspberry Pi or PC into a retro-gaming machine.",
      version: "4.8",
      devices: ["Raspberry Pi", "PC", "Odroid"]
    },
    {
      name: "OpenDingux",
      description: "Open source Linux distribution for Dingoo A320 and other Ingenic JZ47xx based handhelds.",
      version: "Beta",
      devices: ["GCW Zero", "RG350", "Dingoo A320"]
    },
    {
      name: "ArkOS",
      description: "Custom firmware for various ARM-based handheld gaming devices.",
      version: "2.0",
      devices: ["RG351P/M/V", "RG810", "RK2020"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono font-bold text-center mb-4 text-purple-400">
          Custom Firmware
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Unlock the full potential of your retro handhelds and devices.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {firmwares.map((firmware, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-purple-400">{firmware.name}</h2>
                <FileCode className="text-purple-400" size={24} />
              </div>
              <p className="text-gray-300 mb-4">{firmware.description}</p>
              <div className="text-sm">
                <div className="text-green-400 mb-2">Version: {firmware.version}</div>
                <div className="text-blue-400">
                  Popular Devices: {firmware.devices.join(", ")}
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <button className="flex-1 bg-green-500/20 text-green-400 py-2 rounded-md hover:bg-green-500/30 transition-colors">
                  Guide
                </button>
                <button className="flex-1 bg-red-500/20 text-red-400 py-2 rounded-md hover:bg-red-500/30 transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-mono font-bold text-center mb-8 text-red-400">
            DIY Modding & Tutorials
          </h2>
          {/* Tutorial section content will go here */}
        </div>
      </div>
    </div>
  );
};

export default CustomFirmware;