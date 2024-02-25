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
  LineChart,
} from "recharts";
import defaultRequest from "../api/defaultRequest";
import kupacPoGodinamaRequest from "../api/kupacPoGodinamaRequest";

const KupacPoGodinama = ({ kupac }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    kupacPoGodinamaRequest(kupac)
      // .then((data) => {
      //   console.log(data);
      //   JSON.parse(data);
      // })
      .then((data) => {
        for (let index1 = 2013; index1 < 2024; index1++) {
          let isIndexInData = false;
          for (let index2 = 0; index2 < data.length; index2++) {
            const element = data[index2];
            if (element._id === index1) {
              isIndexInData = true;
            }
          }
          if (!isIndexInData) {
            data.push({ _id: index1, total: 0 });
          }
        }
        setChartData(data);
        console.log(data);
      });
  }, [kupac]);

  return (
    <>
      <div className="w-full h-full p-2 bg-slate-50  rounded-lg shadow-md">
        <div className="p-4 text-2xl text-center">{kupac}</div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            barCategoryGap="2%"
            data={chartData}
            margin={{ top: 20, left: 20, right: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis
              padding={{ left: 30, right: 30 }}
              type="number"
              domain={["auto", "auto"]}
              dataKey="_id"
            ></XAxis>
            <YAxis tickFormatter={(tick) => tick.toLocaleString()}></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            {/* <Line type="monotone" dataKey="total" stroke="#82ca9d" /> */}
            <Bar
              dataKey="total"
              name="total"
              // stackId="stack_a"
              fill="#637db0"
            ></Bar>
            {/* <Bar
              dataKey="data.sljiva"
              name="sljiva"
              stackId="stack_a"
              fill="#40cfe6"
            ></Bar> */}
            {/* <Bar
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
            ></Bar> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default KupacPoGodinama;
