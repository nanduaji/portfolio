import React, { forwardRef, useState } from "react";
import styles from "./Projects.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Projects = forwardRef((props, ref) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const projectsData = [
    {
      title: "IPDR",
      subheader: "Internet Protocol Data Record",
      image: "ipdr.jpeg",
      description:
        "The IPDR (Internet Protocol Detail Record) Project aims to standardize a protocol for capturing detailed records of Internet usage, essential for network management and billing in telecommunications and internet service industries. It provides granular data on session durations, data volumes, and transactions to optimize network performance and enhance customer service.",
      tools: "Javascript,OpenStreetmap,Leaflet Maps,",
    },
    {
      title: "CDR",
      subheader: "Internet Protocol Data Record",
      image: "cdr.jpeg",
      description:
        "The CDR (Call Detail Record) Project provides detailed information on telephone call data. It includes records of call duration, time, and involved parties, essential for billing and network management. This project helps in analyzing call patterns and optimizing telecommunication services.",
      tools: "Javascript,C#",
    },
    {
      title: "Advanced Forensic Data Analytics",
      subheader: "Data Analysis for Forensics",
      image: "analytics.jpeg",
      description:
        "Advanced Forensic Data Analytics involves using sophisticated tools and techniques to analyze data for investigative purposes. This project focuses on extracting meaningful insights from large datasets to aid in criminal investigations and legal proceedings.",
      tools: "ReactJS,NodeJS,Datalake,MinIO,Python,Virtual Machine, Ubuntu, AI",
    },
  ];

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className={styles.projects} ref={ref}>
      <div className={styles.main}>
        <h1 className={styles.heading}>My Projects</h1>
        <div className={styles.cardContainer}>
          {projectsData.map((project, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                marginRight: "20px",
                backgroundColor: "#ffc448",
                border: "none",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                ":hover": {
                  transform: "translateZ(10px)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#FFEECB",
                  borderRadius: "20px",
                },
              }}
              onClick={() => handleCardClick(index)}
            >
              <CardMedia
                component="img"
                height="194"
                image={project.image}
                alt={project.title}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxHeight: "100%",
                  borderRadius: "20px",
                }}
              />
              {expandedCard != index && (
                <CardHeader
                  title={project.title}
                  subheader={project.subheader}
                  sx={{
                    textAlign: "left",
                    paddingLeft: "5px",
                    paddingTop: "8px",
                    color: "#3F51B5",
                  }}
                />
              )}
              {expandedCard === index && (
                <>
                  <CardHeader
                    title={project.title}
                    subheader={project.description}
                    sx={{
                      textAlign: "left",
                      paddingLeft: "5px",
                      paddingTop: "8px",
                      color: "#3F51B5",
                    }}
                  />
                  <CardHeader
                    title="Technologies Used"
                    subheader={project.tools}
                    sx={{
                      textAlign: "left",
                      paddingLeft: "5px",
                      paddingTop: "8px",
                      color: "#3F51B5",
                    }}
                  />
                </>
              )}
              <Typography>
                <FontAwesomeIcon
                  icon={expandedCard === index ? faArrowUp : faArrowDown}
                  style={{ fontSize: "24px", color: "#007bff" }}
                />
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
