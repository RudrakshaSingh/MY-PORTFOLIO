/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import bcas from '../assets/education/bcas.jpg';
import ipu from '../assets/education/ipu.jpg';
import green from '../assets/education/green.jpg';

const educationData = [
    {
      degree: 'Master in Computer Application (MCA)',
      institution: 'University School of Information, Communication and Technology | GGSIPU',
      period: '2024-2026',
      status: 'Appearing',
      image: ipu,
      marks: ''
    },
    {
      degree: 'Bachelor of Science in Instrumentation',
      institution: 'Bhaskaracharya College Of Applied Sciences | DU',
      period: '2021-2024',
      status: 'Completed',
      image: bcas,
      marks: '86%'
    },
    {
      degree: 'Intermediate - Class XII',
      institution: 'Greenfields Public School, Dilshad Garden, GTB Enclave, Delhi 110093 | CBSE',
      period: '2020-2021',
      status: 'Completed',
      image: green,
      marks: '88.6%'
    },
    {
      degree: 'Matriculate - Class X',
      institution: 'Greenfields Public School, Dilshad Garden, GTB Enclave, Delhi 110093 | CBSE',
      period: '2018-2019',
      status: 'Completed',
      image: green,
      marks: '89.2%'
    }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            <GraduationCap className="inline-block mr-2 mb-1" size={28} />
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 italic max-w-2xl mx-auto">
            "An investment in knowledge pays the best interest." — Benjamin Franklin.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2, 
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={`mb-10 md:mb-16 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center`}
            >
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>
                <div className={`flex items-center gap-2 mb-2 ${
                  index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                }`}>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  }`}>
                    {item.status}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-300">
                    {item.period}
                  </span>
                </div>
                {item.marks && (
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    Marks Obtained: {item.marks}
                  </p>
                )}
              </div>
              
              <motion.div 
                className="hidden md:flex w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 items-center justify-center text-white z-10 my-2 mx-4 shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <GraduationCap size={24} />
              </motion.div>
              
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
              }`}>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg h-48 md:h-64"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.degree} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;