Sumit Mahankale - Portfolio Website
A modern, responsive portfolio website built with React.js, showcasing my projects, skills, and experience as a Full-Stack Developer.

Features
Modern Design: Clean, professional interface with smooth animations

Dark/Light Mode: Toggle between dark and light themes

Responsive: Fully responsive design that works on all devices

Interactive Navigation: Smooth scrolling with active section highlighting

Resume Download: One-click resume download functionality

Social Media Integration: Links to LinkedIn, GitHub, and other profiles

Performance Optimized: Fast loading with optimized images and code

Live Demo
View Live Portfolio

Screenshots
Desktop View
![image](https://github.com/user-attachments/assets/c43bf2b0-f472-4306-aba2-6e944b62824c)



Built With
Frontend: React.js, JavaScript (ES6+)

Styling: Tailwind CSS

Icons: Lucide React

Deployment: [Your deployment platform]

Project Structure
java
Copy
Edit
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
Sections
Hero Section: Introduction with profile photo and call-to-action buttons

About: Personal information and key statistics

Experience: Professional work experience and internships

Projects: Showcase of major projects with technologies used

Skills: Technical skills organized by category

Education: Academic background and achievements

Contact: Multiple ways to get in touch

Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/sumitmahankale/portfolio.git
Navigate to the project directory

bash
Copy
Edit
cd portfolio
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
Open http://localhost:3000 to view it in the browser

Building for Production
bash
Copy
Edit
npm run build
This builds the app for production to the build folder.

Configuration
Personal Information
Update the following in ModernPortfolio.js:

Profile Image: Replace Sumit2.jpg with your photo

Contact Information: Update email, phone, and location

Social Media Links: Update URLs in the socialLinks array

Resume Content: Modify the resumeContent in downloadResume function

Projects and Skills
Update projects in ProjectsSection.js

Modify skills in SkillsSection.js

Add your project images to the assets folder

Features Breakdown
Interactive Navigation
Fixed navigation bar with smooth scrolling

Active section highlighting

Mobile-responsive hamburger menu

Theme Toggle
Dark/Light mode switcher

Persistent theme preference

Smooth color transitions

Resume Download
Generates and downloads resume as text file

Includes all relevant information

One-click functionality

Responsive Design
Mobile-first approach

Optimized for all screen sizes

Touch-friendly interactions

Customization
Colors
The website uses a blue-purple gradient theme. To change colors, update the Tailwind classes:

Primary: from-blue-500 to-purple-500

Background: bg-gray-900 (dark) / bg-white (light)

Text: text-gray-300 (dark) / text-gray-600 (light)

Fonts
Currently uses system fonts. To add custom fonts:

Import in index.css

Update Tailwind config

Apply font classes

Adding New Sections
Create section ID in the navigation array

Add corresponding section in the component

Update scroll detection logic

Style according to existing sections

Dependencies
json
Copy
Edit
{
  "react": "^18.0.0",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.0.0"
}
Deployment
Netlify
Build the project: npm run build

Drag and drop the build folder to Netlify

Update the live demo link in this README

Vercel
Connect your GitHub repository

Vercel will automatically build and deploy

Update the live demo link

GitHub Pages
Install gh-pages: npm install --save-dev gh-pages

Add deploy script to package.json

Run: npm run deploy

Performance
Lighthouse Score: 95+ on all metrics

Load Time: < 2 seconds

Mobile Optimized: Perfect mobile experience

SEO Friendly: Proper meta tags and structure

Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

About Me
I'm Sumit Mahankale, a passionate Full-Stack Developer currently pursuing MCA from Indira College of Engineering and Management, Pune. I specialize in:

Backend: Node.js, Express.js, Java, Spring Boot

Frontend: React.js, JavaScript, HTML5, CSS3

Database: MongoDB, MySQL, PostgreSQL

Tools: Git, Postman, Eclipse, STS

Contact
Email: sumitmahankale7@gmail.com

LinkedIn: linkedin.com/in/sumit-mahankale-3885aa277

GitHub: github.com/sumitmahankale

Location: Pune, Maharashtra, India

Acknowledgments
Design inspired by modern portfolio trends

Icons by Lucide

Built with React and Tailwind CSS

If you found this project helpful, please give it a star!
