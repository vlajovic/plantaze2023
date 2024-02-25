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

const PrihodRashodZaGodinuChart = ({ year, kategorije, artKat }) => {
  const [PRZaGodinuData, setPRZaGodinuData] = useState([]);

  useEffect(() => {
    defaultYearRequest("prihodRashodZaGodinuChart", year).then((data) => {
      setPRZaGodinuData(data);
    });
  }, [year]);

  const colors = colorMapper(artKat);
  console.log(colors);

  return (
    <>
      <div className="w-full p-2 bg-slate-50 rounded-xl shadow-xl">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            barCategoryGap="10%"
            data={PRZaGodinuData}
            margin={{ top: 20, left: 20, right: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="kategorija"></XAxis>
            <YAxis tickFormatter={(tick) => tick.toLocaleString()}></YAxis>
            <Tooltip formatter={(d) => d.toLocaleString()}></Tooltip>
            {/* <Legend></Legend> */}

            {artKat.map((ak) => {
              let artikal = ak.artikal;
              return (
                <Bar
                  key={artikal}
                  dataKey={`data.${artikal}`}
                  name={artikal}
                  stackId="stack_a"
                  fill={colors[artikal]}
                ></Bar>
              );
            })}

            <Line
              dataKey="troskovi"
              name="troskovi"
              type="monotone"
              stroke="#ff7300"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PrihodRashodZaGodinuChart;
