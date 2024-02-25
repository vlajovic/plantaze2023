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
} from "recharts";
import defaultRequest from "../api/defaultRequest";

const RadPoGodinamaChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    defaultRequest("radPoGodinama")
      .then((data) => JSON.parse(data))
      .then((data) => {
        setChartData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="w-full h-full p-2 bg-slate-50  rounded-lg shadow-md">
        <div className="p-4 text-2xl text-center">Rad po godinama</div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            barCategoryGap="2%"
            data={chartData}
            margin={{ top: 20, left: 20, right: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="year"></XAxis>
            <YAxis tickFormatter={(tick) => tick.toLocaleString()}></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar
              dataKey="data.sljiva"
              name="sljiva"
              stackId="stack_a"
              fill="#40cfe6"
            ></Bar>
            <Bar
              dataKey="data.jabuka"
              name="jabuka"
              stackId="stack_a"
              fill="#e6dd35"
            ></Bar>
            <Bar
              dataKey="data.grozdje"
              name="grozdje"
              stackId="stack_a"
              fill="#e8c44d"
            ></Bar>
            <Bar
              dataKey="data.ostalo"
              name="ostalo"
              stackId="stack_a"
              fill="#756e6e"
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default RadPoGodinamaChart;
