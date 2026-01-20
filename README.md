# VickeyZ - Premium Keyboardist Portfolio Website

A world-class, premium multi-page website for a virtuoso keyboardist, built with Next.js 16, React 19, Framer Motion, and Tailwind CSS.

## 🎹 Features

- **Multi-Page Architecture**: Six distinct pages showcasing different aspects of the artist's brand
- **Dark/Light Mode**: Sophisticated theme switching with "Midnight Luxury" design language
- **Framer Motion Animations**: Smooth, engaging animations throughout
- **Multi-Step Booking Form**: Comprehensive booking system with Zod validation
- **SEO Optimized**: Meta tags, semantic HTML, and proper heading structure
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **ARIA Accessible**: Follows WCAG guidelines for accessibility

## 📄 Pages

1. **Home** - Hero landing with performance stats and call-to-action
2. **The Artistry** - Solo vs. Band performance options
3. **The Legacy** - Gallery of notable performances and press features
4. **The Experience** - Detailed service offerings (Weddings, Corporate, Private, State)
5. **Social Proof** - Client testimonials and reviews
6. **Booking** - Multi-step form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎨 Design System

### Colors (Midnight Luxury Theme)

**Light Mode:**
- Background: Pearl White (#fafaf9)
- Primary: Gold (#d4af37)
- Accent: Bronze (#8b7355)

**Dark Mode:**
- Background: Deep Black (#0a0a0a)
- Primary: Gold (#d4af37)
- Accent: Light Gold (#c9a961)

### Typography

- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 📱 Components

- `Navigation` - Responsive navigation with active page indicator
- `Footer` - Site footer with links and social media
- `ThemeToggle` - Animated dark/light mode switcher

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific variables (none required for static site).

### Metadata

Each page has custom metadata for SEO optimization. Update in individual page files.

## 📦 Project Structure

```
vickeyz/
├── app/
│   ├── artistry/          # Solo & Band page
│   ├── booking/           # Booking form page
│   ├── components/        # Shared components
│   ├── experience/        # Services page
│   ├── legacy/            # Gallery & press page
│   ├── providers/         # Theme provider
│   ├── testimonials/      # Reviews page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
└── package.json
```

## ✨ Key Features Implemented

- ✅ Multi-page architecture with Next.js App Router
- ✅ Framer Motion animations on scroll and hover
- ✅ Dark/Light mode with persistent storage
- ✅ Multi-step booking form with validation
- ✅ Responsive design (mobile-first)
- ✅ SEO optimization with metadata
- ✅ ARIA accessibility standards
- ✅ Professional color scheme (Gold & Charcoal)
- ✅ High-quality dummy content and images
- ✅ TypeScript for type safety

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for animations
- Efficient re-renders with React 19
- Production build ready

## 📝 License

Private portfolio website for VickeyZ.

## 🤝 Contact

For inquiries: booking@vickeyz.com

---

Built with ❤️ using Next.js and Framer Motion
