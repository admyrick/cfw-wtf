import React, { useState } from 'react';
import { Save, X, Plus } from 'lucide-react';

interface DownloadFormData {
  name: string;
  displayName: string;
  version: string;
  os: string;
  type: string;
  updated: string;
  size: string;
  tags: string[];
}

interface DownloadFormProps {
  initialData?: DownloadFormData;
  onSave: (data: DownloadFormData) => void;
  onCancel: () => void;
}

const DownloadForm: React.FC<DownloadFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<DownloadFormData>(initialData || {
    name: '',
    displayName: '',
    version: '',
    os: 'Windows',
    type: 'Emulator',
    updated: new Date().toISOString().split('T')[0],
    size: '',
    tags: []
  });

  const [newTag, setNewTag] = useState('');

  const operatingSystems = ['Windows', 'Linux', 'macOS', 'Android', 'iOS', 'Multi-Platform'];
  const downloadTypes = ['Emulator', 'Firmware', 'Tool', 'Game', 'BIOS', 'Plugin'];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
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
        <h3 className="text-lg font-medium text-white mb-4">Download Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., RPCS3 (Windows)"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
            <input
              type="text"
              value={formData.displayName}
              onChange={(e) => handleInputChange('displayName', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., RPCS3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Version</label>
            <input
              type="text"
              value={formData.version}
              onChange={(e) => handleInputChange('version', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 0.0.30-16005"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">File Size</label>
            <input
              type="text"
              value={formData.size}
              onChange={(e) => handleInputChange('size', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 75MB, 1.2GB"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Operating System</label>
            <select
              value={formData.os}
              onChange={(e) => handleInputChange('os', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              {operatingSystems.map(os => (
                <option key={os} value={os}>{os}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
            <select
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              {downloadTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Last Updated</label>
            <input
              type="date"
              value={formData.updated}
              onChange={(e) => handleInputChange('updated', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Tags</h3>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add a tag (e.g., PS3, Emulator)"
          />
          <button
            type="button"
            onClick={addTag}
            className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-2 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-indigo-500/30"
              onClick={() => removeTag(tag)}
            >
              {tag}
              <span className="text-indigo-300">×</span>
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
          Save Download
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

export default DownloadForm;