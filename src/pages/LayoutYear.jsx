import React from "react";

import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Layout = () => {
  const [minYear, setMinYear, maxYear, setMaxYear, year, setYear] =
    useOutletContext();

  const renderOptions = () => {
    const listItems = [];
    for (let i = maxYear; i >= minYear; i--) {
      listItems.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return listItems;
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="pb-6  p-6">
        <select
          defaultValue={year}
          className="p-4 w-full text-center text-3xl rounded-xl shadow-lg bg-gradient-to-r from-indigo-100"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          {renderOptions()}
        </select>
      </div>

      <div className="flex-1">{<Outlet context={[year, setYear]} />}</div>
    </div>
  );
};

export default Layout;
