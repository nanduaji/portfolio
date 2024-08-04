import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Chatbot from "./components/Chatbot";

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Header
        homeRef={homeRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <Home ref={homeRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Chatbot />
    </div>
  );
}

export default App;
