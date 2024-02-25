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
import defaultYearRequest from "../api/defaultYearRequest";

const RadYearTreeChart = ({ year, kategorije, artKat }) => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    defaultYearRequest("radYearTreeChart", year).then((data) => {
      setTreeData(data);
      console.log(data);
    });
  }, [year]);

  // const COLORS = ["#40cfe6", "#e6dd35", "#e8c44d", "#756e6e"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="treemap-custom-tooltip text-lg font-bold pl-[10px] pr-[10px] bg-slate-200 bg-opacity-40">
          <p>{`${payload[0].payload.root.name}`}</p>
          <p>{`${payload[0].payload.name} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  console.log("hkjhgkskgs");
  return (
    <>
      {/* <div className="p-4 text-2xl text-center">
        Ukupan rad (broj radnih dana)
    </div> */}
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
    </>
  );
};

export default RadYearTreeChart;
