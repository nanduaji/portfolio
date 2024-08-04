import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faFacebook,
  faInstagram,
  faJs,
  faLinkedin,
  faNode,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Charts from "../components/Charts";
import { Button, Tooltip } from "@mui/material";
import { Download } from "@mui/icons-material";
import Modal from "./Modal";
import SkillsChart from "./SkillsChart";
import Dashboard from "./Dashboard";

const Home = forwardRef((props, ref) => {
  const [projectStat, setProjectStat] = useState(0);
  const [trainingStat, setTrainingStat] = useState(0);
  const [seminarStat, setSeminarStat] = useState(0);
  const [showCharts, setShowCharts] = useState(false);
  const chartsRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openDashboard, setOpenDashboard] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenDashboard = () => setOpenDashboard(true);
  const handleDashboardClose = () => setOpenDashboard(false);
  useEffect(() => {
    let projectTimer = setInterval(() => {
      setProjectStat((prev) => {
        if (prev >= 10) {
          clearInterval(projectTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 10);

    let trainingTimer = setInterval(() => {
      setTrainingStat((prev) => {
        if (prev >= 5) {
          clearInterval(trainingTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 5);

    let seminarTimer = setInterval(() => {
      setSeminarStat((prev) => {
        if (prev >= 5) {
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
        chartsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleDownload = () => {
    const resumeURL =
      "https://drive.google.com/file/d/1bGsGjN4d4kLsdYDZHkim-qMbrc2HXX3b/view?usp=sharing";
    window.open(resumeURL, "_blank");
  };

  return (
    <>
      <div className={styles.home} ref={ref}>
        <div className={styles.statisticsButton}>
          <Button color="primary" onClick={handleOpenDashboard}>
            Statistics
          </Button>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Welcome 👋</h1>
          <p className={styles.description}>
            With four years of experience as a web developer, I've honed my
            skills to drive your project’s success. I take pleasure in every
            aspect of the design process, from initial collaboration to final
            execution
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
              <Tooltip title="Click here to know more">
                <Button
                  onClick={handleOpen}
                  className={styles.button}
                  variant="contained"
                  color="primary"
                >
                  My Skills
                </Button>
              </Tooltip>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDownload}
                className={styles.resumeButton}
                startIcon={<Download />}
                sx={{
                  "@media (max-width: 768px)": {
                    display: "none",
                  },
                  ml: "20px",
                }}
              >
                Download Resume
              </Button>
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
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownload}
              sx={{
                display: { xs: "block", md: "none" },
                mx: "auto",
                mb: 2,
                "@media (max-width: 768px)": {
                  width: "200px",
                },
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="nandu.jpeg" alt="Landing" className={styles.image} />
          <div className={styles.socialMediaContainer}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
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
      <Modal open={open} handleClose={handleClose}>
        <SkillsChart />
      </Modal>
      <Modal open={openDashboard} handleClose={handleDashboardClose}>
        <Dashboard />
      </Modal>
    </>
  );
});

export default Home;
