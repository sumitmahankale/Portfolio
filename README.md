# Sumit Mahankale - Portfolio Website

A modern, responsive portfolio website built with React.js, showcasing my projects, skills, and experience as a Full-Stack Developer.

## Features

- **Modern Design**: Clean, professional interface with smooth animations  
- **Dark/Light Mode**: Toggle between dark and light themes  
- **Responsive**: Fully responsive design that works on all devices  
- **Interactive Navigation**: Smooth scrolling with active section highlighting  
- **Resume Download**: One-click resume download functionality  
- **Social Media Integration**: Links to LinkedIn, GitHub, and other profiles  
- **Performance Optimized**: Fast loading with optimized images and code  

## Live Demo

[View Live Portfolio](https://your-portfolio-url.com)

## Screenshots

### Desktop View  
![image](https://github.com/user-attachments/assets/61d3031a-e08d-4d80-ac91-5c345297bc4b)



## Built With

- **Frontend**: React.js, JavaScript (ES6+)  
- **Styling**: Tailwind CSS  
- **Icons**: Lucide React  
- **Deployment**: [Your deployment platform]  

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ModernPortfolio.js
│   │   ├── SkillsSection.js
│   │   └── ProjectsSection.js
│   ├── assets/
│   │   └── images/
│   │       └── Sumit2.jpg
│   └── App.js
├── public/
├── package.json
└── README.md
```

## Sections

1. **Hero Section**: Introduction with profile photo and call-to-action buttons  
2. **About**: Personal information and key statistics  
3. **Experience**: Professional work experience and internships  
4. **Projects**: Showcase of major projects with technologies used  
5. **Skills**: Technical skills organized by category  
6. **Education**: Academic background and achievements  
7. **Contact**: Multiple ways to get in touch  

## Getting Started

### Prerequisites

- Node.js (v14 or higher)  
- npm or yarn  

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/sumitmahankale/portfolio.git
   ```

2. Navigate to the project directory  
   ```bash
   cd portfolio
   ```

3. Install dependencies  
   ```bash
   npm install
   ```

4. Start the development server  
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser  

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Configuration

### Personal Information

Update the following in `ModernPortfolio.js`:

1. **Profile Image**: Replace `Sumit2.jpg` with your photo  
2. **Contact Information**: Update email, phone, and location  
3. **Social Media Links**: Update URLs in the `socialLinks` array  
4. **Resume Content**: Modify the `resumeContent` in `downloadResume` function  

### Projects and Skills

- Update projects in `ProjectsSection.js`  
- Modify skills in `SkillsSection.js`  
- Add your project images to the assets folder  

## Features Breakdown

### Interactive Navigation

- Fixed navigation bar with smooth scrolling  
- Active section highlighting  
- Mobile-responsive hamburger menu  

### Theme Toggle

- Dark/Light mode switcher  
- Persistent theme preference  
- Smooth color transitions  

### Resume Download

- Generates and downloads resume as text file  
- Includes all relevant information  
- One-click functionality  

### Responsive Design

- Mobile-first approach  
- Optimized for all screen sizes  
- Touch-friendly interactions  

## Customization

### Colors

The website uses a blue-purple gradient theme. To change colors, update the Tailwind classes:  
- Primary: `from-blue-500 to-purple-500`  
- Background: `bg-gray-900` (dark) / `bg-white` (light)  
- Text: `text-gray-300` (dark) / `text-gray-600` (light)  

### Fonts

Currently uses system fonts. To add custom fonts:  
1. Import in `index.css`  
2. Update Tailwind config  
3. Apply font classes  

## Adding New Sections

1. Create section ID in the navigation array  
2. Add corresponding section in the component  
3. Update scroll detection logic  
4. Style according to existing sections  

## Dependencies

```json
{
  "react": "^18.0.0",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.0.0"
}
```

## Deployment

### Netlify

1. Build the project: `npm run build`  
2. Drag and drop the `build` folder to Netlify  
3. Update the live demo link in this README  

### Vercel

1. Connect your GitHub repository  
2. Vercel will automatically build and deploy  
3. Update the live demo link  

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`  
2. Add deploy script to package.json  
3. Run: `npm run deploy`  

## Performance

- Lighthouse Score: 95+ on all metrics  
- Load Time: < 2 seconds  
- Mobile Optimized: Perfect mobile experience  
- SEO Friendly: Proper meta tags and structure  

## Contributing

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About Me

I'm Sumit Mahankale, a passionate Full-Stack Developer currently pursuing MCA from Indira College of Engineering and Management, Pune. I specialize in:

- **Backend**: Node.js, Express.js, Java, Spring Boot  
- **Frontend**: React.js, JavaScript, HTML5, CSS3  
- **Database**: MongoDB, MySQL, PostgreSQL  
- **Tools**: Git, Postman, Eclipse, STS  

## Contact

- **Email**: sumitmahankale7@gmail.com  
- **LinkedIn**: [linkedin.com/in/sumit-mahankale-3885aa277](https://www.linkedin.com/in/sumit-mahankale-3885aa277/)  
- **GitHub**: [github.com/sumitmahankale](https://github.com/sumitmahankale)  
- **Location**: Pune, Maharashtra, India  

## Acknowledgments

- Design inspired by modern portfolio trends  
- Icons by [Lucide](https://lucide.dev/)  
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)  

---

**If you found this project helpful, please give it a star!**
