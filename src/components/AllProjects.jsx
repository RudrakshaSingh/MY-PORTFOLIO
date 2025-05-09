/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Code, Eye, Github, ArrowLeft, Sun, Moon, Search, Filter } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';

const AllProjects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Dynamically generate categories from projects data
  const uniqueCategories = [...new Set(projects.map(project => project.category))];
  const categories = ['All', ...uniqueCategories];
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
      className={`py-20 min-h-screen pt-4 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-50'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Navigation Bar with Back button and Theme Toggle */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline transition-colors group"
          >
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowLeft size={16} className="mr-2 group-hover:text-indigo-800 dark:group-hover:text-indigo-300" />
            </motion.div>
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-700 text-amber-300 hover:bg-gray-600 hover:text-amber-200' 
                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center ${
            theme === 'dark' ? 'text-white' : 'text-indigo-900'
          }`}>
            <motion.div
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="inline-block mr-3 mb-1 text-indigo-500 dark:text-indigo-400" size={38} />
            </motion.div>
            All Projects
          </h1>
          <motion.div 
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 w-24 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore my complete portfolio of projects showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>
        
        {/* Search and Filter */}
        <motion.div 
          className="mb-12 flex flex-col md:flex-row gap-4 md:items-center justify-between"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className={`h-5 w-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-indigo-400'
              }`} />
            </div>
            <input
              type="text"
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-indigo-500' 
                  : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-indigo-500 shadow-sm'
              }`}
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className={`mr-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>Filter:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white shadow-md'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {!isLoaded ? (
          <div className="flex justify-center my-16">
            <motion.div 
              className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            ></motion.div>
          </div>
        ) : filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={index}
                  variants={itemVariants}
                  className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700 hover:shadow-indigo-900/20'
                      : 'bg-white border border-gray-100 hover:shadow-indigo-200/50'
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover" 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold rounded-full shadow-md z-10">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`mb-4 line-clamp-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark'
                              ? 'bg-indigo-900/40 text-indigo-300'
                              : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition-all shadow-sm hover:shadow-md"
                      >
                        <Eye size={16} />
                        View Demo
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.codeLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className={`inline-block p-6 rounded-full mb-4 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-indigo-100'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200, 
                damping: 10 
              }}
            >
              <Search className="h-12 w-12 text-indigo-500 dark:text-indigo-400" />
            </motion.div>
            <h3 className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              No projects found
            </h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default AllProjects;