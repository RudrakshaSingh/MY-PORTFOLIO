/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Code, Lightbulb, Layers, GitBranch, Cpu, Rocket, ChevronRight, Server, Layout, Bug } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Experience() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState({});

  const toggleSkills = (id) => {
    setExpandedSkills(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const experiences = [
    {
      id: 1,
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Created responsive user interfaces using React, HTML5, CSS3, and JavaScript. Implemented interactive UI components and animations for enhanced user experience.",
      skills: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      icon: <Layers className="w-6 h-6" />,
      title: "Full Stack Projects",
      description: "Developed end-to-end applications with frontend and backend integration. Connected APIs with frontend interfaces to create seamless user experiences.",
      skills: ["Node.js", "Express", "MongoDB", "API Integration", "Authentication"],
      gradient: "from-indigo-500 to-violet-600"
    },
    {
      id: 3,
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Applied creative problem-solving techniques to overcome technical challenges. Debugged complex issues and implemented efficient solutions.",
      skills: ["Debugging", "Optimization", "Algorithm Design", "Technical Research"],
      gradient: "from-amber-400 to-orange-500"
    },
    {
      id: 4,
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control & Collaboration",
      description: "Managed project code using Git and GitHub. Created and merged branches to maintain clean codebases and enable collaboration.",
      skills: ["Git", "GitHub", "Branching", "Pull Requests", "Code Reviews"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 5,
      icon: <Cpu className="w-6 h-6" />,
      title: "Technical Learning",
      description: "Continuously expanded knowledge of development tools and technologies. Applied learning to create increasingly sophisticated projects.",
      skills: ["Self-learning", "Documentation", "Technical Adaptability", "New Technologies"],
      gradient: "from-purple-500 to-fuchsia-600"
    },
    {
      id: 6,
      icon: <Rocket className="w-6 h-6" />,
      title: "Project Deployment",
      description: "Successfully deployed web applications to production environments. Configured hosting services to ensure optimal performance.",
      skills: ["Netlify", "Vercel", "Domain Configuration", "HTTPS"],
      gradient: "from-red-500 to-rose-600"
    },{
      id: 7,
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description: "Built robust backend systems with RESTful APIs, data models, and middleware. Ensured data security, scalability, and performance.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Middleware"],
      gradient: "from-yellow-500 to-orange-600"
    },{
      id: 8,
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Implemented intuitive layouts and design patterns for improved usability. Focused on user-centered designs using wireframes and feedback loops.",
      skills: ["Wireframing", "Responsive Design", "Accessibility", "Figma (if used)", "User Feedback"],
      gradient: "from-teal-500 to-cyan-600"
    },{
      id: 9,
      icon: <Bug className="w-6 h-6" />,
      title: "Testing & Debugging",
      description: "Ensured software reliability through systematic debugging and testing techniques. Used tools and strategies to minimize bugs and regressions.",
      skills: ["Console Debugging", "Chrome DevTools", "Unit Testing", "Error Handling"],
      gradient: "from-gray-500 to-slate-600"
    }
    
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-850 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with enhanced animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-4"
          >
            <motion.div 
              className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-6 mx-auto"
              whileHover={{ 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Layers className="w-8 h-8" />
            </motion.div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-400 dark:to-purple-400">
            Project Experience
          </h2>
          
          <motion.div 
            className="h-1.5 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
          
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Through building various projects, I've gained valuable experience and developed a wide range of technical skills.
          </p>
        </motion.div>

        {/* Experience Grid with enhanced animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 dark:shadow-indigo-900/20 group"
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.15), 0 10px 10px -5px rgba(79, 70, 229, 0.1)',
              }}
            >
              {/* Colored top bar */}
              <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <motion.div 
                    className={`p-4 rounded-xl bg-gradient-to-br ${exp.gradient} text-white shadow-md`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {exp.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.id}
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {exp.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Key Skills
                    </h4>
                    
                    <motion.button
                      onClick={() => toggleSkills(exp.id)}
                      className="text-indigo-600 dark:text-indigo-400 text-sm flex items-center gap-1 hover:underline"
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedSkills[exp.id] ? 'Show less' : 'Show all'}
                      <ChevronRight 
                        size={14} 
                        className={`transform transition-transform ${expandedSkills[exp.id] ? 'rotate-90' : ''}`} 
                      />
                    </motion.button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {exp.skills.slice(0, expandedSkills[exp.id] ? exp.skills.length : 3).map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border border-transparent transition-all
                            ${hoveredCard === exp.id || expandedSkills[exp.id] 
                              ? `bg-gradient-to-r ${exp.gradient} text-white shadow-sm` 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                      
                      {!expandedSkills[exp.id] && exp.skills.length > 3 && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-800/30 transition-colors"
                          onClick={() => toggleSkills(exp.id)}
                        >
                          +{exp.skills.length - 3}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;