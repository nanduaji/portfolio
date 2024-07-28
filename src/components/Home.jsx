// src/pages/Home.jsx

import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Charts from "../components/Charts";

function Home() {
  const [projectStat, setProjectStat] = useState(0);
  const [trainingStat, setTrainingStat] = useState(0);
  const [seminarStat, setSeminarStat] = useState(0);
  const [showCharts, setShowCharts] = useState(false);
  const chartsRef = useRef(null);
  useEffect(() => {
    let projectTimer = setInterval(() => {
      setProjectStat((prev) => {
        if (prev >= 100) {
          clearInterval(projectTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 10);

    let trainingTimer = setInterval(() => {
      setTrainingStat((prev) => {
        if (prev >= 250) {
          clearInterval(trainingTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 5);

    let seminarTimer = setInterval(() => {
      setSeminarStat((prev) => {
        if (prev >= 50) {
          clearInterval(seminarTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(projectTimer);
      clearInterval(trainingTimer);
      clearInterval(seminarTimer);
    };
  }, []);
  const showChartsFunction = () => {
    setShowCharts((prev) => !prev);
    setTimeout(() => {
      if (chartsRef.current) {
        console.log("Scrolling to chartsRef:", chartsRef.current);
        chartsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.log("chartsRef.current is null");
      }
    }, 100);
  };
  return (
    <>
      <div className={styles.home}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Welcome 👋</h1>
          <p className={styles.description}>
            With 4 years as a Web developer, I have gained the skills to ensure
            your project's success. I enjoy every step of the design process,
            from collaboration to execution.
          </p>
          <div className={styles.imageContainerMobile}>
            <img
              src="nandu.jpeg"
              alt="Landing"
              className={styles.imageMobile}
            />
          </div>
          <div className={styles.skillsContainer}>
            <h2 className={styles.skillsHeading}>
              <b>My Skills</b>
              <br />
              <br />
            </h2>
            <ul className={styles.skillsList}>
              <li>
                <FontAwesomeIcon
                  icon={faReact}
                  className={styles.icon}
                  style={{ color: "#087ea4" }}
                />
                ReactJS
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faNode}
                  className={styles.icon}
                  style={{ color: "#7cb476" }}
                />
                NodeJS
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
                Datalake
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCloud}
                  className={styles.icon}
                  style={{ color: "#c12b46" }}
                />
                MinIO
              </li>
              <li>
                <FontAwesomeIcon icon={faDocker} className={styles.icon} />
                Docker
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faJs}
                  className={styles.icon}
                  style={{ color: "#efd81d" }}
                />
                Javascript
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="nandu.jpeg" alt="Landing" className={styles.image} />
        </div>
      </div>
      <div className={styles.numbersContainer}>
        <div className={styles.numberItem}>
          <div className={styles.numberText}>Projects</div>
          <div className={styles.number}>{projectStat}</div>
        </div>
        <div className={styles.numberItem}>
          <div className={styles.numberText}>Trainings</div>
          <div className={styles.number}>{trainingStat}</div>
        </div>
        <div className={styles.numberItem}>
          <div className={styles.numberText}>Seminars</div>
          <div className={styles.number}>{seminarStat}</div>
        </div>
      </div>
      <button
        className={styles.toggleButton}
        onClick={() => showChartsFunction()}
      >
        {showCharts ? "Hide Charts" : "Show Charts"}
      </button>
      {showCharts && (
        <div className={styles.chartsContainer} ref={chartsRef}>
          <Charts
            projectStat={projectStat}
            trainingStat={trainingStat}
            seminarStat={seminarStat}
          />
        </div>
      )}
    </>
  );
}

export default Home;
