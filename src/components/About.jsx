import React from 'react';
import { User, MapPin, Mail, FileText, ArrowDown } from 'lucide-react';
import biggerRudraksha from '../assets/biggerRudraksha.jpg'; // Assuming you have a profile image

const About = () => {
  return (
    <section id="about" className="py-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header with Animated Underline */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
            <User className="mr-3 text-blue-600 dark:text-blue-400" size={36} />
            About <span className="text-blue-600 dark:text-blue-400 ml-2">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto transform transition-all duration-300 hover:w-32 hover:bg-blue-500"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image with Decorative Elements - Much smaller on small/medium devices */}
          <div className="w-4/6 sm:w-3/5 md:w-3/5 lg:w-2/5 mx-auto lg:mx-0">
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-3 md:-inset-4 bg-blue-200 dark:bg-blue-900/40 rounded-2xl -z-10 transform -rotate-6 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105"></div>
              <div className="absolute -inset-1 md:-inset-2 bg-blue-100 dark:bg-blue-800/40 rounded-xl -z-10 transform rotate-3 transition-all duration-300 group-hover:rotate-0"></div>
              
              {/* Profile image with animated border - responsive sizing */}
              <div className="overflow-hidden rounded-lg sm:rounded-xl border-2 sm:border-4 border-white dark:border-gray-700 shadow-lg sm:shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={biggerRudraksha} 
                    className="w-full h-full object-cover" 
                    alt="Thakur Rudraksha Singh" 
                  />
                </div>
              </div>
              
              {/* Floating badge - smaller on small screens */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 bg-blue-400 dark:bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-md sm:rounded-lg shadow-md sm:shadow-lg transform transition-all duration-300 group-hover:translate-y-1 text-xs sm:text-sm md:text-base">
                <span className="font-bold">Software Engineer</span>
              </div>
            </div>
          </div>

          {/* Text Content with Enhanced Layout */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Name and Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">Thakur Rudraksha Singh</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Software Engineer
                  </span>
                  <span className="inline-block bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Full Stack Developer
                  </span>
                  <span className="inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    MERN Specialist
                  </span>
                </div>
              </div>
              
              {/* Bio with styled paragraph */}
              <div className="bg-white dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  I am a passionate Software Engineer based in Delhi, India with expertise in building WebApps and Websites using the MERN Stack. My journey in software development is driven by a constant desire to improve my coding skills and create impactful applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                  As a self-motivated quick learner, I thrive on exploring new technologies and solving complex problems. I excel in team environments and pride myself on strong communication skills and effective problem-solving abilities.
                </p>
              </div>
              
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-md sm:rounded-lg border border-blue-100 dark:border-blue-800/50 transition-all hover:shadow-md">
                  <Mail className="text-blue-600 dark:text-blue-400 mr-2 sm:mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base truncate">rudrakshasingh587@gmail.com</span>
                </div>
                <div className="flex items-center bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-md sm:rounded-lg border border-blue-100 dark:border-blue-800/50 transition-all hover:shadow-md">
                  <MapPin className="text-blue-600 dark:text-blue-400 mr-2 sm:mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base">Uttar Pradesh, India - 201102</span>
                </div>
              </div>
              
              {/* Download Resume Button */}
              <div className="mt-6 sm:mt-8">
                <a 
                  href="https://drive.google.com/file/d/1rr7UO7Wc6yKjM-f1dcKESTRPyWgFyyRK/view?usp=drive_link" 
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md sm:rounded-lg shadow-md sm:shadow-lg hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600 group text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2" size={18} />
                  <span>Download Resume</span>
                  <ArrowDown className="ml-2 transform transition-transform group-hover:translate-y-1" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;