# Ralph Laurenz Timbol — Developer Portfolio

A modern, professional developer portfolio built with **Next.js 14 (App Router)** and **Tailwind CSS**, optimized for deployment on Vercel.

## ✨ Features

- **Dark mode** by default with a cyan/teal accent palette
- **Animated particle canvas** in the hero section
- **Smooth animations** with CSS keyframes
- **Sticky navbar** with scroll-based styling
- **Project filter** tabs for category browsing
- **Responsive** — mobile-first design
- **SEO-friendly** with proper meta tags
- **Component-based** architecture

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, design tokens
│   ├── layout.tsx         # Root layout with metadata/SEO
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── ui/
│   │   ├── Badge.tsx      # Reusable badge/tag component
│   │   ├── Section.tsx    # Section wrapper
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── Hero.tsx       # Hero with particle animation
│   │   ├── About.tsx      # About me section
│   │   ├── Skills.tsx     # Categorized skill badges
│   │   ├── Projects.tsx   # Featured + placeholder projects
│   │   ├── Experience.tsx # Work history
│   │   ├── Education.tsx  # Academic background
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx    # Contact links
│   ├── Navbar.tsx         # Sticky navigation
│   └── Footer.tsx
└── lib/
    └── utils.ts           # cn() utility
```

## 🚀 Running Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

```bash
# 1. Clone or unzip the project
cd ralph-timbol-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will auto-detect Next.js and configure everything.

### Option 2: GitHub + Vercel Dashboard

1. Push code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your portfolio is live in ~60 seconds ✅

## 🛠 Customization

| What to update | File |
|---|---|
| Personal info / tagline | `src/components/sections/Hero.tsx` |
| About me paragraph | `src/components/sections/About.tsx` |
| Skills list | `src/components/sections/Skills.tsx` |
| Featured project | `src/components/sections/Projects.tsx` |
| Work experience | `src/components/sections/Experience.tsx` |
| Education details | `src/components/sections/Education.tsx` |
| Certifications | `src/components/sections/Certifications.tsx` |
| Contact links | `src/components/sections/Contact.tsx` |
| SEO metadata | `src/app/layout.tsx` |
| Colors & fonts | `tailwind.config.ts` + `src/app/globals.css` |

## 🎨 Design System

- **Display font**: Syne (headings)
- **Body font**: DM Sans (body text)
- **Mono font**: JetBrains Mono (labels, code, tags)
- **Accent color**: `#6ee7f7` (cyan)
- **Gold accent**: `#f0c060` (awards, certifications)
- **Background**: `#0a0a0f` (near-black)

## 📄 License

Personal portfolio — all rights reserved to Ralph Laurenz Cunanan Timbol.
