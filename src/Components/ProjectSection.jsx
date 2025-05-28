import React from 'react';
import { 
  MapPin, Database, Globe, Github, ExternalLink, 
  Code, Star, ArrowRight, Eye 
} from 'lucide-react';

const ProjectsSection = ({ darkMode = false }) => {
  // Technology Icons Component with better visibility
  const TechIcon = ({ name, className = "w-4 h-4 sm:w-5 sm:h-5" }) => {
    const techLogos = {
      'React.js': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#61DAFB' }}>
          <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.988.571 2.845-.309 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 25.049 25.049 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a30.517 30.517 0 0 1 5.033 0l.234.02.134.193a30.372 30.372 0 0 1 1.351 2.122 30.356 30.356 0 0 1 1.166 2.228l.100.213-.1.213a30.301 30.301 0 0 1-1.166 2.228 30.32 30.32 0 0 1-1.351 2.122l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0 0-7.804 29.006 29.006 0 0 0-2.196-3.798c-1.48-.111-2.914-.111-4.395 0a29.006 29.006 0 0 0-2.197 3.798 29.031 29.031 0 0 0 0 7.804 29.006 29.006 0 0 0 2.197 3.798z"/>
        </svg>
      ),
      'Node.js': (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: '#68A063' }}>
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
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
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      githubLink: "https://github.com/sumitmahankale/FindMySpot",
      liveLink: null,
      backgroundImage: "findmyspot.png",
      featured: false,
      stats: { stars: 12, forks: 3 }
    },
    {
      title: "EduForum",
      subtitle: "Smart Academic Platform",
      description: "Educational ecosystem with AI-powered chatbots, real-time forums, collaborative learning tools, and comprehensive academic resource management.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      githubLink: "https://github.com/sumitmahankale/EduForum",
      liveLink: null,
      backgroundImage: "DASHBOARD.jpg",
      featured: false,
      stats: { stars: 8, forks: 2 }
    }
  ];

  return (
    <section id="projects" className={`py-12 sm:py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className={`text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centric solutions.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-50 sm:h-66 overflow-hidden">
                <img 
                  src={project.backgroundImage} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Project Info */}
                <div className="mb-4 sm:mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-blue-500 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
                    {project.subtitle}
                  </p>
                  <p className={`leading-relaxed text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="mb-4 sm:mb-6">
                  <h4 className={`text-xs sm:text-sm font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Built with:
                  </h4>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech) => (
                      <div 
                        key={tech} 
                        className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-all duration-200 hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600' 
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <TechIcon name={tech} className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium truncate">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row gap-3 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex-1 justify-center text-sm sm:text-base ${
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
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex-1 justify-center text-sm sm:text-base"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium flex-1 justify-center cursor-not-allowed opacity-50 text-sm sm:text-base ${
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
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a 
            href="https://github.com/sumitmahankale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            View All Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;