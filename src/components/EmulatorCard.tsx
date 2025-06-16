import React from 'react';
import { Info, Download } from 'lucide-react';

interface EmulatorCardProps {
  name: string;
  description: string;
  version: string;
  supported: string;
  platforms: string[];
}

const EmulatorCard: React.FC<EmulatorCardProps> = ({
  name,
  description,
  version,
  supported,
  platforms,
}) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-mono font-bold text-green-400">{name}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="flex gap-2">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="inline-block w-6 h-6 bg-gray-700 rounded-full"
              title={platform}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Version: {version}</span>
          <span className="text-gray-400">Supported: {supported}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors">
          <Info size={18} />
          <span>Details</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors">
          <Download size={18} />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default EmulatorCard;