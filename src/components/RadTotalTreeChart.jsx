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
import defaultRequest from "../api/defaultRequest";

import { COLORS } from "../constants/colors";

const RadTreeChart = () => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    defaultRequest("radTreeChart").then((data) => {
      setTreeData(data);
      console.log(data);
    });
  }, []);

  // const COLORS = ["#40cfe6", "#e6dd35", "#e8c44d", "#756e6e"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="treemap-custom-tooltip text-lg font-bold pl-[10px] pr-[10px]">
          <p>{`${payload[0].payload.root.name}`}</p>
          <p>{`${payload[0].payload.name} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  console.log("hkjhgkskgs");
  return (
    <div className="w-full h-full p-3 bg-slate-50  rounded-lg shadow-md">
      <div className="p-4 text-2xl text-center">
        Ukupan rad (broj radnih dana)
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          colorPanel={COLORS}
          data={treeData}
          dataKey="totalDnevnice"
          // stroke="#fff"
          // fill="#8884d8"
        >
          <Legend></Legend>
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export default RadTreeChart;
