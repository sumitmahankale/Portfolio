import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Github, Linkedin, Mail, MapPin, ExternalLink, 
  Award, Briefcase, GraduationCap, Code, Database, Globe, Server,
  Star, Rocket, ChevronDown, Menu, X, ArrowRight
} from 'lucide-react';

const ModernPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  // Technology Icons with SVG logos
  const TechIcon = ({ name, className = "w-8 h-8" }) => {
    const techLogos = {
      'React.js': (
        <svg viewBox="0 0 24 24" className={className} fill="#61DAFB">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 13.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.83.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      ),
      'Node.js': (
        <svg viewBox="0 0 24 24" className={className} fill="#68A063">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v7.46c0 .83-.87 1.65-2.19.95l-2.04-1.18c-.11-.06-.18-.18-.18-.31V7.78c0-.13.07-.25.18-.31l7.44-4.3c.11-.06.24-.06.35 0l7.44 4.3c.11.06.18.18.18.31v8.58c0 .13-.07.25-.18.31l-7.44 4.3c-.11.06-.24.06-.35 0L9.28 19.4c-.09-.05-.20-.05-.29 0-.32.17-.38.21-.67.48-.14.13-.35.36-.21.46l2.48 1.45c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.3c.48-.28.78-.8.78-1.36V7.41c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
          <path d="M14.1 15.66c-1.25 0-2.24-.56-2.24-1.25 0-.12.1-.22.22-.22h.89c.11 0 .19.08.21.18.14.35.59.47 1.01.47.62 0 .90-.28.90-.70 0-.32-.12-.55-.95-.71-1.4-.27-2.26-.73-2.26-1.79 0-1.06.89-1.79 2.38-1.79 1.67 0 2.5.58 2.6 1.82 0 .06-.02.13-.07.17-.05.04-.11.07-.18.07h-.89c-.1 0-.19-.07-.21-.17-.23-.51-.78-.67-1.25-.67-.92 0-1.03.32-1.03.56 0 .36.13.46 1.02.66 1.78.4 2.24.85 2.24 1.84-.01 1.27-.97 1.91-2.39 1.91z"/>
        </svg>
      ),
      'Express.js': (
        <svg viewBox="0 0 24 24" className={className} fill="#000000">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-6.454 3.078-14.677-2.548-8.085-6.617z"/>
        </svg>
      ),
      'MySQL': (
        <svg viewBox="0 0 24 24" className={className} fill="#4479A1">
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.07-.08-.99-.248-.291zM18.79 1.224c-1.47 0-2.467.793-2.467 1.847 0 .24.045.463.125.66.285.707.843 1.22 1.487 1.22.644 0 1.202-.513 1.487-1.22.08-.197.125-.42.125-.66 0-1.054-.997-1.847-2.467-1.847zm1.93 7.138c-.34 0-.686.034-1.03.1v.014h.013c.054.107.146.18.214.274.054.107.1.214.154.32l.014-.014c.094-.067.14-.173.14-.334-.04-.066-.08-.133-.248-.293zM1.5 3.5c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"/>
          <path d="M5.405 16.362c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.07-.08-.99-.248-.291z"/>
        </svg>
      ),
      'Spring Boot': (
        <svg viewBox="0 0 24 24" className={className} fill="#6DB33F">
          <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-.888-1.04 6.57 6.57 0 0 0-1.218-.854c-4.44-2.447-10.213 1.222-10.213 6.299 0 6.108 5.573 8.027 5.573 8.027a11.91 11.91 0 0 1-1.021-.6c-5.321-3.886-5.569-9.99-1.021-13.51C13.965-1.183 20.247 3.113 20.247 3.113z"/>
        </svg>
      ),
      'Java': (
        <svg viewBox="0 0 24 24" className={className} fill="#007396">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      ),
      'JavaScript': (
        <svg viewBox="0 0 24 24" className={className} fill="#F7DF1E">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      'HTML5': (
        <svg viewBox="0 0 24 24" className={className} fill="#E34F26">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      'CSS3': (
        <svg viewBox="0 0 24 24" className={className} fill="#1572B6">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      'PostgreSQL': (
        <svg viewBox="0 0 24 24" className={className} fill="#336791">
          <path d="M23.111 7.95c-.84-4.606-3.298-6.739-7.335-6.739-1.19 0-2.286.166-3.288.498-.1-.746-.297-1.54-.594-2.384C11.338-2.121 10.05-2.615 8.403-2.615c-2.65 0-4.79 1.19-6.404 3.565C.786 2.34.29 3.73.29 5.213c0 3.288 1.786 6.1 4.74 7.476.297 1.19.694 2.284 1.19 3.288 1.094 2.185 2.78 4.07 5.058 5.66 1.984 1.388 4.17 2.086 6.554 2.086 1.488 0 2.88-.297 4.07-.891 1.488-.694 2.681-1.786 3.575-3.267.794-1.389 1.191-2.977 1.191-4.766 0-.794-.1-1.588-.298-2.383.795-1.09 1.19-2.284 1.19-3.575 0-2.085-.594-3.774-1.786-5.06-.894-.992-2.086-1.488-3.575-1.488z"/>
        </svg>
      ),
      'MongoDB': (
        <svg viewBox="0 0 24 24" className={className} fill="#47A248">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
        </svg>
      ),
      'Git': (
        <svg viewBox="0 0 24 24" className={className} fill="#F05032">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      ),
      'GitHub': (
        <svg viewBox="0 0 24 24" className={className} fill="#181717">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    };

    return (
      <div className="group relative inline-block">
        {techLogos[name] || <Code className={className} />}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
          {name}
        </div>
      </div>
    );
  };

  const projects = [
    {
      title: "FindMySpot",
      subtitle: "Real-Time Parking Locator",
      description: "A comprehensive parking solution using MERN stack with real-time availability tracking and interactive maps.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      icon: <MapPin className="w-6 h-6" />,
      link: "https://github.com/sumitmahankale/FindMySpot"
    },
    {
      title: "Splitwise System",
      subtitle: "Expense Management Platform",
      description: "A robust expense tracking system built with Spring Boot featuring group expense splitting and secure authentication.",
      technologies: ["Spring Boot", "MySQL", "HTML5", "CSS3"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/sumitmahankale/SplitWise"
    },
    {
      title: "EduForum",
      subtitle: "Smart Academic Platform",
      description: "Educational ecosystem with AI-powered chatbots, real-time forums, and collaborative learning tools.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
      icon: <Globe className="w-6 h-6" />,
      link: "https://github.com/sumitmahankale/EduForum"
    }
  ];

  const skills = {
    "Backend": { items: ["Java", "Spring Boot", "Node.js", "Express.js"], icon: <Server className="w-6 h-6" /> },
    "Frontend": { items: ["React.js", "JavaScript", "HTML5", "CSS3"], icon: <Globe className="w-6 h-6" /> },
    "Database": { items: ["MySQL", "PostgreSQL", "MongoDB"], icon: <Database className="w-6 h-6" /> },
    "Tools": { items: ["Git", "GitHub"], icon: <Code className="w-6 h-6" /> }
  };

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
    { label: "Projects", value: "3+", icon: <Rocket className="w-6 h-6" /> },
    { label: "CGPA", value: "8.77", icon: <Star className="w-6 h-6" /> },
    { label: "Experience", value: "3+ months", icon: <Briefcase className="w-6 h-6" /> },
    { label: "Technologies", value: "10+", icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      
      {/* Fixed Navigation */}
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
              <div className={`w-80 h-80 lg:w-96 lg:h-96 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                {/* Placeholder for photo */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <CodeLogo size="w-10 h-10" />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your Photo Here
                  </p>
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
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg w-fit mb-4">
                  <div className="text-white">{project.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-500 font-semibold mb-3">{project.subtitle}</p>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-1">
                      <TechIcon name={tech} className="w-4 h-4" />
                      <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} w-fit transition-colors`}>
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg w-fit mb-4">
                  <div className="text-white">{data.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-4">{category}</h3>
                <div className="space-y-3">
                  {data.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <TechIcon name={skill} className="w-6 h-6" />
                      <span className={`px-3 py-1 rounded text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} shadow-sm`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            © 2024 Sumit Mahankale. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;