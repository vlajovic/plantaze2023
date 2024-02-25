import React from "react";
import { useOutletContext } from "react-router-dom";
import PrihodiDatagrid from "../components/PrihodiDatagrid";

const PrihodiPage = () => {
  const [year, setYear] = useOutletContext();

  return <PrihodiDatagrid year={year} />;
};

export default PrihodiPage;
