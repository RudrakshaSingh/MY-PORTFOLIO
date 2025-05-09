// Import project images
import PortFolio from '../assets/projects/portfolio.png';
import LMS from '../assets/projects/lms.png';
import DriveSphere from '../assets/projects/drivesphere.png';

// Projects data array
export const projects = [
  {
    id: 1,
    title: "DriveSphere - Rides",
    image: DriveSphere,
    description: "DriveSphere - The Riding Platform for convenient and affordable transportation.",
    liveLink: "#",
    codeLink: "https://github.com/RudrakshaSingh/DriveSphere-Full-Stack-Ride-Service-Platform",
    technologies: ['React', 'Tailwind CSS', 'API Integration'],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: PortFolio,
    description: "A responsive portfolio website showcasing my projects and skills.",
    liveLink: "#",
    codeLink: "https://github.com/RudrakshaSingh/MY-PORTFOLIO",
    technologies: ['React', 'Tailwind CSS', 'API Integration'],
    category: "Web App"
  },
  {
    id: 3,
    title: "Learning Management System",
    image: LMS,
    description: "A full-stack e-learning platform with user authentication and course management.",
    liveLink: "https://learning-management-system-lms-iota.vercel.app/",
    codeLink: "https://github.com/RudrakshaSingh/LearningManagementSystem-LMS",
    technologies: ['React', 'Tailwind CSS', 'API Integration'],
    category: "Full Stack"
  },
  {
    id: 4,
    title: "FitFat - Fitness App",
    image: LMS,
    description: "A React Native fitness app with workout tracking and progress monitoring.",
    liveLink: "#",
    codeLink: "https://github.com/RudrakshaSingh/GymAppRN",
    technologies: ['React', 'Tailwind CSS', 'API Integration'],
    category: "React Native"
  }
];

// Default export
export default projects;