# Architecture Portfolio - User Guide

## Overview
This is a premium, production-ready architecture student portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. It features smooth animations, dark/light mode, responsive design, and a professional, minimalist aesthetic perfect for architecture presentations.

## Features
- ✨ Smooth scroll-based animations
- 🌓 Dark/Light mode toggle with persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎬 Video project showcase support
- 📄 PDF resume viewer and download
- 📧 Contact form with validation
- 🎨 Architecture-focused design with earthy tones
- ⚡ Fast and optimized performance

## How to Add Your Assets

### 1. Profile Picture
- Replace the profile image URL in `src/components/Hero.tsx`
- Look for the line with `img src="https://images.pexels.com/..."`
- Replace it with your own image URL or place your image in the `public` folder and reference it as `/your-image.jpg`

### 2. Resume PDF
- Place your resume PDF file in the `public` folder
- Name it `resume.pdf` OR
- Update the `resumePath` variable in `src/components/Resume.tsx` to match your filename

### 3. Project Videos
- Place your project video files (MP4 format) in the `public` folder
- For example: `public/projects/tiny-library.mp4`
- Update the `videoUrl` in `src/components/Projects.tsx`:

```typescript
const projectsData = [
  {
    title: 'Tiny Library',
    subtitle: 'Volume Zero 2025',
    description: 'Your project description...',
    videoUrl: '/projects/tiny-library.mp4', // Add your video path here
    thumbnail: '/projects/tiny-library-thumbnail.jpg',
  },
  // Add more projects...
];
```

### 4. Project Thumbnails
- Place thumbnail images in the `public` folder
- Update the `thumbnail` property in the projects array
- Recommended size: 1280x720px for best quality

## Customization Guide

### Updating Personal Information

#### Hero Section (`src/components/Hero.tsx`)
- Name: Line 53
- Title: Line 64
- Philosophy quote: Lines 75-80

#### About Section (`src/components/About.tsx`)
- The "About Me" text is already set with your content
- Update statistics in lines 56-96 if needed

#### Education (`src/components/Education.tsx`)
- Update the `educationData` array (lines 12-35) with your educational background

#### Projects (`src/components/Projects.tsx`)
- Update the `projectsData` array (lines 11-30) with your projects
- Add as many projects as you want

#### Contact Information (`src/components/Contact.tsx`)
- Update email, phone, and address in the `contactInfo` array (lines 21-41)

### Color Customization

The portfolio uses an earthy color palette with terracotta/amber tones. To change colors:

1. **Primary Color (Amber)**: Search for `amber-` in all component files and replace with your preferred color
2. **Background Colors**:
   - Light mode: `stone-50`, `white`
   - Dark mode: `zinc-900`, `zinc-800`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `src/App.tsx`
3. Add it to the return statement
4. Add a navigation link in `src/components/Navigation.tsx`

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Navigation bar with dark mode toggle
│   ├── Hero.tsx         # Hero section with profile image
│   ├── About.tsx        # About section
│   ├── Education.tsx    # Education timeline
│   ├── Projects.tsx     # Projects showcase with videos
│   ├── Resume.tsx       # PDF resume viewer
│   ├── Achievements.tsx # Awards and competitions
│   ├── Skills.tsx       # Software skills grid
│   ├── Languages.tsx    # Languages section
│   ├── Contact.tsx      # Contact form and information
│   └── Footer.tsx       # Footer component
├── App.tsx              # Main application component
├── index.css            # Global styles and Tailwind
└── main.tsx             # Application entry point
```

## Tips for Best Results

1. **Images**: Use high-quality images (min 1920px width for hero)
2. **Videos**: Keep videos under 50MB for faster loading, use MP4 format
3. **PDF**: Keep resume PDF under 5MB
4. **Profile Photo**: Use a professional photo with good lighting
5. **Project Descriptions**: Keep them concise but informative
6. **Mobile Testing**: Always test on mobile devices before deploying

## Technical Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The portfolio is optimized for performance with:
- Code splitting
- Lazy loading
- Optimized images
- Minimal dependencies
- Smooth animations at 60fps

## Need Help?

If you need to modify something specific:
1. Check the component file in `src/components/`
2. Look for the section you want to change
3. Update the text, URLs, or data arrays
4. Save and the changes will appear immediately in dev mode

---

**Built with attention to detail for architecture students and professionals.**
