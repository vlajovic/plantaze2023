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

const PRKumulativno = ({ chartData }) => {
  const cumulativeSum = (
    (sum) => (value) =>
      (sum += value)
  )(0);

  const prihodiKum = chartData.map(
    (
      (sum) => (value) =>
        parseInt((sum += value.sviPodaci.prihodiUkupno))
    )(0)
  );

  const rashodiKum = chartData.map(
    (
      (sum) => (value) =>
        parseInt((sum += value.sviPodaci.rashodiUkupno))
    )(0)
  );

  let data = [];
  for (let index = 0; index < prihodiKum.length; index++) {
    let element = {
      year: chartData[index].year,
      prihodi: prihodiKum[index],
      rashodi: rashodiKum[index],
    };
    data.push(element);
  }

  console.log(data);

  return (
    <>
      <div className="w-full p-2 bg-slate-50  rounded-lg shadow-md">
        <div className="p-3 pb-1 text-2xl text-center">
          Prihodi i rashodi kumulativno
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            // barCategoryGap="2%"
            data={data}
            margin={{ top: 30, left: 40, right: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="year"></XAxis>
            <YAxis tickFormatter={(tick) => tick.toLocaleString()}></YAxis>
            <Tooltip formatter={(num) => num.toLocaleString()}></Tooltip>
            <Legend></Legend>
            <Line
              dataKey="prihodi"
              name="prihodi"
              type="monotone"
              stroke="#51c961"
            />
            <Line
              dataKey="rashodi"
              name="rashodi"
              type="monotone"
              stroke="#d14747"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PRKumulativno;
