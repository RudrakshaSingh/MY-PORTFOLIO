// Import project images
import PortFolio from '../assets/projects/portfolio.png';
import LMS from '../assets/projects/lms.png';
import DriveSphere from '../assets/projects/drivesphere.png';
import TicTacToe from '../assets/projects/tictactoe.png';
import FitFat from '../assets/projects/fitfat.jpg';

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
    image: FitFat,
    description: "A React Native fitness app with workout tracking and progress monitoring.",
    liveLink: "https://www.linkedin.com/posts/thakur-rudraksha-singh-34996228b_reactjs-tailwindcss-portfoliowebsite-activity-7326641936058957825-zCzx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZxUWkBpc7MYdrKhr7ygjg1Ni-corPaky4",
    codeLink: "https://github.com/RudrakshaSingh/GymAppRN",
    technologies: ['React', 'Tailwind CSS', 'API Integration'],
    category: "React Native"
  },{
    id: 5,
    title: "Tic Tac Toe - Web Game",
    image: TicTacToe,
    description: "A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript.",
    liveLink: "https://rudrakshasingh.github.io/Tic-tac-toe/",
    codeLink: "https://github.com/RudrakshaSingh/Tic-tac-toe",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: "UI/UX"
  }
];

// Default export
export default projects;