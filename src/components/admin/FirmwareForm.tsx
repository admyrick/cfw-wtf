import React, { useState } from 'react';
import { Save, X, Plus } from 'lucide-react';

interface FirmwareFormData {
  name: string;
  description: string;
  version: string;
  devices: string[];
}

interface FirmwareFormProps {
  initialData?: FirmwareFormData;
  onSave: (data: FirmwareFormData) => void;
  onCancel: () => void;
}

const FirmwareForm: React.FC<FirmwareFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<FirmwareFormData>(initialData || {
    name: '',
    description: '',
    version: '',
    devices: []
  });

  const [newDevice, setNewDevice] = useState('');

  const commonDevices = [
    'Raspberry Pi 4',
    'Raspberry Pi 3',
    'Steam Deck',
    'RG351P',
    'RG351M',
    'RG351V',
    'RG552',
    'Anbernic RG503',
    'Miyoo Mini',
    'Retroid Pocket 2+',
    'PC'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addDevice = (device: string) => {
    if (!formData.devices.includes(device)) {
      setFormData(prev => ({
        ...prev,
        devices: [...prev.devices, device]
      }));
    }
  };

  const removeDevice = (device: string) => {
    setFormData(prev => ({
      ...prev,
      devices: prev.devices.filter(d => d !== device)
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
        <h3 className="text-lg font-medium text-white mb-4">Firmware Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Firmware Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="e.g., Lakka, RetroPie, ArkOS"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Version</label>
            <input
              type="text"
              value={formData.version}
              onChange={(e) => handleInputChange('version', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="e.g., 4.3, 2.0, Beta"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={3}
            placeholder="Describe what this firmware does and its key features"
            required
          />
        </div>
      </div>

      {/* Supported Devices */}
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-4">Supported Devices</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          {commonDevices.map(device => (
            <button
              key={device}
              type="button"
              onClick={() => formData.devices.includes(device) ? removeDevice(device) : addDevice(device)}
              className={`px-3 py-2 rounded-md text-sm transition-colors text-left ${
                formData.devices.includes(device)
                  ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-500/50'
                  : 'bg-gray-800 text-gray-400 border border-gray-600 hover:bg-gray-700'
              }`}
            >
              {device}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newDevice}
            onChange={(e) => setNewDevice(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addDevice(newDevice), setNewDevice(''))}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Add custom device"
          />
          <button
            type="button"
            onClick={() => {
              if (newDevice.trim()) {
                addDevice(newDevice.trim());
                setNewDevice('');
              }
            }}
            className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-2 rounded-md hover:bg-green-500/30 transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {formData.devices.map((device, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-500/30"
              onClick={() => removeDevice(device)}
            >
              {device}
              <span className="text-yellow-300">×</span>
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
          Save Firmware
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

export default FirmwareForm;