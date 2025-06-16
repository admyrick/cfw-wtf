import React, { useState } from 'react';
import { Search, Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import { useJsonData } from '../hooks/useJsonData';

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const newsItems = useJsonData<NewsItem[]>('news.json');

  if (!newsItems) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-mono font-bold text-yellow-400 mb-4">Loading...</h1>
          <p className="text-gray-300">Loading news articles...</p>
        </div>
      </div>
    );
  }

  const categories = ['All', 'News', 'Tutorials', 'Guides', 'Emulators'];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono font-bold text-center mb-4 text-purple-400">
          News & Tutorials
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Stay updated with the latest emulation news and learn with our detailed guides.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <select 
            className="bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value.toLowerCase())}
          >
            {categories.map(category => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((item, index) => (
            <article 
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:bg-gray-800/70 transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={14} />
                    <span>{item.category}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-purple-400 mb-3 line-clamp-2">
                  {item.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center justify-center w-full gap-2 bg-purple-500/20 text-purple-400 py-2 rounded-md hover:bg-purple-500/30 transition-colors group">
                  <span>Read More</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;