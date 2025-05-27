import SkillsSection from './SkillSection';
import ProjectsSection from './ProjectSection';
import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Github, Linkedin, Mail, MapPin, ExternalLink, 
  Award, Briefcase, GraduationCap, Code, Database, Globe, Server,
  Star, Rocket, ChevronDown, Menu, X, ArrowRight, Camera, Upload
} from 'lucide-react';

const ModernPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [profileImage, setProfileImage] = useState(null);

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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
    { label: "CGPA", value: "8.77", icon: <Star className="w-6 h-6" /> },
    { label: "Experience", value: "3+ months", icon: <Briefcase className="w-6 h-6" /> },
    { label: "Technologies", value: "10+", icon: <Code className="w-6 h-6" /> }
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
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <CodeLogo size="w-8 h-8" />
              <span className="ml-3 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Sumit Mahankale
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
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
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
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-200 ${
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
                className={`md:hidden p-2 rounded-lg transition-colors ${
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

      {/* Hero Section with Photo Space */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <div className="lg:hidden w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <CodeLogo size="w-12 h-12" />
              </div>
              <h4 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-2">Hello, i am</h4>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Sumit Mahankale</h1>
              <div className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8 font-semibold">
                Full-Stack Developer
              </div>
              
              <p className={`text-lg mb-12 max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate about crafting innovative digital solutions with modern technologies. 
                Specializing in full-stack development with MERN and Spring Boot.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full transition-transform hover:scale-105"
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <Rocket className="w-5 h-5" />
                    View My Work
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </span>
                </button>
              </div>
            </div>
            
            {/* Right Side - Photo Space */}
            <div className="flex justify-center lg:justify-end">
              <div className={`w-80 h-80 lg:w-96 lg:h-96 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center shadow-2xl relative overflow-hidden group`}>
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Sumit Mahankale" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Camera className="w-10 h-10 text-white" />
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Upload Your Photo
                    </p>
                  </div>
                )}
                
                {/* Upload overlay */}
                <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-black'} bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}>
                  <label className="cursor-pointer flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    <Upload className="w-4 h-4" />
                    {profileImage ? 'Change Photo' : 'Upload Photo'}
                    <input 
                      type="file" 
                      accept="E:\Projects\Portfolio\public\Sumit.png" 
                      onChange={handleImageUpload}
                      className="hidden" 
                    />
                  </label>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate software developer currently pursuing Master's in Computer Applications 
                from Indira College of Engineering and Management, Pune. With strong foundation in 
                full-stack development, I create innovative solutions using modern technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="mailto:sumitmahankale7@gmail.com" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a href="https://linkedin.com/in/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300`}>
                  <div className="text-blue-500 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-blue-500 mb-1">{stat.value}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-start gap-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Software Developer Intern</h3>
                  <p className="text-blue-500 font-semibold mb-1">Techorizon IT Services Pvt Ltd.</p>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>September 2023 - December 2023</p>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
      <section id="education" className={`py-20 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <div className="text-white">{edu.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-blue-500 font-semibold mb-1">{edu.institution}</p>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</p>
                    <p className="text-blue-500 font-semibold">{edu.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <a href="mailto:sumitmahankale7@gmail.com" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>sumitmahankale7@gmail.com</p>
              </a>
              
              <a href="https://linkedin.com/in/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <Linkedin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Connect with me</p>
              </a>
              
              <a href="https://github.com/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <Github className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">GitHub</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>View my projects</p>
              </a>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Location</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pune, Maharashtra</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="mailto:sumitmahankale7@gmail.com" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
                Let's Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <CodeLogo size="w-8 h-8 mx-auto" />
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sumitmahankale" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sumitmahankale7@gmail.com" className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 Sumit Mahankale.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;