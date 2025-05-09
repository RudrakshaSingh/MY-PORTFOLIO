import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Typed from 'typed.js';
import Rudraksha from '../assets/Rudraksha.jpg';
import ParticlesComponent from '../particles';
import github from '../assets/socials/github.png';
import linkdin from '../assets/socials/linkedin.png';
import instagram from '../assets/socials/instagram.png';
import leetcode from '../assets/socials/leetcode.png';

function Home() {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: [
          'Web Development',
          'Software Engineering',
          'MERN Stack Development',
          'Full Stack Development',
          'React Native App Development',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Particles now outside the content container to fill the entire section */}
      <div className="absolute inset-0 mt-16 z-0">
        <ParticlesComponent />
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        <div className="absolute top-[20%] -left-[5%] w-[30%] h-[30%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[35%] h-[40%] rounded-full bg-amber-100 dark:bg-amber-900/20 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-800 dark:text-white">Hi There, I'm </span>
              <br />
              <span className="text-yellow-600 dark:text-orange-400">Thakur Rudraksha Singh</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
              I am into <span ref={typedElement} className="text-purple-600 dark:text-purple-400 font-medium"></span>
            </p>
            
            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToAbout}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                About Me
                <ChevronDown size={20} />
              </button>
              
              <a 
                href="https://drive.google.com/file/d/1rr7UO7Wc6yKjM-f1dcKESTRPyWgFyyRK/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                View Resume
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/RudrakshaSingh" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-white rounded-full text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors">
              <img src={github} alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/thakur-rudraksha-singh-34996228b/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-white rounded-full text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors">
                <img src={linkdin} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://leetcode.com/u/rudrakshasingh/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-white rounded-full text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors">
                <img src={leetcode} alt="LeetCode" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/rudrakshasingh4577/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-white rounded-full text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors">
                <img src={instagram} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img 
                src={Rudraksha}
                alt="Thakur Rudraksha Singh" 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}

export default Home;