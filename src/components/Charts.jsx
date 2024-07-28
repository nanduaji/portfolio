import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Charts = ({ projectStat, trainingStat, seminarStat }) => {
  // Ensure stats are limited to values suitable for your chart scale
  const maxStatValue = 10; // Adjust this value as needed

  const data = {
    labels: ["Projects", "Trainings", "Seminars"],
    datasets: [
      {
        label: "Statistics",
        data: [
          Math.min(projectStat, maxStatValue),
          Math.min(trainingStat, maxStatValue),
          Math.min(seminarStat, maxStatValue),
        ],
        backgroundColor: ["#087ea4", "#7cb476", "#c12b46"],
        borderColor: ["#005f73", "#3b6f3c", "#8c0000"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: maxStatValue, // Set the max value to match your data range
      },
    },
  };

  return (
    <div>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default Charts;
