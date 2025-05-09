/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, useMemo } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Determine if dark mode is active
  const isDark = theme === 'dark';

  const menuItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = menuItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    })
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? isDark 
            ? 'bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/95 backdrop-blur-md shadow-lg shadow-indigo-500/10' 
            : 'bg-gradient-to-r from-white/95 via-gray-50/85 to-white/95 backdrop-blur-md shadow-lg shadow-indigo-500/10'
          : 'bg-transparent backdrop-blur-none'
      } ${isDark ? 'text-white' : 'text-gray-800'} ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold flex items-center"
            variants={logoVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className={isDark ? "text-white" : "text-gray-800"}>Rudraksha</span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">.dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={`#${item.id}`}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center group ${
                      activeSection === item.id 
                        ? isDark ? 'text-white' : 'text-gray-900' 
                        : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className={`absolute inset-0 ${
                          isDark 
                            ? 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30' 
                            : 'bg-gradient-to-r from-blue-200 to-indigo-200'
                        } rounded-lg -z-10`}
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                custom={menuItems.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button 
                  onClick={toggleTheme}
                  className={`ml-3 p-2 rounded-full transition-colors ${
                    isDark 
                      ? 'bg-indigo-700/50 hover:bg-indigo-600/50 text-white' 
                      : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <motion.button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'bg-indigo-700/50 hover:bg-indigo-600/50 text-white' 
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'bg-indigo-700/50 hover:bg-indigo-600/50 text-white' 
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`md:hidden absolute top-full left-0 right-0 shadow-lg overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-violet-900/95 backdrop-blur-md' 
                : 'bg-gradient-to-r from-white/95 via-indigo-50/95 to-white/95 backdrop-blur-md'
            }`}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    variants={mobileItemVariants}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        activeSection === item.id 
                          ? isDark 
                            ? 'bg-indigo-700/40 text-white font-medium' 
                            : 'bg-indigo-100 text-indigo-900 font-medium'
                          : isDark 
                            ? 'text-gray-200 hover:bg-indigo-800/30' 
                            : 'text-gray-700 hover:bg-indigo-50'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;