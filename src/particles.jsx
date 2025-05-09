import React, { useEffect, useMemo, useState, useRef, useContext } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ThemeContext } from "./context/ThemeContext"; // Adjust path as needed

// 📏 Custom hook to detect screen size
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenSize("xs");
      else if (width < 768) setScreenSize("sm");
      else if (width < 1024) setScreenSize("md");
      else setScreenSize("lg");
    };

    checkSize(); // Initial check
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return screenSize;
};

const ParticlesComponent = ({ id, children, particlesOptions, ...props }) => {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);
  const { theme } = useContext(ThemeContext); // Get theme (dark/light)
  const screenSize = useScreenSize(); // Get current screen size

  // 🎯 Set particle count based on screen size
  const particleValue = useMemo(() => {
    switch (screenSize) {
      case "xs": return 30;
      case "sm": return 40;
      case "md": return 60;
      case "lg": 
      default: return 180;
    }
  }, [screenSize]);

  // 🛠️ Configure particles
  const defaultOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 150, duration: 0.4, speed: 0.1 },
      },
    },
    particles: {
      color: { value: theme === "dark" ? "#ffffff" : "#545252" },
      links: {
        color: theme === "dark" ? "#ffffff" : "#545252",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        value: particleValue, // 🔁 Dynamic count
        density: { enable: false }, // Fixed number, not based on canvas area
      },
      opacity: { value: 1.0 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [theme, particleValue]);

  const options = useMemo(() => {
    return { ...defaultOptions, ...(particlesOptions || {}) };
  }, [defaultOptions, particlesOptions]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        ...props.style,
      }}
      className={props.className}
    >
      {children}
      {init && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            pointerEvents: "auto",
          }}
        >
          <Particles
            id={id || "tsparticles"}
            init={particlesLoaded}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default ParticlesComponent;
