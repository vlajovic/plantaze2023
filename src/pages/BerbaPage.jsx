import React from "react";
import { useOutletContext } from "react-router-dom";
import BerbaDatagrid from "../components/BerbaDatagrid";

const RadPage = () => {
  const [year, setYear] = useOutletContext();

  return <BerbaDatagrid year={year} />;
};

export default RadPage;
