import React from "react";
import styles from "./Experience.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Tooltip,
} from "@mui/material";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience() {
  return (
    <div className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.cardsContainer}>
        <Tooltip title="https://www.valoriz.com">
          <Card
            className={styles.card}
            onClick={() => window.open("https://www.valoriz.com/", "_blank")}
          >
            <CardMedia
              className={styles.cardMedia}
              component="img"
              alt="Experience 1"
              image="mozanta.png"
              style={{ objectFit: "contain", cursor: "pointer" }}
            />
            <CardContent className={styles.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                sx={{
                  color: "white",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#f51111",
                  },
                }}
              >
                Mozanta Technologies PVT.LTD
              </Typography>
              <Typography variant="body2" color="white">
                Contributed to various web development projects, enhancing UI/UX
                and implementing new features.
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="white"
                className={styles.dateRange}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginRight: "8px" }}
                />
                2019 - 2019
              </Typography>
            </CardContent>
          </Card>
        </Tooltip>
        <Tooltip title="https://kerala.nic.in">
          <Card
            className={styles.card}
            onClick={() => window.open("https://kerala.nic.in/", "_blank")}
          >
            <CardMedia
              className={styles.cardMedia}
              component="img"
              alt="Experience 2"
              image="logo.png"
              style={{ objectFit: "contain", cursor: "pointer", width: "100%" }}
            />
            <CardContent
              className={styles.cardContent}
              style={{ backgroundColor: "white" }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "black",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#1133f5",
                  },
                }}
              >
                National Informatics Center
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Worked on developing and maintaining internal applications,
                optimizing performance and ensuring reliability.
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="black"
                className={styles.dateRange}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginRight: "8px" }}
                />
                2021 - 2022
              </Typography>
            </CardContent>
          </Card>
        </Tooltip>
        <Tooltip title="https://cdac.in/index.aspx?id=TVM">
          <Card
            className={styles.card}
            onClick={() =>
              window.open("https://cdac.in/index.aspx?id=TVM", "_blank")
            }
          >
            <CardMedia
              className={styles.cardMedia}
              component="img"
              alt="Experience 3"
              image="CDAC.png"
              style={{ objectFit: "contain", cursor: "pointer" }}
            />
            <CardContent className={styles.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                sx={{
                  color: "white",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#f51111",
                  },
                }}
              >
                Center For Development Of Advanced Computing
              </Typography>
              <Typography variant="body2" color="white">
                Developed software solutions and conducted research on advanced
                computing techniques and technologies.
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="white"
                className={styles.dateRange}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginRight: "8px" }}
                />
                2022 - present
              </Typography>
            </CardContent>
          </Card>
        </Tooltip>
      </div>
    </div>
  );
}

export default Experience;
