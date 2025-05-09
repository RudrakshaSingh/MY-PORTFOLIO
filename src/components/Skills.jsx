import React, { useEffect, useRef } from "react";
import { Laptop } from "lucide-react";

const skillsData = [
  {
    name: "HTML5",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "React JS",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node JS",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Express JS",
    icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
  },
  {
    name: "MySQL",
    icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
  },
  {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  {
    name: "Redux",
    icon: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/color/48/000000/firebase.png",
  },
  {
    name: "React Native",
    icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/48/000000/python--v1.png",
  },
  {
    name: "Netlify",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
  },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/?size=100&id=106564&format=png&color=000000",
  },
];

const Skills = () => {
  const headerRef = useRef(null);
  const skillsRef = useRef([]);

  // Observer for scroll animations
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            headerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Staggered animation
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 100);
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply observers
    const headerElement = headerRef.current;
    if (headerElement) {
      headerElement.style.opacity = "0";
      headerElement.style.transform = "translateY(50px)";
      headerElement.style.transition = "opacity 0.5s, transform 0.5s";
      headerObserver.observe(headerElement);
    }

    const skillsElements = skillsRef.current;
    skillsElements.forEach((skill) => {
      if (skill) {
        skill.style.opacity = "0";
        skill.style.transform = "translateY(20px)";
        skill.style.transition = "opacity 0.5s, transform 0.5s";
        skillsObserver.observe(skill);
      }
    });

    // Cleanup
    return () => {
      if (headerElement) headerObserver.unobserve(headerElement);
      skillsElements.forEach((skill) => {
        if (skill) skillsObserver.unobserve(skill);
      });
    };
  }, []);

  // Hover effect function
  const handleHover = (index, isHovering) => {
    if (skillsRef.current[index]) {
      skillsRef.current[index].style.transform = isHovering
        ? "translateY(-5px)"
        : "translateY(0)";
      skillsRef.current[index].style.boxShadow = isHovering
        ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <Laptop className="inline-block mr-2 mb-1" size={50} />
            Skills &{" "}
            <span className="text-blue-600 dark:text-blue-400">Abilities</span>
          </h2>
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm mb-4">
            MY EXPERTISE
          </span>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
            These are the technologies I've worked with and the skills I've
            acquired throughout my journey
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillsRef.current[index] = el)}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-200"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-gray-800 dark:text-white font-medium text-sm sm:text-base mb-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
