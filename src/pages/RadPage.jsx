import React from "react";
import { useOutletContext } from "react-router-dom";
import RadDatagrid from "../components/RadDatagrid";

const RadPage = () => {
  const [year, setYear] = useOutletContext();

  return <RadDatagrid year={year} />;
};

export default RadPage;
