import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Home ref={homeRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
