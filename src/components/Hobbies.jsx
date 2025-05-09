/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import First from "../assets/Hobbies/1.jpg";
import Second from "../assets/Hobbies/2.jpg";
import Third from "../assets/Hobbies/3.jpg";
import Fourth from "../assets/Hobbies/4.jpg";
import Fifth from "../assets/Hobbies/5.jpg";
import Sixth from "../assets/Hobbies/6.jpg";
import Seventh from "../assets/Hobbies/7.jpg";
import Eighth from "../assets/Hobbies/8.jpg";
import Ninth from "../assets/Hobbies/9.jpg";
import Tenth from "../assets/Hobbies/10.jpg";
import Eleventh from "../assets/Hobbies/11.jpg";
import Twelfth from "../assets/Hobbies/12.jpg";
import Thirteenth from "../assets/Hobbies/13.jpg";
import Fourteenth from "../assets/Hobbies/14.jpg";
import Fifteenth from "../assets/Hobbies/15.jpg";
import Sixteenth from "../assets/Hobbies/16.jpg";

// PhotoCarousel Component with Framer Motion
const PhotoCarousel = ({ images, imageAlts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [isAnimating, images.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Handle animation completion
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  // Autoplay feature with improved timing
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Changed to 5 seconds for better user experience

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating,nextSlide]); // Added dependencies

  // Slide variants for framer motion
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative overflow-hidden rounded-lg w-full h-[400px] md:h-[450px] lg:h-[500px]">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} mode="wait" custom={direction} onExitComplete={handleAnimationComplete}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt={imageAlts[currentIndex]}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons with Hover Effects */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={isAnimating}
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={isAnimating}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50 w-2"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            disabled={isAnimating}
          />
        ))}
      </div>

      {/* Image Counter */}
      <motion.div
        className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-sm z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {currentIndex + 1} / {images.length}
      </motion.div>
    </div>
  );
};

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: "Simple Workouts",
      icon: "🚶‍♂️",
      description:
        "I love keeping things simple when it comes to fitness—morning walks, light jogging, swimming, or even participating in morning RSS exercise sessions. Whether it's a peaceful stroll while listening to music or diving into a pool, these routines help me stay active, refresh my mind, and energize my day.",
      whyILoveIt:
        "These simple physical activities help me stay healthy, relieve stress, and provide a perfect opportunity to catch up on podcasts and music. The rhythm of walking and jogging gives me time to think and process ideas.",
      color: "bg-sky-50",
      images: [First, Second, Third, Fourth],
      imageAlts: [
        "Morning walk with headphones",
        "Light jogging",
        "Swimming session",
        "RSS morning group exercise",
      ],
    },
    {
      id: 2,
      title: "Coding",
      icon: "💻",
      description:
        "Exploring new technologies and building personal projects. I find coding both intellectually stimulating and creatively fulfilling.",
      whyILoveIt:
        "Coding is both my profession and passion. I enjoy solving complex problems, learning new technologies, and creating applications that make a difference.",
      color: "bg-emerald-50",
      images: [Fifth, Sixth, Seventh, Eighth],
      imageAlts: [
        "Code editor",
        "Terminal window",
        "Development setup",
        "Project diagram",
      ],
    },
    {
      id: 3,
      title: "Manga & Manhuas",
      icon: "📚",
      description:
        "Reading manga and manhuas in my free time. I enjoy exploring different art styles, storytelling techniques, and immersing myself in creative worlds.",
      whyILoveIt:
        "Manga and manhuas offer unique storytelling with amazing artwork. I enjoy how they blend visual art with compelling narratives. They're also a great way to unwind and explore stories from different cultural perspectives.",
      color: "bg-amber-50",
      images: [Ninth, Tenth, Eleventh, Twelfth],
      imageAlts: [
        "Manga collection",
        "Reading manga",
        "Favorite manhua",
        "Digital manga app",
      ],
    },
    {
      id: 4,
      title: "Traveling",
      icon: "🌍",
      description:
        "Exploring new destinations and immersing myself in diverse cultures. I find traveling both intellectually enriching and creatively inspiring.",
      whyILoveIt:
        "Traveling allows me to experience new cultures, meet people from different walks of life, and gain a deeper appreciation of the world. It broadens my perspective and fuels my curiosity about how others live.",
      color: "bg-rose-50",
      images: [Thirteenth, Fourteenth, Fifteenth, Sixteenth],
      imageAlts: [
        "Beach destination",
        "Mountain landscape",
        "City architecture",
        "Cultural landmark",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(hobbies[0].id);

  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [
      headerRef.current,
      tabsRef.current,
      contentRef.current,
      quoteRef.current,
    ];

    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section
      id="hobbies"
      className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headerRef}
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-500 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            <Heart className="inline-block mr-2 mb-1" size={28} />
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Hobbies
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 italic max-w-2xl mx-auto">
            "The time you enjoy wasting is not wasted time." — Bertrand Russell
          </p>
        </div>

        <motion.div
          ref={tabsRef}
          className="max-w-6xl mx-auto px-4 opacity-0 translate-y-8 transition-all duration-500 ease-out delay-100"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {hobbies.map((hobby) => (
              <motion.button
                key={hobby.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === hobby.id
                    ? `${hobby.color} text-gray-800 shadow-lg`
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab(hobby.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{hobby.icon}</span>
                {hobby.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            ref={contentRef}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden opacity-0 translate-y-8 transition-all duration-500 ease-out delay-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {hobbies.map((hobby) => (
                activeTab === hobby.id && (
                  <motion.div
                    key={hobby.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div
                        className={`${hobby.color} dark:bg-opacity-30 flex items-center justify-center`}
                      >
                        <PhotoCarousel
                          images={hobby.images}
                          imageAlts={hobby.imageAlts}
                        />
                      </div>
                      <motion.div 
                        className="p-8 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                          <span className="text-4xl mr-3">{hobby.icon}</span>
                          {hobby.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                          {hobby.description}
                        </p>
                        <motion.div 
                          className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-indigo-500"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Why I love it:
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {hobby.whyILoveIt}
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            ref={quoteRef}
            className="mt-16 text-center p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl opacity-0 translate-y-8 transition-all duration-500 ease-out delay-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <blockquote className="text-xl italic text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
              "Balance is not something you find, it's something you create. My
              hobbies keep me grounded and provide fresh perspectives that
              enhance my work."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;