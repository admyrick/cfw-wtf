import React, { useState } from 'react';
import { Save, X, Plus } from 'lucide-react';

interface ToolFormData {
  name: string;
  description: string;
  version: string;
  category: string;
  platforms: string[];
}

interface ToolFormProps {
  initialData?: ToolFormData;
  onSave: (data: ToolFormData) => void;
  onCancel: () => void;
}

const ToolForm: React.FC<ToolFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<ToolFormData>(initialData || {
    name: '',
    description: '',
    version: '',
    category: 'Frontend',
    platforms: []
  });

  const [newPlatform, setNewPlatform] = useState('');

  const categories = ['Frontend', 'Enhancement', 'Utility', 'Graphics', 'Audio', 'Network'];
  const commonPlatforms = ['Windows', 'Linux', 'macOS', 'Android', 'iOS'];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addPlatform = (platform: string) => {
    if (!formData.platforms.includes(platform)) {
      setFormData(prev => ({
        ...prev,
        platforms: [...prev.platforms, platform]
      }));
    }
  };

  const removePlatform = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.filter(p => p !== platform)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Tool Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Tool Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., RetroArch, LaunchBox"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Version</label>
            <input
              type="text"
              value={formData.version}
              onChange={(e) => handleInputChange('version', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 1.15.0"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Describe what this tool does and its main features"
            required
          />
        </div>
      </div>

      {/* Platforms */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Supported Platforms</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          {commonPlatforms.map(platform => (
            <button
              key={platform}
              type="button"
              onClick={() => formData.platforms.includes(platform) ? removePlatform(platform) : addPlatform(platform)}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                formData.platforms.includes(platform)
                  ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                  : 'bg-gray-800 text-gray-400 border border-gray-600 hover:bg-gray-700'
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newPlatform}
            onChange={(e) => setNewPlatform(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPlatform(newPlatform), setNewPlatform(''))}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add custom platform"
          />
          <button
            type="button"
            onClick={() => {
              if (newPlatform.trim()) {
                addPlatform(newPlatform.trim());
                setNewPlatform('');
              }
            }}
            className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-2 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {formData.platforms.map((platform, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-500/30"
              onClick={() => removePlatform(platform)}
            >
              {platform}
              <span className="text-blue-300">×</span>
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
          Save Tool
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

export default ToolForm;