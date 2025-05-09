import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import github from '../assets/socials/github.png';
import linkdin from '../assets/socials/linkedin.png';
import instagram from '../assets/socials/instagram.png';
import leetcode from '../assets/socials/leetcode.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  
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
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Thakur Rudraksha Singh's Portfolio</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials. 
              <br /><br />
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'hobbies', label: 'Hobbies' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="mr-3 text-blue-400" size={18} />
                +91 9999057399
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="mr-3 text-blue-400" size={18} />
                rudrakshasingh587@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="mr-3 text-blue-400" size={18} />
                Uttar Pradreah, India-201102
              </li>
            </ul>
            
            {/* Fix for medium device icon display */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/thakur-rudraksha-singh-34996228b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                {/* Fixed size container for consistent display */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={linkdin} alt="LinkedIn" className="w-full h-full object-contain" />
                </div>
              </a>
              <a 
                href="https://github.com/RudrakshaSingh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-200 transition-colors"
                aria-label="GitHub"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={github} alt="GitHub" className="w-full h-full object-contain" />
                </div>
              </a>
              <a 
                href="mailto:rudrakshasingh587@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                {/* Mail icon from Lucide with fixed size */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <Mail size={24} />
                </div>
              </a>
              <a 
                href="https://leetcode.com/u/rudrakshasingh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition-colors"
                aria-label="Leetcode"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={leetcode} alt="LeetCode" className="w-full h-full object-contain" />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/rudrakshasingh4577/"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={instagram} alt="Instagram" className="w-full h-full object-contain" />
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Thakur Rudraksha Singh. All rights reserved.</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-blue-600 dark:bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}

// Add Phone component
function Phone({ className = "", size = 24 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export default Footer;