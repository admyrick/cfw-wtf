# Emulators.info - Content Management Guide

A beautiful, production-ready website for emulation enthusiasts with an easy-to-use content management system.

## 🚀 Quick Start

### Method 1: JSON Files (Recommended)
The easiest way to manage content is by editing JSON files in the `/src/data/` directory:

- **Consoles**: `/src/data/consoles.json`
- **Emulators**: `/src/data/emulators.json`
- **News**: `/src/data/news.json`
- **Tools**: `/src/data/tools.json`
- **Firmware**: `/src/data/firmware.json`
- **Downloads**: `/src/data/downloads.json`

### Method 2: Admin Interface
Visit `/admin` in your browser for a web-based content management interface.

## 📁 Content Structure

### Adding a New Console

Edit `/src/data/consoles.json`:

```json
{
  "your-console-slug": {
    "name": "Console Name",
    "fullName": "Full Console Name",
    "manufacturer": "Manufacturer",
    "year": 2025,
    "generation": "8th Generation",
    "description": "Brief description",
    "detailedDescription": "Longer detailed description...",
    "specs": {
      "cpu": "CPU information",
      "memory": "Memory information",
      "storage": "Storage information",
      "graphics": "Graphics information",
      "audio": "Audio information",
      "controllers": "Controller information",
      "connectivity": ["Connection type 1", "Connection type 2"]
    },
    "popularGames": [
      {
        "name": "Game Name",
        "year": 2025,
        "genre": "Genre"
      }
    ],
    "image": "https://images.pexels.com/photos/XXXXXX/image.jpeg",
    "emulators": [
      {
        "name": "Emulator Name",
        "platform": "Platform",
        "compatibility": "Excellent"
      }
    ],
    "trivia": [
      "Interesting fact 1",
      "Interesting fact 2"
    ]
  }
}
```

### Adding News Articles

Edit `/src/data/news.json`:

```json
[
  {
    "title": "Article Title",
    "excerpt": "Brief summary of the article",
    "date": "2025-01-15",
    "readTime": "5 min",
    "category": "News",
    "tags": ["Tag1", "Tag2"],
    "image": "https://images.pexels.com/photos/XXXXXX/image.jpeg"
  }
]
```

### Adding Emulators

Edit `/src/data/emulators.json`:

```json
{
  "windows": {
    "title": "Windows Emulators",
    "description": "Description of Windows emulators",
    "emulators": [
      {
        "name": "Emulator Name",
        "description": "What this emulator does",
        "version": "1.0.0",
        "rating": 4.5,
        "downloads": "1M",
        "lastUpdated": "2025-01-15",
        "supported": ["Console Name"],
        "features": ["Feature 1", "Feature 2"],
        "platforms": ["Windows", "Linux"],
        "downloadUrl": "#",
        "infoUrl": "#"
      }
    ]
  }
}
```

## 🎨 Styling Guidelines

- **Consoles**: Red theme (`text-red-400`, `bg-red-500/20`)
- **Emulators**: Green theme (`text-green-400`, `bg-green-500/20`)
- **News**: Purple theme (`text-purple-400`, `bg-purple-500/20`)
- **Tools**: Blue theme (`text-blue-400`, `bg-blue-500/20`)
- **Firmware**: Yellow theme (`text-yellow-400`, `bg-yellow-500/20`)

## 📸 Images

Use Pexels URLs for all images:
- Format: `https://images.pexels.com/photos/XXXXXX/image.jpeg`
- Images are automatically optimized and responsive

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Content Guidelines

1. **Dates**: Use YYYY-MM-DD format
2. **Slugs**: Use kebab-case (lowercase with hyphens)
3. **Categories**: Stick to existing categories for consistency
4. **Compatibility**: Use "Perfect", "Excellent", "Good", "Fair", "Poor"
5. **Backup**: Always backup JSON files before major changes

## 🌐 Admin Interface

Access the admin interface at `/admin` to:
- Download JSON templates
- Upload updated JSON files
- Use web forms for content management
- View content management instructions

## 🚀 Deployment

The website is built with Vite and can be deployed to any static hosting service:

```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

## 📋 Features

- ✅ Responsive design
- ✅ JSON-based content management
- ✅ Admin interface
- ✅ Search functionality
- ✅ Category filtering
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Modern design

## 🤝 Contributing

1. Edit the appropriate JSON file in `/src/data/`
2. Test your changes locally
3. Submit your updates

The modular architecture makes it easy to maintain and expand the website's content without touching any code!