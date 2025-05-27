import React from 'react';

const SkillsSection = ({ darkMode = false }) => {
  // Skills data with SVG logo components (not external images)
  const skills = [
    {
      name: "Java",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#f89820" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
          <path fill="#5382a1" d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573"/>
          <path fill="#f89820" d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118"/>
          <path fill="#5382a1" d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
          <path fill="#f89820" d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      ),
      category: "Backend"
    },
    {
      name: "Spring Boot",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#6db33f" d="M5.154 11.632c.062.748.468 1.435 1.071 1.94L12 17.861l5.775-4.29c.603-.504 1.009-1.191 1.071-1.939C19.086 8.905 15.951 6.5 12 6.5s-7.086 2.405-6.846 5.132zM12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      category: "Backend"
    },
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#339933" d="M11.435 1.153L2.465 6.288A2.465 2.465 0 001 8.423v7.154c0 .881.469 1.693 1.232 2.135l8.97 5.135a2.465 2.465 0 002.466 0l8.97-5.135A2.465 2.465 0 0023 15.577V8.423a2.465 2.465 0 00-1.232-2.135L13.233 1.153a2.465 2.465 0 00-1.798 0z"/>
          <path fill="#fff" d="M17.898 9.862c0-1.156-.394-2.096-1.181-2.821-.788-.725-1.835-1.088-3.141-1.088-1.306 0-2.353.363-3.141 1.088-.787.725-1.181 1.665-1.181 2.821 0 1.156.394 2.096 1.181 2.821.788.725 1.835 1.088 3.141 1.088 1.306 0 2.353-.363 3.141-1.088.787-.725 1.181-1.665 1.181-2.821z"/>
        </svg>
      ),
      category: "Backend"
    },
    {
      name: "Express.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#000" d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-6.962 5.575-16.103-.756-8.085-6.617z"/>
        </svg>
      ),
      category: "Backend"
    },
    {
      name: "React.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#61dafb" d="M12 2.5c-5.74 0-10.5 4.76-10.5 10.5S6.26 23.5 12 23.5s10.5-4.76 10.5-10.5S17.74 2.5 12 2.5zm0 18.5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth=".6"/>
          <ellipse cx="12" cy="12" rx="4.2" ry="11" fill="none" stroke="#61dafb" strokeWidth=".6" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="4.2" ry="11" fill="none" stroke="#61dafb" strokeWidth=".6" transform="rotate(120 12 12)"/>
        </svg>
      ),
      category: "Frontend"
    },
    {
      name: "JavaScript",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <rect width="24" height="24" fill="#f7df1e" rx="2"/>
          <path fill="#000" d="M7.5 12.4c0 1.7 1 2.6 2.4 2.6 1 0 1.6-.4 2-1.1l1.4.8c-.8 1.3-1.9 1.8-3.4 1.8-2.4 0-4.1-1.3-4.1-3.8V9.6h1.7v3.8zm8.4 2.6c1.4 0 2.4-.9 2.4-2.4V9.6h1.7v2.9c0 2.1-1.5 3.7-4.1 3.7s-4.1-1.6-4.1-3.7V9.6h1.7v2.9c0 1.5 1 2.4 2.4 2.4z"/>
        </svg>
      ),
      category: "Frontend"
    },
    {
      name: "HTML5",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#e34f26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
          <path fill="#ef652a" d="M12 22.03l6.953-1.928L20.125 2H12v20.03z"/>
          <path fill="#fff" d="M12 9.135H8.852l-.264-2.96H12V3.853H5.513l.069.776.706 7.926H12V9.135z"/>
          <path fill="#ebebeb" d="M12 15.658l-.014.004-3.444-.929-.22-2.465H6.18l.433 4.853 6.336 1.758.051-.014v-3.207z"/>
          <path fill="#fff" d="M11.991 9.135v3.42h3.263l-.308 3.444-2.955.796v3.207l5.428-1.504.04-.448.623-6.975.065-.732H11.991z"/>
          <path fill="#ebebeb" d="M12 3.853v2.32h-6.322l-.135-1.544L5.27 3.853H12zm0 5.282v2.32H8.785l-.135-1.544-.273-.776H12z"/>
        </svg>
      ),
      category: "Frontend"
    },
    {
      name: "CSS3",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#1572b6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
          <path fill="#33a9dc" d="M12 22.03l6.953-1.928L20.125 2H12v20.03z"/>
          <path fill="#fff" d="M12 6.277H7.91l.264 2.969H12v-2.969zm-.008 4.944v-2.969H6.59l.267 2.969h5.135zm0 3.125l-.014.004-3.442-.93-.233-2.604H6.16l.459 5.14 6.333 1.756.042-.012v-3.354z"/>
          <path fill="#ebebeb" d="M11.991 6.277v2.969h3.953l-.263-2.969h-3.69zm.008 7.069v-2.969h3.686l-.336 3.785-3.35.93v3.354l6.333-1.756.046-.529.736-8.264.077-.85h-7.192z"/>
        </svg>
      ),
      category: "Frontend"
    },
    {
      name: "MySQL",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#4479a1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.154-.014-.013-.014-.027-.027-.027zM18.79 6.205c-.042 0-.08.014-.114.027-.014.013-.027.027-.027.041v.013c.067.107.18.18.267.286.1.133.194.273.3.407.014-.013.027-.027.027-.041.066-.094.066-.2.133-.3.034-.066.087-.113.134-.18-.067-.094-.154-.154-.24-.24-.1-.066-.18-.154-.287-.207-.067-.026-.12-.026-.193-.026z"/>
          <path fill="#f29111" d="M.002 13.617s.9-1.353 2.265-1.353c1.365 0 2.265 1.353 2.265 1.353l-2.265 2.7L.002 13.617z"/>
          <path fill="#4479a1" d="M23.982 18.704c-.02-.334-.354-.334-.707-.334h-2.957c-.353 0-.687 0-.707.334v.013c0 .334.354.334.707.334h2.957c.353 0 .687 0 .707-.334v-.013z"/>
        </svg>
      ),
      category: "Database"
    },
    {
      name: "MongoDB",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#4db33d" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.51-9.5.417-.297 4.376-2.038 4.292-4.945z"/>
          <path fill="#6cac48" d="M12.5 22.25c0-.83-.34-1.59-.89-2.14-.55-.55-1.31-.89-2.14-.89s-1.59.34-2.14.89-.89 1.31-.89 2.14.34 1.59.89 2.14 1.31.89 2.14.89 1.59-.34 2.14-.89.89-1.31.89-2.14z"/>
        </svg>
      ),
      category: "Database"
    },
    {
      name: "Git",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#f05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0L23.546 13.12c.603-.603.603-1.582 0-2.187"/>
        </svg>
      ),
      category: "Tools"
    },
    {
      name: "GitHub",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill={darkMode ? "#fff" : "#181717"} d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      category: "Tools"
    }
  ];

  // Individual Skill Card Component with responsive improvements
  const SkillCard = ({ skill }) => (
    <div className="group relative">
      <div className={`
        flex flex-col items-center justify-center 
        p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl 
        transition-all duration-300 ease-in-out
        ${darkMode 
          ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600' 
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
        }
        shadow-md hover:shadow-xl 
        transform hover:scale-105 hover:-translate-y-1 md:hover:-translate-y-2
        min-h-[100px] sm:min-h-[120px] md:min-h-[140px]
        active:scale-95 
      `}>
        {/* Logo Container */}
        <div className="mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110">
          {skill.logo}
        </div>
        
        {/* Skill Name */}
        <h3 className={`
          font-medium sm:font-semibold text-center 
          text-xs sm:text-sm
          ${darkMode ? 'text-gray-200' : 'text-gray-800'}
          group-hover:text-blue-500 transition-colors duration-300
          px-1 leading-tight
        `}>
          {skill.name}
        </h3>
        
        {/* Category Badge - Hidden on mobile, visible on larger screens */}
        <span className={`
          mt-1 sm:mt-2 px-2 py-1 text-xs rounded-full
          ${darkMode 
            ? 'bg-gray-700 text-gray-300' 
            : 'bg-gray-100 text-gray-600'
          }
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          hidden sm:block
        `}>
          {skill.category}
        </span>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
    </div>
  );

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
            mb-3 sm:mb-4 md:mb-6 
            ${darkMode ? 'text-white' : 'text-gray-900'}
            px-4
          `}>
            Technical Skills
          </h2>
          
          {/* Animated Underline */}
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse rounded-full"></div>
            </div>
          </div>
          
          <p className={`
            text-sm sm:text-base md:text-lg lg:text-xl 
            max-w-2xl lg:max-w-3xl mx-auto leading-relaxed 
            ${darkMode ? 'text-gray-300' : 'text-gray-600'}
            px-4
          `}>
            Technologies and tools I use to craft exceptional digital experiences
          </p>
        </div>
        
        {/* Skills Grid with improved responsive breakpoints */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              className="animate-fadeInUp"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Skills Categories Summary - Hidden on mobile, visible on tablet+ */}
        
      </div>

      {/* Custom Styles with responsive animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp {
            animation: none;
            opacity: 1;
          }
          
          .group:hover > div {
            transform: none;
          }
        }

        /* Enhanced touch targets for mobile */
        @media (max-width: 640px) {
          .group > div {
            min-height: 100px;
            touch-action: manipulation;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;