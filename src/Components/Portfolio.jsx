import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Star, Rocket, Globe, Code, Database, Server } from 'lucide-react';

// Import tech logos (you'll need to install react-icons or use image imports)
import { FaJava, FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';

const CosmicPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  const [stars, setStars] = useState([]);
  const [particles, setParticles] = useState([]);

  // Generate stars and particles on mount
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 4
        });
      }
      setStars(newStars);
    };

    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 20 + 10
        });
      }
      setParticles(newParticles);
    };

    // Add Tailwind CSS and custom styles to document head
    const tailwindLink = document.createElement('link');
    tailwindLink.rel = 'stylesheet';
    tailwindLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
    document.head.appendChild(tailwindLink);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(5px) rotate(-1deg); }
      }
      
      @keyframes blob {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }
      
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes reverse-spin {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-blob { animation: blob 7s infinite; }
      .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
      .animate-fade-in { animation: fade-in 1s ease-out; }
      .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
      .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 0.6s both; }
      .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
    `;
    document.head.appendChild(style);

    generateStars();
    generateParticles();

    // Cleanup function to remove styles when component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      if (document.head.contains(tailwindLink)) {
        document.head.removeChild(tailwindLink);
      }
    };
  }, []);

  // Track mouse position for cosmic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'Java', icon: <FaJava className="w-8 h-8" />, color: 'from-orange-400 to-red-500' },
    { name: 'Spring Boot', icon: <SiSpringboot className="w-8 h-8" />, color: 'from-green-400 to-emerald-500' },
    { name: 'React.js', icon: <FaReact className="w-8 h-8" />, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, color: 'from-green-500 to-lime-500' },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, color: 'from-blue-500 to-indigo-500' },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML/CSS', icon: <div className="flex gap-1"><FaHtml5 className="w-8 h-8" /><FaCss3 className="w-8 h-8" /></div>, color: 'from-pink-400 to-purple-500' },
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, color: 'from-gray-400 to-slate-500' }
  ];

  const projects = [
    {
      name: 'FindMySpot',
      description: 'Real-time parking locator using MERN stack with Leaflet maps',
      tech: ['React.js', 'Node.js', 'MySQL', 'Google Maps'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Splitwise System',
      description: 'Expense management system with Spring Boot backend',
      tech: ['Spring Boot', 'MySQL', 'JSP'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'EduForum',
      description: 'Academic forum with AI chatbot integration',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'AI'],
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const StarField = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const FloatingParticles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );

  const CosmicCursor = () => (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: `${mousePosition.x}%`,
        top: `${mousePosition.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-8 h-8 border-2 border-white rounded-full animate-spin opacity-50" />
      <div className="absolute inset-0 w-2 h-2 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      <StarField />
      <FloatingParticles />
      <CosmicCursor />
      
      {/* Cosmic Background Effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sumit Mahankale
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Hero', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  className={`relative group transition-all duration-300 ${
                    activeSection === item.id ? 'text-white' : 'text-white text-opacity-80 hover:text-white'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin-slow opacity-20" />
              <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-reverse-spin opacity-30" />
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <Rocket className="w-12 h-12 text-purple-600 animate-bounce" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            Sumit Mahankale
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-purple-200 animate-fade-in-delay">
            Digital Space Explorer
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white text-opacity-80 max-w-2xl mx-auto animate-fade-in-delay-2">
            Navigating the cosmic realm of Full Stack Development, crafting stellar applications that bridge the digital universe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                Launch Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-8 py-4 border-2 border-white border-opacity-30 rounded-full text-white font-semibold hover:bg-white hover:bg-opacity-10 hover:border-white hover:border-opacity-50 transition-all duration-300">
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                Contact Mission Control
              </span>
            </button>
          </div>
        </div>
        
        {/* Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 border border-white border-opacity-10 rounded-full animate-spin-slow" />
          <div className="absolute w-96 h-96 border border-purple-400 border-opacity-20 rounded-full animate-reverse-spin" style={{width: '500px', height: '500px'}} />
          <div className="absolute w-96 h-96 border border-pink-400 border-opacity-10 rounded-full animate-spin-slow" style={{width: '600px', height: '600px'}} />
        </div>
      </section>

      {/* Skills Constellation */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Tech Constellation
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative p-6 bg-gradient-to-r ${skill.color} rounded-xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in-up`}>
                  <div className="text-center">
                    <div className="flex justify-center mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl -z-10`} />
                </div>
                
                {/* Connection Lines */}
                {index < skills.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white from-opacity-30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Galaxy */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Stellar Creations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative p-8 bg-gradient-to-br ${project.color} rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-105 transition-all duration-500 animate-fade-in-up overflow-hidden`}>
                  {/* Planet Ring Effect */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-white border-opacity-30 rounded-full animate-spin-slow" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-8 h-8 text-white animate-spin-slow" />
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    </div>
                    
                    <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm text-white border border-white border-opacity-30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="group-btn flex items-center gap-2 text-white hover:text-black bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-90 px-6 py-3 rounded-full transition-all duration-300 border border-white border-opacity-30">
                      <ExternalLink className="w-4 h-4 group-hover:animate-bounce" />
                      Launch Project
                    </button>
                  </div>
                  
                  {/* Cosmic Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Mission Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
              
              <div className="space-y-16">
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-105 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Software Developer Intern</h3>
                      <p className="text-purple-200 mb-2">Techorizon IT Services</p>
                      <p className="text-white text-opacity-80 text-sm">Sept 2023 - Dec 2023</p>
                      <p className="text-white text-opacity-90 mt-3">Led GRSS Hospital Management Project development, implementing full-stack solutions with modern technologies.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Galaxy */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Academic Galaxy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group p-6 bg-gradient-to-br from-blue-600 from-opacity-20 to-purple-600 to-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
                <h3 className="text-xl font-bold">Master of Computer Applications</h3>
              </div>
              <p className="text-purple-200 mb-2">Indira College of Engineering & Management</p>
              <p className="text-white text-opacity-80 text-sm mb-2">2024 - Present</p>
              <p className="text-green-400 font-semibold">CGPA: 8.77/10</p>
            </div>
            
            <div className="group p-6 bg-gradient-to-br from-green-600 from-opacity-20 to-blue-600 to-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-blue-400 animate-pulse" />
                <h3 className="text-xl font-bold">Bachelor of Computer Applications</h3>
              </div>
              <p className="text-blue-200 mb-2">Pratibha College of Commerce & Computer Studies</p>
              <p className="text-white text-opacity-80 text-sm mb-2">2020 - 2023</p>
              <p className="text-green-400 font-semibold">CGPA: 7.77/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Hub */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Communication Hub
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group text-center p-6 bg-gradient-to-br from-purple-600 from-opacity-20 to-pink-600 to-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:animate-bounce" />
                <h3 className="text-lg font-semibold mb-2">Quantum Phone</h3>
                <p className="text-white text-opacity-80">+91 8208367017</p>
              </div>
              
              <div className="group text-center p-6 bg-gradient-to-br from-blue-600 from-opacity-20 to-cyan-600 to-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:animate-pulse" />
                <h3 className="text-lg font-semibold mb-2">Cosmic Email</h3>
                <p className="text-white text-opacity-80 break-all">sumitmahankale7@gmail.com</p>
              </div>
              
              <div className="group text-center p-6 bg-gradient-to-br from-green-600 from-opacity-20 to-emerald-600 to-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:scale-105 transition-all duration-300">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:animate-bounce" />
                <h3 className="text-lg font-semibold mb-2">Space Station</h3>
                <p className="text-white text-opacity-80">Talegaon-dabhade, Pune-410506</p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                  Send Message to Space
                  <Star className="w-6 h-6 group-hover:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black bg-opacity-30 backdrop-blur-sm border-t border-white border-opacity-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-opacity-60 mb-4">
            © 2024 Sumit Mahankale - Digital Space Explorer
          </p>
          <p className="text-white text-opacity-40 text-sm">
            Crafted with cosmic energy and stellar dedication ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CosmicPortfolio;