import { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useSelector } from "react-redux";

const ChartsContainers = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplication: chartData } = useSelector(
    (store) => store.allEmployees
  );

  const toggleChart = () => {
    setBarChart(!barChart);
  };
  return (
    <div className="container">
      <h1 className="display-4">Monthly Stats</h1>
      <button className="btn btn-primary" onClick={toggleChart}>
        {barChart ? "Area chart" : "Bar chart"}
      </button>
      {barChart ? (
        <BarChart data={chartData} />
      ) : (
        <AreaChart data={chartData} />
      )}
    </div>
  );
};

export default ChartsContainers;
