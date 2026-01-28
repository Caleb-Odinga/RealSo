
A professional, public-facing corporate website for a regional trade facilitation company. Built with React, Vite, and Tailwind CSS.

## Features

- **Clean, Modern Design**: Minimalist layout with plenty of white space and clear visual hierarchy
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Fast Performance**: Optimized build with Vite for lightning-fast load times
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **SEO Optimized**: Meta tags, semantic structure, and optimized content
- **Production Ready**: Clean codebase ready for deployment

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing (configured but using single page for now)

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Web_Project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory, ready for deployment to any static hosting service.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Web_Project/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Section.jsx
│   ├── sections/         # Page sections
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles and Tailwind imports
├── index.html            # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Design System

### Colors

- **Primary**: Blue (`primary-600` - #0284c7)
- **Accent**: Purple (`accent-500` - #d946ef)
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (3xl-6xl)
- **Body**: Regular weight, readable sizes (base-lg)

### Spacing

- Consistent spacing scale using Tailwind's default scale
- Section padding: `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl`

## Customization

### Updating Content

- **Hero Section**: Edit `src/sections/Hero.jsx`
- **Services**: Modify the services array in `src/sections/Services.jsx`
- **About Section**: Update content in `src/sections/About.jsx`
- **Contact Info**: Change contact details in `src/sections/Contact.jsx`
- **Footer Links**: Update links in `src/components/Footer.jsx`

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color palette
- **Typography**: Update font imports in `index.html` and font family in `tailwind.config.js`
- **Components**: All components use Tailwind utility classes for easy customization

### Branding

- Update the logo text in `src/components/Navbar.jsx`
- Replace placeholder contact information with actual details
- Update social media links in the footer

## Deployment

This website can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket
- **Any static host**: Upload the contents of the `dist` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size with Vite
- Minimal dependencies
- No heavy animations or libraries
- Fast initial load time
- Lazy loading ready (can be added if needed)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast ratios
- Responsive text sizing

## SEO

- Semantic HTML5 elements
- Meta tags in `index.html`
- Descriptive page title
- Alt text ready for images (add when images are included)
- Clean URL structure
- Fast page load times

## License

This project is proprietary and confidential.

## Support

For questions or issues, please contact the development team.

---

Built with ❤️ using React, Vite, and Tailwind CSS

