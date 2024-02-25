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
  AreaChart,
  Area,
} from "recharts";

const PrihodiPoGodinama = ({ chartData }) => {
  const gradientOffset = (chartData) => {
    const dataMax = Math.max(...chartData.map((i) => i.sviPodaci.zarada));
    const dataMin = Math.min(...chartData.map((i) => i.sviPodaci.zarada));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset(chartData);

  return (
    <>
      <div className="w-full p-2 bg-slate-50  rounded-lg shadow-md">
        <div className="p-3 pb-1 text-2xl text-center">Zarada po godinama</div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            barCategoryGap="2%"
            data={chartData}
            margin={{ top: 30, left: 40, right: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="year"></XAxis>
            <YAxis tickFormatter={(tick) => tick.toLocaleString()}></YAxis>
            <Tooltip formatter={(num) => num.toLocaleString()}></Tooltip>
            <Legend></Legend>
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="#6dcc5e" stopOpacity={1} />
                <stop offset={off} stopColor="#d14747" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              name="zarada"
              type="monotone"
              dataKey="sviPodaci.zarada"
              stroke="#a19f9a"
              fill="url(#splitColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PrihodiPoGodinama;
