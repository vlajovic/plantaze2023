import React, { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import defaultRequest from "../api/defaultRequest";

const LayoutMain = () => {
  const [minYear, setMinYear] = useState(0);
  const [maxYear, setMaxYear] = useState(0);
  const [year, setYear] = useState(maxYear);

  useLayoutEffect(() => {
    defaultRequest("years").then((data) => {
      setMinYear(data.minYear);
      setMaxYear(data.maxYear);
      setYear(data.maxYear);
    });
  }, []);

  return (
    <div className="flex flex-row bg-neutral-100 h-full min-h-screen w-full">
      <div className="w-60 fixed">
        <Sidebar />
      </div>

      <div className="flex-1 w-full ml-60">
        <div>
          {
            <Outlet
              context={[
                minYear,
                setMinYear,
                maxYear,
                setMaxYear,
                year,
                setYear,
              ]}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
