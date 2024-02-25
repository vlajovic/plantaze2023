import React from "react";
import { useOutletContext } from "react-router-dom";
import PreradaDatagrid from "../components/PreradaDatagrid";

const PreradaPage = () => {
  const [year, setYear] = useOutletContext();

  return <PreradaDatagrid year={year} />;
};

export default PreradaPage;
