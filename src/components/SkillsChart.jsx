import React from "react";
import ApexCharts from "react-apexcharts";
import styles from "./SkillsChart.module.css";

const SkillsChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true, // To stack the bars if needed
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["React", "Node.js", "JavaScript", "Docker", "CSS", "HTML"],
      title: {
        text: "Skills",
      },
    },
    yaxis: {
      title: {
        text: "Values",
      },
      min: 0,
      max: 100,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
    colors: ["#22caec", "#f39c12"],
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "Skills Proficiency",
      data: [90, 80, 90, 70, 75, 90],
    },
    {
      name: "Experience Years",
      data: [4, 4, 4, 2, 4, 4],
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Skills and Experience</h2>
      <ApexCharts options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default SkillsChart;
