import React, { useState } from 'react';
import { Save, X, Plus, Trash2 } from 'lucide-react';

interface NewsFormData {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

interface NewsFormProps {
  initialData?: NewsFormData;
  onSave: (data: NewsFormData) => void;
  onCancel: () => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<NewsFormData>(initialData || {
    title: '',
    excerpt: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '',
    category: 'News',
    tags: [],
    image: ''
  });

  const [newTag, setNewTag] = useState('');

  const categories = ['News', 'Tutorials', 'Guides', 'Emulators', 'Reviews'];

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

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
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
        <h3 className="text-lg font-medium text-white mb-4">Article Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter article title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => handleInputChange('excerpt', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={3}
              placeholder="Brief summary of the article"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Read Time</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => handleInputChange('readTime', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., 5 min"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://images.pexels.com/photos/XXXXXX/image.jpeg"
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
            className="flex-1 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Add a tag"
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
              className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
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
          Save Article
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

export default NewsForm;