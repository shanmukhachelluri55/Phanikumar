# Architecture Portfolio - Nalamati Phani Kumar

A modern, high-end architecture student portfolio website featuring a minimal editorial layout, smooth animations, and professional design suitable for juries, competitions, and internship applications.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view your portfolio.

## Features

- **Modern Design**: Architecture-focused minimal design with earthy tones (terracotta/amber/warm whites)
- **Dark/Light Mode**: Toggle between themes with persistence
- **Smooth Animations**: Framer Motion powered scroll-based animations
- **Video Projects**: Showcase your architectural projects with MP4 videos
- **PDF Resume**: Embedded viewer with download functionality
- **Responsive**: Fully responsive across all devices
- **Contact Form**: Built-in form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## Adding Your Content

### 1. Resume PDF
Place your resume as `public/resume.pdf`

### 2. Project Videos
- Place videos in `public/projects/`
- Update `src/components/Projects.tsx` with your video paths

### 3. Profile Picture
Update the image URL in `src/components/Hero.tsx`

### 4. Personal Information
Edit the following files:
- Contact info: `src/components/Contact.tsx`
- Education: `src/components/Education.tsx`
- Projects: `src/components/Projects.tsx`

For detailed customization instructions, see [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Design Principles

- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Colors**: Earthy tones with terracotta/amber accents
- **Layout**: Grid-based inspired by architectural drawings
- **Animations**: Subtle and professional, enhancing UX

## Structure

```
src/
├── components/       # All React components
├── App.tsx          # Main application
├── index.css        # Global styles
└── main.tsx         # Entry point

public/
├── resume.pdf       # Your resume (add this)
└── projects/        # Your project videos (add these)
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - Latest 2 versions

---

**Built for architecture students seeking a premium, professional online presence.**
# Phanikumar
