# a-jutha.fr

A modern, responsive portfolio website built with React and styled with Tailwind CSS. This project showcases web development skills and serves as a professional online presence.

## Live Demo

Visit the live portfolio at: [www.a-jutha.fr](https://www.a-jutha.fr)

## Features

- **Modern React App**: Built with React 18 and Create React App
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Architecture**: Modular, reusable UI components
- **Custom Styling**: Tailored color palette and design system
- **Interactive Elements**: Smooth scrolling navigation with react-scroll
- **Icons**: React Icons library for consistent iconography
- **Performance Optimized**: Production build with minification and optimization
- **SEO Ready**: Meta tags and Open Graph support

## Technologies Used

- **Frontend**: React 18, JavaScript/JSX
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Navigation**: React Scroll
- **Testing**: Jest, React Testing Library
- **Deployment**: GitHub Pages

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── FortyTwo.jsx
│   │   │   ├── OpenClassrooms.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── index.js
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── NavLink.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── SectionHeader.jsx
│   │       └── index.js
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Components

### Sections

- **Navbar**: Navigation bar with smooth scroll links
- **Home**: Landing section with introduction
- **Skills**: Display of technical skills and competencies
- **FortyTwo**: Information about 42 school experience
- **OpenClassrooms**: OpenClassrooms projects and achievements
- **Contact**: Contact form and information

### UI Components

- **Button**: Reusable button component with consistent styling
- **Input**: Form input component with Tailwind styling
- **NavLink**: Navigation link component for the navbar
- **ProjectCard**: Card component for displaying projects
- **SectionHeader**: Consistent section header component

## Design System

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: `#0a192f` (Dark navy)
- **Secondary**: `#fff` (White)
- **Accent**: `#a4b753` (Olive green)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Available Scripts

- `npm start` - Runs the app in development mode at [http://localhost:3000](http://localhost:3000)
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run deploy` - Deploys the app to GitHub Pages
