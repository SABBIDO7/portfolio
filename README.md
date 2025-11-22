# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing professional experience, personal projects, education, and skills.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue) ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4) ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF)

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Type-Safe**: Built with TypeScript for enhanced development experience and reliability
- **Dynamic Content**: All content is driven by a single JSON configuration file
- **Animated Text**: Typewriter effects for engaging user experience
- **Image Carousel**: Smooth project screenshot navigation with autoplay support
- **Modern UI Components**: Utilizing Shadcn/ui component library
- **Timeline View**: Professional and educational journey displayed in an elegant timeline
- **Dark Theme**: Professional dark theme with custom color palette
- **Accessible**: Keyboard navigation and screen reader friendly

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [JSON Data Architecture](#-json-data-architecture)
- [Getting Started](#-getting-started)

## 🛠 Tech Stack

### Core Technologies

- **React 18.3** - UI library
- **TypeScript 5.5** - Type-safe JavaScript
- **Vite 5.4** - Build tool and dev server
- **Tailwind CSS 4.0** - Utility-first CSS framework

### UI Components & Libraries

- **Shadcn/ui** - Reusable component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel functionality
- **React Type Animation** - Typewriter text effects

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variant management

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/
│   │   ├── data/
│   │   │   └── data_source.json          # Main data configuration
│   │   └── images/
│   │       ├── projects_images/          # Project screenshots
│   │       ├── profileImage.jpeg         # Profile picture
│   │       └── CV.pdf                    # Resume/CV file
│   ├── components/
│   │   ├── custom/
│   │   │   ├── CustomButton.tsx          # Reusable button component
│   │   │   └── CustomCard.tsx            # Experience/project card
│   │   └── ui/                           # Shadcn UI components
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── dialog.tsx
│   │       ├── separator.tsx
│   │       └── sheet.tsx
│   ├── models/
│   │   └── models.d.ts                   # TypeScript type definitions
│   ├── sections/
│   │   ├── Header.tsx                    # Navigation header
│   │   ├── Footer.tsx                    # Footer with contact info
│   │   └── app_core/
│   │       ├── AppCoreMain.tsx           # Main content wrapper
│   │       └── sub_sections/
│   │           ├── landing_section/
│   │           │   ├── MainLandingSection.tsx
│   │           │   └── components/
│   │           │       ├── AboutSection.tsx
│   │           │       └── ContactInfo.tsx
│   │           ├── projects_section/
│   │           │   ├── MainExperiencesSection.tsx
│   │           │   └── components/
│   │           │       └── JourneyTimeline.tsx
│   │           ├── EducationSection.tsx
│   │           └── SkillsSection.tsx
│   ├── lib/
│   │   └── utils.ts                      # Utility functions
│   ├── App.tsx                           # Main App component
│   ├── main.tsx                          # Entry point
│   └── index.css                         # Global styles
├── public/                               # Static assets
├── .gitignore                            # Git ignore rules
├── components.json                       # Shadcn config
├── eslint.config.js                      # ESLint configuration
├── package.json                          # Dependencies
├── tsconfig.json                         # TypeScript config
├── vite.config.ts                        # Vite configuration
└── README.md                             # This file
```

## 📊 JSON Data Architecture

The entire portfolio content is driven by a single JSON file located at `src/assets/data/data_source.json`. This makes updating content easy without touching the code.

### Data Structure Overview

```typescript
{
  "type_animation_list": TypeAnimation[],
  "personal_info": PersonalInfo,
  "contact_info": ContactInfo,
  "skills": Skill[],
  "educations": Experience[],
  "experiences": Experience[],
  "personalProjects": PersonalProject[]
}
```

### Field Descriptions

| Field          | Type      | Required | Description                          |
| -------------- | --------- | -------- | ------------------------------------ |
| `company`      | string    | Optional | Company/Institution name             |
| `title`        | string    | Required | Job title or degree name             |
| `location`     | string    | Optional | City, Country                        |
| `startDate`    | string    | Required | Start date (formatted as "Mon YYYY") |
| `endDate`      | string    | Optional | End date or "Present"                |
| `description`  | string    | Required | Brief description of role/project    |
| `projects`     | Project[] | Optional | Array of related projects            |
| `technologies` | string[]  | Required | List of technologies used            |
| `screenshots`  | string[]  | Optional | Array of image filenames             |
| `demoLink`     | string    | Optional | Live demo URL                        |
| `githubLink`   | string    | Optional | GitHub repository URL                |

### Adding Images

1. Place project screenshots in `src/assets/images/projects_images/`
2. Reference them in the JSON by filename only: `"screenshots": ["my_image.png"]`
3. Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`

### TypeScript Types

All data structures are type-safe. See `src/models/models.d.ts` for complete type definitions:

```typescript
interface Project {
  name: string
  description: string
  technologies: string[]
  screenshots?: string[]
  demoLink?: string
  githubLink?: string
}

interface Experience {
  company?: string
  title: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  projects?: Project[]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SABBIDO7/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## ⚙️ Configuration

### Customizing Content

1. **Update personal information**

   - Edit `src/assets/data/data_source.json`
   - Follow the [JSON Data Architecture](#-json-data-architecture) guide

2. **Replace images**

   - Profile: `src/assets/images/profileImage.jpeg`
   - CV: `src/assets/images/CV.pdf`
   - Project screenshots: `src/assets/images/projects_images/`

3. **Customize colors**
   - Edit CSS variables in `src/index.css`
   - Main colors: `--color-bg-primary`, `--color-bg-secondary`, `--color-text-primary`

### Adding Shadcn Components

```bash
npx shadcn@latest add [component-name]
```

Example:

```bash
npx shadcn@latest add accordion
```

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

**Walid Sabbidine**

- LinkedIn: [walid-sabbidine](https://www.linkedin.com/in/walid-sabbidine-aa220322a)
- GitHub: [@SABBIDO7](https://github.com/SABBIDO7)
- Email: sabbidinewalid12345@gmail.com

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icon set
- [React Type Animation](https://github.com/maxeth/react-type-animation) - Text animations

---

⭐ If you find this project helpful, please consider giving it a star!
