
import SkillsSection from './SkillSection';
import ProjectsSection from './ProjectSection';
import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Github, Linkedin, Mail, MapPin, ExternalLink, 
  Award, Briefcase, GraduationCap, Code, Database, Globe, Server,
  Star, Rocket, ChevronDown, Menu, X, ArrowRight, Twitter, Instagram, Download
} from 'lucide-react';

const ModernPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Update this path to your actual image file
  const profileImageSrc = "Sumit2.jpg"; // Change this to your image path

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Download Resume Function
  const downloadResume = () => {
    // Create resume content as text
    const resumeContent = `
SUMIT MAHANKALE
+91-8208367017 | sumitmahankale7@gmail.com
LinkedIn: https://www.linkedin.com/in/sumit-mahankale-3885aa277/
GitHub: https://github.com/sumitmahankale
Talegaon-dabhade, Pune-410506

INTERNSHIP
Software Developer                                                    09/2023 – 12/2023
Techorizon IT Services Pvt Ltd.
• Contributed to the development of the GRSS Hospital Management Project, gaining valuable hands-on experience with front-end technologies.
• Collaborated with the development team to implement user interface enhancements.
• Utilized front-end technologies to improve the project's usability and aesthetics.

EDUCATION
MCA                                                                   08/2024 – Present
Indira College of Engineering and Management Pune
• CGPA (Sem-I): 8.77/10

Computer Application                                                  08/2020 – 04/2023
Pratibha College of Computer Studies Pune
• CGPA: 7.77/10

HSC                                                                   2020
Prerna Junior College Pune
• Marks: 52%

SSC                                                                   2018
Sant Tukaram Vidyalaya Pune
• Marks: 79.80%

SKILLS
Backend: OOPs, Node.js, Express, Java, Spring Boot, Hibernate
Frontend: HTML, CSS, JavaScript, React, Bootstrap
Database: MongoDB, MySQL
Tools: Git, Postman, Eclipse IDEA, STS IDEA

PROJECTS
FindMySpot: Real-Time Parking Locator
• Developed a real-time parking locator using MERN stack, Leaflet, and Google Maps. Enabled users to find and book nearby parking spots with authentication and interactive maps.
• Technologies: React.js, Node.js, Express.js, MySQL, Leaflet, Google Maps, Git

Snappy-ChatApp: Real-Time Chat Application
• Built a real-time chat application using MERN stack with Socket.io for instant messaging. Implemented user authentication, one-to-one and group chats, message notifications, and media sharing.
• Technologies: React.js, Node.js, Express.js, MongoDB, Socket.io, Redux, Git

EduForum: Smart Academic Forum & Chatbot System
• Engineered an educational platform with AI-powered chatbot, real-time forums, and department-specific notice boards for seamless academic communication.
• Technologies: React.js, Node.js, Express.js, PostgreSQL, Git

EXTRA-CURRICULAR
• Published a research paper titled "The Impact of Smart Parking Systems on Urban Traffic Congestion: A Comprehensive Analysis" – focused on evaluating the role of smart parking in reducing city traffic.
• Lead Coordinator for Tekskhetra 2025 – managed and organized multiple inter-college technical events with a team of 20+ volunteers.
    `;

    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sumit_Mahankale_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Creative Code Logo Component
  const CodeLogo = ({ size = "w-8 h-8" }) => (
    <div className={`${size} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#codeGradient)" />
        <path d="M30 35 L20 50 L30 65" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M70 35 L80 50 L70 65" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M55 30 L45 70" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Indira College of Engineering and Management, Pune",
      period: "Aug 2024 - Present",
      score: "CGPA: 8.77/10",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Pratibha College of Computer Studies, Pune",
      period: "Aug 2020 - Apr 2023",
      score: "CGPA: 7.77/10",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: "Projects", value: "5+", icon: <Rocket className="w-6 h-6" /> },
    { label: " Current CGPA", value: "8.77", icon: <Star className="w-6 h-6" /> },
    { label: "Experience", value: "3+ months", icon: <Briefcase className="w-6 h-6" /> },
    { label: "Technologies", value: "10+", icon: <Code className="w-6 h-6" /> }
  ];

  // Social media links - you can update these later
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/sumit-mahankale-3885aa277/', // Update this
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/sumitmahankale', // Update this
      color: 'hover:text-gray-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/sumitmahankale', // Update this
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com', // Update this
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? darkMode 
            ? 'bg-gray-900 bg-opacity-98 backdrop-blur-md shadow-lg border-b border-gray-700' 
            : 'bg-white bg-opacity-98 backdrop-blur-md shadow-lg border-b border-gray-200'
          : darkMode
            ? 'bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-800'
            : 'bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <CodeLogo size="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="ml-2 sm:ml-3 text-base sm:text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
               
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase();
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-blue-500'
                        : darkMode 
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Download Resume Button */}
              <button
                onClick={downloadResume}
                className={`p-1.5 sm:p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 text-blue-400 hover:bg-gray-700 hover:text-blue-300' 
                    : 'bg-gray-100 text-blue-600 hover:bg-gray-200 hover:text-blue-700'
                }`}
                aria-label="Download resume"
                title="Download Resume"
              >
                <Download className="w-4 h-4" />
              </button>
              
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-1.5 sm:p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`md:hidden p-1.5 sm:p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden absolute top-full left-0 right-0 mt-1 mx-4 rounded-lg shadow-lg border transition-all duration-200 ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <div className="py-2">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => {
                  const sectionId = item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase();
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(sectionId)}
                      className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-blue-500 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20'
                          : darkMode
                            ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        {isActive && <div className="w-1 h-1 bg-blue-500 rounded-full mr-3" />}
                        {item}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Profile Photo */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="lg:hidden w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <CodeLogo size="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Hello, i am</h4>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Sumit Mahankale</h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-8 font-semibold">
                Full-Stack Developer
              </div>
              
              <p className={`text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate about crafting innovative digital solutions with modern technologies. 
                Specializing in full-stack development with MERN and Spring Boot.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                    View My Work
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-500 text-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                >
                  <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Get In Touch
                  </span>
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start mb-12 sm:mb-16">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } ${social.color} shadow-lg hover:shadow-xl`}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right Side - Profile Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-2xl shadow-2xl relative overflow-hidden">
                <img 
                  src={profileImageSrc} 
                  alt="Sumit Mahankale" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 sm:py-16 lg:py-20 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate software developer currently pursuing Master's in Computer Applications 
                from Indira College of Engineering and Management, Pune. With strong foundation in 
                full-stack development, I create innovative solutions using modern technologies.
              </p>
              <br></br>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                
                <a href="mailto:sumitmahankale7@gmail.com" className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base`}>
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a href="https://linkedin.com/in/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base`}>
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base`}>
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300`}>
                  <div className="text-blue-500 mb-2">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-500 mb-1">{stat.value}</div>
                  <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`p-6 sm:p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Software Developer Intern</h3>
                  <p className="text-blue-500 font-semibold mb-1 text-sm sm:text-base">Techorizon IT Services Pvt Ltd.</p>
                  <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>September 2023 - December 2023</p>
                  <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Led development of GRSS Hospital Management Project, gaining experience with enterprise-level 
                    application development and modern web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection darkMode={darkMode} />

      {/* Skills Section */}
      <SkillsSection darkMode={darkMode} />

      {/* Education Section */}
      <section id="education" className={`py-12 sm:py-16 lg:py-20 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
    <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">


          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {education.map((edu) => (
             <div
  key={edu.degree}
  className={`p-4 sm:p-6 my-2 sm:my-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] will-change-transform`}
>

                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shrink-0">
                    <div className="text-white">{edu.icon}</div>
                  </div>
              
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-blue-500 font-semibold mb-1 text-sm sm:text-base">{edu.institution}</p>
                    <p className={`text-xs sm:text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</p>
                    <p className="text-blue-500 font-semibold text-sm sm:text-base">{edu.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <a href="mailto:sumitmahankale7@gmail.com" className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm sm:text-base">Email</h3>
                <p className={`text-xs sm:text-sm break-all ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>sumitmahankale7@gmail.com</p>
              </a>
              
              <a href="https://www.linkedin.com/in/sumit-mahankale-3885aa277/" target="_blank" rel="noopener noreferrer" className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm sm:text-base">LinkedIn</h3>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Connect with me</p>
              </a>
              
              <a href="https://github.com/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <Github className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm sm:text-base">GitHub</h3>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>View my projects</p>
              </a>
              
              <div className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-sm sm:text-base">Location</h3>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pune, Maharashtra</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="mailto:sumitmahankale7@gmail.com" className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Let's Start a Conversation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 sm:py-8 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-4">
            <CodeLogo size="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
          </div>
          
          <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 Sumit Mahankale.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;