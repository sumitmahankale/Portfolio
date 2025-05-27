import React from 'react';
import { 
  Server, Globe, Database, Code, 
  Coffee, Layers, Settings, GitBranch,
  Terminal, Braces, FileCode, Cpu,
  Cloud, MonitorSpeaker, Smartphone, Palette
} from 'lucide-react';

const SkillsSection = ({ darkMode }) => {
  // Skills data with appropriate Lucide React icons
  const skillsData = {
    "Backend": {
      items: [
        { name: "Java", icon: <Coffee className="w-6 h-6" />, color: "text-orange-500" },
        { name: "Spring Boot", icon: <Layers className="w-6 h-6" />, color: "text-green-500" },
        { name: "Node.js", icon: <Server className="w-6 h-6" />, color: "text-green-600" },
        { name: "Express.js", icon: <Settings className="w-6 h-6" />, color: "text-gray-600" }
      ],
      icon: <Server className="w-6 h-6" />,
      bgGradient: "from-blue-500 to-cyan-500"
    },
    "Frontend": {
      items: [
        { name: "React.js", icon: <Braces className="w-6 h-6" />, color: "text-cyan-400" },
        { name: "JavaScript", icon: <FileCode className="w-6 h-6" />, color: "text-yellow-500" },
        { name: "HTML5", icon: <Code className="w-6 h-6" />, color: "text-orange-500" },
        { name: "CSS3", icon: <Palette className="w-6 h-6" />, color: "text-blue-500" }
      ],
      icon: <Globe className="w-6 h-6" />,
      bgGradient: "from-purple-500 to-pink-500"
    },
    "Database": {
      items: [
        { name: "MySQL", icon: <Database className="w-6 h-6" />, color: "text-blue-600" },
        { name: "PostgreSQL", icon: <Cpu className="w-6 h-6" />, color: "text-blue-700" },
        { name: "MongoDB", icon: <MonitorSpeaker className="w-6 h-6" />, color: "text-green-500" }
      ],
      icon: <Database className="w-6 h-6" />,
      bgGradient: "from-green-500 to-teal-500"
    },
    "Tools & Others": {
      items: [
        { name: "Git", icon: <GitBranch className="w-6 h-6" />, color: "text-orange-600" },
        { name: "GitHub", icon: <Code className="w-6 h-6" />, color: "text-gray-800 dark:text-gray-200" },
        { name: "REST APIs", icon: <Cloud className="w-6 h-6" />, color: "text-indigo-500" },
        { name: "Responsive Design", icon: <Smartphone className="w-6 h-6" />, color: "text-purple-500" }
      ],
      icon: <Terminal className="w-6 h-6" />,
      bgGradient: "from-orange-500 to-red-500"
    }
  };

  // Individual Skill Card Component
  const SkillCard = ({ skill }) => (
    <div className="group relative">
      <div className={`
        flex items-center gap-3 p-3 rounded-lg transition-all duration-300
        ${darkMode 
          ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500' 
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
        }
        shadow-sm hover:shadow-md transform hover:scale-105
      `}>
        <div className={`${skill.color} transition-transform duration-300 group-hover:scale-110`}>
          {skill.icon}
        </div>
        <span className="font-medium text-sm">{skill.name}</span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
        {skill.name}
      </div>
    </div>
  );

  // Category Card Component
  const CategoryCard = ({ category, data }) => (
    <div className={`
      p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105
      ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}
    `}>
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${data.bgGradient}`}>
          <div className="text-white">{data.icon}</div>
        </div>
        <div>
          <h3 className="text-xl font-bold">{category}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {data.items.length} technologies
          </p>
        </div>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-3">
        {data.items.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );

  // Floating Animation Component
  const FloatingElement = ({ children, delay = 0 }) => (
    <div 
      className="animate-bounce" 
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10">
          <FloatingElement delay={0}>
            <Code className="w-8 h-8 text-blue-500" />
          </FloatingElement>
        </div>
        <div className="absolute top-40 right-20">
          <FloatingElement delay={1}>
            <Database className="w-6 h-6 text-green-500" />
          </FloatingElement>
        </div>
        <div className="absolute bottom-40 left-20">
          <FloatingElement delay={2}>
            <Server className="w-7 h-7 text-purple-500" />
          </FloatingElement>
        </div>
        <div className="absolute bottom-20 right-10">
          <FloatingElement delay={0.5}>
            <Globe className="w-5 h-5 text-orange-500" />
          </FloatingElement>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r ">
             
            </div>
            <h2 className="text-4xl font-bold">Technical Skills</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(skillsData).map(([category, data]) => (
            <CategoryCard 
              key={category} 
              category={category} 
              data={data} 
            />
          ))}
        </div>

        {/* Skills Summary */}
        <div className={`
          p-8 rounded-xl text-center
          ${darkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600' 
            : 'bg-gradient-to-r from-gray-50 to-white border border-gray-200'
          }
          shadow-lg
        `}>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Backend Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="text-sm font-medium">Frontend Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="text-sm font-medium">Database Management</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <span className="text-sm font-medium">Development Tools</span>
            </div>
          </div>
          
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="font-semibold text-blue-500">Full-Stack Developer</span> with expertise in modern web technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;