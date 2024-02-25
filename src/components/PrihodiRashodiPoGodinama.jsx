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

const PrihodiRashodiPoGodinama = ({ prihodiRashodi }) => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-50 rounded-lg shadow-md ">
      <div className="p-4 text-2xl text-center">
        Prihodi i rashodi po godinama
      </div>
      <div className="flex ">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            barCategoryGap="2%"
            data={prihodiRashodi}
            syncId="anyId"
            margin={{ top: 30, left: 40, right: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="year"></XAxis>
            <YAxis tickFormatter={(tick) => tick.toLocaleString()}></YAxis>
            <Tooltip formatter={(num) => num.toLocaleString()}></Tooltip>
            <Legend></Legend>
            <Bar
              dataKey="sviPodaci.prihodi.sljiva"
              name="prihodi - sljiva"
              stackId="stack_a"
              fill="#40cfe6"
            ></Bar>
            <Bar
              dataKey="sviPodaci.prihodi.jabuka"
              name="prihodi - jabuka"
              stackId="stack_a"
              fill="#e6dd35"
            ></Bar>
            <Bar
              dataKey="sviPodaci.prihodi.grozdje"
              name="prihodi - grozdje"
              stackId="stack_a"
              fill="#e8c44d"
            ></Bar>
            <Bar
              dataKey="sviPodaci.prihodi.ostalo"
              name="prihodi - ostalo"
              stackId="stack_a"
              fill="#756e6e"
            ></Bar>
            <Line
              dataKey="sviPodaci.rashodiUkupno"
              name="ukupni troskovi"
              type="monotone"
              stroke="#ff7300"
            />
            {/* <Bar dataKey="grozdje" fill="#eda828"></Bar>
                        <Bar dataKey="jabuka" fill="#e8da41"></Bar> */}
          </ComposedChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            barCategoryGap="2%"
            data={prihodiRashodi}
            syncId="anyId"
            margin={{ top: 30, left: 40, right: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="year"></XAxis>
            <YAxis tickFormatter={(tick) => tick.toLocaleString()}></YAxis>
            <Tooltip formatter={(num) => num.toLocaleString()}></Tooltip>
            <Legend></Legend>
            <Bar
              dataKey="sviPodaci.rashodi.sljiva"
              name="rashodi - sljiva"
              stackId="stack_a"
              fill="#40cfe6"
            ></Bar>
            <Bar
              dataKey="sviPodaci.rashodi.jabuka"
              name="rashodi - jabuka"
              stackId="stack_a"
              fill="#e6dd35"
            ></Bar>
            <Bar
              dataKey="sviPodaci.rashodi.grozdje"
              name="rashodi - grozdje"
              stackId="stack_a"
              fill="#e8c44d"
            ></Bar>
            <Bar
              dataKey="sviPodaci.rashodi.ostalo"
              name="rashodi - ostalo"
              stackId="stack_a"
              fill="#756e6e"
            ></Bar>
            <Line
              dataKey="sviPodaci.prihodiUkupno"
              name="ukupni prihodi"
              type="monotone"
              stroke="#6dcc5e"
            />
            {/* <Bar dataKey="grozdje" fill="#eda828"></Bar>
                        <Bar dataKey="jabuka" fill="#e8da41"></Bar> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PrihodiRashodiPoGodinama;
