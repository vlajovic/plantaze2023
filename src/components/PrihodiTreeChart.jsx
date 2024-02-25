import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Treemap,
} from "recharts";
// import defaultRequest from '../api/defaultRequest'
import defaultYearRequest from "../api/defaultYearRequest";

import { COLORS } from "../constants/colors";

// import radTreeChartRequest from '../api/radTreeChartRequest'
// import PrihodiTreeChart from '../api/PrihodiTreeChart'

const PrihodiTreeChart = ({ year }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log(year);
    defaultYearRequest("prihodiTreeChart", year)
      //   .then((data) => JSON.parse(data))
      .then((data) => {
        setChartData(data);
        console.log(year);
        console.log(data);
      });
  }, [year]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="treemap-custom-tooltip text-lg font-bold pl-[10px] pr-[10px] bg-slate-200 bg-opacity-40">
          <p>{`${payload[0].payload.root.name}`}</p>
          <p>{`${
            payload[0].payload.name
          } : ${payload[0].value.toLocaleString()} din.`}</p>
        </div>
      );
    }

    return null;
  };

  const getColors = () => {
    let colors = [];
    let sljiva = chartData.filter((i) => i.name === "sljiva");
    if (sljiva.length > 0) {
      colors.push(COLORS[0]);
    }
    let jabuka = chartData.filter((i) => i.name === "jabuka");
    if (jabuka.length > 0) {
      colors.push(COLORS[1]);
    }
    let grozdje = chartData.filter((i) => i.name === "grozdje");
    if (grozdje.length > 0) {
      colors.push(COLORS[2]);
    }
    let ostalo = chartData.filter((i) => i.name === "ostalo");
    if (ostalo.length > 0) {
      colors.push(COLORS[3]);
    }
    return colors;
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap colorPanel={getColors()} data={chartData} dataKey="total">
          <Legend></Legend>
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </>
  );
};

export default PrihodiTreeChart;
