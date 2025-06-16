import React, { useState } from 'react';
import { Save, X, Plus, Trash2 } from 'lucide-react';

interface ConsoleFormData {
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

interface ConsoleFormProps {
  initialData?: ConsoleFormData;
  onSave: (data: ConsoleFormData, slug: string) => void;
  onCancel: () => void;
}

const ConsoleForm: React.FC<ConsoleFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<ConsoleFormData>(initialData || {
    name: '',
    fullName: '',
    manufacturer: '',
    year: new Date().getFullYear(),
    generation: '',
    description: '',
    detailedDescription: '',
    specs: {
      cpu: '',
      memory: '',
      storage: '',
      graphics: '',
      audio: '',
      controllers: '',
      connectivity: []
    },
    popularGames: [],
    image: '',
    emulators: [],
    trivia: []
  });

  const [slug, setSlug] = useState('');

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'fullName') {
      setSlug(generateSlug(value));
    }
  };

  const handleSpecChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      specs: { ...prev.specs, [field]: value }
    }));
  };

  const addGame = () => {
    setFormData(prev => ({
      ...prev,
      popularGames: [...prev.popularGames, { name: '', year: new Date().getFullYear(), genre: '' }]
    }));
  };

  const updateGame = (index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      popularGames: prev.popularGames.map((game, i) => 
        i === index ? { ...game, [field]: value } : game
      )
    }));
  };

  const removeGame = (index: number) => {
    setFormData(prev => ({
      ...prev,
      popularGames: prev.popularGames.filter((_, i) => i !== index)
    }));
  };

  const addEmulator = () => {
    setFormData(prev => ({
      ...prev,
      emulators: [...prev.emulators, { name: '', platform: '', compatibility: 'Good' }]
    }));
  };

  const updateEmulator = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      emulators: prev.emulators.map((emu, i) => 
        i === index ? { ...emu, [field]: value } : emu
      )
    }));
  };

  const removeEmulator = (index: number) => {
    setFormData(prev => ({
      ...prev,
      emulators: prev.emulators.filter((_, i) => i !== index)
    }));
  };

  const addTrivia = () => {
    setFormData(prev => ({
      ...prev,
      trivia: [...prev.trivia, '']
    }));
  };

  const updateTrivia = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      trivia: prev.trivia.map((fact, i) => i === index ? value : fact)
    }));
  };

  const removeTrivia = (index: number) => {
    setFormData(prev => ({
      ...prev,
      trivia: prev.trivia.filter((_, i) => i !== index)
    }));
  };

  const addConnectivity = () => {
    setFormData(prev => ({
      ...prev,
      specs: {
        ...prev.specs,
        connectivity: [...prev.specs.connectivity, '']
      }
    }));
  };

  const updateConnectivity = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      specs: {
        ...prev.specs,
        connectivity: prev.specs.connectivity.map((conn, i) => i === index ? value : conn)
      }
    }));
  };

  const removeConnectivity = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specs: {
        ...prev.specs,
        connectivity: prev.specs.connectivity.filter((_, i) => i !== index)
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData, slug);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Console Name (Short)</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., PS5, Xbox Series X"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., Sony PlayStation 5"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Manufacturer</label>
            <select
              value={formData.manufacturer}
              onChange={(e) => handleInputChange('manufacturer', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select Manufacturer</option>
              <option value="Nintendo">Nintendo</option>
              <option value="Sony">Sony</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Sega">Sega</option>
              <option value="Atari">Atari</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Release Year</label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              min="1970"
              max="2030"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Generation</label>
            <input
              type="text"
              value={formData.generation}
              onChange={(e) => handleInputChange('generation', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., 9th Generation"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">URL Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="auto-generated from full name"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => handleInputChange('image', e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="https://images.pexels.com/photos/XXXXXX/image.jpeg"
            required
          />
        </div>
      </div>

      {/* Descriptions */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Descriptions</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Brief Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={2}
              placeholder="Short description for listings"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Detailed Description</label>
            <textarea
              value={formData.detailedDescription}
              onChange={(e) => handleInputChange('detailedDescription', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={4}
              placeholder="Detailed description for the console page"
              required
            />
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Technical Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">CPU</label>
            <input
              type="text"
              value={formData.specs.cpu}
              onChange={(e) => handleSpecChange('cpu', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., Custom AMD Zen 2 @ 3.8 GHz"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Memory</label>
            <input
              type="text"
              value={formData.specs.memory}
              onChange={(e) => handleSpecChange('memory', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., 16 GB GDDR6"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Storage</label>
            <input
              type="text"
              value={formData.specs.storage}
              onChange={(e) => handleSpecChange('storage', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., 825 GB SSD"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Graphics</label>
            <input
              type="text"
              value={formData.specs.graphics}
              onChange={(e) => handleSpecChange('graphics', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., Custom AMD RDNA 2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Audio</label>
            <input
              type="text"
              value={formData.specs.audio}
              onChange={(e) => handleSpecChange('audio', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., 3D Audio with Tempest Engine"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Controllers</label>
            <input
              type="text"
              value={formData.specs.controllers}
              onChange={(e) => handleSpecChange('controllers', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g., DualSense with haptic feedback"
            />
          </div>
        </div>
        
        {/* Connectivity */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-300">Connectivity Options</label>
            <button
              type="button"
              onClick={addConnectivity}
              className="flex items-center gap-1 text-green-400 hover:text-green-300 text-sm"
            >
              <Plus size={16} />
              Add
            </button>
          </div>
          <div className="space-y-2">
            {formData.specs.connectivity.map((conn, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={conn}
                  onChange={(e) => updateConnectivity(index, e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g., HDMI 2.1, USB-C"
                />
                <button
                  type="button"
                  onClick={() => removeConnectivity(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Games */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-white">Popular Games</h3>
          <button
            type="button"
            onClick={addGame}
            className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add Game
          </button>
        </div>
        <div className="space-y-3">
          {formData.popularGames.map((game, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2 items-end">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Game Name</label>
                <input
                  type="text"
                  value={game.name}
                  onChange={(e) => updateGame(index, 'name', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Game title"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Year</label>
                <input
                  type="number"
                  value={game.year}
                  onChange={(e) => updateGame(index, 'year', parseInt(e.target.value))}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  min="1970"
                  max="2030"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Genre</label>
                <input
                  type="text"
                  value={game.genre}
                  onChange={(e) => updateGame(index, 'genre', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g., Action, RPG"
                />
              </div>
              <button
                type="button"
                onClick={() => removeGame(index)}
                className="text-red-400 hover:text-red-300 p-2"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Emulators */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-white">Available Emulators</h3>
          <button
            type="button"
            onClick={addEmulator}
            className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add Emulator
          </button>
        </div>
        <div className="space-y-3">
          {formData.emulators.map((emulator, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2 items-end">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Emulator Name</label>
                <input
                  type="text"
                  value={emulator.name}
                  onChange={(e) => updateEmulator(index, 'name', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g., RPCS3"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Platform</label>
                <input
                  type="text"
                  value={emulator.platform}
                  onChange={(e) => updateEmulator(index, 'platform', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g., Windows/Linux"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Compatibility</label>
                <select
                  value={emulator.compatibility}
                  onChange={(e) => updateEmulator(index, 'compatibility', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Perfect">Perfect</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => removeEmulator(index)}
                className="text-red-400 hover:text-red-300 p-2"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trivia */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-white">Fun Facts & Trivia</h3>
          <button
            type="button"
            onClick={addTrivia}
            className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add Fact
          </button>
        </div>
        <div className="space-y-2">
          {formData.trivia.map((fact, index) => (
            <div key={index} className="flex gap-2">
              <textarea
                value={fact}
                onChange={(e) => updateTrivia(index, e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={2}
                placeholder="Enter an interesting fact about this console"
              />
              <button
                type="button"
                onClick={() => removeTrivia(index)}
                className="text-red-400 hover:text-red-300 p-2"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex items-center gap-2 bg-green-500/20 text-green-400 px-6 py-3 rounded-md hover:bg-green-500/30 transition-colors font-medium"
        >
          <Save size={18} />
          Save Console
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 bg-gray-700 text-gray-300 px-6 py-3 rounded-md hover:bg-gray-600 transition-colors"
        >
          <X size={18} />
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ConsoleForm;