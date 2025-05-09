import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import AllProjects from "./components/AllProjects";

function App() {
  // Complete home page with all sections
  const HomePage = () => (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Hobbies />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
          <Routes>
            {/* Home route with all components */}
            <Route path="/" element={<HomePage />} />
            
            {/* Dedicated Projects route */}
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;