# Majaami Distribution

A premium, modern, production-ready website for Majaami Distribution built with Next.js, TypeScript, and Tailwind CSS.

## Overview

Majaami Distribution is an ambitious African distribution and logistics company connecting businesses, products, and communities across The Gambia. This website showcases:

- **Professional corporate design** inspired by DHL and Maersk
- **Modern distribution and logistics solutions**
- **Partnership opportunities** for business growth
- **Responsive, accessible design** for all devices
- **SEO-optimized** pages and metadata

## Features

✨ **Premium UI/UX Design**
- Clean, professional aesthetic
- Smooth animations and transitions
- Accessible keyboard navigation
- Mobile-first responsive design

📱 **Responsive Pages**
- Homepage with service overview
- About page with company mission and values
- Detailed services page
- Products catalog with filtering
- Partnership inquiry form
- Contact form with validation

🎨 **Brand Design System**
- Deep Navy (#0B1F3A) primary color
- Electric Orange (#FF6B00) accent color
- Professional typography with Geist font
- Comprehensive component library

🔍 **SEO & Metadata**
- Open Graph metadata
- Structured page titles and descriptions
- SEO-friendly URLs and navigation

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **React Hooks** - State management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── globals.css             # Global styles and theme
├── page.tsx                # Homepage
├── about/
│   └── page.tsx            # About page
├── services/
│   └── page.tsx            # Services page
├── products/
│   └── page.tsx            # Products catalog
├── partner/
│   └── page.tsx            # Partnership page
└── contact/
    └── page.tsx            # Contact page

components/
├── Navbar.tsx              # Navigation component
├── Footer.tsx              # Footer component
└── sections/               # Homepage sections
    ├── Hero.tsx
    ├── QuickServices.tsx
    ├── ValueProposition.tsx
    ├── AboutPreview.tsx
    ├── ServicesShowcase.tsx
    ├── ProcessTimeline.tsx
    ├── PartnershipCTA.tsx
    └── FinalCTA.tsx
```

## Pages

### Homepage
- Hero section with call-to-action
- Quick service access cards
- Value proposition with benefits
- About company preview
- Services showcase (6 services)
- Distribution process timeline
- Partnership call-to-action
- Final conversion CTA

### About Page
- Company story
- Mission and vision statements
- Core values (6 values)
- Long-term ambition and ecosystem vision

### Services Page
- Detailed service descriptions
- What's included in each service
- Target audience for each service
- Inquiry CTA buttons

### Products Page
- Product catalog with categories
- Search functionality
- Category filtering
- Wholesale inquiry CTAs
- Mock product data (ready for API integration)

### Partner Page
- Partnership benefits overview
- Partnership inquiry form
- Form validation and success state
- Partnership process steps
- Next steps information

### Contact Page
- Contact information
- Email, phone, location details
- Contact inquiry form
- Form validation and success state
- Social media links
- Partnership cross-link

## Brand Colors

```css
Primary Navy: #0B1F3A
Accent Orange: #FF6B00
White: #FFFFFF
Light Background: #F4F6F8
Dark Text: #101828
```

## Customization

### Updating Colors

Colors are defined in `tailwind.config.ts`. Update the brand colors:

```typescript
colors: {
  brand: {
    navy: '#0B1F3A',
    orange: '#FF6B00',
    // ... other colors
  }
}
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Import `Navbar` and `Footer` components
4. Follow the existing page structure

### Customizing Forms

Edit form fields and validation in:
- `app/partner/page.tsx` - Partnership form
- `app/contact/page.tsx` - Contact form

## Performance

- ⚡ Optimized for fast loading
- 🔍 Server-side rendering
- 📦 Minimal dependencies
- 🎯 Core Web Vitals optimized

## Accessibility

- ✅ WCAG 2.1 compliant
- 🎯 Semantic HTML
- ⌨️ Keyboard navigation support
- 🎨 High contrast design
- 📱 Mobile-friendly

## Future Enhancements

- [ ] Blog/news section
- [ ] Team page
- [ ] Testimonials/case studies
- [ ] API integration for products
- [ ] Email notification system
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Customer login portal

## Configuration

### Environment Variables

Create a `.env.local` file (if needed):

```
NEXT_PUBLIC_SITE_URL=https://majaami.com
```

### SEO Metadata

Update metadata in:
- `app/layout.tsx` - Global metadata
- Individual `page.tsx` files - Page-specific metadata

## Deployment

### Vercel (Recommended)

**Option 1: Connect GitHub Repository**
1. Push this repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import the GitHub repository
5. Configure environment variables (if needed)
6. Click "Deploy"

**Option 2: Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option 3: Manual Deployment**
```bash
npm run build
npm start
```

The `vercel.json` configuration is pre-configured for optimal Vercel deployment.

### Environment Setup

Copy `.env.example` to `.env.local` and update values if needed:
```bash
cp .env.example .env.local
```

### Other Platforms

Works with any hosting that supports Node.js and Next.js:
- **Netlify** - Connect GitHub repo, set build command to `npm run build`
- **AWS** - Deploy to AWS Amplify or EC2
- **DigitalOcean** - Use App Platform
- **Railway** - Connect GitHub and auto-deploy
- **Render** - Similar to Railway

### Build & Start Locally
```bash
npm run build
npm start
```

The production build is optimized and ready for any Node.js hosting platform.

## License

© 2026 Majaami Distribution. All rights reserved.

## Contact & Support

**Email:** hello@majaami.com  
**Location:** The Gambia  
**Website:** majaami.com

---

Built with ❤️ for Majaami Distribution | Moving a Better Tomorrow