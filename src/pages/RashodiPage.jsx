import React from "react";
import { useOutletContext } from "react-router-dom";
import RashodiDatagrid from "../components/RashodiDatagrid";

const RashodiPage = () => {
  const [year, setYear] = useOutletContext();

  return <RashodiDatagrid year={year} />;
};

export default RashodiPage;
