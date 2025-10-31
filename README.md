# Muhammad Tahir Kleem - Portfolio

A modern, animated portfolio website showcasing expertise in Machine Learning, AI, and Full Stack Development. Built with Next.js 15, React 19, TypeScript, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 🌟 Features

- **Modern UI/UX**: Sleek, responsive design with smooth animations and transitions
- **Dark Mode**: Theme customization with multiple color schemes (Ocean, Forest, Sunset, Purple Haze, Cyberpunk)
- **Interactive Components**: 
  - Animated hero section with typing effects
  - Parallax scrolling backgrounds
  - Floating shapes and gradient effects
  - Smooth scroll navigation
- **Comprehensive Sections**:
  - Hero with social links (GitHub, LinkedIn)
  - About with achievement statistics
  - Skills with filterable categories (ML/AI, Frontend, Backend, DevOps)
  - Projects showcase with live demos
  - Contact form with validation
- **Performance Optimized**: Static export ready for GitHub Pages deployment
- **SEO Friendly**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with server components
- **TypeScript 5** - Type-safe development

### Styling & UI
- **TailwindCSS 3.4** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautifully designed components
- **Lucide React** - Modern icon library

### Animation & Effects
- **React Type Animation** - Typing animation effects
- **React Intersection Observer** - Scroll-based animations
- **Custom Parallax Effects** - Depth and motion

### Form & Validation
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

### Additional Libraries
- **next-themes** - Theme management
- **Sonner** - Toast notifications
- **clsx & tailwind-merge** - Conditional styling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher) - Fast, disk space efficient package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
pnpm build
```

This generates a static export in the `out` directory.

### 5. Start Production Server

```bash
pnpm start
```

## 📁 Project Structure

```
Portfolio/
├── public/                    # Static assets
│   ├── images/               # Project and profile images
│   │   ├── profile/          # Profile pictures
│   │   └── projects/         # Project screenshots
│   └── *.svg                 # SVG icons
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── hero.tsx          # Hero section with animations
│   │   ├── about.tsx         # About section with stats
│   │   ├── skills.tsx        # Skills with filtering
│   │   ├── projects.tsx      # Project showcase
│   │   ├── contact.tsx       # Contact form
│   │   ├── navbar.tsx        # Navigation bar
│   │   ├── footer.tsx        # Footer section
│   │   ├── theme-provider.tsx
│   │   ├── theme-customizer.tsx
│   │   ├── smooth-scroll.tsx
│   │   ├── parallax-*.tsx    # Parallax components
│   │   └── ui/               # Shadcn/ui components (40+)
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                  # Utilities
│   │   └── utils.ts          # Helper functions
│   └── styles/
│       └── globals.css       # Additional global styles
├── components.json           # Shadcn/ui configuration
├── tailwind.config.ts        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎨 Theme Customization

The portfolio includes multiple built-in themes:
- **Ocean** (Default) - Blue and cyan tones
- **Forest** - Green and emerald tones
- **Sunset** - Orange and red tones
- **Purple Haze** - Purple and violet tones
- **Cyberpunk** - Neon pink and cyan tones

Themes can be changed via the theme customizer button in the UI.

## 📦 Key Components

### Hero Section
- Animated gradient background
- Typing animation effect
- Social media links
- Download CV button
- Mouse-follow spotlight effect

### About Section
- Achievement statistics
- Service cards with hover effects
- Parallax background elements
- Smooth reveal animations

### Skills Section
- 60+ technical skills
- Category filtering (ML/AI, Frontend, Backend, DevOps)
- Progress bars with animations
- Organized by expertise level

### Projects Section
- Featured project showcases
- Category filtering
- Live demo and GitHub links
- Hover effects and transitions

### Contact Section
- Form validation with React Hook Form
- Contact information cards
- Success/error notifications
- Email integration ready

## 🚢 Deployment

### Deploy to GitHub Pages

1. Update `basePath` in `next.config.ts` to match your repository name
2. Run the build and deploy command:

```bash
pnpm run deploy
```

This will:
- Build the Next.js app
- Export static files
- Deploy to GitHub Pages using `gh-pages`

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/Portfolio)

Simply push your code to GitHub and import the repository in Vercel.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `out`

## 🔧 Configuration

### Update Personal Information

1. **Profile Image**: Replace `public/images/profile/muhammad1.png`
2. **Project Images**: Add to `public/images/projects/`
3. **Personal Details**: Update in respective component files:
   - `src/components/hero.tsx` - Name, titles
   - `src/components/about.tsx` - Bio, stats
   - `src/components/skills.tsx` - Skills list
   - `src/components/projects.tsx` - Projects data
   - `src/components/contact.tsx` - Contact info

### Update Metadata

Edit `src/app/page.tsx` and `src/app/layout.tsx` for SEO metadata.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 Performance

- ⚡ Lighthouse Score: 95+
- 🚀 Static site generation for fast loading
- 📦 Optimized bundle size
- 🎨 CSS-in-JS with zero runtime overhead
- 🖼️ Image optimization

## 🐛 Known Issues

- None currently. Report issues on GitHub.

## 📝 Scripts

```json
{
  "dev": "next dev",              // Start development server
  "build": "next build && next export",  // Build and export static site
  "start": "next start",          // Start production server
  "lint": "next lint",            // Run ESLint
  "deploy": "npm run build && gh-pages -d out"  // Deploy to GitHub Pages
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is free to use for personal purposes. For commercial use, please contact the author.

## 👤 Author

**Muhammad Tahir Kleem**

- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)
- 📧 Email: tahirkleem250@gmail.com
- 📱 Phone: +92 3181326250
- 📍 Location: Toba Tek Singh, Pakistan

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide](https://lucide.dev/) - Icon library

## 📊 Skills Highlighted

### Machine Learning & AI
- Prompt Engineering, RAG, LangChain, LlamaIndex, LangGraph
- Multi-Agent Systems (Autogen, CrewAI, OpenAI Agents)
- NLP (Sentiment Analysis, NER), Computer Vision (YOLOv8)
- XGBoost, Random Forest, SVM, KNN
- Transformers, Hugging Face, PEFT/LoRA

### Full Stack Development
- Frontend: React, Next.js, TypeScript, JavaScript
- Backend: Python, Django, FastAPI
- Databases: PostgreSQL, MySQL, MongoDB, Neo4j
- Vector DBs: Qdrant, Pinecone

### DevOps & Tools
- Git, GitHub Actions, Docker, Linux
- AWS, Jupyter, VS Code, Postman
- Automation: Zapier, Make.com, n8n

## 🎓 Featured Projects

1. **Taxline AI** - Invoice Automation Suite with GPT-4o
2. **ResuForge** - MCP-Powered Resume Builder
3. **Cold Email Generation Tool** - AI-driven sales automation
4. **Formulai** - DNA-Based Wellness Platform
5. **MCQ-Based Exam Prep System** - AI-powered adaptive learning
6. **ShopAI** - E-Commerce with AI Recommendations

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ and ☕ by Muhammad Tahir Kleem</p>
</div>

