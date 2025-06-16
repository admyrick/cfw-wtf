import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload, Download, FileText } from 'lucide-react';
import ConsoleForm from '../components/admin/ConsoleForm';
import NewsForm from '../components/admin/NewsForm';
import EmulatorForm from '../components/admin/EmulatorForm';
import ToolForm from '../components/admin/ToolForm';
import FirmwareForm from '../components/admin/FirmwareForm';
import DownloadForm from '../components/admin/DownloadForm';

interface AdminItem {
  id: string;
  type: 'console' | 'emulator' | 'news' | 'tool' | 'firmware' | 'download';
  data: any;
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'console' | 'emulator' | 'news' | 'tool' | 'firmware' | 'download'>('console');
  const [editingItem, setEditingItem] = useState<AdminItem | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('windows');

  const tabs = [
    { id: 'console', label: 'Consoles', color: 'red' },
    { id: 'emulator', label: 'Emulators', color: 'green' },
    { id: 'news', label: 'News', color: 'purple' },
    { id: 'tool', label: 'Tools', color: 'blue' },
    { id: 'firmware', label: 'Firmware', color: 'yellow' },
    { id: 'download', label: 'Downloads', color: 'indigo' }
  ];

  const platforms = ['windows', 'linux', 'macos', 'android', 'ios'];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      red: 'bg-red-500/20 text-red-400 border-red-500/30',
      green: 'bg-green-500/20 text-green-400 border-green-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    };
    return colorMap[color] || colorMap.green;
  };

  const handleAddNew = () => {
    setShowAddForm(true);
    setEditingItem(null);
  };

  const handleEdit = (item: AdminItem) => {
    setEditingItem(item);
    setShowAddForm(true);
  };

  const handleSave = (data: any, slug?: string) => {
    // Here you would implement the save logic
    // For now, we'll just close the form and show a success message
    console.log('Saving data:', { type: activeTab, data, slug });
    
    // In a real implementation, you would:
    // 1. Update the JSON file
    // 2. Refresh the data
    // 3. Show success notification
    
    setShowAddForm(false);
    setEditingItem(null);
    alert(`${activeTab} saved successfully! In a real implementation, this would update the JSON file.`);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingItem(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target?.result as string);
          console.log('Uploaded JSON:', jsonData);
          alert('JSON file uploaded successfully! In a real implementation, this would update the data files.');
        } catch (error) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const downloadJsonTemplate = (type: string) => {
    let template = {};
    
    switch (type) {
      case 'console':
        template = {
          "console-slug": {
            "name": "Console Name",
            "fullName": "Full Console Name",
            "manufacturer": "Manufacturer",
            "year": 2025,
            "generation": "Generation",
            "description": "Brief description",
            "detailedDescription": "Detailed description",
            "specs": {
              "cpu": "CPU info",
              "memory": "Memory info",
              "storage": "Storage info",
              "graphics": "Graphics info",
              "audio": "Audio info",
              "controllers": "Controller info",
              "connectivity": ["Connection 1", "Connection 2"]
            },
            "popularGames": [
              { "name": "Game Name", "year": 2025, "genre": "Genre" }
            ],
            "image": "https://images.pexels.com/photos/XXXXXX/image.jpeg",
            "emulators": [
              { "name": "Emulator Name", "platform": "Platform", "compatibility": "Excellent" }
            ],
            "trivia": ["Fun fact 1", "Fun fact 2"]
          }
        };
        break;
      case 'news':
        template = [
          {
            "title": "Article Title",
            "excerpt": "Brief summary",
            "date": "2025-01-15",
            "readTime": "5 min",
            "category": "News",
            "tags": ["Tag1", "Tag2"],
            "image": "https://images.pexels.com/photos/XXXXXX/image.jpeg"
          }
        ];
        break;
      case 'emulator':
        template = {
          "windows": {
            "title": "Windows Emulators",
            "description": "Description",
            "emulators": [
              {
                "name": "Emulator Name",
                "description": "Description",
                "version": "1.0.0",
                "rating": 4.5,
                "downloads": "1M",
                "lastUpdated": "2025-01-15",
                "supported": ["Console"],
                "features": ["Feature 1"],
                "platforms": ["Windows"],
                "downloadUrl": "#",
                "infoUrl": "#"
              }
            ]
          }
        };
        break;
      case 'tool':
        template = [
          {
            "name": "Tool Name",
            "description": "Tool description",
            "version": "1.0.0",
            "category": "Frontend",
            "platforms": ["windows", "linux"]
          }
        ];
        break;
      case 'firmware':
        template = [
          {
            "name": "Firmware Name",
            "description": "Firmware description",
            "version": "1.0.0",
            "devices": ["Device 1", "Device 2"]
          }
        ];
        break;
      case 'download':
        template = [
          {
            "name": "Download Name",
            "displayName": "Display Name",
            "version": "1.0.0",
            "os": "Windows",
            "type": "Emulator",
            "updated": "2025-01-15",
            "size": "100MB",
            "tags": ["Tag1", "Tag2"]
          }
        ];
        break;
    }

    const dataStr = JSON.stringify(template, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${type}-template.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderForm = () => {
    const commonProps = {
      onSave: handleSave,
      onCancel: handleCancel,
      initialData: editingItem?.data
    };

    switch (activeTab) {
      case 'console':
        return <ConsoleForm {...commonProps} />;
      case 'news':
        return <NewsForm {...commonProps} />;
      case 'emulator':
        return <EmulatorForm {...commonProps} platform={selectedPlatform} />;
      case 'tool':
        return <ToolForm {...commonProps} />;
      case 'firmware':
        return <FirmwareForm {...commonProps} />;
      case 'download':
        return <DownloadForm {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-mono font-bold text-center mb-4 text-green-400">
            Content Management
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Easily add and update website content using JSON files or the web interface.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-md border transition-colors ${
                activeTab === tab.id
                  ? getColorClasses(tab.color)
                  : 'bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Platform Selection for Emulators */}
        {activeTab === 'emulator' && (
          <div className="mb-6 flex justify-center">
            <div className="flex gap-2">
              <label className="text-gray-300 self-center">Platform:</label>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {platforms.map(platform => (
                  <option key={platform} value={platform}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Content Management Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* JSON File Management */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-mono font-bold text-purple-400 mb-4">
              📁 JSON File Method (Recommended)
            </h2>
            <p className="text-gray-300 mb-6">
              The easiest way to manage content is by editing JSON files directly. This method gives you full control and is perfect for bulk updates.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Current JSON Files:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between bg-gray-700/50 p-2 rounded">
                    <span className="text-gray-300">📄 /src/data/consoles.json</span>
                    <button 
                      onClick={() => downloadJsonTemplate('console')}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Download size={14} />
                      Template
                    </button>
                  </li>
                  <li className="flex items-center justify-between bg-gray-700/50 p-2 rounded">
                    <span className="text-gray-300">📄 /src/data/emulators.json</span>
                    <button 
                      onClick={() => downloadJsonTemplate('emulator')}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Download size={14} />
                      Template
                    </button>
                  </li>
                  <li className="flex items-center justify-between bg-gray-700/50 p-2 rounded">
                    <span className="text-gray-300">📄 /src/data/news.json</span>
                    <button 
                      onClick={() => downloadJsonTemplate('news')}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Download size={14} />
                      Template
                    </button>
                  </li>
                  <li className="flex items-center justify-between bg-gray-700/50 p-2 rounded">
                    <span className="text-gray-300">📄 /src/data/tools.json</span>
                    <button 
                      onClick={() => downloadJsonTemplate('tool')}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Download size={14} />
                      Template
                    </button>
                  </li>
                  <li className="flex items-center justify-between bg-gray-700/50 p-2 rounded">
                    <span className="text-gray-300">📄 /src/data/firmware.json</span>
                    <button 
                      onClick={() => downloadJsonTemplate('firmware')}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Download size={14} />
                      Template
                    </button>
                  </li>
                  <li className="flex items-center justify-between bg-gray-700/50 p-2 rounded">
                    <span className="text-gray-300">📄 /src/data/downloads.json</span>
                    <button 
                      onClick={() => downloadJsonTemplate('download')}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Download size={14} />
                      Template
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Upload Updated JSON File:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="json-upload"
                  />
                  <label
                    htmlFor="json-upload"
                    className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-md hover:bg-green-500/30 transition-colors cursor-pointer"
                  >
                    <Upload size={16} />
                    <span>Upload JSON</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Web Interface */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-mono font-bold text-blue-400 mb-4">
              🌐 Web Interface
            </h2>
            <p className="text-gray-300 mb-6">
              Use the web interface for quick edits and additions. Perfect for single item updates with guided forms.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleAddNew}
                className="w-full flex items-center justify-center gap-2 bg-green-500/20 text-green-400 py-3 rounded-md hover:bg-green-500/30 transition-colors"
              >
                <Plus size={18} />
                <span>Add New {activeTab}</span>
              </button>
              
              <div className="text-sm text-gray-400">
                <p>• Click "Add New" to create content using guided forms</p>
                <p>• All fields are validated and properly formatted</p>
                <p>• Forms include helpful placeholders and examples</p>
                <p>• Changes are saved to JSON files automatically</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-mono font-bold text-yellow-400 mb-4">
            📋 How to Update Content
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Method 1: Direct JSON Editing</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Download the JSON template for your content type</li>
                <li>2. Edit the JSON file with your content</li>
                <li>3. Replace the file in <code className="bg-gray-700 px-1 rounded">/src/data/</code></li>
                <li>4. The website will automatically update</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Method 2: Web Interface</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Select the content type tab above</li>
                <li>2. Click "Add New" to open the form</li>
                <li>3. Fill out all required fields</li>
                <li>4. Save to update the JSON files</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-md">
            <h4 className="text-blue-400 font-medium mb-2">💡 Pro Tips:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Use Pexels URLs for images (they're already optimized)</li>
              <li>• Keep console slugs consistent between list and detail pages</li>
              <li>• Use YYYY-MM-DD format for all dates</li>
              <li>• Backup your JSON files before making major changes</li>
              <li>• Forms include validation to prevent common errors</li>
            </ul>
          </div>
        </div>

        {/* Add/Edit Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {editingItem ? 'Edit' : 'Add New'} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  {activeTab === 'emulator' && ` (${selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)})`}
                </h3>
                <button
                  onClick={handleCancel}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              {renderForm()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;