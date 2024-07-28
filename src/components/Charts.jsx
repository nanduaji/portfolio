// src/components/Charts.jsx

import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const Charts = ({ projectStat, trainingStat, seminarStat }) => {
  const data = {
    labels: ["Projects", "Trainings", "Seminars"],
    datasets: [
      {
        label: "Statistics",
        data: [projectStat, trainingStat, seminarStat],
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
        suggestedMax: 300,
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
