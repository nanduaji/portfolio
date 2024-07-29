import React, { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [visitData, setVisitData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [currentMonthVisits, setCurrentMonthVisits] = useState(0);

  useEffect(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const storedVisits = localStorage.getItem("totalVisits");
    const visits = storedVisits ? parseInt(storedVisits, 10) : 0;
    const visitUpdated = localStorage.getItem("visitUpdated");
    if (!visitUpdated) {
      const updatedVisits = visits + 1;
      localStorage.setItem("totalVisits", updatedVisits);
      localStorage.setItem(
        `visit_${currentYear}_${currentMonth + 1}`,
        updatedVisits
      );
      localStorage.setItem("visitUpdated", "true");
      setCurrentMonthVisits(updatedVisits);
    } else {
      setCurrentMonthVisits(visits);
    }

    const data = [];
    const projectData = [];
    for (let i = 0; i < 12; i++) {
      const monthlyVisits = localStorage.getItem(
        `visit_${currentYear}_${i + 1}`
      );
      const visitsCount = monthlyVisits ? parseInt(monthlyVisits, 10) : 0;
      data.push(visitsCount);
      projectData.push(Math.floor(Math.random() * 2) + 1);
    }

    setVisitData(data);
    setBarChartData(projectData);

    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("visitUpdated");
    });
  }, []);

  const summaryData = [
    {
      title: "Your Visits",
      value: currentMonthVisits || "0",
      icon: <i className="fas fa-eye"></i>,
    },
  ];

  const barChartConfig = {
    labels: new Array(12)
      .fill(0)
      .map((_, i) =>
        new Date(0, i).toLocaleString("default", { month: "short" })
      ),
    datasets: [
      {
        label: "Projects Completed",
        data: barChartData,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const lineChartData = {
    labels: new Array(12)
      .fill(0)
      .map((_, i) =>
        new Date(0, i).toLocaleString("default", { month: "short" })
      ),
    datasets: [
      {
        label: "Visits",
        data: visitData,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.summary}>
        {summaryData.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
      <div className={styles.charts}>
        <LineChart data={lineChartData} options={lineChartOptions} />
        {/* <BarChart data={barChartConfig} options={barChartOptions} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
