import React, { useEffect } from "react";
import { useState } from "react";

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

import defaultYearRequest from "../api/defaultYearRequest";

import { colorMapper } from "../constants/colors";

const RadYearBarChart = ({ year, kategorije, artKat }) => {
  const [radChartData, setRadChartData] = useState([]);

  useEffect(() => {
    defaultYearRequest("radYearBarChart", year).then((data) => {
      setRadChartData(data);
    });
  }, [year]);

  const colors = colorMapper(artKat);
  // console.log(colors);
  console.log(radChartData);

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={radChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="kategorija" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="total"
            fill="#7FB3D5"
            //   activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          {/* <Bar
              dataKey="jabuka"
              fill="#82ca9d"
              //   activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            <Bar
              dataKey="grozdje"
              fill="#82ca9d"
              //   activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            <Bar
              dataKey="ostalo"
              fill="#82ca9d"
              //   activeBar={<Rectangle fill="gold" stroke="purple" />}
            /> */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RadYearBarChart;
