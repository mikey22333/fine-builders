# Fine Builders & Interiors

A modern, responsive website for Fine Builders & Interiors - a premium interior design company based in Ambalappuzha, Kerala. Built with React, TypeScript, and Express.js.

## 🏗️ Project Overview

This is a full-stack web application featuring:
- **Frontend**: React 18 with TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL (currently using in-memory storage)
- **Build Tool**: Vite for fast development and optimized production builds

## ✨ Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI**: Clean, professional design with smooth transitions
- **Performance Optimized**: Fast loading with code splitting and optimization
- **SEO Ready**: Proper meta tags and Open Graph data
- **Type Safe**: Full TypeScript implementation

### Pages
- **Home**: Hero section with company overview and featured services
- **Services**: Comprehensive list of interior design services
- **Portfolio**: Showcase of completed projects with filtering
- **Contact**: Contact information and inquiry form

## 🚀 Quick Start

### Prerequisites
- Node.js v18.20.8 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd InteriorInspire
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage layer
│   └── vite.ts             # Vite development setup
├── shared/                 # Shared types and schemas
├── public/                 # Static assets
└── dist/                   # Production build output
```

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing
- **React Query** - Data fetching and caching

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM
- **Zod** - Schema validation

### Build & Development
- **Vite** - Build tool and dev server
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Cross-env** - Cross-platform environment variables

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Production Build
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and configure:
- `NODE_ENV` - Environment (development/production)
- `DATABASE_URL` - PostgreSQL connection string (optional)
- `PORT` - Server port (default: 5000)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions about this project, please contact Fine Builders & Interiors:
- **Location**: Ambalappuzha, Kerala, India
- **Services**: Residential & Commercial Interior Design
