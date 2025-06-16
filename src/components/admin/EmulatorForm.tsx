import React, { useState } from 'react';
import { Save, X, Plus, Trash2 } from 'lucide-react';

interface EmulatorFormData {
  name: string;
  description: string;
  version: string;
  rating: number;
  downloads: string;
  lastUpdated: string;
  supported: string[];
  features: string[];
  platforms: string[];
  downloadUrl: string;
  infoUrl: string;
}

interface EmulatorFormProps {
  initialData?: EmulatorFormData;
  platform: string;
  onSave: (data: EmulatorFormData, platform: string) => void;
  onCancel: () => void;
}

const EmulatorForm: React.FC<EmulatorFormProps> = ({ initialData, platform, onSave, onCancel }) => {
  const [formData, setFormData] = useState<EmulatorFormData>(initialData || {
    name: '',
    description: '',
    version: '',
    rating: 4.0,
    downloads: '',
    lastUpdated: new Date().toISOString().split('T')[0],
    supported: [],
    features: [],
    platforms: [],
    downloadUrl: '',
    infoUrl: ''
  });

  const [newSupported, setNewSupported] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [newPlatform, setNewPlatform] = useState('');

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSupported = () => {
    if (newSupported.trim() && !formData.supported.includes(newSupported.trim())) {
      setFormData(prev => ({
        ...prev,
        supported: [...prev.supported, newSupported.trim()]
      }));
      setNewSupported('');
    }
  };

  const removeSupported = (item: string) => {
    setFormData(prev => ({
      ...prev,
      supported: prev.supported.filter(s => s !== item)
    }));
  };

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (item: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== item)
    }));
  };

  const addPlatform = () => {
    if (newPlatform.trim() && !formData.platforms.includes(newPlatform.trim())) {
      setFormData(prev => ({
        ...prev,
        platforms: [...prev.platforms, newPlatform.trim()]
      }));
      setNewPlatform('');
    }
  };

  const removePlatform = (item: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.filter(p => p !== item)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData, platform);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Emulator Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Emulator Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., RPCS3, Dolphin"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Version</label>
            <input
              type="text"
              value={formData.version}
              onChange={(e) => handleInputChange('version', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., 0.0.30-16005"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={(e) => handleInputChange('rating', parseFloat(e.target.value))}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Downloads</label>
            <input
              type="text"
              value={formData.downloads}
              onChange={(e) => handleInputChange('downloads', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., 2.1M, 500K"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Last Updated</label>
            <input
              type="date"
              value={formData.lastUpdated}
              onChange={(e) => handleInputChange('lastUpdated', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Target Platform</label>
            <input
              type="text"
              value={platform}
              disabled
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-gray-400"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={3}
            placeholder="Describe what this emulator does and its key strengths"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Download URL</label>
            <input
              type="url"
              value={formData.downloadUrl}
              onChange={(e) => handleInputChange('downloadUrl', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="https://..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Info URL</label>
            <input
              type="url"
              value={formData.infoUrl}
              onChange={(e) => handleInputChange('infoUrl', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>

      {/* Supported Systems */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Supported Systems</h3>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newSupported}
            onChange={(e) => setNewSupported(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSupported())}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., PlayStation 3, Nintendo Switch"
          />
          <button
            type="button"
            onClick={addSupported}
            className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-2 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.supported.map((system, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
            >
              {system}
              <button
                type="button"
                onClick={() => removeSupported(system)}
                className="text-green-300 hover:text-green-100"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Key Features</h3>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., 4K Resolution, Save States"
          />
          <button
            type="button"
            onClick={addFeature}
            className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-2 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.features.map((feature, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
            >
              {feature}
              <button
                type="button"
                onClick={() => removeFeature(feature)}
                className="text-blue-300 hover:text-blue-100"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Platforms */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Available Platforms</h3>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newPlatform}
            onChange={(e) => setNewPlatform(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPlatform())}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Windows, Linux, macOS"
          />
          <button
            type="button"
            onClick={addPlatform}
            className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-2 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.platforms.map((platform, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm"
            >
              {platform}
              <button
                type="button"
                onClick={() => removePlatform(platform)}
                className="text-purple-300 hover:text-purple-100"
              >
                <X size={14} />
              </button>
            </span>
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
          Save Emulator
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

export default EmulatorForm;