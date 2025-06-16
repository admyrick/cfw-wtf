import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, description, color, link }) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { text: string, border: string, bg: string, hover: string }> = {
      green: {
        text: 'text-green-400',
        border: 'border-green-400/20',
        bg: 'bg-green-400/5',
        hover: 'hover:bg-green-400/10'
      },
      red: {
        text: 'text-red-400',
        border: 'border-red-400/20',
        bg: 'bg-red-400/5',
        hover: 'hover:bg-red-400/10'
      },
      purple: {
        text: 'text-purple-400',
        border: 'border-purple-400/20',
        bg: 'bg-purple-400/5',
        hover: 'hover:bg-purple-400/10'
      },
      blue: {
        text: 'text-blue-400',
        border: 'border-blue-400/20',
        bg: 'bg-blue-400/5',
        hover: 'hover:bg-blue-400/10'
      }
    };
    
    return colorMap[color] || colorMap.green;
  };
  
  const colors = getColorClasses(color);
  
  return (
    <div className={`p-6 rounded-lg border ${colors.border} ${colors.bg} ${colors.hover} transition-all duration-300 h-full flex flex-col`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      
      <h3 className={`text-xl font-bold text-center mb-3 ${colors.text}`}>
        {title}
      </h3>
      
      <p className="text-gray-300 text-center mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <a 
          href={link} 
          className={`flex items-center justify-center space-x-2 p-2 rounded-md ${colors.bg} ${colors.hover} transition-all group`}
        >
          <span className={`${colors.text}`}>Explore</span>
          <ArrowRight size={16} className={`${colors.text} transform group-hover:translate-x-1 transition-transform`} />
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;