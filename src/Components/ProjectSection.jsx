import React from 'react';
import { 
  MapPin, Database, Globe, Github, ExternalLink, 
  Code, Star, ArrowRight, Eye 
} from 'lucide-react';

const ProjectsSection = ({ darkMode = false }) => {
  // Technology Icons Component with better visibility
  const TechIcon = ({ name, className = "w-5 h-5" }) => {
    const techLogos = {
      'React.js': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#61DAFB' }}>
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 13.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.83.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      ),
      'Node.js': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#68A063' }}>
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v7.46c0 .83-.87 1.65-2.19.95l-2.04-1.18c-.11-.06-.18-.18-.18-.31V7.78c0-.13.07-.25.18-.31l7.44-4.3c.11-.06.24-.06.35 0l7.44 4.3c.11.06.18.18.18.31v8.58c0 .13-.07.25-.18.31l-7.44 4.3c-.11.06-.24.06-.35 0L9.28 19.4c-.09-.05-.2-.05-.29 0-.32.17-.38.21-.67.48-.14.13-.35.36-.21.46l2.48 1.45c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.3c.48-.28.78-.8.78-1.36V7.41c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
        </svg>
      ),
      'Express.js': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-6.454 3.078-14.677-2.548-8.085-6.617z"/>
        </svg>
      ),
      'MySQL': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#4479A1' }}>
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.07-.08-.99-.248-.291zM18.79 1.224c-1.47 0-2.467.793-2.467 1.847 0 .24.045.463.125.66.285.707.843 1.22 1.487 1.22.644 0 1.202-.513 1.487-1.22.08-.197.125-.42.125-.66 0-1.054-.997-1.847-2.467-1.847z"/>
        </svg>
      ),
      'Spring Boot': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#6DB33F' }}>
          <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21z"/>
        </svg>
      ),
      'HTML5': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#E34F26' }}>
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      'CSS3': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#1572B6' }}>
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      'PostgreSQL': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#336791' }}>
          <path d="M23.111 7.95c-.84-4.606-3.298-6.739-7.335-6.739-1.19 0-2.286.166-3.288.498-.1-.746-.297-1.54-.594-2.384C11.338-2.121 10.05-2.615 8.403-2.615c-2.65 0-4.79 1.19-6.404 3.565C.786 2.34.29 3.73.29 5.213c0 3.288 1.786 6.1 4.74 7.476.297 1.19.694 2.284 1.19 3.288 1.094 2.185 2.78 4.07 5.058 5.66 1.984 1.388 4.17 2.086 6.554 2.086 1.488 0 2.88-.297 4.07-.891 1.488-.694 2.681-1.786 3.575-3.267.794-1.389 1.191-2.977 1.191-4.766 0-.794-.1-1.588-.298-2.383.795-1.09 1.19-2.284 1.19-3.575 0-2.085-.594-3.774-1.786-5.06-.894-.992-2.086-1.488-3.575-1.488z"/>
        </svg>
      )
    };

    return techLogos[name] || <Code className={className} style={{ color: darkMode ? '#ffffff' : '#6b7280' }} />;
  };

  // Projects data
  const projects = [
    {
      title: "FindMySpot",
      subtitle: "Real-Time Parking Locator",
      description: "A comprehensive parking solution using MERN stack with real-time availability tracking, interactive maps, and seamless user experience for finding and booking parking spots.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      icon: <MapPin className="w-6 h-6" />,
      githubLink: "https://github.com/sumitmahankale/FindMySpot",
      liveLink: null,
      backgroundImage: "findmyspot.png", // Placeholder image
      featured: false,
      stats: { stars: 12, forks: 3 }
    },
    {
      title: "EduForum",
      subtitle: "Smart Academic Platform",
      description: "Educational ecosystem with AI-powered chatbots, real-time forums, collaborative learning tools, and comprehensive academic resource management.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
      icon: <Globe className="w-6 h-6" />,
      githubLink: "https://github.com/sumitmahankale/EduForum",
      liveLink: null,
      backgroundImage: "DASHBOARD.jpg", // Placeholder image
      featured: false,
      stats: { stars: 8, forks: 2 }
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centric solutions.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.backgroundImage} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  style={{ minHeight: '250px', maxHeight: '250px' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Project Info */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-blue-500 font-semibold mb-4 text-sm uppercase tracking-wide">
                    {project.subtitle}
                  </p>
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Built with:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <div 
                        key={tech} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600' 
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <TechIcon name={tech} className="w-6 h-6 flex-shrink-0" />
                        <span className="text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className={`flex gap-3 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex-1 justify-center ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white border border-gray-600' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  
                  {project.liveLink ? (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium flex-1 justify-center cursor-not-allowed opacity-50 ${
                        darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </button>
                  )}
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/sumitmahankale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;