# Leoul Solomon - Art Director Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and TailwindCSS, featuring smooth animations and a comprehensive project showcase.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Optimized for all devices with 1920x1080 max width
- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, TailwindCSS
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Project Showcase**: Filterable portfolio with category-based organization
- **Contact Form**: Integrated with HubSpot CRM (configurable)
- **API Routes**: Full CRUD operations for project management

### Pages & Routes
- `/` - Home with animated hero section and typewriter effect
- `/about` - About page with background and values
- `/resume` - Skills, experience, and education
- `/work` - Filterable project showcase with modal details
- `/contact` - Contact form with CRM integration

### Project Categories
- **KV (Key Visuals)** - Campaign and visual design work
- **Branding** - Brand identity and visual systems
- **TVC (TV Commercials)** - Video commercial projects
- **Motion Graphics** - Animation and motion design
- **3D** - 3D design and visualization
- **Decks** - Presentation and pitch deck design

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Jest, React Testing Library, Playwright
- **Database**: JSON files (easily upgradeable to MongoDB Atlas)
- **CRM**: HubSpot integration (optional)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd leul-creative
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```
   Add your HubSpot credentials:
   ```
   HUBSPOT_API_KEY=your_api_key_here
   HUBSPOT_PORTAL_ID=your_portal_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Unit Tests
```bash
npm test                # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage
```

### End-to-End Tests
```bash
npm run test:e2e        # Run Playwright tests
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form API
│   │   └── projects/      # Projects CRUD API
│   ├── contact/           # Contact page
│   ├── resume/            # Resume page
│   ├── work/              # Work/Portfolio page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── HeroSection.tsx    # Animated hero section
│   ├── Navigation.tsx     # Main navigation
│   ├── ProjectCard.tsx    # Project showcase cards
│   ├── ProjectModal.tsx   # Project detail modal
│   ├── TypewriterEffect.tsx # Typewriter animation
│   └── __tests__/         # Component tests
├── data/                  # Mock data
│   └── projects.json      # Project data
└── types/                 # TypeScript definitions
    └── project.ts         # Project type definitions
```

## 🎨 Customization

### Adding New Projects
1. Edit `src/data/projects.json`
2. Add project images to `public/images/`
3. Projects will automatically appear in the work section

### Styling
- Global styles: `src/app/globals.css`
- Component styles: TailwindCSS classes
- Custom utilities: Defined in `tailwind.config.js`

### Animations
- Page transitions: `src/components/PageTransition.tsx`
- Scroll animations: Framer Motion `useInView` hooks
- Micro-interactions: Hover and tap animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables
```bash
# HubSpot CRM Integration (optional)
HUBSPOT_API_KEY=your_api_key
HUBSPOT_PORTAL_ID=your_portal_id

# Database (for future MongoDB integration)
MONGODB_URI=your_mongodb_connection_string
```

### Tailwind Configuration
- Max width: 1920px (optimized for 1920x1080)
- Custom breakpoints and utilities in `tailwind.config.js`
- Component classes in `src/app/globals.css`

## 📈 Performance

- **Optimized Images**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **Animations**: Hardware-accelerated with Framer Motion
- **Bundle Size**: Optimized with tree shaking and compression

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For questions or support, please contact:
- Email: hello@leoulsolomon.com
- Portfolio: [Live Demo](https://leoulcreative.vercel.app)
